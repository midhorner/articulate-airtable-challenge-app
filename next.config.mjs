/** @type {import('next').NextConfig} */
// From the Chakra documentation
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
      }
};

export default nextConfig;

