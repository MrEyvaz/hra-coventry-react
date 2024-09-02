import React from 'react';
import styles from './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div className='d-flex'>
      <div className='header-text'>
        <p>Nərimanov rayonu, Əliyar Əliyev 61 (Baku Modern School ilə üzbəüz)</p>
      </div>

      <div className='header-icons'>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faLinkedin}/>
        <FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faYoutube}/>
        <FontAwesomeIcon icon={faWhatsapp}/>
      </div>
    </div>
  );
}

export default Header;