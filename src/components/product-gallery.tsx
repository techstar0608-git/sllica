"use client";

import Image from "next/image";
import { useState } from "react";

/** Gallery ảnh sản phẩm — mục 3.7 §1. Chỉ hiện thumbnail khi có nhiều hơn 1 ảnh. */
export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      {/* B1 · Khung vuông 1:1 theo brief */}
      <div className="flex aspect-square items-center justify-center rounded-[18px] border border-line bg-white p-6 sm:p-8">
        <Image
          src={current}
          alt={alt}
          width={520}
          height={520}
          priority
          className="max-h-full w-auto object-contain"
        />
      </div>

      {images.length > 1 ? (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Xem ảnh ${i + 1} của ${alt}`}
              aria-current={i === active}
              className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border-2 bg-white p-2 ${
                i === active ? "border-brand-500" : "border-line hover:border-brand-300"
              }`}
            >
              <Image
                src={src}
                alt=""
                width={80}
                height={80}
                className="h-full w-auto object-contain"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
