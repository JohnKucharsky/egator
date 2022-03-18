import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDribbble,
} from "react-icons/ai";

export default function Socials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com">
        <AiFillGithub />
      </a>
      <a href="https://dribbble.com/">
        <AiOutlineDribbble />
      </a>
    </div>
  );
}
