const path = require('path');

module.exports = {
  // Các cấu hình khác của webpack
  module: {
    rules: [
      {
        test: /mapbox-gl-csp-worker.js$/,
        loader: 'worker-loader',
        options: {
          // Các tùy chọn của worker-loader
        },
      },
      // Các rules khác của bạn
    ],
  },
  resolve: {
    alias: {
      'mapbox-gl$': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js'),
    },
  },
};