import React from "react";

import styles from "./footerStyles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>Copyright © 2020 Sajin Sachidanandan</p>
      </div>
    </div>
  );
};

export default Footer;
