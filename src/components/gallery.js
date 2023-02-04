import React, { useEffect } from "react";
import Glightbox from 'glightbox';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../data/gallery.json';
import { Autoplay, Pagination } from "swiper";

const Gallery = ({ isBg }) => {
    const { gallery } = data;

    useEffect(() => {
        Glightbox({
            selector: ".glightbox2",
            slideEffect: "zoom",
        });
    }, []);
    
    return (
        <section
         id="preview"
         className={`section-padding gallery ${isBg === "yes" ? "bg-one" : ""}`}
         >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                        <div className="section-title-center text-center">
                            <span>{gallery.title}</span>
                            <h2 className="display-6">{gallery.subtitle}</h2>
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
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                         }}
                         >
                            {gallery.images.map((data, i) => (
                                <SwiperSlide key={i}>
                                    <div className="swiper-slide p-5px-lr translateEffect2">
                                        <a
                                         href={data.image}
                                         className="glightbox2"                                        
                                        >
                                            <img
                                             className="display img-fluid"
                                             src={data.image}
                                             alt={data.title}
                                            />
                                        </a>    
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

export default Gallery;