import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/types";

/** G-07 · Card dịch vụ — icon, tên, 1 dòng mô tả, link. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/dich-vu/${service.slug}`}
      className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <Image
        src={service.icon}
        alt=""
        width={56}
        height={56}
        className="h-14 w-14 object-contain"
      />
      <h3 className="mt-4 text-lg font-bold text-brand-900">{service.navName}</h3>
      <p className="mt-2 flex-1 text-muted">{service.cardSummary}</p>
      <span className="mt-4 font-semibold text-brand-600">Xem chi tiết →</span>
    </Link>
  );
}
