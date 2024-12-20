import React from "react";
import './Hero.css';
import Navbar from "../Navbar/Navbar";

function Hero() {
    return (
        <section className="hero-container">
            <Navbar />
            <div className="hero-top-side">
                <div className="hero-top-side-top">
                    <div className="hero-title">
                        <h1>WELCOME TO <br />NDOTO FOREST</h1>
                    </div>
                    <div className="hero-text">
                        <p>To conserve the ecological integrity and community livelihoods of Ndoto and Nyiro forests tTo conserve the ecological integrity and community livelihoods of Ndoto and Nyiro forests.</p>
                    </div>
                    <div className="buttons">
                        <button className="about-us-button">About Us</button>
                        <button className="explore-us-button">Explore Us</button>
                    </div>
                </div>
                <div className="topside-square">
                    <div className="actual-square">
                        <p>500+</p>
                        <p>Satisfied clients</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
