/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./build/*.html", // Watch only necessary files
		"./src/**/*.css", // Ensure Tailwind sees your input.css
	],
	theme: {
		extend: {
			'screens': {
				'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
				'tallscreen': { 'raw': '(min-aspect-ratio: 1/2)' },
			}

		},
	},
	plugins: [],
};
