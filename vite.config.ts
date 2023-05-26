import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			"CMAX_logo_darkblue-16.png": "/static/CMAX_logo_darkblue-16.png",
			"CMAX_logo_darkblue-32.png": "/static/CMAX_logo_darkblue-32.png",
			"CMAX_logo_darkblue-64.png": "/static/CMAX_logo_darkblue-64.png",
			"CMAX_logo_darkblue-96.png": "/static/CMAX_logo_darkblue-96.png",
			"CMAX_logo_darkblue-128.png": "/static/CMAX_logo_darkblue-128.png",
			"CMAX_logo_darkblue-256.png": "/static/CMAX_logo_darkblue-256.png",
			"CMAX_logo_darkblue-512.png": "/static/CMAX_logo_darkblue-512.png"
		}
	}
});
