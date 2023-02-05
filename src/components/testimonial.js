import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import data from '../data/testimonial.json';


const Testimonial = ({ isBg }) => {
    const { testimonial } = data;
    
    return (
        <section
         id="testimonials"
         className={`section-padding testimonial ${isBg === "yes" ? "bg-one" : ""}`}
         >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                        <div className="section-title-center text-center">
                            <span>{testimonial.title}</span>
                            <h2 className="light-bg display-6">{testimonial.subtitle}</h2>
                            <div className="section-divider divider-triangle"></div>
                        </div>
                    </div>
                </div>

                <div className="row testi-row">
                    <div className="col-12">
                        <Swiper
                         modules={[Pagination, Autoplay]}
                         pagination={{ clickable: true}}
                         autoplay
                         breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                         }}
                         >
                            {testimonial.testimonialItem?.map((data ) => (
                                <SwiperSlide key={data.id}>
                                    <div className="swiper-slide p-5px-lr">
                                        <div className="testi-card card h-100 translateEffect1">
                                            <div className="card-body p-4">
                                                {/* <div className="testi-card__quotation">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0">
                                                        <path d="M06.4 416H77.1l50.9-96.6V96h-168v223.4h77.1L96.4 416zm224 0h77.">
                                                        </path>
                                                    </svg>
                                                </div> */}
                                                <p className="ay-4">{data.description}</p>
                                                <div className="testi-card__user-info pt-4">
                                                    <div className="testimonial__user-info__image">
                                                        <img src={data.image} alt={data.title}/>
                                                    </div>
                                                    <div className="testimonial__user-info__content">
                                                        <h4 className="dark-bg mb-0">{data.name}</h4>
                                                        <p className="mb-0">{data.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>    
                                    </div>
                                </SwiperSlide>
                            ))}
                         </Swiper>
                    </div>
                </div>


            </div>
         </section>
    )
}

export default Testimonial;