import React from "react";

import Avatar from "../Avatar/index";
import SocialLinks from "../SocialLinks/index";

const Info = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Avatar />
      <div>
        <h1>Hi, I'm Sajin 👋</h1>
        <h3>Fullstack Developer 👨‍💻</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Info;
