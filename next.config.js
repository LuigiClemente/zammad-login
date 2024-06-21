const { withContentlayer } = require('next-contentlayer')
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
 
  images: {
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
   
    ],
  },
};

module.exports = withContentlayer(withNextIntl(nextConfig))

// const getNextIntl =  ()=> withContentlayer(withNextIntl(nextConfig));
// module.exports = () => {
//   const plugins = [withContentlayer, withBundleAnalyzer ,getNextIntl ]
//   return plugins.reduce((acc, next) => next(acc), {
//     reactStrictMode: true,
//     pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
//     eslint: {
//       dirs: ['app', 'components', 'layouts', 'scripts'],
//     },
   
   
   
//   })
// }
