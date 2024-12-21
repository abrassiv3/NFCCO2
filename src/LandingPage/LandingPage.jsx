import React from "react";
import InfoSection from "./InfoSection";
import Hero from "./Hero";
import BlogPreview from "./BlogPreview";
import Tenets from "./Tenets";


function LandingPage () {
    return (
        <div>
            <Hero/>
            <InfoSection/>
            <Tenets/>
            <BlogPreview/>

        </div>
    )
}

export default LandingPage;