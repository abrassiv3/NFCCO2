import React from "react";
import InfoSection from "./InfoSection";
import MapPreview from "./MapPreview";
import GalleryPreview from "./GalleryPreview";

function LandingPage () {
    return (
        <div>
            <InfoSection/>
            {/* <MapPreview/> */}
            <GalleryPreview/>
        </div>
    )
}

export default LandingPage;