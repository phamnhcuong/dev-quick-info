import React from "react";
import VideoBanner1 from "../../Contant/video/GifBanner1.gif" 
import "../Styles/Banner.css"
function Banner1() {
  return (
    <div className="banner">

        <img src={VideoBanner1} className="gif-banner">
        </img>
        
    </div>
  );
}

export default Banner1;
