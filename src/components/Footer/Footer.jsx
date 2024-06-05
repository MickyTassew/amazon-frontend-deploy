import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
    return (
     <>  
        <div className={classes.backToTop}>
        <a href="#top">Back to Top</a>
      </div>
        <footer className={classes.footer}>
            <div className={classes.footer_container}>
            <div className={classes.footer_column}>
                <h4>Get to Know Us</h4>
                <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Amazon Newsletter</a></li>
                    <li><a href="#">About Amazon</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">Press Center</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Amazon Devices</a></li>
                    <li><a href="#">Amazon Science</a></li>
                </ul>
            </div>
            <div className={classes.footer_column}>
                <h4>Make Money with Us</h4>
                <ul>
                    <li><a href="#">Sell on Amazon</a></li>
                    <li><a href="#">Sell apps on Amazon</a></li>
                    <li><a href="#">Supply to Amazon</a></li>
                    <li><a href="#">Protect & Build Your Brand</a></li>
                    <li><a href="#">Become an Affiliate</a></li>
                    <li><a href="#">Become a Delivery Driver</a></li>
                    <li><a href="#">Start a Package Delivery Business</a></li>
                    <li><a href="#">Advertise Your Products</a></li>
                    <li><a href="#">Self-Publish with Us</a></li>
                    <li><a href="#">Become an Amazon Hub Partner</a></li>
                    <li><a href="#">›See More Ways to Make Money</a></li>
                </ul>
            </div>
            <div className={classes.footer_column}>
                <h4>Amazon Payment Products</h4>
                <ul>
                    <li><a href="#">Amazon Visa</a></li>
                    <li><a href="#">Amazon Store Card</a></li>
                    <li><a href="#">Amazon Secured Card</a></li>
                    <li><a href="#">Amazon Business Card</a></li>
                    <li><a href="#">Shop with Points</a></li>
                    <li><a href="#">Credit Card Marketplace</a></li>
                    <li><a href="#">Reload Your Balance</a></li>
                    <li><a href="#">Gift Cards</a></li>
                    <li><a href="#">Amazon Currency Converter</a></li>
                </ul>
            </div>
            <div className={classes.footer_column}>
                <h4>Let Us Help You</h4>
                <ul>
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">Your Orders</a></li>
                    <li><a href="#">Shipping Rates & Policies</a></li>
                    <li><a href="#">Amazon Prime</a></li>
                    <li><a href="#">Returns & Replacements</a></li>
                    <li><a href="#">Manage Your Content and Devices</a></li>
                    <li><a href="#">Recalls and Product Safety Alerts</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            </div>
        </footer>

        </> 
    );
  };
  
  export default Footer;