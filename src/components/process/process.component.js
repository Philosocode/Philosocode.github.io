import React, { useState } from "react";
import { FaPlay, FaComments, FaTh, FaMagic, FaCode, FaRocket } from "react-icons/fa";
import classNames from "classnames";

import WhyIcons from "./why-icons.component";
import ProcessTab from "./process-tab.component";
import ProcessCard from "./process-card.component";
import SectionHeader from "../shared/section-header.component";

const Process = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const highlightClasses = classNames({
    "c-process__highlight": true,
    "is-first": currentTab === 0,
    "is-second": currentTab === 1,
    "is-third": currentTab === 2,
  });

  function getTabs() {
    const names = ["START", "DESIGN", "CODE"];

    return names.map((name, idx) => (
      <ProcessTab key={name} currentTab={currentTab} setCurrentTab={setCurrentTab} tabId={idx} tabName={name} />
    ));
  }

  function getProcessCards() {
    const cardsData = [
      {
        title: "Initial Prep", icon: FaPlay,
        description: "We'll start by creating a document listing the scope and deliverables for the site. This will help me understand what you're looking for and allow me to tailor my services to suit your needs."
      },
      {
        title: "Brief Chat", icon: FaComments,
        description: "Once the requirements are defined, we'll have a quick call to introduce ourselves. We'll go over the document and make sure we're on the same page about what needs to be done."
      },
      {
        title: "Wireframes", icon: FaTh,
        description: "After we've agreed on deliverables and deadlines, it's time to start working on the site. We'll create wireframes containing the general layout and functionality of the site."
      },
      {
        title: "Design", icon: FaMagic,
        description: "Next, we'll apply some design magic and bring the wireframes to life using colour, images, and typography. We'll create a visual mockup of what the final site will generally look like."
      },
      {
        title: "Code", icon: FaCode,
        description: `With the visuals done, it's time to start programming. This is where I take the mockup and transform it into an interactive website that lives on the web.`
      },
      {
        title: "Launch", icon: FaRocket,
        description: "With the site created, there's only one thing left to do: launch it! I'll teach you how to use your awesome new site. You can sit back and relax as I handle all the heavy lifting."
      },
    ];

    return cardsData.map((data, idx) => (
      <ProcessCard
        key={data.title}
        description={data.description}
        FaIcon={data.icon}
        isRight={idx % 2 !== 0}
        stepNum={idx + 1}
        title={data.title}
      />
    ));
  }

  const processCards = getProcessCards();
  
  return (
    <section className="o-grid o-section o-section--black" id="process">
      <div className="o-grid__item--wide">
        <SectionHeader color="red" alignment="left">Process</SectionHeader>
      </div>
      <div className="c-process__content">
        <WhyIcons />
        
        <div className="c-process__tabs" data-aos="fade-up" data-aos-offset={300}>
          { getTabs() }
          <div className="c-process__bar"></div>
          <div className={highlightClasses}></div>
        </div>
        <div data-aos="fade-up" data-aos-offset={300}>
          { processCards[currentTab * 2] }
          { processCards[currentTab * 2 + 1] }
        </div>
      </div>
    </section>
  )
};

export default Process;