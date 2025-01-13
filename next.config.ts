import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // Use `true` para redirecionamento permanente (301), `false` para temporário (302)
      },
    ];
  },
};

export default nextConfig;
