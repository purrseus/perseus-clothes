import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="children">
          <h3>Help & Information</h3>
          <ul>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <a href="/">Track Order</a>
            </li>
            <li>
              <a href="/">Delivery & Returns</a>
            </li>
          </ul>
        </div>

        <div className="children">
          <h3>About PERSEUS</h3>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Careers at PERSEUS</a>
            </li>
            <li>
              <a href="/">Corporate Responsibility</a>
            </li>
            <li>
              <a href="/">Investors Site</a>
            </li>
          </ul>
        </div>

        <div className="children">
          <h3>More from PERSEUS</h3>
          <ul>
            <li>
              <a href="/">Mobile and PERSEUS Apps</a>
            </li>
            <li>
              <a href="/">PERSEUS Marketplace</a>
            </li>
            <li>
              <a href="/">Gift vouchers</a>
            </li>
            <li>
              <a href="/">Fashion Discovery</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="left">
          &copy;{`${new Date().getFullYear()} PERSEUS`}
        </div>
        <div className="right">
          <div>
            <a href="/">Privacy & Cookies</a>
          </div>
          <div className="between">
            <a href="/">Ts&Cs</a>
          </div>
          <div>
            <a href="/">Accessibility</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
