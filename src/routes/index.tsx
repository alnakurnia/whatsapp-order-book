import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MessageSquare,
  AlertCircle,
  Bell,
  ClipboardList,
  FileSpreadsheet,
  Eye,
  Zap,
  LayoutGrid,
  BarChart3,
  Users,
  Check,
  ArrowRight,
  Cake,
  ShoppingBag,
  UtensilsCrossed,
  Home,
  Package,
  ChefHat,
  Menu,
  X,
  Star,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-illustration.jpg";
import happyOwnerImg from "@/assets/happy-owner.jpg";
import growthImg from "@/assets/growth.jpg";
import calmOwnerImg from "@/assets/calm-owner.jpg";
import messyChatImg from "@/assets/messy-chat.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WhatsApp Order Book — Kelola Order WhatsApp Tanpa Berantakan | DigiOps.id" },
      {
        name: "description",
        content:
          "Ubah chat WhatsApp jadi order yang rapi. WhatsApp Order Book dari DigiOps.id bantu UMKM Indonesia kelola pesanan, status, dan rekap harian otomatis.",
      },
      { property: "og:title", content: "WhatsApp Order Book — DigiOps.id" },
      {
        property: "og:description",
        content:
          "Software sederhana untuk UMKM: order tidak hilang, status jelas, rekap otomatis.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { rel: "canonical", href: "/" } as never,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "WhatsApp Order Book",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "IDR",
          },
          publisher: { "@type": "Organization", name: "DigiOps.id" },
          description:
            "Aplikasi pengelola order WhatsApp untuk UMKM Indonesia oleh DigiOps.id.",
        }),
      },
    ],
  }),
  component: Index,
});

const WA_LINK = "https://wa.me/6281234567890";

function Index() {
  return (
    <div className="min-h-screen bg-white text-[color:var(--ink)]">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <WhyUs />
        <Features />
        <HowItWorks />
        <AppGallery />
        <Benefits />
        <Audience />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- Shared ---------------- */
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full brand-soft-bg brand-text px-3 py-1 text-xs font-semibold tracking-wide uppercase">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function BrandButton({
  children,
  href = "#pricing",
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "brand-bg text-white shadow-soft hover:brightness-95"
      : variant === "secondary"
        ? "bg-white text-[color:var(--ink)] border border-black/10 hover:bg-black/5"
        : "text-[color:var(--ink)] hover:bg-black/5";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-xl brand-bg text-white font-bold">
        D
      </span>
      <span className="font-[Poppins] text-lg font-extrabold tracking-tight">
        DigiOps<span className="brand-text">.id</span>
      </span>
    </a>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#fitur", label: "Fitur" },
    { href: "#cara-kerja", label: "Cara Kerja" },
    { href: "#harga", label: "Harga" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[color:var(--muted-ink)] transition-colors hover:text-[color:var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <BrandButton href="#harga">Mulai Gratis</BrandButton>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-lg p-2 hover:bg-black/5"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[color:var(--muted-ink)] hover:bg-black/5"
              >
                {l.label}
              </a>
            ))}
            <BrandButton href="#harga" className="mt-2 w-full">
              Mulai Gratis
            </BrandButton>
          </Container>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const benefits = [
    "Order tidak hilang",
    "Status order lebih jelas",
    "Rekap otomatis setiap hari",
    "Tidak perlu Excel",
    "Bisa digunakan dalam hitungan menit",
  ];
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full brand-soft-bg blur-3xl opacity-70"
      />
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-in">
          <SectionLabel>Dari DigiOps.id</SectionLabel>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Order WhatsApp Masih{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Berantakan?</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 brand-soft-bg" />
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg muted-ink-text leading-relaxed">
            WhatsApp Order Book membantu UMKM mengubah chat WhatsApp menjadi order
            yang terstruktur — tidak ada lagi pesanan yang hilang atau terlupakan.
          </p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium">
                <span className="grid h-5 w-5 place-items-center rounded-full brand-bg text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <BrandButton href="#harga">
              Mulai Gratis <ArrowRight className="h-4 w-4" />
            </BrandButton>
            <BrandButton href="#tampilan" variant="secondary">
              Lihat Demo
            </BrandButton>
          </div>
          <p className="mt-5 text-xs muted-ink-text">
            🇮🇩 Dibangun oleh DigiOps.id untuk UMKM Indonesia
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] brand-soft-bg/60 blur-2xl" aria-hidden />
          <div className="relative rounded-[2rem] bg-white p-3 shadow-card border border-black/5">
            <img
              src={heroImg}
              alt="UMKM owner kewalahan dengan chat WhatsApp order yang berantakan"
              width={1280}
              height={1024}
              className="rounded-[1.5rem] w-full h-auto"
            />
          </div>
          <FloatingOrderCard />
        </div>
      </Container>
    </section>
  );
}

function FloatingOrderCard() {
  return (
    <div className="absolute -bottom-6 -left-4 hidden sm:block rounded-2xl bg-white p-4 shadow-card border border-black/5 animate-fade-in">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl brand-bg text-white">
          <Check className="h-5 w-5" strokeWidth={3} />
        </span>
        <div>
          <div className="text-xs muted-ink-text">Order baru</div>
          <div className="text-sm font-semibold">#ORD-128 · Rp 145.000</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Problems ---------------- */
function Problems() {
  const items = [
    { icon: MessageSquare, title: "Order tenggelam di chat", desc: "Pesanan tertimbun ratusan chat baru, sulit ditemukan kembali." },
    { icon: AlertCircle, title: "Chat bercampur dengan pesanan", desc: "Tanya harga, komplain, dan order menjadi satu — semua terlewat." },
    { icon: Bell, title: "Lupa follow up customer", desc: "Customer menunggu balasan, kita lupa karena chat sudah tergeser." },
    { icon: ClipboardList, title: "Status order tidak jelas", desc: "Sudah diproses? Sudah dikirim? Tidak ada catatan yang rapi." },
    { icon: FileSpreadsheet, title: "Rekap harian masih manual", desc: "Setiap malam scroll chat lalu hitung manual di Excel." },
    { icon: Eye, title: "Owner tidak tahu progres", desc: "Sulit memantau order tanpa harus tanya ke admin satu per satu." },
  ];
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionLabel>Masalah</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">
              Masalah yang sering terjadi saat menerima order via WhatsApp
            </h2>
            <p className="mt-4 muted-ink-text">
              Sebagian besar UMKM mengalami masalah yang sama. Kamu tidak sendirian.
            </p>
            <img
              src={messyChatImg}
              alt="Ilustrasi chat WhatsApp yang berantakan dan order yang hilang"
              width={1024}
              height={800}
              loading="lazy"
              className="mt-8 rounded-2xl w-full h-auto shadow-soft"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-black/5 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl brand-soft-bg brand-text">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold">{title}</h3>
                <p className="mt-1.5 text-sm muted-ink-text leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  const items = [
    { title: "Tidak perlu ubah kebiasaan kerja", desc: "Tetap pakai WhatsApp seperti biasa, cukup salin chat ke dalam aplikasi." },
    { title: "Input order kurang dari 10 detik", desc: "Paste chat, sistem langsung mengubahnya jadi order terstruktur." },
    { title: "Semua order dalam satu tempat", desc: "Dashboard ringkas yang menampilkan setiap pesanan secara real-time." },
    { title: "Laporan otomatis tanpa rekap manual", desc: "Ringkasan harian dikirim otomatis tanpa kamu hitung lagi." },
  ];
  return (
    <section className="py-20 surface-alt-bg">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <img
              src={happyOwnerImg}
              alt="Pemilik bisnis tersenyum melihat dashboard order yang rapi"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-auto rounded-3xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel>Kenapa Kami</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">
              Kenapa memilih WhatsApp Order Book?
            </h2>
            <p className="mt-4 muted-ink-text">
              Dirancang berdasarkan masalah nyata yang dialami UMKM Indonesia.
            </p>
            <div className="mt-8 grid gap-4">
              {items.map((it, i) => (
                <div
                  key={it.title}
                  className="flex gap-4 rounded-2xl bg-white p-5 border border-black/5 shadow-soft"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl brand-bg text-white font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold">{it.title}</h3>
                    <p className="mt-1 text-sm muted-ink-text">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Features ---------------- */
function Features() {
  const features = [
    {
      icon: Zap,
      title: "Quick Order Capture",
      desc: "Paste chat WhatsApp dan sistem mengubahnya menjadi order terstruktur dalam hitungan detik.",
      visual: <QuickCaptureVisual />,
    },
    {
      icon: LayoutGrid,
      title: "Order Status Board",
      desc: "Pantau semua order dalam tampilan Kanban modern: NEW, PROCESS, DONE.",
      visual: <KanbanVisual />,
    },
    {
      icon: BarChart3,
      title: "Daily Summary Report",
      desc: "Laporan harian otomatis dikirim ke owner setiap hari — tanpa rekap manual.",
      visual: <SummaryVisual />,
    },
    {
      icon: Users,
      title: "Customer Database",
      desc: "Daftar customer dibuat otomatis dari data order. Siap untuk follow up berikutnya.",
      visual: <CustomerVisual />,
    },
  ];
  return (
    <section id="fitur" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Fitur Utama</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">Semua yang kamu butuhkan, tidak lebih</h2>
          <p className="mt-4 muted-ink-text">Fokus pada hal yang penting: order yang rapi dan operasional yang lancar.</p>
        </div>

        <div className="mt-16 space-y-20">
          {features.map(({ icon: Icon, title, desc, visual }, i) => (
            <div
              key={title}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl brand-soft-bg brand-text">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold">{title}</h3>
                <p className="mt-3 muted-ink-text leading-relaxed">{desc}</p>
                <a
                  href="#harga"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold brand-text hover:gap-2.5 transition-all"
                >
                  Coba fitur ini <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="rounded-3xl bg-white p-3 border border-black/5 shadow-card">
                {visual}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MockBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-black/5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
        <span className="ml-3 text-[10px] muted-ink-text font-medium">DigiOps.id · WhatsApp Order Book</span>
      </div>
      <div className="p-4 surface-alt-bg">{children}</div>
    </div>
  );
}

function QuickCaptureVisual() {
  return (
    <MockBar>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-[#DCF8C6] p-3 text-xs leading-relaxed">
          <div className="font-semibold text-[#075E54] mb-1">Bu Siti</div>
          Halo kak, mau pesen 2 box brownies, dikirim Sabtu ya. Alamat: Jl. Melati 12. Bayar transfer.
          <div className="text-right text-[10px] muted-ink-text mt-1">10:24 ✓✓</div>
        </div>
        <div className="rounded-xl bg-white border border-black/5 p-3 text-xs">
          <div className="font-bold mb-2">Order #ORD-129</div>
          <div className="grid grid-cols-3 gap-1">
            <span className="muted-ink-text">Customer</span><span className="col-span-2 font-medium">Bu Siti</span>
            <span className="muted-ink-text">Item</span><span className="col-span-2 font-medium">2x Brownies</span>
            <span className="muted-ink-text">Tanggal</span><span className="col-span-2 font-medium">Sabtu</span>
            <span className="muted-ink-text">Bayar</span><span className="col-span-2 font-medium">Transfer</span>
          </div>
          <div className="mt-2 inline-flex items-center gap-1 rounded-full brand-soft-bg brand-text px-2 py-0.5 text-[10px] font-bold">
            <Check className="h-3 w-3" /> Terstruktur
          </div>
        </div>
      </div>
    </MockBar>
  );
}

function KanbanVisual() {
  const cols = [
    { label: "NEW", color: "bg-amber-100 text-amber-800", items: ["Brownies x2", "Risoles x10"] },
    { label: "PROCESS", color: "bg-blue-100 text-blue-800", items: ["Nasi Box x5"] },
    { label: "DONE", color: "brand-soft-bg brand-text", items: ["Kue Ultah", "Catering"] },
  ];
  return (
    <MockBar>
      <div className="grid grid-cols-3 gap-2">
        {cols.map((c) => (
          <div key={c.label} className="rounded-xl bg-white border border-black/5 p-2">
            <div className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${c.color}`}>
              {c.label}
            </div>
            <div className="mt-2 space-y-1.5">
              {c.items.map((it) => (
                <div key={it} className="rounded-lg surface-alt-bg p-2 text-[11px] font-medium">
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MockBar>
  );
}

function SummaryVisual() {
  const stats = [
    { l: "Total Order", v: "47" },
    { l: "Selesai", v: "39" },
    { l: "Pendapatan", v: "Rp 4.2jt" },
  ];
  return (
    <MockBar>
      <div className="text-xs font-semibold mb-3">📊 Ringkasan Hari Ini</div>
      <div className="grid grid-cols-3 gap-2">
        {stats.map((s) => (
          <div key={s.l} className="rounded-xl bg-white border border-black/5 p-3">
            <div className="text-[10px] muted-ink-text">{s.l}</div>
            <div className="text-lg font-extrabold">{s.v}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-white border border-black/5 p-3">
        <div className="flex items-end gap-1.5 h-16">
          {[40, 65, 50, 80, 70, 90, 60].map((h, i) => (
            <div key={i} className="flex-1 brand-bg/80 rounded-t-md" style={{ height: `${h}%`, backgroundColor: "var(--brand)" }} />
          ))}
        </div>
      </div>
    </MockBar>
  );
}

function CustomerVisual() {
  const cust = [
    { n: "Bu Siti", o: 12, p: "Rp 1.4jt" },
    { n: "Pak Andi", o: 8, p: "Rp 980rb" },
    { n: "Mbak Rina", o: 5, p: "Rp 650rb" },
  ];
  return (
    <MockBar>
      <div className="rounded-xl bg-white border border-black/5">
        <div className="grid grid-cols-3 px-3 py-2 text-[10px] font-bold muted-ink-text border-b border-black/5">
          <span>NAMA</span><span>ORDER</span><span>TOTAL</span>
        </div>
        {cust.map((c) => (
          <div key={c.n} className="grid grid-cols-3 items-center px-3 py-2.5 text-xs border-b last:border-0 border-black/5">
            <span className="font-semibold flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full brand-soft-bg brand-text text-[10px] font-bold">
                {c.n[0]}
              </span>
              {c.n}
            </span>
            <span>{c.o}x</span>
            <span className="font-bold">{c.p}</span>
          </div>
        ))}
      </div>
    </MockBar>
  );
}

/* ---------------- How It Works ---------------- */
function HowItWorks() {
  const steps = [
    { n: 1, t: "Terima Chat WhatsApp", d: "Customer chat seperti biasa di WhatsApp kamu." },
    { n: 2, t: "Paste Chat atau Input Order", d: "Salin chat ke aplikasi atau input cepat manual." },
    { n: 3, t: "Kelola Status Order", d: "Update status NEW → PROCESS → DONE dengan sekali klik." },
    { n: 4, t: "Terima Ringkasan Harian", d: "Setiap malam dapatkan rekap otomatis ke WhatsApp." },
  ];
  return (
    <section id="cara-kerja" className="py-20 surface-alt-bg">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Cara Kerja</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">Mulai dalam 4 langkah sederhana</h2>
          <p className="mt-4 muted-ink-text">Tanpa training, tanpa setup rumit.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-4 relative">
          <div aria-hidden className="hidden md:block absolute top-7 left-[12%] right-[12%] h-0.5 brand-bg/30" style={{ backgroundColor: "var(--brand-soft)" }} />
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl bg-white border border-black/5 p-6 shadow-soft text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl brand-bg text-white text-xl font-extrabold shadow-soft">
                {s.n}
              </div>
              <h3 className="mt-4 font-bold">{s.t}</h3>
              <p className="mt-2 text-sm muted-ink-text">{s.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- App Gallery ---------------- */
function AppGallery() {
  const screens = [
    { t: "Dashboard", visual: <SummaryVisual /> },
    { t: "Tambah Order", visual: <QuickCaptureVisual /> },
    { t: "Order Board", visual: <KanbanVisual /> },
    { t: "Customer Database", visual: <CustomerVisual /> },
    { t: "Daily Summary Report", visual: <SummaryVisual /> },
  ];
  return (
    <section id="tampilan" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Tampilan Aplikasi</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">Lihat tampilan WhatsApp Order Book</h2>
          <p className="mt-4 muted-ink-text">Desain bersih, mudah dimengerti, siap dipakai di laptop dan HP.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {screens.map((s) => (
            <figure key={s.t} className="group rounded-3xl bg-white p-4 border border-black/5 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              {s.visual}
              <figcaption className="mt-4 px-2 flex items-center justify-between">
                <span className="font-bold">{s.t}</span>
                <span className="text-xs muted-ink-text">DigiOps.id</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Benefits ---------------- */
function Benefits() {
  const metrics = [
    { v: "90%", l: "Order Terlewat Turun", d: "Tidak ada lagi order yang tenggelam di chat." },
    { v: "80%", l: "Waktu Rekap Lebih Cepat", d: "Rekap harian otomatis, hemat waktu admin." },
    { v: "2x", l: "Produktivitas Admin", d: "Admin fokus melayani, bukan rekap manual." },
    { v: "↑", l: "Kontrol Operasional", d: "Owner tahu progres tiap order, setiap saat." },
  ];
  return (
    <section className="py-20 surface-alt-bg">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionLabel>Manfaat</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">Manfaat yang akan kamu rasakan</h2>
            <p className="mt-4 muted-ink-text">
              Hasil nyata yang dilaporkan UMKM setelah memakai WhatsApp Order Book.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {metrics.map((m) => (
                <div key={m.l} className="rounded-2xl bg-white p-6 border border-black/5 shadow-soft">
                  <div className="text-4xl font-extrabold brand-text">{m.v}</div>
                  <div className="mt-2 font-bold">{m.l}</div>
                  <p className="mt-1 text-sm muted-ink-text">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={growthImg}
            alt="Ilustrasi pertumbuhan bisnis"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Audience ---------------- */
function Audience() {
  const items = [
    { icon: ChefHat, t: "Catering", d: "Kelola pesanan harian dan mingguan dengan rapi." },
    { icon: Cake, t: "Bakery", d: "Pesanan kue ulang tahun & roti tidak terlewat." },
    { icon: ShoppingBag, t: "Online Shop", d: "Track order, status, dan ongkir dalam satu tempat." },
    { icon: UtensilsCrossed, t: "Warung Makan", d: "Order delivery dan pre-order makanan lebih jelas." },
    { icon: Home, t: "Home Industry", d: "Bisnis rumahan tetap profesional sejak hari pertama." },
    { icon: Package, t: "Jasa Pre Order", d: "Kelola batch PO besar tanpa pusing rekap manual." },
  ];
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Cocok Untuk</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">Cocok untuk berbagai jenis usaha</h2>
          <p className="mt-4 muted-ink-text">Selama kamu menerima order via WhatsApp, kamu cocok pakai ini.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-white p-6 border border-black/5 shadow-soft hover:-translate-y-1 hover:shadow-card transition-all">
              <div className="grid h-12 w-12 place-items-center rounded-2xl brand-soft-bg brand-text">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold">{t}</h3>
              <p className="mt-1 text-sm muted-ink-text">{d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Case Studies ---------------- */
function CaseStudies() {
  const cases = [
    { biz: "Catering", before: "Order sering hilang di chat", after: "Semua order tercatat & terlacak" },
    { biz: "Online Shop", before: "Sulit memonitor status order", after: "Tracking status sekali klik" },
    { biz: "Bakery", before: "Rekap harian manual di Excel", after: "Laporan otomatis tiap malam" },
  ];
  return (
    <section className="py-20 surface-alt-bg">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Studi Kasus</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">Bagaimana UMKM menggunakannya</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.biz} className="rounded-3xl bg-white p-6 border border-black/5 shadow-soft">
              <div className="inline-flex items-center gap-1.5 rounded-full brand-soft-bg brand-text px-3 py-1 text-xs font-bold">
                {c.biz}
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-red-50 p-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-red-700">Before</div>
                  <p className="mt-1 text-sm font-medium">{c.before}</p>
                </div>
                <div className="grid place-items-center">
                  <ArrowRight className="h-5 w-5 muted-ink-text rotate-90" />
                </div>
                <div className="rounded-2xl brand-soft-bg p-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider brand-text">After</div>
                  <p className="mt-1 text-sm font-medium">{c.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    {
      name: "Dinda P.",
      biz: "Owner Catering · Bandung",
      quote: "Sebelumnya tiap malam pusing rekap order. Sekarang udah otomatis, saya bisa fokus masak lagi.",
    },
    {
      name: "Rangga A.",
      biz: "Online Shop Hijab · Solo",
      quote: "Admin saya nggak perlu lagi bolak-balik scroll chat. Order tinggal di-paste, selesai.",
    },
    {
      name: "Mira S.",
      biz: "Home Bakery · Jakarta",
      quote: "Laporan harian masuk WA tiap malam. Saya tahu omzet hari ini tanpa buka Excel.",
    },
  ];
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Testimoni</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">Apa kata UMKM yang sudah pakai</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-white p-6 border border-black/5 shadow-soft">
              <div className="flex gap-0.5 brand-text">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full brand-bg text-white font-bold">
                  {t.name[0]}
                </span>
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs muted-ink-text">{t.biz}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "Rp 0",
      sub: "Selamanya",
      features: ["Maksimal 20 order / bulan", "Status Board", "1 admin"],
      cta: "Coba Gratis",
      featured: false,
    },
    {
      name: "Starter",
      price: "Rp 49.000",
      sub: "per bulan",
      features: ["Unlimited Order", "Daily Summary Report", "Customer Database", "1 admin"],
      cta: "Coba Gratis",
      featured: true,
    },
    {
      name: "Pro",
      price: "Rp 99.000",
      sub: "per bulan",
      features: ["Semua fitur Starter", "Multi Admin", "Auto Reminder", "Export Excel"],
      cta: "Coba Gratis",
      featured: false,
    },
  ];
  return (
    <section id="harga" className="py-20 surface-alt-bg">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Harga</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">Pilih paket yang sesuai</h2>
          <p className="mt-4 muted-ink-text">Mulai gratis, upgrade kapan saja kamu butuh.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-7 border shadow-soft transition-all hover:-translate-y-1 ${
                p.featured
                  ? "bg-[color:var(--ink)] text-white border-transparent shadow-card"
                  : "bg-white border-black/5"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full brand-bg text-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider shadow-soft">
                  Paling Populer
                </div>
              )}
              <div className="text-sm font-bold uppercase tracking-wider opacity-80">{p.name}</div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className={`text-sm ${p.featured ? "opacity-70" : "muted-ink-text"}`}>{p.sub}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className={`grid h-5 w-5 place-items-center rounded-full ${p.featured ? "bg-white/15" : "brand-soft-bg"}`}>
                      <Check className={`h-3 w-3 ${p.featured ? "text-white" : "brand-text"}`} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all hover:scale-[1.01] ${
                  p.featured
                    ? "brand-bg text-white shadow-soft"
                    : "bg-[color:var(--ink)] text-white"
                }`}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    {
      q: "Apakah saya harus menggunakan WhatsApp Business?",
      a: "Tidak wajib. WhatsApp Order Book bekerja dengan WhatsApp biasa maupun WhatsApp Business. Yang penting kamu bisa menyalin chat dari WhatsApp.",
    },
    {
      q: "Apakah data saya aman?",
      a: "Aman. Data hanya bisa diakses oleh akun kamu. Kami tidak membagikan data kamu ke pihak manapun.",
    },
    {
      q: "Apakah bisa digunakan lebih dari satu admin?",
      a: "Bisa, mulai dari paket Pro kamu bisa menambahkan multi admin sehingga tim kamu bisa kerja bersama dalam satu dashboard.",
    },
    {
      q: "Apakah ada biaya setup?",
      a: "Tidak ada. Kamu bisa langsung mulai gratis dalam hitungan menit tanpa biaya instalasi.",
    },
    {
      q: "Apakah tersedia trial gratis?",
      a: "Ada. Paket Free bisa dipakai selamanya hingga 20 order per bulan. Paket berbayar juga bisa kamu coba dulu.",
    },
    {
      q: "Apakah cocok untuk usaha kecil?",
      a: "Sangat cocok. WhatsApp Order Book dirancang khusus untuk UMKM Indonesia — sederhana, ringan, dan langsung pakai.",
    },
  ];
  return (
    <section id="faq" className="py-20">
      <Container className="max-w-3xl">
        <div className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">Pertanyaan yang sering ditanyakan</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {items.map((it, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-black/5 bg-white px-5 shadow-soft"
            >
              <AccordionTrigger className="text-left font-bold hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="muted-ink-text leading-relaxed">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] brand-bg text-white p-10 sm:p-16 shadow-card">
          <div aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Jangan sampai ada order hilang lagi.
              </h2>
              <p className="mt-4 max-w-xl text-white/90 text-lg">
                Mulai gunakan WhatsApp Order Book dari DigiOps.id dan kelola pesanan
                dengan lebih rapi — hari ini juga.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#harga"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[color:var(--ink)] px-6 py-3 text-sm font-bold transition hover:scale-[1.02]"
                >
                  Mulai Gratis Sekarang <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={WA_LINK}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white/20"
                >
                  Hubungi Tim DigiOps.id
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={calmOwnerImg}
                alt="Pemilik bisnis tenang dan produktif"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-auto rounded-3xl bg-white/10"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm muted-ink-text max-w-xs">
              Digital Operations Tools untuk membuat bisnis UMKM Indonesia lebih produktif.
            </p>
          </div>
          <FooterCol title="Produk" links={[["WhatsApp Order Book", "#home"], ["Fitur", "#fitur"], ["Harga", "#harga"]]} />
          <FooterCol title="Perusahaan" links={[["Tentang DigiOps.id", "#"], ["Kontak", WA_LINK]]} />
          <FooterCol title="Kontak" links={[["WhatsApp", WA_LINK], ["Email", "mailto:halo@digiops.id"], ["Instagram", "#"], ["Facebook", "#"]]} />
        </div>
        <div className="mt-10 border-t border-black/5 pt-6 flex flex-wrap items-center justify-between gap-3 text-xs muted-ink-text">
          <span>© 2026 DigiOps.id. All rights reserved.</span>
          <span>Dibuat dengan ❤️ untuk UMKM Indonesia</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-xs font-extrabold uppercase tracking-wider">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-sm muted-ink-text hover:text-[color:var(--ink)] transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Floating WhatsApp ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full brand-bg text-white shadow-card hover:scale-110 transition-all"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.84.98h.01a7.93 7.93 0 0 0 7.93-7.93 7.88 7.88 0 0 0-2.38-5.63ZM12.05 18.5h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.59 6.59 0 1 1 12.25-3.48 6.6 6.6 0 0 1-6.65 6.57Zm3.62-4.94c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.45.1-.13.2-.51.65-.63.78-.11.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.6-.53-1-1.18-1.12-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.09-.62-1.49-.16-.39-.33-.34-.45-.34h-.39c-.13 0-.35.05-.53.25-.18.2-.7.68-.7 1.66 0 .98.72 1.93.82 2.06.1.13 1.42 2.17 3.43 3.04.48.21.85.33 1.15.42.48.15.92.13 1.27.08.39-.06 1.18-.48 1.35-.95.17-.47.17-.87.12-.95-.05-.08-.18-.13-.38-.23Z" />
      </svg>
    </a>
  );
}
}
