export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addPassthroughCopy({ 'public': '/' });
  eleventyConfig.addWatchTarget('src/styles/');

  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || '/',
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist'
    },
    templateFormats: ['njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
}
