import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trang này thuần tĩnh: không server action, không route handler, không
  // next/image. Xuất ra HTML tĩnh để host ở đâu cũng được, không cần chạy
  // tiến trình Node.
  output: "export",
};

export default nextConfig;
