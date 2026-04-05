import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Avoid picking up a parent folder lockfile (e.g. user home) as the workspace root.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
