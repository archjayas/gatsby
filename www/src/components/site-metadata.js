import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import gatsbyIcon from "../assets/gatsby-icon.png"

const SiteMetadata = ({ pathname }) => {
  const {
    data: {
      site: {
        siteMetadata: { siteUrl, title, twitter },
      },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          twitter
        }
      }
    }
  `)

  return (
    <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang="en" />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={`${siteUrl}${gatsbyIcon}`} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
    </Helmet>
  )
}

export default SiteMetadata
