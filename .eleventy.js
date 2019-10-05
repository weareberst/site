const Nunjucks = require('nunjucks');
const MarkdownIt = require('markdown-it');
const ComponentExtension = require('./lib/nunjucks-component');

module.exports = function(config) {
  // Use customised Markdown library

  const md = MarkdownIt({
    html: true,
    code: false
  });
  config.setLibrary('md', md);

  // Use customised Nunjucks environment

  const nunjucksEnv = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader('site/_includes', {
      noCache: true
    })
  );

  nunjucksEnv.addExtension(
    'component',
    new ComponentExtension({
      nunjucksEnv
    })
  );

  config.setLibrary('njk', nunjucksEnv);

  // Add template filters

  config.addFilter('findBySlug', (items, slug) =>
    items.find(item => item.fileSlug === slug)
  );

  config.addFilter('isString', target => typeof target === 'string');

  config.addFilter('markdown', str => md.render(str));

  config.addFilter('domain', url => {
    return url.indexOf('//') > -1 ? url.split('/')[2] : url.split('/')[0];
  });

  return {
    dir: {
      input: 'site',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
