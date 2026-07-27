<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Màu sắc / theme

Landing page và app PMS (`../pms-mern`) dùng **chung một bảng màu** — hệ Hành
Mộc, màu chủ đạo xanh lục bảo `#0B7A55`. Token nằm ở `src/app/globals.css`
(khối `:root` + khai báo trong `@theme inline`), và là **bản sao** của
`../pms-mern/frontend/src/App.css`.

Quy tắc đầy đủ + số liệu tương phản đã kiểm chứng:
`../pms-mern/docs/12-BRAND-PALETTE.md`. Đọc trước khi đổi màu.

Ngắn gọn:

- Đổi màu ở đây thì phải đổi luôn bên `pms-mern`, nếu không 2 sản phẩm lệch màu.
  Đổi màu chủ đạo còn phải sửa `src/app/layout.tsx` (`export const viewport`),
  `src/app/{favicon.ico,icon.svg,apple-icon.png}` và các file tương ứng bên app.
- Component chỉ dùng token (`bg-primary`, `text-muted`, `bg-chart-avocado`…),
  không hardcode hex.
- Mọi cặp chữ/nền phải đạt WCAG AA (≥ 4.5:1) — tính lại khi thêm màu, đừng đoán.
- Icon sinh từ `../pms-mern/frontend/public/favicon.svg` bằng `sharp`; đừng sửa
  PNG bằng tay. `CasalyIcon` dùng `currentColor`, không chứa màu.
