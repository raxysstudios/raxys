import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const base = process.env.NODE_ENV === 'development' ? undefined : '/raxys';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		paths: {
			base,
			assets: base
		},
		adapter: adapter()
	}
};

export default config;
