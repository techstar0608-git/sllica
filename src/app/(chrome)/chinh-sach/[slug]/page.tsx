import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PolicyBody } from "@/components/policy-body";
import { Breadcrumb, Container, Section } from "@/components/ui";
import {
  getPolicy,
  legalEntity,
  policies,
  policyUpdatedAt,
} from "@/content/policies";

type Params = { params: Promise<{ slug: string }> };

/** Static export cần biết trước danh sách slug để dựng file HTML. */
export function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) return {};
  return { title: policy.title, description: policy.description };
}

export default async function PolicyPage({ params }: Params) {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) notFound();

  const others = policies.filter((p) => p.slug !== policy.slug);

  return (
    <>
      <section className="border-b border-line bg-brand-50 py-10 sm:py-14">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Trang chủ", href: "/" },
              { label: "Chính sách", href: "/chinh-sach" },
              { label: policy.navName },
            ]}
          />
          <h1 className="mt-3 max-w-4xl text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
            {policy.title}
          </h1>
          <p className="mt-3 text-muted">Cập nhật lần cuối: {policyUpdatedAt}</p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_18rem]">
          <article className="max-w-3xl">
            {policy.intro?.length ? (
              <div className="mb-10 space-y-4">
                {policy.intro.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}

            <PolicyBody sections={policy.sections} />

            <div className="mt-12 rounded-2xl border-l-4 border-brand-500 bg-brand-50 px-5 py-4">
              <p className="text-lg font-semibold text-brand-900">
                {legalEntity.name}
              </p>
              <p className="mt-1 text-muted">
                MST {legalEntity.taxCode} · {legalEntity.headOffice}
              </p>
              <p className="mt-1 text-muted">
                Hotline:{" "}
                <a href={legalEntity.hotlineHref} className="font-medium text-brand-600 hover:underline">
                  {legalEntity.hotline}
                </a>{" "}
                · Email:{" "}
                <a href={`mailto:${legalEntity.email}`} className="font-medium text-brand-600 hover:underline">
                  {legalEntity.email}
                </a>
              </p>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav aria-labelledby="policy-toc">
              <h2 id="policy-toc" className="font-semibold text-brand-900">
                Nội dung trang này
              </h2>
              <ul className="mt-3 space-y-1 border-l border-line pl-4">
                {policy.sections.map((s) => (
                  <li key={s.number}>
                    <a
                      href={`#muc-${s.number}`}
                      className="block py-1.5 text-muted hover:text-brand-600 hover:underline"
                    >
                      {s.number}. {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="policy-others" className="mt-8">
              <h2 id="policy-others" className="font-semibold text-brand-900">
                Chính sách khác
              </h2>
              <ul className="mt-3 space-y-1">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/chinh-sach/${p.slug}`}
                      className="block py-1.5 text-muted hover:text-brand-600 hover:underline"
                    >
                      {p.navName}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </Section>
    </>
  );
}
