/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Head = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  );

  const { title, description, keywords, author } = site.siteMetadata;

  return (
    <Helmet defer={false}>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title itemProp="name" lang="en">{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tamxle.com" />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en" />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://tamxle.com" />
      <meta name="twitter:site" content={author} />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default Head;
