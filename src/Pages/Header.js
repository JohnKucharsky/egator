import React from "react";
import Cta from "../Components/Cta";
import me from "../assets/me.png";
import Socials from "../Components/Socials";

export default function Header() {
  return (
    <header id="#home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>John Doe</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <Socials />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
