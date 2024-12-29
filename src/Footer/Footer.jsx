import React from "react";
import footerbg from "../assets/footer.png";
import "./Footer.css";
import Logo from "../assets/logo/nobg_image1-0_copy_1.png";
import northeast from "../assets/logo/north_east_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";


function Footer() {
    return (
        <div className="footer">
            <div className="top-footer">
                <div className="top-left-footer">
                    <div className="top-left-top">
                        <img src={Logo} alt="" />
                        <h1>NFCCO</h1>
                        <div className="footer-underline"></div>

                        <p>IN EVERY WAY DIFFERENT
                        UNITED FOR CONSERVATION.</p>
                    </div>
                    <div className="top-left-bottom">
                        <div className="top-left-bottom-button">
                            <form>Enter email address ...</form>
                            <div className="top-left-bottom-button-pointer">
                            <img src={northeast} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-right-footer">
                    <div className="top-right-footer-links">
                        <div className="top-right-footer-links-1">
                            <h1>SUPPORT</h1>
                            <li>FAQ</li>
                            <li>USER GUIDE</li>
                            <li>TESTIMONIAL</li>
                            <li>CUSTOMER</li>
                        </div>
                        <div className="top-right-footer-links-2">
                        <h1>LINKS</h1>
                            <li>ABOUT US</li>
                            <li>STORIES</li>
                            <li>PROJECTS</li>
                            <li>BLOG</li>
                        </div>
                        <div className="top-right-footer-links-3">
                        <h1>SERVICES</h1>
                            <li>ABOUT US</li>
                            <li>STORIES</li>
                            <li>PROJECTS</li>
                            <li>BLOG</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="bottom-footer-top"></div>
                <div className="bottom-footer-bottom">
                    <h1>copyright</h1>
                    <h2>terms and conditions </h2>
                </div>
            </div>
        </div>
    );
}

export default Footer;
