import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Scry Internal Documentation</span>,
  project: {
    link: "https://github.com/garunski-co/scry-commons",
  },
  docsRepositoryBase: "https://github.com/garunski-co/scry-commons/tree/main",
  useNextSeoProps() {
    const { asPath } = useRouter();
      return {
        titleTemplate: `${asPath !== "/" ? "%s – " : "" }Scry Internal Documentation`,
      };
  },
  navigation: false,
  footer: {
    text: (
      <span>
         © {new Date().getFullYear()}  Garunski
      </span>
    )
  }
};

export default config;
