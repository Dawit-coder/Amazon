import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h4>Categories</h4>
          <ul>
            <li><Link to='/category/electronics'>Electronics</Link></li>
            <li><Link to="/category/jewelery">Jewelry</Link></li>
            <li><a href="/category/men's%20clothing">Men's Clothing</a></li>
            <li><a href="/category/women's%20clothing">Women's Clothing</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Help & FAQs</a></li>
            <li><a href="#">Returns & Replacements</a></li>
            <li><a href="#">Track Your Order</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>About This Clone</h4>
          <p>This is a clone of the Amazon website created for educational purposes.</p>
        </div>
      </div>

      <div className={styles.footerFollow}>
        <h4>Follow Me</h4>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/dawitteshome/" target="_blank" rel="noopener noreferrer">
              <span className={styles.linkedInLink}><FaLinkedinIn /></span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/novawhisperer/" target="_blank" rel="noopener noreferrer">
              <span className={styles.instagram}><GrInstagram /></span>
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.footerBottom}>
        <p>
          <span>©</span> {currentYear} Amazon Clone | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
