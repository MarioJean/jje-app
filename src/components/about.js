import React from "react";
import { Accordion } from "react-bootstrap";
import data from '../data/about.json';

const About = ({ isBg }) => {
    const { aboutv2 } = data;

    return (
        <section
         id='about'
         className={`section-padding aboutv2 ${isBg === "yes" ? "bg-one" : ""}`}
         >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                        <div className="section-title-center text-center">
                            <span>{aboutv2.title}</span>
                            <h2 className="display-6 dark-bg">{aboutv2.subtitle}</h2>
                            <div className="section-divider divider-triangle"></div>
                        </div>
                    </div>
                </div>
                <div className="row gx-5">

                    <div
                     className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center align-items-center"
                     data-aos='fade-right'
                     data-aos-duration='1000'
                     data-aos-delay='200'
                    >
                        <img src={aboutv2.image} alt='' className="img-fluid d-block"/>
                    </div>

                    <div
                     className="col-lg-6 acc__card"
                     data-aos='fade-left'
                     data-aos-duration='1000'
                     data-aos-delay='200'
                    >
                    <Accordion className="accordion-flush faqs-accordion mt-4 mt-lg-0">
                        
                            <Accordion.Item>
                                <Accordion.Body>
                                    <p className="accordion-body text-secondary">{aboutv2.description1}</p>
                                    <p className="accordion-body text-secondary">{aboutv2.description2}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                    
                    </Accordion>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;