import Header from "./header"
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <header className={styles.header}>
          <Header siteTitle={data.site.siteMetadata.title} />
        </header>
        <main className={styles.content}>{children}</main>
     </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
