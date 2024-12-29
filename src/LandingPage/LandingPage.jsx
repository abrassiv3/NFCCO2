import React from "react";
import InfoSection from "./InfoSection";
import Hero from "./Hero";
import BlogPreview from "./BlogPreview";
import Tenets from "./Tenets";
import Testimonial from "./Testimonial";
import Footer from "../Footer/Footer";
import GalleryPreview from "./GalleryPreview";
import ConservancyArticles from "./MapPreview";



function LandingPage () {
    return (
        <div>
            <Hero/>
            <InfoSection/>
            <Tenets/>
            <BlogPreview/>
            <Testimonial/>
            <GalleryPreview/>
            <Footer/>

        </div>
    )
}

export default LandingPage;