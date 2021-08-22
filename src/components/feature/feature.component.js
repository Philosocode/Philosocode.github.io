import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SectionHeader from "../shared/section-header.component";
import FeatureProject from "./feature-project.component";

const Feature = () => {
  const data = useStaticQuery(graphql`
    query {
      karai: file(relativePath: { eq: "karai.jpg" }) {
        ...fluidImage
      }
      minima: file(relativePath: { eq: "minima.jpg" }) {
        ...fluidImage
      }
      threeTakesOrLess: file(relativePath: { eq: "3tl.jpg" }) {
        ...fluidImage
      }
      workflows: file(relativePath: { eq: "workflows.jpg" }) {
        ...fluidImage
      }
      yggdrasil: file(relativePath: { eq: "yggdrasil.jpg" }) {
        ...fluidImage
      }
      zephyr: file(relativePath: { eq: "zephyr.jpg" }) {
        ...fluidImage
      }
    }
  `);

  const {
    karai,
    minima,
    threeTakesOrLess,
    workflows,
    yggdrasil,
    zephyr,
  } = data;
  const projectsData = [
    {
      title: "Workflows (WIP)",
      imageFluid: workflows.childImageSharp.fluid,
      description: "Workflows to help you learn and study better.",
      url: "https://ygg-workflows.netlify.app",
      technologies: ["React", "Chakra UI"],
    },
    {
      title: "Notebooks",
      imageFluid: yggdrasil.childImageSharp.fluid,
      description:
        "Full-stack web app for notetaking and studying. Core features include notes, flashcards, concepts, Pomodoro timer.",
      url: "https://ygg-notebooks.herokuapp.com",
      technologies: ["React", "Express", "Postgres", "Docker"],
    },
    {
      title: "minima",
      imageFluid: minima.childImageSharp.fluid,
      description:
        "Minimal, personal front-end web app built using the YouTube Data API. Users can save videos, channels, and playlists.",
      url: "https://minima-demo.netlify.app",
      technologies: ["React", "Redux", "Firestore"],
    },
    {
      title: "3 Takes or Less",
      imageFluid: threeTakesOrLess.childImageSharp.fluid,
      description: "Website for up-and-coming stunt team based in Edmonton.",
      url: "https://3takesorless.com",
      technologies: ["React", "Gatsby"],
    },
    {
      title: "Karai「花蕾」",
      imageFluid: karai.childImageSharp.fluid,
      description:
        "Web app for studying. Encourages effective studying through metacognitive prompts.",
      url: "https://karai.netlify.app",
      technologies: ["Vue"],
    },
    {
      title: "Zephyr",
      imageFluid: zephyr.childImageSharp.fluid,
      description: "First iteration of my personal website.",
      url: "https://tamxle.com/zephyr",
      technologies: ["HTML", "SCSS", "JavaScript"],
    },
  ];

  return (
    <section className="o-grid o-section o-section--dark" id="featured">
      <div className="o-grid__item--wide">
        <SectionHeader color="red">Featured</SectionHeader>
      </div>
      <div className="c-feature__projects">
        {projectsData.map(
          ({ description, imageFluid, url, technologies, title }, idx) => (
            <FeatureProject
              key={title}
              idx={idx}
              description={description}
              imageFluid={imageFluid}
              url={url}
              technologies={technologies}
              title={title}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Feature;
