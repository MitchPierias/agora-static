import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
// Components
import Header from "./header";

const Layout = ({ children }) => (
  <StaticQuery query={metaQuery} render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} logo={data.file.childImageSharp.fixed}/>
        <main>
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const metaQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }

    file(relativePath: { eq: "icons/64x64.png" }) {
      childImageSharp {
        fixed(height:32) {
          width
          height
          src
        } 
      } 
    }
  }
`

export default Layout
