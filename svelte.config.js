import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),
    appDir: "app",
    prerender: {
      default: true
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    routes: (filepath) => ![
      // default config
      /(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/,

      // exclude files inside directories named "components"
      /components\//
    ].some(regex => regex.test(filepath)),
  }
};

export default config;