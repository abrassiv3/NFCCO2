import React from "react";
import icon from "../assets/logo/visibility_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
import "./InfoSection.css";
import woman from "../assets/_KGP6196.JPG";
import icon1 from "../assets/logo/target_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
import icon2 from "../assets/logo/emoji_objects_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
import icon3 from "../assets/logo/volunteer_activism_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";


function InfoSection() {
    const cards = [
        {
            title: "Vision",
            description: "Our vision vision is to enhance community resilience to climate shocks through restoration and afforestation of Ndoto and Nyiro forests, supporting sustainable livelihoods. Together, we aim to safeguard biodiversity, mitigate climate change impacts, and foster a future of environmental sustainability.",
            image: icon 
        },
        {
            title: "Mission",
            description: "To conserve the ecological integrity and community livelihoods of Ndoto and Nyiro forests.",
            image: icon1 
        },
        {
            title: "Main objective",
            description: "To conserve the ecological integrity and community livelihoods of Ndoto and Nyiro forests.\n\nMain objective\n\nThe main project objective is combating climate change through increasing forest cover via afforestation and introducing other environmental conservation activities in the community. These activities will both conserve the environment and promote the sustainable use of natural resources, generating income for the community surrounding Ndoto Forest, who will be part of the conservation activities.",
            image: icon2 
        },
        {
            title: "Values",
            description: "Our core value lies in empowering communities to protect and restore their local environment through collaborative, sustainable practices.",
            image: icon3 
        }
    ];
    
    
    return (
        <div className="InfoSection">
            <div className="top-side">
                <div className="top-side-left">
                    <p>
                        [Purpose]
                    </p>
                </div>
                <div className="top-side-right">
                    <section>
                        <p>Landscape Design</p>
                        <p>01</p>
                    </section>
                    <div className="underline"></div>
                    <section>
                        <p>Indoor Garden</p>
                        <p>02</p>
                    </section>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="bottom-side">
                <div className="bottom-side-top">
                <div className="bottom-side-top">
    <h1>
        IN EVERY WAY <span className="gradient-text">DIFFERENT</span> <br /> UNITED FOR CONSERVATION.
    </h1>
</div>

                    <button>About Us</button>
                </div>
                <div className="bottom-side-bottom">
                    <img className="woman-image" src={woman} alt="" />
                    <div className="cards-container">
                        {cards.map((card, index) => (
                            <div key={index} className="card">
                                <img src={card.image} alt={card.title} className="card-image" />
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoSection;