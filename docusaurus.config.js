const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import("@docusaurus/types").Config} */
const config = {
	title: "TomatenKuchen Docs",
	favicon: "img/favicon.ico",
	url: "https://docs.tomatenkuchen.eu",
	baseUrl: "/",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en", "de"]
	},

	plugins: [
		[
		  	require.resolve("@cmfcmf/docusaurus-search-local"),
			{
				language: ["en", "de"],
				indexDocSidebarParentCategories: 2,
				indexBlog: false
			}
		],
		[
			"@docusaurus/plugin-pwa",
			{
				pwaHead: [
					{
						tagName: "link",
						rel: "icon",
						href: "/img/icon-192x192.png"
					},{
						tagName: "link",
						rel: "manifest",
						href: "/manifest.json"
					},{
						tagName: "meta",
						name: "apple-mobile-web-app-capable",
						content: "yes"
					},{
						tagName: "meta",
						name: "theme-color",
						content: "#ED8721"
					},{
						tagName: "meta",
						name: "apple-mobile-web-app-status-bar-style",
						content: "#ED8721"
					},{
						tagName: "link",
						rel: "apple-touch-icon",
						href: "/img/icon-152x152.png"
					},{
						tagName: "link",
						rel: "mask-icon",
						href: "/img/icon-192x192.png",
						color: "#ED8721"
					},{
						tagName: "meta",
						name: "msapplication-TileImage",
						content: "/img/icon-192x192.png"
					},{
						tagName: "meta",
						name: "msapplication-TileColor",
						content: "#ED8721"
					}
				]
			}
		]
	],

	presets: [
		[
		"classic",
		/** @type {import("@docusaurus/preset-classic").Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					routeBasePath: "/",
					editUrl: "https://github.com/DEVTomatoCake/tk-docs/tree/master",
					editLocalizedFiles: true
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css")
				}
			})
		]
	],

	themeConfig:
		/** @type {import("@docusaurus/preset-classic").ThemeConfig} */
		({
		//image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "TomatenKuchen Docs",
			logo: {
				alt: "TomatenKuchen Logo",
				src: "img/favicon.ico"
			},
			hideOnScroll: true,
			items: [
				{
					href: "https://tomatenkuchen.eu",
					"aria-label": "Bot website"
				},{
					type: "localeDropdown",
					position: "right"
				}
			]
		},
		colorMode: {
			respectPrefersColorScheme: true
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Bot",
					items: [
						{
							label: "Website",
							href: "https://tomatenkuchen.eu",
						},{
							label: "Invite",
							href: "https://tomatenkuchen.eu/invite",
						}
					]
				},{
					title: "Community",
					items: [
						{
							label: "Discord",
							href: "https://tomatenkuchen.eu/discord",
						},{
							label: "GitHub",
							href: "https://github.com/DEVTomatoCake/tk-docs"
						},{
							label: "Weblate",
							href: "https://translate.tomatenkuchen.eu/engage/tomatenkuchen/"
						}
					]
				}
			],
			copyright: "Copyright © " + new Date().getFullYear() + " TomatenKuchen. Built with Docusaurus."
		},
		prism: {
			defaultLanguage: "javascript",
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme
		}
	})
}

module.exports = config