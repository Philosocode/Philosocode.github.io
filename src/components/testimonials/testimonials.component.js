import React, { useState } from "react";
import Carousel, { Dots } from '@brainhubeu/react-carousel';

import TestimonialCard from "./testimonial-card.component";
import SectionHeader from "../shared/section-header.component";

const Testimonials = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);

  const robertText = `We feel absolutely blessed to have met Tam in the early stages of relaunching Politik™. He is a gifted, intuitive, reliable and responsive web designer and all-around terrific human being. Watch out for this one.`;

  const darronText = `Tam did a fantastic job designing our company website. He was very professional, skilled, and easy to work with. We highly recommend him if you're looking for any development or design services!`;

  function handleChange(value) {
    setCarouselIdx(value);
  }

  function renderThumbnails() {
    return [
      <div className={`c-testimonial__dot ${carouselIdx === 0 && "is-selected"}`} />,
      <div className={`c-testimonial__dot ${carouselIdx === 1 && "is-selected"}`} />
    ];
  }

  return (
    <section className="o-section o-section--black c-testimonial__section" id="testimonials">
      <SectionHeader color="red">Testimonials</SectionHeader>
      
      <div className="c-testimonial__content" data-aos="fade-right" data-aos-offset={400}>
        <Carousel value={carouselIdx} onChange={handleChange}>
          <TestimonialCard
            person="Robert Brennan Hart"
            position="Founder and Executive Director at Politik™"
            text={robertText}
          />
          <TestimonialCard
            person="Darron Ta"
            position="Director & Co-Founder at 3 Takes or Less*"
            text={darronText}
          />
        </Carousel>
        <Dots number={4} value={carouselIdx} onChange={handleChange} thumbnails={renderThumbnails()} />
      </div>
    </section>
  );
 };

export default Testimonials;