import React, { useRef, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import data from '../data/contact.json';
import { Link } from "react-router-dom";
import { socialLink } from "../global";

const Contact = ({ isBg }) => {
    const { contact } = data;
    const form = useRef();

    // Initialize state variables for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Add a state variable to control form submission
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const notify = () => {
        toast.success('Sent Succesfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    

    const sendEmail = (e) => {
        e.preventDefault();
    
        // Send the email as you did previously
        emailjs.sendForm('service_rr2gm7d', 'template_w0uolju', form.current, 'VyUc7r4qw8O4nSy5R')
            .then((result) => {
                console.log(result.text);
                setIsFormSubmitted(true); // Set the flag to true on successful submission
    
                // Show a toast notification
                notify();
            }, (error) => {
                console.log(error.text);
            });
    
        // Clear the form fields
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };
    

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
                            <h2 className="dark-bg display-6">{contact.subtitle}</h2>
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
                            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                                <div className="mb13">
                                    <input
                                    name="name"
                                    className="contact-name"
                                    id="contact-name"
                                    type="text"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
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
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    >
                                    </textarea>
                                </div>
                                <button
                                 type="submit"
                                 value="Send"
                                 className="button button__primary align-items-center"
                                 oncLick
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
                                            <a href={socialLink.facebook} target="_blank" rel="noopener noreferrer">
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
                                            <a href={socialLink.instagram} target="_blank" rel="noopener noreferrer">
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
                                            <a href={socialLink.twitter} target="_blank" rel="noopener noreferrer">
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
                                            <a href={socialLink.linkedin} target="_blank" rel="noopener noreferrer">
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
                                            <a href={socialLink.whatsapp} target="_blank" rel="noopener noreferrer">
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