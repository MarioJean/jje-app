import React from "react";
import data from '../data/about.json';
import Card from 'react-bootstrap/Card';

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
                        <img src={aboutv2.image} alt='' className="img-fluid d-block img__item"/>
                    </div>

                    <div className="col-lg-6">
                        <div 
                        data-aos='fade-left'
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        >
                        {/* <Card className="abt__card mt-4 mt-lg-0 light-bg" >
                            <Card.Body>
                                <Card.Text>
                                    <p className="text-secondary">{aboutv2.description1}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card> */}
                        <p className="text-secondary dark-bg">{aboutv2.description1}</p>
                        </div> 
                        <br></br>   
                        <div
                        data-aos='fade-left'
                        data-aos-duration='1500'
                        data-aos-delay='300'
                        >
                        {/* <Card className="abt__card mt-4 mt-lg-0 light-bg" >
                            <Card.Body>
                                <Card.Text>
                                    <p className="text-secondary">{aboutv2.description2}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card> */}
                        <p className="text-secondary dark-bg">{aboutv2.description2}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <br></br>
            <br></br>
            <div className="container">   
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                        <div className="section-title-center text-center">
                            <h2 className="display-6 dark-bg">{aboutv2.subtitle2}</h2>
                            <div className="section-divider divider-triangle"></div>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2" >
                    {aboutv2?.values?.map((data, i) => (
                        <div
                         key={data.id}
                         className="m-15px-tb"
                        >
                            {/* <div className="services__item h-100 translateEffect1">
                                <div className="row row-cols-1">
                                    <div className="col">
                                        <img
                                         className="img-fluid"
                                         src={data.image}
                                         alt="value"
                                        />
                                    </div>

                                    <div className="col">
                                        <div className="services__content text-center">
                                            <h3 className="dark-bg">{data.value}</h3>
                                            <p>{data.value_description}</p>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                            <div>
                                <div className="value_img">
                                    <img
                                        src={data.image}
                                        alt="icon"
                                        width="100"
                                        height="100"
                                    />
                                </div>
                                <Card>
                                    
                                    <Card.Header>
                                        <h3 className="value_header text-center">{data.value}</h3>
                                    </Card.Header>

                                    <Card.Body>
                                        <Card.Text>
                                            <p>{data.value_description}</p>
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default About;