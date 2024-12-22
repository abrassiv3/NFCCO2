import React from "react";
import Tenet1 from "../assets/Tenets/tenets_g12.png";
import Tenet2 from "../assets/Tenets/tenets_g13.png";
import Tenet3 from "../assets/Tenets/tenets_g14.png";
import "./Tenets.css";

function Tenets() {
    const tenets = [
        { id: 1, src: Tenet1, title: "People", alt: "Tenet 1 description" },
        { id: 2, src: Tenet2, title: "Ecology", alt: "Tenet 2 description" },
        { id: 3, src: Tenet3, title: "Community", alt: "Tenet 3 description" },
    ];

    return (
        <div className="tenets">
            <div className="tenets-top">
                <div className="tenets-top-title">
                <h2>[Tenets]</h2>
                </div>
                <div className="tenets-top-list">
    {tenets.map((tenet) => (
        <div key={tenet.id} className="tenets-list-item">
            <span className="tenets-list-title">{tenet.title}</span>
            <span className="tenets-list-number">{tenet.id}</span>
        </div>
    ))}
</div>

            </div>
            <div className="tenets-bottom">
                <div className="tenets-bottom-cards">
                    {tenets.map((tenet) => (
                        <div key={tenet.id} className="tenet-card">
                            <img src={tenet.src} alt={tenet.alt} />
                            <h3 className="tenet-title">{tenet.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tenets;
