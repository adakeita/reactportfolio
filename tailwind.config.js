/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	prefix: "tw-",
	theme: {
		extend: {
			screens: {
				'xs': '540px',
			  },
		},
	},
	corePlugins: {},
	plugins: [],
};
