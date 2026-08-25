"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { sendLead } from "@/lib/lead";

/**
 * Form của landing page K-SON. Giữ nguyên markup và tên trường của bản
 * WordPress cũ để Apps Script và sheet đang chạy không phải sửa gì.
 */
export function LegacyForm({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload: Record<string, string> = { nguon: "landing/kson-sulfur-silicate" };
    for (const [key, value] of data.entries()) {
      if (typeof value === "string") payload[key] = value.trim();
    }

    setPending(true);
    try {
      await sendLead(payload);
    } catch {
      // no-cors: không đọc được response, không chặn khách vì lỗi mạng.
    }
    router.push("/cam-on");
  }

  return (
    <form className="form-right" onSubmit={handleSubmit} data-pending={pending}>
      {children}
    </form>
  );
}
