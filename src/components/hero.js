import React from "react";
import { Link } from 'react-scroll';
import data from '../data/hero.json';

const Hero = ({isBg}) => {
    const { herov1 } = data;
    const scrollToContact = () => {
        // Replace "contact" with the ID of the contact section
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section id='hero' 
                 className={`hero hero__padding overflow-hidden position-relative
                 ${isBg === "yes" ? "bg-one" : ""}`}>
                <div className="circle x1"></div>
                <div className="circle x2"></div>
                <div className="circle x3"></div>
                <div className="circle x4"></div>
                <div className="circle x5"></div>
                <div className="circle x6"></div>
                <div className="circle x7"></div>
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 m-0px-b md-m-30px-b">
                            <div className="hero__content position-relative">
                                <div className="badge-text mb-2 text-uppercase">
                                    {herov1.subtitle}
                                </div>
                                <h1 className="display-4 mb-4 text-capitalize light-bg hero__text">{herov1.title}</h1>
                                <p className="text-muted mb-5 fs-5">{herov1.description}</p>
                                <div className="input-group">
                                    {/* Use the Link component to scroll to the contact section */}
                                    <Link to="contact" smooth={true} duration={500}>
                                        <button type="button" className="button button__primary" onClick={scrollToContact}>
                                            <span>Get Started</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="hero__images text-center">
                                <img className="img-fluid" src={herov1.image} alt=""/>
                                <div className="hero__images--badge">
                                    <span>
                                        <span className="hero__images--badge--text1">
                                            {herov1.tagTitle}
                                        </span>
                                        <span className="hero__images--badge--text2">
                                            {herov1.tagText}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Hero;
