import React from 'react';
import styles from '@/app/styles/topnav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram ,faWhatsapp} from '@fortawesome/free-brands-svg-icons'



const TopNav = () => {
  return (
    <>
    <div className={styles.topnav}>
      <div className={styles.left}>
        <div className={styles.contact}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>For Queries Email Us</span><span> | </span>
        </div>
        <div className={styles.contact}>
          <FontAwesomeIcon icon={faPhone} />
          <span>054 544 1919</span><span> | </span>
        </div>
        <div className={styles.contact}>
          <FontAwesomeIcon icon={faWhatsapp} />
          <span>054 544 1919</span><span> | </span>
        </div>
      </div>
      <div className={styles.right}>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
    </>
  );
};

export default TopNav;
