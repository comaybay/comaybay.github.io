import adapter from '@sveltejs/adapter-static';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: adapter({
      precompress: true
    }),
    appDir: 'app',
    prerender: {
      default: true
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    routes: filepath =>
      ![
        // default config
        /(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/,

        // exclude files inside directories named "components"
        /components(.*)\//
      ].some(regex => regex.test(filepath)),
    vite: {
      resolve: {
        alias: {
          // these are the aliases and paths to them
          src: path.resolve('./src')
        }
      }
    }
  }
};

export default config;
