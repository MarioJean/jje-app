import React, { useEffect } from "react";
import Glightbox from 'glightbox';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,EffectCoverflow } from "swiper";
import data from '../data/gallery.json';

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
         id="gallery"
         className={`section-padding gallery ${isBg === "yes" ? "bg-one" : ""}`}
         >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                        <div className="section-title-center text-center">
                            <span>{gallery.title}</span>
                            <h2 className="dark-bg display-6">{gallery.subtitle}</h2>
                            <div className="section-divider divider-triangle"></div>
                        </div>
                    </div>
                </div>

                <div className="row testi-row">
                    <div className="col-12">
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            coverflowEffect={{
                            rotate: -25,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                            }}
                            loop={true}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            pagination={{ clickable: true}}
                            autoplay
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
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