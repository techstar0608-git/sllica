"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitSurvey, type SurveyFormState } from "@/app/actions";
import { surveyIssues } from "@/content/site";

const initialState: SurveyFormState = { errors: {} };

/**
 * variant "compact" — form rút gọn trong khối CTA cuối trang (G-05).
 * variant "full"    — form đầy đủ trên /dang-ky-khao-sat.
 */
export function SurveyForm({
  variant = "full",
  source = "",
}: {
  variant?: "compact" | "full";
  source?: string;
}) {
  const [state, formAction] = useActionState(submitSurvey, initialState);
  const isFull = variant === "full";

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <input type="hidden" name="source" value={source || variant} />

      <Field
        label="Họ tên"
        name="fullName"
        required
        autoComplete="name"
        error={state.errors.fullName}
      />
      <Field
        label="Số điện thoại / Zalo"
        name="phone"
        type="tel"
        inputMode="numeric"
        required
        autoComplete="tel"
        placeholder="0912345678"
        error={state.errors.phone}
      />
      <Field
        label="Xã / Tỉnh"
        name="location"
        required
        placeholder="Ví dụ: xã Krông Năng, Đắk Lắk"
        error={state.errors.location}
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
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-line p-3 hover:bg-brand-50"
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

      <SubmitButton />

      <p className="text-muted">
        Khảo sát miễn phí, không ép mua. Thông tin vườn của bạn được bảo mật.
      </p>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-brand-500 px-7 py-4 text-base font-semibold text-white hover:bg-brand-700 disabled:opacity-70"
    >
      {pending ? "Đang gửi…" : "Đăng ký khảo sát miễn phí"}
    </button>
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
