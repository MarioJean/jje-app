import React from "react";
import data from '../data/cta.json';

const Ctav3 = () => {
    const { ctav3 } = data;

    return (
        <section id="ctav3" className="ctav3 bg-one p-80px-t ">
            <div className="container bg-one">
                <div className="row">
                    <div className="ctav3__content">
                        <h2 className="dark-bg m-25px-b">
                            {ctav3.title}
                        </h2>
                    </div>
                </div>
            </div>    
        </section>
    )
}

export default Ctav3;