import React from "react";
import data from '../data/cta.json';

const Ctav3 = ({isBg}) => {
    const { ctav3 } = data;

    return (
        <section
            className={`section-padding ctav3 ${isBg === " " ? "bg-one" : ""}`}
            style={{
                backgroundImage: `url(${ctav3.backgroundImage})`,
                backgroundAttachment: "fixed"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="ctav3__content">
                        <h4
                            className="display-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="150"
                        >
                            {ctav3.title}
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default Ctav3;