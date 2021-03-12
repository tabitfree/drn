import React from "react";
import { Container } from "react-bootstrap";
import CommunityCarouselItem from "../content/CommunityCarouselItem";

const ExcellentCommunity = (props) => {
  const colors = props.colors;
  const cards = [
    {
      icon: "./images/ctp-logo.jpg",
      text:
        "CTP is a full-service commercial real estate developer. We build, manage and deliver custom-built, high-tech business parks throughout Central and Eastern Europe.",
      website: "www.ctp.eu",
    },
    {
      icon: "./images/wework-logo.png",
      text:
        "WeWork is the world leader in providing the space, community and services to businesses of all sizes, which they need to run and grow their business with over 542,000 members worldwide.",
      website: "www.wework.com",
    },
    {
      icon: "./images/gzs-logo.png",
      text:
        "Zdeněk Sklenář Gallery, founded in the mid-1990s by gallerist, patron and art collector Zdeněk Sklenář, nephew of the leading Czech painter, graphic artist and illustrator Zdeněk Sklenář (1910–1986), stands by the creation of the modern Czech art market.",
      website: "www.zdeneksklenar.cz",
    },
    {
      icon: "./images/zsf-logo.svg",
      text:
        "The Zdeněk Sklenář Foundation aims to systematically preserve and develop the legacy of the leading Czech artist of the 20th century - painter, graphic artist and illustrator Zdeněk Sklenář (1910–1986).",
      website: "www.zdeneksklenar.cz",
    },
    {
      icon: "./images/liva-logo.png",
      text:
        "Duhovka Group has created a unique education system for children between 1.5 to 19 years of age, which is based on a bilingual Czech-English environment and the Montessori educational method.",
      website: "www.liva.org",
    },
    {
      icon: "./images/REPLACE THIS",
      text:
        "Creating energy and living by the vision in which cities are much more self-sufficient and people live sustainably, and thanks to new technologies, they make much better use of energy from natural resources.",
      website: "www.nanoenergies.cz",
    },
    {
      icon: "./images/losteria-logo.png",
      text:
        "Once the doors open at L’Osteria, you will feel like you are in a typical Italian osteria, where people get together to eat well and enjoy the company of families, friends, couples, old and young.",
      website: "www.losteria.net",
    },
    {
      icon: "./images/greengo-logo.png",
      text:
        "GreenGo is a new shared 100% electric car service in Prague. With GreenGo you will drive with freedom even without having your own car.",
      website: "www.greengo.com",
    },
    {
      icon: "./images/aether-logo.svg",
      text:
        "Aether Clinic is a modern clinic of aesthetic medicine, beauty and health with premium service and affordable prices. It offers more than 300 services for women and men, including exclusive laser treatments, anti-age therapy, facial harmonization and much more.",
      website: "www.aetherclinic.com",
    },
    {
      icon: "./images/urarasku-logo.png",
      text:
        "A pub of Pilsner beer awarded the highest mark of quality - the Star of Brewers - awaits you with a carefully selected offer of drinks and farm specialties. This cozy wine pub is well-known for its friendly atmosphere.",
      website: "www.urarasku.cz",
    },
  ];

  return (
    <Container>
      <div className="w-50">
        <h2 style={{ color: colors.main }}>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div className="exc-cards-container d-flex flex-wrap">
        {cards.map((card, idx) => {
          return (
            <CommunityCarouselItem
              icon={card.icon}
              text={card.text}
              website={card.website}
              colors={colors}
              id={idx}
              key={idx}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ExcellentCommunity;
