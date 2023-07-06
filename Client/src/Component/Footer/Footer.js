import React from "react";
import "../../Component/Styles/Footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,faTiktok,faTwitter,faYoutube} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FontAwesomeIcon className='Logos-Social-item' icon={faFacebook} />
        <FontAwesomeIcon className='Logos-Social-item' icon={faInstagram} />
        <FontAwesomeIcon className='Logos-Social-item' icon={faTiktok} />
        <FontAwesomeIcon className='Logos-Social-item' icon={faTwitter} />
        <FontAwesomeIcon className='Logos-Social-item' icon={faYoutube} />
      </div>
      <p> &copy; 2023 PNC</p>
    </div>
  );
}

export default Footer;
