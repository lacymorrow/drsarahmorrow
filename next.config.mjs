/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      // Basic redirect
      {
        source: '/watch',
        destination: 'https://youtube.com/live/HXiV7g1Ab2s?feature=share',
        permanent: false,
      }
	]
  },
}

export default nextConfig;
