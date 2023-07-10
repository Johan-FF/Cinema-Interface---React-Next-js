/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'm.media-amazon.com',
      'es.web.img3.acsta.net',
      'encrypted-tbn0.gstatic.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn2.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/M/**',
      },
      {
        protocol: 'https',  
        hostname: 'es.web.img2.acsta.net',
        port: '',
        pathname: '/c_310_420/pictures/**',
      },
      {
        protocol: 'https',  
        hostname: 'es.web.img3.acsta.net',
        port: '',
        pathname: '/c_310_420/pictures/**',
      },
      {
        protocol: 'https',  
        hostname: 'mx.web.img3.acsta.net',
        port: '',
        pathname: '/c_310_420/pictures/**',
      },
    ],
  },
}

module.exports = nextConfig
