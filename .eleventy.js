const componentsDir = `${__dirname}/src/_components`;

module.exports = function(config) {
  config.addNunjucksShortcode("teaser", require(`${componentsDir}/teaser`));

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk"
  };
};
