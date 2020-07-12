import React from "react";

import avatarImage from "../../assets/avatar.png";
import styles from "./avatarStyles.module.css";

const Avatar = () => {
  return (
    <div>
      <img src={avatarImage} className={styles.avatarImg} alt="user-avatar" />
    </div>
  );
};

export default Avatar;
