import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "m.media-amazon.com",
      "play-lh.googleusercontent.com",
      "image.similarpng.com",
      "ds055uzetaobb.cloudfront.net",
    ],
  },
  env: {
    API_URL: "http://localhost:3001",
    PRODUCTION_API_URL: "https://ethrift-server.onrender.com",
    DB_URI: "mongodb+srv://Temuulen:Temuuka123@cluster0.ikgbq1w.mongodb.net/",
  },
};
export default withNextIntl(nextConfig);
