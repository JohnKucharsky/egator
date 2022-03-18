import React from "react";
import portfolio1 from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";

export default function Portfolio() {
  const data = [
    {
      id: 1,
      image: portfolio1,
      title: "Crypto Currency Dashboard & Financial Visualization",
      github: "http://github.com",
      demo: "https://dribbble.com",
    },
    {
      id: 2,
      image: portfolio2,
      title: "Crypto Currency Dashboard & Financial Visualization",
      github: "http://github.com",
      demo: "https://dribbble.com",
    },
    {
      id: 3,
      image: portfolio2,
      title: "Crypto Currency Dashboard & Financial Visualization",
      github: "http://github.com",
      demo: "https://dribbble.com",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((i) => (
          <article key={i.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={i.image} alt="" />
            </div>
            <h3>{i.title}</h3>
            <div className="portfolio_item-cta">
              <a href={i.github} className="btn">
                Github
              </a>
              <a href={i.demo} className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
