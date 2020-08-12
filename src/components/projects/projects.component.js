import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ProjectBox from "./project-box.component";
import SectionHeader from "../shared/section-header.component";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      yggX: file(relativePath: { eq: "yggx.jpg" }) { ...fluidImage }
      lilac: file(relativePath: { eq: "lilac.jpg" }) { ...fluidImage }
      philosocode: file(relativePath: { eq: "philosocode.jpg" }) { ...fluidImage }
      fraser: file(relativePath: { eq: "fraser.jpg" }) { ...fluidImage }
    }
  `);

  const { lilac, philosocode, fraser, yggX } = data;
  const projectsData = [
    {
      title: "Child Care Center Site",
      imageFluid: fraser.childImageSharp.fluid,
      description: "Website for Fraser Community Child Care Center & Out of School Care. Built using Gatsby & Contentful CMS.",
      url: "https://frasercommunitychildcarecenter.com"
    },
    {
      title: "Yggdrasil (WIP)",
      imageFluid: yggX.childImageSharp.fluid,
      description: "Tool to help students and lifelong learners optimize their studying.",
      url: "https://yggx.netlify.app"
    },
    {
      title: "Philosocode",
      imageFluid: philosocode.childImageSharp.fluid,
      description: "Programming blog where I post computer science & web development tutorials.",
      url: "https://philosocode.com"
    },
    {
      title: "Lilac",
      imageFluid: lilac.childImageSharp.fluid,
      description: "Simple landing page and writing app. Built for a 48 hour interview take-home project.",
      url: "https://tamxle.com/lilac"
    },
  ];

  return (
    <section className="o-grid o-section o-section--dark" id="projects">
      <div className="o-grid__item o-grid__item--center">
        <SectionHeader color="grey" alignment="left">Projects</SectionHeader>
      </div>
      <div className="c-project__grid">
        {
          projectsData.map(({ description, imageFluid, title, url }, idx) => (
            <ProjectBox
              key={title}
              description={description}
              idx={idx}
              imageFluid={imageFluid}
              title={title}
              url={url}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Projects;