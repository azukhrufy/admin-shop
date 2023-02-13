/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
	"theme": {
		"screens": {
      
			"sm": "640px",
			"md": "768px",
			"lg": "1024px",
			"xl": "1280px",
			"2xl": "1536px"
		},
		"fontSize": {
			"link-sm": [
				"14px",
				"22px"
			],
			"link-base": [
				"16px",
				"24px"
			],
			"xxs": [
				"10px",
				"16px"
			],
			"xs": [
				"12px",
				"16px"
			],
			"sm": [
				"14px",
				"20px"
			],
			"base": [
				"16px",
				"24px"
			],
			"lg": [
				"18px",
				"28px"
			],
			"xl": [
				"20px",
				"28px"
			],
			"2xl": [
				"24px",
				"32px"
			],
			"3xl": [
				"30px",
				"36px"
			],
			"4xl": [
				"36px",
				"40px"
			],
			"5xl": [
				"48px",
				"1"
			],
			"6xl": [
				"60px",
				"1"
			],
			"7xl": [
				"72px",
				"1"
			],
			"8xl": [
				"96px",
				"1"
			],
			"9xl": [
				"128px",
				"1"
			]
		},
		"colors": {
			"basic": {
				"1": "#141414",
				"2": "#1F1F1F",
				"3": "#262626",
				"4": "#434343",
				"5": "#595959",
				"6": "#8C8C8C",
				"7": "#BFBFBF",
				"8": "#D9D9D9",
				"9": "#F0F0F0",
				"10": "#F5F5F5",
				"11": "#FAFAFA",
				"12": "#FFFFFF"
			},
			"pina": {
				"primary-yellow": "#FFDC00",
			},
			"brand": {
				"deep-ocean": "#007AFF",
				"clear-sky": "#21B1FF",
				"basic": "#D9D9D9",
				"orange": "#FFDC00",
				"grey" : "#F5F7F7",
				"border-grey" : "#E1E1E1",
				"black" : "#292929",
				"text-grey" : "#9E9E9E",
				"text-green" : "#7BCC29",
			},
			"system": {
				"link": "#046CDD",
				"danger": "#EC2E2E",
				"danger-light": "#FFEAEA",
				"warning": "#F0D12C",
				"warning-light": "#FFF9DB",
				"success": "#69E11F",
				"success-light": "#EFFFE4"
			},
			"clean-sky": {
				"1": "#FFFFFF",
				"2": "#00A5FF",
				"3": "#21B1FF",
				"4": "#4DC0FF",
				"5": "#69CAFF",
				"6": "#89D6FF",
				"7": "#A5DFFF",
				"8": "#BAE7FF",
				"9": "#D9F2FF",
				"10": "#EAF8FF",
				"11": "#F2FBFF",
				"12": "#FBFEFF"
			},
			"deep-ocean": {
				"1": "#005EC3",
				"2": "#006ADD",
				"3": "#007AFF",
				"4": "#208BFF",
				"5": "#419CFF",
				"6": "#60ACFF",
				"7": "#89C2FF",
				"8": "#A7D1FF",
				"9": "#C8E2FF",
				"10": "#E1F0FF",
				"11": "#EAF4FF",
				"12": "#F5FAFF"
			}
		},
		"extend": {}
	},
	"plugins": []
}
