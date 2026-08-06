import Link from "next/link";
import {
  BuildingIcon,
  CalendarCheckIcon,
  ShieldCheckIcon,
  WalletIcon,
  UsersIcon,
  RefreshCwIcon,
  HomeIcon,
  KeyRoundIcon,
  BedDoubleIcon,
  UserPlusIcon,
  DoorOpenIcon,
  PlugZapIcon,
  RocketIcon,
} from "lucide-react";
import { CasalyIcon } from "@/components/casaly-icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { HeroMockup } from "@/components/hero-mockup";
import { StackSection } from "@/components/stack-section";

const useCases = [
  {
    icon: KeyRoundIcon,
    title: "Khách sạn",
    description:
      "Quản lý nhiều hạng phòng, theo dõi tình trạng phòng theo thời gian thực và đồng bộ giá với các kênh OTA.",
  },
  {
    icon: HomeIcon,
    title: "Homestay & Airbnb",
    description:
      "Gom lịch đặt phòng từ Airbnb, Beds24 qua iCal về một nơi duy nhất — không còn lo trùng lịch giữa các kênh.",
  },
  {
    icon: BuildingIcon,
    title: "Căn hộ dịch vụ",
    description:
      "Quản lý nhiều cơ sở, nhiều toà nhà cùng lúc, phân quyền theo từng nhân viên phụ trách từng khu vực.",
  },
];

const features = [
  {
    icon: CalendarCheckIcon,
    title: "Lịch đặt phòng trực quan",
    description: "Xem toàn bộ tình trạng phòng theo tháng, kéo-thả để đổi ngày, phân biệt nguồn đặt bằng màu sắc.",
  },
  {
    icon: RefreshCwIcon,
    title: "Đồng bộ lịch OTA hai chiều",
    description: "Nối qua iCal hoặc Beds24: đặt phòng từ kênh tự đổ về, lịch của bạn cũng phát ngược ra kênh — không nhập tay, không trùng lịch.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Khai báo tạm trú tự động",
    description: "Tự động tổng hợp thông tin khách trong nước lẫn nước ngoài cần khai báo, xuất file nộp cơ quan chức năng trong 1 click.",
  },
  {
    icon: WalletIcon,
    title: "Sổ thu — chi",
    description: "Ghi nhận từng khoản thu, khoản chi gắn với đặt phòng hoặc cơ sở, xem tổng kết theo tháng.",
  },
  {
    icon: UsersIcon,
    title: "Hồ sơ khách hàng",
    description: "Lưu trữ CCCD/hộ chiếu được mã hoá, lịch sử lưu trú và thông tin liên hệ của từng khách hàng.",
  },
  {
    icon: BedDoubleIcon,
    title: "Phân quyền theo vai trò",
    description: "Chủ, quản lý, lễ tân — mỗi vai trò chỉ thấy đúng phần việc của mình, an toàn cho dữ liệu vận hành.",
  },
];

const steps = [
  {
    step: "Bước 01",
    title: "Đặt lịch demo",
    description:
      "Gọi Zalo hoặc nhắn tin, 30 phút xem thử trên dữ liệu mẫu. Chúng tôi tạo sẵn tài khoản cho cơ sở của bạn, không phải tự khai báo gì.",
    icon: UserPlusIcon,
    tone: "bg-secondary text-primary",
  },
  {
    step: "Bước 02",
    title: "Khai báo cơ sở & phòng",
    description:
      "Danh sách hướng dẫn từng bước ngay trong phần mềm: thêm cơ sở, hạng phòng, giá. Đang dùng phần mềm khác thì chúng tôi chuyển dữ liệu giúp.",
    icon: DoorOpenIcon,
    tone: "bg-accent text-primary",
  },
  {
    step: "Bước 03",
    title: "Nối lịch với kênh OTA",
    description:
      "Dán link iCal từ Airbnb, Booking.com hoặc nối Beds24. Đặt phòng từ kênh tự đổ về, lịch của bạn cũng phát ngược ra kênh.",
    icon: PlugZapIcon,
    tone: "bg-secondary text-primary",
  },
  {
    step: "Bước 04",
    title: "Vận hành hằng ngày",
    description:
      "Lễ tân có tài khoản riêng, chỉ thấy đúng phần việc của mình. Khách nào cần khai báo tạm trú — trong nước hay nước ngoài — thì xuất file trong một lần bấm.",
    icon: RocketIcon,
    tone: "bg-accent text-primary",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div aria-hidden className="hero-aurora-base pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="hero-aurora absolute -inset-x-1/4 -top-1/3 aspect-square" />
          <div className="hero-grid absolute inset-0" />
        </div>

        <header className="sticky top-0 z-50">
          <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-2.5 font-extrabold text-2xl tracking-tight">
              <CasalyIcon className="h-8 w-8 text-primary" />
              Casaly
            </Link>
            <nav className="hidden items-center gap-8 text-base font-medium text-muted md:flex">
              <a href="#giai-phap" className="hover:text-foreground transition-colors">Giải pháp</a>
              <a href="#tinh-nang" className="hover:text-foreground transition-colors">Tính năng</a>
              <a href="#lien-he" className="hover:text-foreground transition-colors">Liên hệ</a>
            </nav>
            <a
              href="#lien-he"
              className="rounded-md bg-primary px-5 py-2.5 text-base font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              Liên hệ ngay
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative px-6 pt-20 pb-16 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-card-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Phần mềm Việt · dành riêng cho thị trường Việt Nam
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-balance md:text-6xl">
                Quản lý căn hộ, khách sạn và homestay{" "}
                <span className="text-primary">không còn phức tạp</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted text-balance">
                Casaly kết hợp đặt phòng, phòng, khách hàng, thu chi và khai báo tạm trú
                vào một nơi duy nhất — sinh ra cho cách vận hành lưu trú ở Việt Nam.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#lien-he"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  Đặt lịch demo 30 phút
                </a>
                <a
                  href="#tinh-nang"
                  className="rounded-md border border-card-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Xem tính năng
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.32} className="mx-auto mt-16 max-w-4xl">
            <HeroMockup />
          </Reveal>
        </section>

        {/* Fade the aurora/grid into the flat page background before the next section */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <main className="flex-1">
        {/* Use cases */}
        <section id="giai-phap" className="scroll-mt-20 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
                Phù hợp với mọi mô hình lưu trú
              </h2>
              <p className="mt-4 text-muted text-balance">
                Casaly thích ứng theo quy mô và cách vận hành của bạn.
              </p>
            </Reveal>

            <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-3">
              {useCases.map((useCase) => (
                <RevealItem
                  key={useCase.title}
                  className="rounded-lg border border-card-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
                    <useCase.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{useCase.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{useCase.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Features */}
        <section
          id="tinh-nang"
          className="scroll-mt-20 px-6 py-20 md:py-28 bg-[linear-gradient(to_bottom,var(--background)_0%,var(--card)_15%,var(--card)_85%,var(--background)_100%)]"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
                Mọi thứ bạn cần để vận hành, tại một nơi
              </h2>
              <p className="mt-4 text-muted text-balance">
                Từ đặt phòng, vận hành, quản lý đến kế toán — không cần chuyển qua lại giữa nhiều công cụ.
              </p>
            </Reveal>

            <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <RevealItem
                  key={feature.title}
                  className="rounded-lg border border-card-border bg-background p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Beds24 spotlight */}
        <section className="px-6 py-20 md:py-28">
          <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-card-border bg-card p-8 shadow-sm md:p-12">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <PlugZapIcon className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Tích hợp riêng
                </span>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-balance md:text-3xl">
                  Nối thẳng với Beds24 — không chỉ qua iCal
                </h2>
                <p className="mt-4 max-w-2xl text-muted leading-relaxed text-balance">
                  Với các kênh khác, Casaly đồng bộ qua iCal như mọi phần mềm cùng
                  loại. Riêng Beds24, Casaly nhận webhook trực tiếp: đặt phòng mới
                  đổ về ngay lập tức, không phải chờ chu kỳ làm mới 3-5 phút như
                  cách đồng bộ iCal thông thường. Đang dùng Beds24 và muốn chuyển
                  qua một hệ thống quản lý đầy đủ hơn — Casaly chuyển dữ liệu giúp.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Stacking steps — cards pile on top of each other while scrolling */}
        <section className="px-6 pb-24 pt-4 md:pb-32">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
              Bắt đầu chỉ trong 4 bước
            </h2>
            <p className="mt-4 text-muted text-balance">
              Từ buổi demo đầu tiên đến vận hành hằng ngày — không cần đội IT hỗ trợ.
            </p>
          </Reveal>
          <div className="mt-14">
            <StackSection cards={steps} />
          </div>
        </section>

        {/* CTA band */}
        <section id="lien-he" className="scroll-mt-20 px-6 py-20 md:py-28">
          <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground shadow-lg md:px-16 md:py-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
              Sẵn sàng đơn giản hoá vận hành lưu trú?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80 text-balance">
              Muốn xem trước giao diện, click vào Xem demo, dữ liệu mẫu làm mới mỗi ngày.
              Muốn tư vấn giá theo đúng số phòng, nhắn Zalo, 30 phút
              chúng tôi tạo sẵn tài khoản cho cơ sở của bạn.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {/* <a
                href="https://demo.casaly.vn/demo-login"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
              >
                Xem demo trực tiếp
              </a> */}
              <a
                href="https://zalo.me/0785497999"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
              >
                Nhắn Zalo 0785 497 999
              </a>
              <a
                href="mailto:contact@casaly.vn"
                className="rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                contact@casaly.vn
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-card-border px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-base text-muted md:flex-row">
          <div className="flex items-center gap-2.5 text-xl font-extrabold text-foreground">
            <CasalyIcon className="h-8 w-8 text-primary" />
            Casaly
          </div>
          <p>© {new Date().getFullYear()} Casaly. Đã đăng ký bản quyền.</p>
        </div>
      </footer>
    </>
  );
}
