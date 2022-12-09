const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["index.html", "./src/js/**/*.js"],
	theme: {
		fontFamily: {
			sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
		},
		fontSize: {
			md: ["1.3125rem", "2.125rem"], //21/34
		},
		spacing: {
			0: "0rem",
			2: "0.125rem",
			12: "0.75rem",
			18: "1.125rem",
			28: "1.75rem",
			30: "1.875rem",
			36: "2.25rem",
			40: "2.5rem",
			42: "2.625rem",
			44: "2.75rem",
			60: "3.75rem",
			px: "1px",
			em: "1em",
			rem: "1rem",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#FFF",
			black: "#000",
			blue: "#27369C",
			yellow: {
				DEFAULT: "#E8E36B",
				light: "#F7F7F2",
			},
			red: "#DF3128",
			grey: {
				DEFAULT: "#343434",
				light: "#D1D1D1",
			},
		},
		extend: {
			height: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
			maxHeight: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
			minHeight: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
		},
	},
};
