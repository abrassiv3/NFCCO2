import React from "react";
import Landscape from "../assets/_KGP5985 (1).JPG";
import Species from "../assets/PHOTO-2024-08-03-09-18-27 (3).jpg";
import Community from "../assets/_KGP6807.JPG";
import "./GalleryPreview.css";

function GalleryPreview() {
  return (
    <div className="gallery-preview">
      <div className="gallery-preview-left-side">
        <div className="divs-1">
            <p>Community</p>
        </div>
        <div className="divs-1">
            <p>Species</p>
        </div>
        <div className="divs-1">
            <p>Landscape</p>
        </div>
      </div>
      <div className="gallery-preview-right-side">
        <h2>See for yourself</h2>
        <h3>This is just a small sentence to introduce our vast and awsome gallery page.Dig in to explore Ndoto Forest</h3>
      </div>
    </div>
  );
}

export default GalleryPreview;
