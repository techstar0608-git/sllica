export type Bullet = string;

export type TaskGroup = {
  title: string;
  items: Bullet[];
};

export type TableBlock = {
  caption?: string;
  headers: string[];
  rows: string[][];
  note?: string;
};

export type StepDiagram = {
  title: string;
  steps: string[];
  note?: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type Commitment = {
  does: Bullet[];
  doesNot: Bullet[];
};

/** Khối 4 đổi hình thức theo từng dịch vụ (sơ đồ cơ chế / bảng giai đoạn / timeline). */
export type MechanismBlock =
  | { kind: "steps"; data: StepDiagram }
  | { kind: "table"; data: TableBlock };

export type Service = {
  slug: string;
  /** Tên ngắn dùng trên card, menu, breadcrumb. */
  navName: string;
  /** Tên hiển thị đầy đủ ở Hero. */
  title: string;
  tagline: string;
  subline?: string;
  cardSummary: string;
  icon: string;
  heroImage: string;
  problems: Bullet[];
  taskGroups: TaskGroup[];
  mechanism?: MechanismBlock;
  deliverables: Bullet[];
  products?: TableBlock;
  /** Slug các sản phẩm K-SON dùng trong dịch vụ này (khối 6). */
  productSlugs?: string[];
  highlight?: string;
  commitment: Commitment;
  faqs: Faq[];
  seoKeywords: string[];
};
