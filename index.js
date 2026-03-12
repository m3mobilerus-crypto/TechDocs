const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://m3mobile-manual.refined.site',
  changeOrigin: true,
  followRedirects: true,
  secure: true,
  on: {
    proxyReq: (proxyReq) => {
      proxyReq.setHeader('Host', 'm3mobile-manual.refined.site');
    }
  }
}));

app.listen(process.env.PORT || 8080, '0.0.0.0');
