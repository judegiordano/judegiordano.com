module.exports = {
	content: [
		'./src/**/*.{jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./ui/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		fontFamily: {
			'content': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']
		},
		extend: {
			colors: {
				'theme-blue': '#3b82f6',
				'theme-black': '#2f3136',
				'theme-dark-black': '#202225',
				'theme-gray': '#99AAB5',
				'theme-green': '#57F287',
				'theme-yellow': '#FEE75C',
				'theme-red': '#ef4444',
				'theme-purple': '#5865F2',
				'theme-upstash-green': '#00e9a3',
				'theme-rust-orange': '#ef4a00'
			},
		},
		screens: {
			'mobile': { 'max': '522px' },
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['dracula', 'luxury', 'night', 'lofi', 'cupcake', 'garden'],
	},
}
