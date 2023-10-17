import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Scry Internal Documentation</span>,
  project: {
    link: "https://github.com/garunski-co/scry-commons",
  },
  docsRepositoryBase: "https://github.com/garunski-co/scry-commons/tree/main",
  footer: {
    text: "Scry Internal Documentation",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
      return {
        titleTemplate: `${asPath !== "/" ? "%s – " : "" }Scry Internal Documentation"`,
      };
  },
};

export default config;
