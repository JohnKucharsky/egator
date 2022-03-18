import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Services() {
  const data = [
    {
      id: 1,
      icon: <AiOutlineCheckCircle className="service__list-icon" />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      icon: <AiOutlineCheckCircle className="service__list-icon" />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      icon: <AiOutlineCheckCircle className="service__list-icon" />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      icon: <AiOutlineCheckCircle className="service__list-icon" />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  const data2 = [
    {
      id: 7,
      icon: <AiOutlineCheckCircle className="service__list-icon" />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 8,
      icon: <AiOutlineCheckCircle className="service__list-icon" />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 9,
      icon: <AiOutlineCheckCircle className="service__list-icon" />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 10,
      icon: <AiOutlineCheckCircle className="service__list-icon" />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 11,
      icon: <AiOutlineCheckCircle className="service__list-icon" />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            {data.map((i) => (
              <li key={`1${i.id}`}>
                {i.icon}
                <p>{i.text}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            {data2.map((i) => (
              <li key={i.id}>
                {i.icon}
                <p>{i.text}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            {data.map((i) => (
              <li key={i.id}>
                <>{i.icon}</>
                <p>{i.text}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
