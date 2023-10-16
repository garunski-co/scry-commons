import codeImport from "remark-code-import";
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    remarkPlugins: [codeImport],
  },
})({
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/scry-commons" : "",
  images: { unoptimized: true },
});

export default withNextra;
