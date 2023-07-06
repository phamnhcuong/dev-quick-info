import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,faTiktok,faTwitter,faYoutube,
    faTelegram, faTumblr,faGithub,faGooglePlay,faTwitch} from "@fortawesome/free-brands-svg-icons";
    import {faLink } from "@fortawesome/free-solid-svg-icons";


function IconContext(param) {
    switch(param) {
        case 'faFacebookF':
            return <FontAwesomeIcon className='Logos-Social-item' icon={faFacebook} />;
        case 'faInstagram':
            return <FontAwesomeIcon className='Logos-Social-item' icon={faInstagram} />;
        case 'faTiktok':
            return <FontAwesomeIcon className='Logos-Social-item' icon={faTiktok} />;
        case 'faTwitter':
            return <FontAwesomeIcon className='Logos-Social-item' icon={faTwitter} />;
        case 'faYoutube':
            return <FontAwesomeIcon className='Logos-Social-item' icon={faYoutube} />;
        case 'faTelegram':
            return <FontAwesomeIcon className='Logos-Social-item' icon={faTelegram} />;
        case 'faTumblr':
            return <FontAwesomeIcon className='Logos-Social-item' icon={faTumblr} />;
        case 'faGithub':
            return <FontAwesomeIcon className='Logos-Social-item' icon={faGithub} />;
        case 'faGooglePlay':
            return <FontAwesomeIcon className='Logos-Social-item' icon={faGooglePlay} />;
        case 'faTwitch':
            return <FontAwesomeIcon className='Logos-Social-item' icon={faTwitch} />;
        default :
            return <FontAwesomeIcon className='Logos-Social-item' icon={faLink} />
    }
}

export default IconContext;
