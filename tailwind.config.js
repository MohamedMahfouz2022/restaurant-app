/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
	"./pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./components/**/*.{js,ts,jsx,tsx,mdx}",
	"./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	},
	colors: {
		body: '#e5e5e5',
		white: '#fff',
		grey: '#888888',
		pink: '#ffa5a5',
		outline: '#f1f1f1',
		green: { DEFAULT: '#539592', hover: '#40807d' },
		black: { DEFAULT: '#273029', heavy: '#1b211c' },
		orange: { DEFAULT: '#f2994a', hover: '#da863c' },
	},
	extend: {
		fontFamily: {
			lora: ['var(--font-lora)', '(sans-serif)'],
			poppins: ['var(--font-poppins)', '(sans-serif)']
		},
		backgroundImage: {
			hero: 'url(/hero/bg.png)',
			menu: 'url(/menu/bg.png)',
			reservation: 'url(/reservation/bg.png)',
			footer: 'url(/footer/bg.png)',
		},
		boxShadow: {
			primary: '40px 4px 40px 0px rgba(68, 68, 68, 0.25)'
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		}
	}
};
export const plugins = [require("tailwindcss-animate")];
