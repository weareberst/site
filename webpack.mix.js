const mix = require('laravel-mix');
require('laravel-mix-imagemin');

mix
  .sass('site/_assets/css/main.scss', 'dist/css', {
    sassOptions: {
      includePaths: ['node_modules']
    }
  })
  .imagemin({
    from: 'img/*',
    context: 'site/_assets/'
  })
  .setPublicPath('dist');
