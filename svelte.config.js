import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV !== 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		paths: {
			base: production ? '/raxys' : undefined
		},
		adapter: adapter()
	}
};

export default config;
