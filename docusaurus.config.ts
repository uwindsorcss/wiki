import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    baseUrl: "/wiki/",
    title: "UWindsor Computer Science Wiki",
    tagline: "Courtesy of the University of Windsor Computer Science Society",
    url: "https://uwindsorcss.github.io",
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon-32x32.png",
    organizationName: "UWindsorCSS", // Usually your GitHub org/user name.
    projectName: "wiki", // Usually your repo name.
    future: {
        experimental_faster: {
            swcJsLoader: true,
            swcJsMinimizer: true,
            swcHtmlMinimizer: true,
            lightningCssMinimizer: true,
            rspackBundler: true,
            mdxCrossCompilerCache: true,
        },
    },
    themeConfig: {
        defaultMode: "dark",
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            style: "dark",
            title: "",
            logo: {
                alt: "CSS Logo",
                src: "img/css-logo.png",
            },
            items: [
                {
                    to: "/",
                    activeBaseRegex: "^/wiki/$",
                    label: "Home",
                    position: "left",
                },
                {
                    to: "courses/",
                    activeBasePath: "courses",
                    label: "Courses",
                    position: "left",
                },
                {
                    to: "careers/",
                    activeBasePath: "careers",
                    label: "Careers",
                    position: "left",
                },
                {
                    to: "academics/",
                    activeBasePath: "academics",
                    label: "Academics",
                    position: "left",
                },
                {
                    to: "resources/",
                    activeBasePath: "resources",
                    label: "Resources",
                    position: "left",
                },
                {
                    to: "css/",
                    activeBasePath: "css",
                    label: "CSS",
                    position: "left",
                },
                {
                    to: "newsletter/",
                    activeBasePath: "newsletter",
                    label: "Newsletter",
                    position: "left",
                },
                {
                    href: "https://css.uwindsor.ca",
                    label: "Hub",
                    position: "right",
                },
                {
                    href: "https://github.com/UWindsorCSS/Wiki",
                    position: "right",
                    className: "header-github-link",
                    "aria-label": "GitHub repository",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Resources",
                    items: [
                        {
                            label: "Style Guide",
                            to: "resources/guides/style",
                        },
                        {
                            label: "CS Help Site",
                            href: "https://help.cs.uwindsor.ca",
                        },
                        {
                            label: "Contribute",
                            href: "https://github.com/uwindsorcss/wiki",
                        },
                        {
                            label: "How to Navigate the Wiki",
                            to: "resources/guides/navigation-guide",
                        },
                    ],
                },
                {
                    /* TDB: Replace this with something else*/
                    title: "Community",
                    items: [
                        {
                            label: "Discord",
                            href: "https://css.uwindsor.ca/discord",
                        },
                        {
                            label: "Github",
                            href: "https://github.com/UWindsorCSS",
                        },
                        {
                            label: "Hub",
                            href: "https://css.uwindsor.ca",
                        },
                    ],
                },
                {
                    title: "Socials",
                    items: [
                        {
                            label: "Instagram",
                            href: "https://www.instagram.com/uwindsorcss/",
                        },
                        {
                            label: "Facebook",
                            href: "https://www.facebook.com/uwindsorcss",
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/UWindsorCSS",
                        },
                        {
                            label: "LinkedIn",
                            href: "https://www.linkedin.com/company/uwindsorcss/",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} University of Windsor Computer Science Society`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: false,
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                indexDocs: false,
                indexBlog: false,
                indexPages: true,
                highlightSearchTermsOnTargetPage: true,
            },
        ],
    ],
    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "plugin-docs-careers",
                path: "careers",
                sidebarPath: require.resolve("./careers/careers-sidebars.js"),
                routeBasePath: "careers",
                editUrl: "https://github.com/UWindsorCSS/Wiki/tree/master/",
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "plugin-docs-courses",
                path: "courses",
                sidebarPath: require.resolve("./courses/courses-sidebars.js"),
                routeBasePath: "courses",
                editUrl: "https://github.com/UWindsorCSS/Wiki/tree/master/",
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "plugin-docs-academics",
                path: "academics",
                sidebarPath: require.resolve(
                    "./academics/academics-sidebars.js"
                ),
                routeBasePath: "academics",
                editUrl: "https://github.com/UWindsorCSS/Wiki/tree/master/",
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "plugin-docs-resources",
                path: "resources",
                sidebarPath: require.resolve(
                    "./resources/resources-sidebars.js"
                ),
                routeBasePath: "resources",
                editUrl: "https://github.com/UWindsorCSS/Wiki/tree/master/",
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "plugin-docs-css",
                path: "css",
                sidebarPath: require.resolve("./css/css-sidebars.js"),
                routeBasePath: "css",
                editUrl: "https://github.com/UWindsorCSS/Wiki/tree/master/",
            },
        ],
        [
            "@docusaurus/plugin-content-blog",
            {
                id: "plugin-blog-newsletter",
                path: "newsletter",
                routeBasePath: "newsletter",
                editUrl: "https://github.com/UWindsorCSS/Wiki/tree/master/",
                onInlineAuthors: "ignore",
                onUntruncatedBlogPosts: "ignore",
            },
        ],
    ],
};

export default config;
