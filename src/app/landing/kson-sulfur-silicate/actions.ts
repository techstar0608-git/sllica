"use server";

import { redirect } from "next/navigation";

/**
 * Endpoint Google Apps Script của bản landing page cũ trên WordPress.
 * Đặt SILICA_GAS_URL trong .env.local để đổi mà không phải sửa code.
 */
const GAS_URL =
  process.env.SILICA_GAS_URL ??
  "https://script.google.com/macros/s/AKfycbzxRoeUSSEeJoPT2Dl3IiJjKEtUJ_0kMyee7k9-pMbuzYAyX09YOB86JGx3zWICcYxnjw/exec";

export async function submitLegacyLead(formData: FormData): Promise<void> {
  const payload = new URLSearchParams();
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      payload.set(key, value.trim());
    }
  }
  payload.set("nguon", "landing/kson-sulfur-silicate");

  try {
    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload,
    });
    if (!response.ok) {
      console.error("[silica] Apps Script trả lỗi", response.status);
    }
  } catch (error) {
    // Không chặn khách vì lỗi hạ tầng — vẫn ghi lại để đội sale không mất lead.
    console.error("[silica] không gửi được lead landing", error, payload.toString());
  }

  redirect("/cam-on");
}
