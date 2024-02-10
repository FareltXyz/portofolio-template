/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
    return [
        {
           source: "/portofolio",
           destination: "/",
           permanent: true
         }
       ];
      },
};

export default nextConfig;
