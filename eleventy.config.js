import baseline, {
  config as baselineConfig,
} from "@apleasantview/eleventy-plugin-baseline";

const settings = {
  title: "css profile",
  url: process.env.URL,
  defaultLanguage: "en",
  head: {
		link: [{ rel: 'stylesheet', href: '/assets/css/index.css' }],
		meta: [{ name: 'color-scheme', content: 'light dark' }],
		// Pre-paint: honour a saved theme before the body renders, so no flash.
		script: [
			{ content: "var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;" }
		]
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
