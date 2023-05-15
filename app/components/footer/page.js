"use client"
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/app/styles/footer.module.css';
import { FaWhatsapp, FaEnvelope, FaFacebook, FaTwitter, FaPhone } from 'react-icons/fa';
import Link from 'next/link';
// import { useState } from 'react';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <img src="/logo.png" alt="Logo" className={styles.logo} />
          </Col>
          <Col xs={6} md={3}>
            <h4>Desert Safari</h4>
            <ul className={styles.list}>
              <li>Morning Desert Safari</li>
              <li>Evening Desert Safari</li>
              <li>Overnight Desert Safari</li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <h4>City Tour</h4>
            <ul className={styles.list}>
              <li>Dubai City Tour</li>
              <li>Abu Dhabi Tour</li>
              <li>Hatta Tour</li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h4>Contact Us</h4>
            <ul className={styles.list}>
              <li><Link href="#" className={styles.mylink}>
                <FaWhatsapp /> <span>+971 123 4567</span>
              </Link></li>
              <li>
              <Link href="#"className={styles.mylink}>
                <FaEnvelope /> info@example.com
              </Link>
              </li>
              <li>
                <Link href="#"className={styles.mylink}>
                  <FaFacebook /><span> Www.Facebook.com/pageaddress</span>
                </Link>
                <Link href="#"className={styles.mylink}>
                  <FaPhone /><span> +971 123 4567</span>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
