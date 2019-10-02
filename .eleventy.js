const Nunjucks = require('nunjucks');
const IncludeWithNunjucksExtension = require('./lib/nunjucks-include-with');

module.exports = function(config) {
  const nunjucksEnv = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader('site/_includes', {
      noCache: true
    })
  );

  const includeWith = new IncludeWithNunjucksExtension({
    nunjucksEnv,
    tagName: 'component'
  });

  nunjucksEnv.addExtension('component', includeWith);

  config.setLibrary('njk', nunjucksEnv);

  config.addFilter('findBySlug', (items, slug) =>
    items.find(item => item.fileSlug === slug)
  );

  config.addFilter('isString', target => typeof target === 'string');

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
