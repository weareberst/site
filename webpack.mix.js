const mix = require('laravel-mix');
require('laravel-mix-imagemin');

mix
  .js('site/_assets/js/main.js', 'dist/js')
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
