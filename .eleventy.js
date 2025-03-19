import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import { minify } from 'html-minifier-terser';

const SOURCE_DIR = 'src';

export default (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy(`${SOURCE_DIR}/images`);
	eleventyConfig.addPassthroughCopy(`${SOURCE_DIR}/style`);
	eleventyConfig.addPassthroughCopy(`${SOURCE_DIR}/robots.txt`);

	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addTransform('htmlmin', function (content) {
		return this.page.outputPath?.endsWith('.html')
			? minify(content, {
					collapseWhitespace: true,
					minifyJS: true,
					removeComments: true,
					removeEmptyAttributes: true,
					useShortDoctype: true,
			  })
			: content;
	});

	return {
		dir: {
			input: SOURCE_DIR,
			templateFormats: ['liquid', 'md'],
		},
	};
};
