const mix = require('laravel-mix');

mix
  .sass('src/_assets/css/main.scss', 'dist/assets/css', {
    sassOptions: {
      includePaths: ['node_modules']
    }
  })
  .setPublicPath('dist/assets');
