/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      // Basic redirect
      {
        source: '/',
        destination: 'https://youtube.com/live/hOhg7-C0m6o?feature=share',
        permanent: false,
      }
	]
  },
}

export default nextConfig;
