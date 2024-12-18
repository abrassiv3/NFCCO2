import React from "react";
import Woman from "../assets/_KGP6196.JPG";
import './InfoSection.css';

function InfoSection() {
    return (
        <section className="infosection-section">
            {/* Left Column: Header and Article Section */}
            <div className="infosection-left-column">
                {/* Header Section */}
                <header className="infosection-header">
                    <h1 className="infosection-title">
                    "Working together to combat climate change and promote sustainability."                    </h1>
                </header>
                <div className="line-divider"></div>
                {/* Vision, Mission, and Objective Section */}
                <article className="infosection-content ">
                    <div>
                        <p className="infosection-text ">
                            Our vision is to enhance community resilience to climate shocks through restoration and 
                            afforestation of Ndoto and Nyiro forests, supporting sustainable livelihoods. Together, 
                            we aim to safeguard biodiversity, mitigate climate change impacts, and foster a future of 
                            environmental sustainability.
                        </p>

                        <p className="infosection-text ">
                            To conserve the ecological integrity and community livelihoods of Ndoto and Nyiro forests.
                        </p>

                        <p className="infosection-text">
                            The main project objective is combating climate change through increasing forest cover 
                            via afforestation and introducing other environmental conservation activities. These 
                            initiatives will conserve the environment, promote sustainable use of natural resources, 
                            and generate income for the communities surrounding Ndoto Forest who are involved in 
                            conservation activities.
                        </p>
                    </div>
                </article>
            </div>

            {/* Right Column: Image Section */}
            <aside className="infosection-image-container">
                <figure className="infosection-image">
                    <img 
                        src={Woman} 
                        alt="A woman participating in afforestation activities in Ndoto Forest" 
                        className="infosection-img"
                    />
                </figure>
            </aside>
        </section>
    );
}

export default InfoSection;
