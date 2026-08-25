"use server";

import { redirect } from "next/navigation";

export type SurveyFormState = {
  errors: Partial<Record<"fullName" | "phone" | "location", string>>;
};

export type SurveyLead = {
  fullName: string;
  phone: string;
  location: string;
  area: string;
  treeCount: string;
  issues: string[];
  note: string;
  source: string;
  submittedAt: string;
};

const PHONE_PATTERN = /^0\d{9}$/;

function readString(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Đích cuối theo docs/SITEMAP_LAYOUT.md mục 3.9: form → Google Sheets →
 * thông báo Zalo cho đội sale. Hiện ghi log để không mất lead trong lúc chờ
 * cấu hình Apps Script webhook; nối vào đây khi có SILICA_SHEETS_WEBHOOK_URL.
 */
async function deliverLead(lead: SurveyLead): Promise<void> {
  const webhook = process.env.SILICA_SHEETS_WEBHOOK_URL;

  if (!webhook) {
    console.info("[silica] lead (chưa nối Google Sheets)", lead);
    return;
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!response.ok) {
      console.error("[silica] webhook trả về lỗi", response.status, lead);
    }
  } catch (error) {
    // Không chặn chủ vườn vì lỗi hạ tầng — lead vẫn được ghi lại ở log.
    console.error("[silica] không gửi được lead", error, lead);
  }
}

export async function submitSurvey(
  _prevState: SurveyFormState,
  formData: FormData,
): Promise<SurveyFormState> {
  const lead: SurveyLead = {
    fullName: readString(formData, "fullName"),
    phone: readString(formData, "phone").replace(/[\s.]/g, ""),
    location: readString(formData, "location"),
    area: readString(formData, "area"),
    treeCount: readString(formData, "treeCount"),
    issues: formData.getAll("issues").filter((v): v is string => typeof v === "string"),
    note: readString(formData, "note"),
    source: readString(formData, "source") || "không rõ",
    submittedAt: new Date().toISOString(),
  };

  const errors: SurveyFormState["errors"] = {};
  if (!lead.fullName) {
    errors.fullName = "Vui lòng nhập họ tên.";
  }
  if (!lead.phone) {
    errors.phone = "Vui lòng nhập số điện thoại hoặc Zalo.";
  } else if (!PHONE_PATTERN.test(lead.phone)) {
    errors.phone = "Số điện thoại cần có 10 chữ số, bắt đầu bằng 0.";
  }
  if (!lead.location) {
    errors.location = "Vui lòng cho biết xã và tỉnh của vườn.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await deliverLead(lead);
  redirect("/cam-on");
}
