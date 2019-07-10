import React from "react";

import footerStyles from "../styles/footer.module.scss";

const Footer = () => (
  <footer className={footerStyles.footer}>
    © {new Date().getFullYear()}, Built with
            {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer;