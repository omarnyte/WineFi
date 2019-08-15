import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "../styles/header.module.css"

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    <h1 className={styles.title} data-testid="site-title">
      <Link className={styles.siteTitleLink} to="/">{siteTitle}</Link>
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
