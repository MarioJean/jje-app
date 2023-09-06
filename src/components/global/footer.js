import React from "react";
import { Link } from "react-scroll";
import { SiteLogo, socialLink } from "../../global";

const Footer = ({footer, isBg}) => {

    return (
        <>
        <footer className={`footer overflow-hidden ${isBg === "yes" ? "bg-one" : ""}`}>
            <div className="container">
                <div className="footer__top m-50px-b">
                    <div className="container">
                        <div className="row">
                         
                            <div className="col-lg-3 d-flex justify-content-center align-items-center"></div> {/* Empty Column */}
                            
                            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                                <ul className="dark-bg footer__menu">
                                    <h4 className="mb-3 pb-2 border-bottom">Quick Links</h4>
                                    {footer.menu2?.map((data, i) => (
                                        <li key={i}>
                                            <Link
                                                activeClass="active"
                                                className="benefits"
                                                to={`${data.link}`}
                                                spy={true}
                                                smooth={true}
                                                duration={500}
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                offset={-60}
                                            >
                                                {data.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                <ul className="social-icon">
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

                <hr />

                <div className="footer__copyright m-20pxt m-20px-b">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 d-flex justify-content-center mb-3 mb-lg-0">
                                <a href="/">
                                    <img src={SiteLogo.logo2} alt={SiteLogo.alt} />
                                </a>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center mb-3 mb-lg-0">
                                <p className="m-0 text-center">
                                    {new Date().getFullYear()}. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </footer>
        </>
    )
}

export default Footer;