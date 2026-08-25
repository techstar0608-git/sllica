"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { sendLead } from "@/lib/lead";
import { surveyIssues } from "@/content/site";

type Errors = Partial<Record<"fullName" | "phone" | "location", string>>;

const PHONE_PATTERN = /^0\d{9}$/;

/**
 * variant "compact" — form rút gọn trong khối CTA cuối trang (G-05).
 * variant "full"    — form đầy đủ trên /dang-ky-khao-sat.
 *
 * Site chạy static export nên form gửi thẳng lên Apps Script từ trình duyệt.
 */
export function SurveyForm({
  variant = "full",
  source = "",
}: {
  variant?: "compact" | "full";
  source?: string;
}) {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  const isFull = variant === "full";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const read = (key: string) => String(data.get(key) ?? "").trim();
    const fullName = read("fullName");
    const phone = read("phone").replace(/[\s.]/g, "");
    const location = read("location");

    const next: Errors = {};
    if (!fullName) next.fullName = "Vui lòng nhập họ tên.";
    if (!phone) {
      next.phone = "Vui lòng nhập số điện thoại hoặc Zalo.";
    } else if (!PHONE_PATTERN.test(phone)) {
      next.phone = "Số điện thoại cần có 10 chữ số, bắt đầu bằng 0.";
    }
    if (!location) next.location = "Vui lòng cho biết xã và tỉnh của vườn.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setPending(true);

    const issues = data
      .getAll("issues")
      .filter((v): v is string => typeof v === "string");

    // Gộp phần thông tin riêng của khảo sát vườn vào "mucdich" để dùng chung
    // sheet với form của landing page cũ.
    const details = [
      `Xã/Tỉnh: ${location}`,
      read("area") ? `Diện tích: ${read("area")} ha` : "",
      read("treeCount") ? `Số cây: ${read("treeCount")}` : "",
      issues.length ? `Vấn đề: ${issues.join("; ")}` : "",
      read("note") ? `Ghi chú: ${read("note")}` : "",
      `Nguồn: ${source || variant}`,
    ]
      .filter(Boolean)
      .join(" | ");

    try {
      await sendLead({ hoten: fullName, sdt: phone, mucdich: details });
    } catch {
      // no-cors nên không đọc được response; lỗi mạng cũng không chặn chủ vườn.
    }

    router.push("/cam-on");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <Field
        label="Họ tên"
        name="fullName"
        required
        autoComplete="name"
        error={errors.fullName}
      />
      <Field
        label="Số điện thoại / Zalo"
        name="phone"
        type="tel"
        inputMode="numeric"
        required
        autoComplete="tel"
        placeholder="0912345678"
        error={errors.phone}
      />
      <Field
        label="Xã / Tỉnh"
        name="location"
        required
        placeholder="Ví dụ: xã Krông Năng, Đắk Lắk"
        error={errors.location}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Diện tích (ha)" name="area" inputMode="decimal" />
        {isFull ? (
          <Field label="Số cây" name="treeCount" inputMode="numeric" />
        ) : null}
      </div>

      {isFull ? (
        <>
          <fieldset>
            <legend className="mb-2 block font-semibold">
              Vấn đề đang gặp{" "}
              <span className="font-normal text-muted">(chọn nhiều)</span>
            </legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {surveyIssues.map((issue) => (
                <label
                  key={issue}
                  className="flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border border-line p-3 hover:bg-brand-50"
                >
                  <input
                    type="checkbox"
                    name="issues"
                    value={issue}
                    className="mt-1 h-5 w-5 accent-[var(--color-brand-500)]"
                  />
                  <span>{issue}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block">
            <span className="mb-1.5 block font-semibold">Ghi chú</span>
            <textarea
              name="note"
              rows={3}
              className="w-full rounded-xl border border-line px-4 py-3 text-base focus:border-brand-500 focus:outline-none"
            />
          </label>
        </>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-brand-500 px-7 py-4 text-base font-semibold text-white hover:bg-brand-700 disabled:opacity-70"
      >
        {pending ? "Đang gửi…" : "Đăng ký khảo sát miễn phí"}
      </button>

      <p className="text-muted">
        Khảo sát miễn phí, không ép mua. Thông tin vườn của bạn được bảo mật.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required = false,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const errorId = `${name}-error`;
  return (
    <label className="block">
      <span className="mb-1.5 block font-semibold">
        {label}
        {required ? <span className="text-warn"> *</span> : null}
      </span>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-xl border px-4 py-3 text-base focus:outline-none ${
          error
            ? "border-warn focus:border-warn"
            : "border-line focus:border-brand-500"
        }`}
        {...rest}
      />
      {error ? (
        <span id={errorId} role="alert" className="mt-1 block text-warn">
          {error}
        </span>
      ) : null}
    </label>
  );
}
