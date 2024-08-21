import React from "react";
import "../css files/Footer.css";

const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Boutrus' APIs. All rights reserved.</p>
        <ul>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterPage;
