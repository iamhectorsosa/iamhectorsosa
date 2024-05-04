/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/iamhectorsosa",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/iamhectorsosa",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/iamhectorsosa",
        permanent: true,
      },
      {
        source: "/email",
        destination: "mailto:hello@hectorsosa.me",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
