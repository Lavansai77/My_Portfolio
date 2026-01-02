const repo = "My_Portfolio"; // Update this to match your GitHub repo name exactly
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

module.exports = nextConfig;