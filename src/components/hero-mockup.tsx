import { CheckCircle2Icon, SparklesIcon } from "lucide-react";

const rows = [
  { room: "P.101 — Deluxe", guest: "Nguyễn Văn A", status: "Đang ở", tone: "bg-chart-blue" },
  { room: "P.102 — Superior", guest: "Trần Thị B", status: "Trống", tone: "bg-chart-green" },
  { room: "P.103 — Suite", guest: "Lê Văn C", status: "Dọn phòng", tone: "bg-chart-amber" },
  { room: "P.104 — Deluxe", guest: "Phạm Thị D", status: "Đang ở", tone: "bg-chart-blue" },
];

/** Decorative, static dashboard mockup for the hero — not a real screenshot. */
export function HeroMockup() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl border border-card-border bg-card shadow-xl">
        <div className="flex items-center gap-2 border-b border-card-border bg-background px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-chart-red/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-chart-amber/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-chart-green/60" />
          <span className="ml-3 text-xs font-medium text-muted">app.casaly.vn</span>
        </div>
        <div className="grid grid-cols-1 divide-y divide-card-border md:grid-cols-[1fr_auto]">
          {rows.map((row) => (
            <div key={row.room} className="flex items-center justify-between gap-4 px-5 py-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${row.tone}`} />
                <div>
                  <p className="text-sm font-semibold">{row.room}</p>
                  <p className="text-xs text-muted">{row.guest}</p>
                </div>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -left-4 top-10 hidden w-52 rounded-lg border border-card-border bg-card p-4 shadow-lg md:block">
        <div className="flex items-center gap-2 text-chart-green">
          <CheckCircle2Icon className="h-4 w-4" />
          <p className="text-xs font-bold">Đồng bộ Airbnb thành công</p>
        </div>
        <p className="mt-1 text-xs text-muted">3 đặt phòng mới vừa được thêm</p>
      </div>

      <div className="absolute -right-4 bottom-10 hidden w-48 rounded-lg border border-card-border bg-card p-4 shadow-lg md:block">
        <div className="flex items-center gap-2 text-primary">
          <SparklesIcon className="h-4 w-4" />
          <p className="text-xs font-bold">Doanh thu tháng này</p>
        </div>
        <p className="mt-1 text-lg font-extrabold">128.400.000 ₫</p>
      </div>
    </div>
  );
}
