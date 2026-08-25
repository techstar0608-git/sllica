import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/products";
import { StatusTag } from "./ui";

/** G-08 · Card sản phẩm — ảnh, tên, quy cách, tag trạng thái đăng ký, nút xem chi tiết. */
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/san-pham/${product.slug}`}
      className="flex h-full flex-col rounded-[18px] border border-line bg-white p-5 transition-shadow hover:shadow-md"
    >
      <div className="flex h-40 items-center justify-center rounded-xl bg-brand-50 p-4">
        <Image
          src={product.image ?? product.icon}
          alt={product.name}
          width={200}
          height={200}
          className="h-full w-auto object-contain"
        />
      </div>

      <h3 className="mt-4 font-bold text-brand-900">{product.name}</h3>
      {product.registeredName ? (
        <p className="mt-1 text-muted">{product.registeredName}</p>
      ) : null}

      <p className="mt-2 text-muted">{product.packaging.split("—")[0].trim()}</p>

      <div className="mt-3">
        <StatusTag value={product.status} />
      </div>

      <p className="mt-4 font-semibold text-brand-900">Liên hệ</p>
      <span className="mt-1 font-semibold text-brand-600">Xem chi tiết →</span>
    </Link>
  );
}
