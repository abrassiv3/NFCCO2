import React from "react";
import footerbg from "../assets/footer.png";
import "./Footer.css";

function Footer() {
    return (
        <div 
            className="footer"
            style={{
                backgroundImage: `url(${footerbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh", // Adjust height as needed
                width: "100%",   // Ensures it spans the full width
            }}
        ></div>
    );
}

export default Footer;
