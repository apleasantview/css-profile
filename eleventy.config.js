import baseline, {
  config as baselineConfig,
} from "@apleasantview/eleventy-plugin-baseline";

const settings = {
  title: "css-profile",
  url: process.env.URL,
  defaultLanguage: "en",
  head: {
		link: [{ rel: 'stylesheet', href: '/assets/css/index.css' }],
		meta: [{ name: 'color-scheme', content: 'light dark' }]
	},
  seo: {}
};

export default async function (eleventyConfig) {
  await eleventyConfig.addPlugin(
    baseline(settings, {
      head: {
        showGenerator: true,
      },
    }),
  );

  eleventyConfig.addGlobalData('settings', settings);
}

export const config = baselineConfig;
