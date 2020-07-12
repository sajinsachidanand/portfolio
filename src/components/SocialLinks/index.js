import React from "react";
import { FaMedium, FaEnvelope, FaTwitter, FaGithub } from "react-icons/lib/fa";

import styles from "./socialLinksStyles.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <ul>
        <li>
          <a href="mailto:sajinsachidanand@gmail.com">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="https://github.com/sajinsachidanand">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sajin_s">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
