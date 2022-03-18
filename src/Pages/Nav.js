import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage,
} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";

export default function Nav() {
  const [active, setActive] = useState("#home");

  document.addEventListener("scroll", function (e) {
    let scrollPosition = window.scrollY;
    let height = window.innerHeight;
    if (scrollPosition < height) {
      setActive("#home");
    } else if (scrollPosition < height * 2.1) {
      setActive("#about");
    } else if (scrollPosition < height * 3.2) {
      setActive("#experience");
    } else if (scrollPosition < height * 6) {
      setActive("#services");
    } else {
      setActive("#contact");
    }
  });
  return (
    <nav>
      <a className={active === "#home" ? "active" : ""} href="#home">
        <AiOutlineHome />
      </a>
      <a className={active === "#about" ? "active" : ""} href="#about">
        <AiOutlineUser />
      </a>
      <a
        className={active === "#experience" ? "active" : ""}
        href="#experience"
      >
        <AiOutlineBook />
      </a>
      <a className={active === "#services" ? "active" : ""} href="#services">
        <RiServiceLine />
      </a>
      <a className={active === "#contact" ? "active" : ""} href="#contact">
        <AiOutlineMessage />
      </a>
    </nav>
  );
}
