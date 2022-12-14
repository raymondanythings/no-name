/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			transitionProperty: {
				width: 'max-width'
			},
			backgroundImage: {
				main: 'url("https://wallpaperaccess.com/full/57166.jpg")'
			},
			screens: {
				default: '620px'
			},
			colors: {
				mainTeal: '#4f7474'
			}
		}
	},
	plugins: []
}
