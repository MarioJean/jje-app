import React from "react";
import data from '../data/contact.json';
import { Link } from "react-router-dom";
import { socialLink } from "../global";

const Contact = ({ isBg }) => {
    const { contact } = data;
    
    return (
        <section
         id="contact"
         className={`p-80px-tb ${isBg === "yes" ? "bg-one" : ""}`}
         >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                        <div className="section-title-center text-center">
                            <span>{contact.title}</span>
                            <h2 className="display-6">{contact.subtitle}</h2>
                            <div className="section-divider divider-triangle"></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div
                     className="col-lg-8 col-md-6 col-sm-12 m-25px-b"
                     data-aos='fade-right'
                     data-aos-duration='1000'
                     data-aos-delay='200'
                    >
                        <div className="contact-form-box">
                            <form id="contact-form">
                                <div className="mb13">
                                    <input
                                    name="name"
                                    className="contact-name"
                                    id="contact-name"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                    />
                                </div>
                                <div className="mb13">
                                    <input
                                    name="email"
                                    className="contact-email"
                                    id="contact-email"
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    />
                                </div>
                                <div className="mb13">
                                    <input
                                    name="subject"
                                    className="contact-subject"
                                    id="contact-subject"
                                    type="text"
                                    placeholder="Subject"
                                    required
                                    />
                                </div>
                                <div className="mb30">
                                    <textarea
                                    name="message"
                                    className="contact-message"
                                    id="contact-message"
                                    type="text"
                                    placeholder="Your Message"
                                    required
                                    >
                                    </textarea>
                                </div>
                                <button
                                 type="submit"
                                 className="button button__primary align-items-center"
                                >
                                    <span>{contact.btnText}</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 m-25px-b">
                        <div className="contact__address p-30px">
                        <ul className="contact__address__content">
                            <li>
                                <span>{contact.phone}</span>
                                <a  href="tel:0740454585"> {contact.number}</a>
                            </li>
                            <li>
                                <span>{contact.email}</span>
                                <Link  to="/#"> {contact.emailText}</Link>
                            </li>
                        </ul>
                        <h4>{contact.socialTitle}</h4>
                            <ul className="social-icon mt-3">
                                    {socialLink.facebook === "" ? (
                                        ""
                                    ) : (
                                        <li>
                                            <a href={socialLink.facebook}>
                                                <img
                                                className="img-fluid"
                                                src="assets/icons/facebook.svg"
                                                alt="icon"
                                                width="25"
                                                height="25"
                                                />
                                            </a>
                                        </li>
                                    )}
                                    {socialLink.instagram === "" ? (
                                        ""
                                    ) : (
                                        <li>
                                            <a href={socialLink.instagram}>
                                                <img
                                                className="img-fluid"
                                                src="assets/icons/instagram.svg"
                                                alt="icon"
                                                width="25"
                                                height="25"
                                                />
                                            </a>
                                        </li>
                                    )}
                                    {socialLink.twitter === "" ? (
                                        ""
                                    ) : (
                                        <li>
                                            <a href={socialLink.twitter}>
                                                <img
                                                className="img-fluid"
                                                src="assets/icons/twitter.svg"
                                                alt="icon"
                                                width="25"
                                                height="25"
                                                />
                                            </a>
                                        </li>
                                    )}
                                    {socialLink.linkedin === "" ? (
                                        ""
                                    ) : (
                                        <li>
                                            <a href={socialLink.linkedin}>
                                                <img
                                                className="img-fluid"
                                                src="assets/icons/linkedin.svg"
                                                alt="icon"
                                                width="25"
                                                height="25"
                                                />
                                            </a>
                                        </li>
                                    )}
                                    {socialLink.whatsapp === "" ? (
                                        ""
                                    ) : (
                                        <li>
                                            <a href={socialLink.whatsapp}>
                                                <img
                                                className="img-fluid"
                                                src="assets/icons/whatsapp.svg"
                                                alt="icon"
                                                width="25"
                                                height="25"
                                                />
                                            </a>
                                        </li>
                                    )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         </section>
    )
}

export default Contact;