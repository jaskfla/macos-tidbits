import { IdAttributePlugin } from '@11ty/eleventy';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import footnotes from 'eleventy-plugin-footnotes';
import { minify } from 'html-minifier-terser';

const SOURCE_DIR = 'src';

const staticFiles = ['/images', '/robots.txt', '/scripts', '/style'];

export default (eleventyConfig) => {
	for (const file of staticFiles) {
		eleventyConfig.addPassthroughCopy(`${SOURCE_DIR}${file}`);
	}

	eleventyConfig.addPlugin(footnotes, {
		baseClass: 'footnotes',
		classes: ['flow'],
	});
	eleventyConfig.addPlugin(IdAttributePlugin, {
		selector: 'h2,h3,h4,h5,h6',
	});
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
