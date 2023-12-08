import "./portfolio.css";

import IMG1 from "../../assets/INR-CLUB.png";
import IMG2 from "../../assets/RentoMojo.jpeg";
import IMG3 from "../../assets/Paint-ku.png";
import IMG4 from "../../assets/Covid-19 Project.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Hotel Booking Website",
      img: IMG1,
      description:
        "INRClub is intended for anyone looking to book a hotel room, whether for business or leisure.",
      technologies: "Html | CSS | Javascript",
      link: "https://inrclub.netlify.app/",
      github: "https://github.com/badrisinghoo7/INRClub",
    },
    // {
    //   id: 2,
    //   title: "Covid-19 Tracking App",
    //   // img: IMG4,
    //   description:
    //     "The COVID Tracking Project collects and publishes the most complete testing data available for all areas of the world.",
    //   technologies: "React | Redux",
    //   link: "https://covid-19-tracker-weld-nu.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
    // },
    {
      id: 3,
      title: "RentoMojo Online Rental Platform",
      img: IMG2,
      description:
        "RentoMojo is an online rental platform that provides furniture, appliances and electronics (mobiles, laptops) on a monthly rental basis.",
      technologies: "React | Redux | Chakra UI",
      link: "https://elegant-banoffee-7a39a4.netlify.app/",
      github: "https://github.com/badrisinghoo7/-scared-note-9891",
    },
    {
      id: 4,
      title: "PaintKu Online Painting Platform",
      img: IMG3,
      description:
        "PaintKu. is basically E-Commerce which allows user to buy Paintings from online store..",
      technologies: "Html | CSS | JavaScript | React | Redux | Chakra UI",
      link: "https://paintku.vercel.app/",
      github: "https://github.com/badrisinghoo7/loud-weight-1875",
    },
    // {
    //   id: 5,
    //   title: "Jokes Project with Typescript",
    //   // img: IMG5,
    //   description:
    //     "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
    //   technologies: "Html | Styled-components | Typescript",
    //   link: "https://jokes-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Joke-App",
    // },
    {
      id: 6,
      title: "RentoMojo Online Rental Platform",
      img: IMG2,
      description:
        "RentoMojo is an online rental platform that provides furniture, appliances and electronics (mobiles, laptops) on a monthly rental basis.",
      technologies: "React | Redux | Chakra UI",
      link: "https://elegant-banoffee-7a39a4.netlify.app/",
      github: "https://github.com/badrisinghoo7/-scared-note-9891",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
