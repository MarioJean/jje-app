import React from "react";
import data from '../data/services.json';

const Services = ({ isBg }) => {
    const { services } = data;

    return (
        <section
         id='services'
         className={`section-padding services ${isBg === "yes" ? "bg-one" : ""}`}
         >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                        <div className="section-title-center text-center">
                            <span>{services.title}</span>
                            <h2 className="display-6">{services.subtitle}</h2>
                            <div className="section-divider divider-triangle"></div>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2">
                    {services?.service?.map((data, i) => (
                        <div
                         key={data.id}
                         className="m-15px-tb"
                         data-aos="fade-up"
                         data-aos-duration="1000"
                         data-aos-delay={(i + 2) * 50}
                        >
                            {/* <div className="services__item h-100 translateEffect1">
                                <div className="row row-cols-2">
                                    <div className="col mt-0">
                                        <img
                                         className="img-fluid"
                                         src={data.image}
                                         alt={data.title}
                                        />
                                    </div>

                                    <div className="col mt-0">
                                        <div className="services__content">
                                            <h3>{data.title}</h3>
                                            <p>{data.description}</p>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                            <div className="services__item h-100 translateEffect1">
                                <div className="row row-cols-1">
                                    <div className="col">
                                        <img
                                         className="img-fluid"
                                         src={data.image}
                                         alt={data.title}
                                        />
                                    </div>

                                    <div className="col">
                                        <div className="services__content text-center">
                                            <h3>{data.title}</h3>
                                            <p>{data.description}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Services;