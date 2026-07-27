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
      "Đồng bộ lịch đặt phòng từ Airbnb, Beds24 về một nơi duy nhất — không còn lo trùng lịch giữa các kênh.",
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
    title: "Đồng bộ Airbnb & Beds24",
    description: "Đặt phòng từ các kênh OTA tự động đổ về hệ thống, không cần nhập tay, không lo trùng lịch.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Khai báo tạm trú tự động",
    description: "Tự động tổng hợp thông tin khách nước ngoài cần khai báo, xuất file nộp cơ quan chức năng trong 1 click.",
  },
  {
    icon: WalletIcon,
    title: "Kế toán thu — chi",
    description: "Theo dõi doanh thu, hoa hồng, thuế và lợi nhuận ròng theo từng đặt phòng hoặc theo tháng.",
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

// TODO: nội dung tạm — cập nhật copy thật cho từng bước khi có.
const steps = [
  {
    step: "Bước 01",
    title: "Tạo tài khoản",
    description: "Placeholder — mô tả cách đăng ký workspace cho cơ sở của bạn.",
    icon: UserPlusIcon,
    tone: "bg-secondary text-primary",
  },
  {
    step: "Bước 02",
    title: "Thêm cơ sở & phòng",
    description: "Placeholder — mô tả cách khai báo cơ sở, loại phòng, giá.",
    icon: DoorOpenIcon,
    tone: "bg-accent text-primary",
  },
  {
    step: "Bước 03",
    title: "Kết nối kênh đặt phòng",
    description: "Placeholder — mô tả bước đồng bộ Airbnb/Beds24.",
    icon: PlugZapIcon,
    tone: "bg-secondary text-primary",
  },
  {
    step: "Bước 04",
    title: "Vận hành hằng ngày",
    description: "Placeholder — mô tả trải nghiệm dùng hằng ngày sau khi setup xong.",
    icon: RocketIcon,
    tone: "bg-accent text-primary",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-card-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
            <CasalyIcon className="h-6 w-6 text-primary" />
            Casaly
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            <a href="#giai-phap" className="hover:text-foreground transition-colors">Giải pháp</a>
            <a href="#tinh-nang" className="hover:text-foreground transition-colors">Tính năng</a>
            <a href="#lien-he" className="hover:text-foreground transition-colors">Liên hệ</a>
          </nav>
          <a
            href="#lien-he"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            Dùng thử miễn phí
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[560px] bg-[radial-gradient(60%_60%_at_50%_0%,var(--secondary)_0%,transparent_70%)]"
          />
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-card-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Phần mềm quản lý lưu trú
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
                Casaly gộp đặt phòng, phòng, khách hàng, thu chi và khai báo tạm trú
                vào một nơi duy nhất — xây dựng riêng cho thị trường Việt Nam.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#lien-he"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  Dùng thử miễn phí
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
        <section id="tinh-nang" className="scroll-mt-20 bg-card px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
                Mọi thứ bạn cần để vận hành, tại một nơi
              </h2>
              <p className="mt-4 text-muted text-balance">
                Từ đặt phòng đến kế toán — không cần chuyển qua lại giữa nhiều công cụ.
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

        {/* Stacking steps — cards pile on top of each other while scrolling */}
        <section className="px-6 pb-24 pt-4 md:pb-32">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
              Bắt đầu chỉ trong 4 bước
            </h2>
            <p className="mt-4 text-muted text-balance">
              Nội dung minh hoạ — sẽ cập nhật copy thật cho từng bước.
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
              Đăng ký dùng thử miễn phí, không cần thẻ tín dụng.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:hello@casaly.vn"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
              >
                Liên hệ với chúng tôi
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-card-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
          <div className="flex items-center gap-2 font-bold text-foreground">
            <CasalyIcon className="h-5 w-5 text-primary" />
            Casaly
          </div>
          <p>© {new Date().getFullYear()} Casaly. Đã đăng ký bản quyền.</p>
        </div>
      </footer>
    </>
  );
}
