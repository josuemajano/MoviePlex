import React from 'react';
import '../style/Footer.css';

function Footer() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">

            <div className="col">
              <h4>MoviePlex</h4>
              <h1 className="list-unstyled">
                <li>Something here?</li>
              </h1>
            </div>

            <div className="col">
              <h4>Quick Links</h4>
              <ui className="list-unstyled">
                <li>Home</li>
                <li>Top Rated</li>
                <li>Contact Us</li>
              </ui>
            </div>
        
            <div className="col">
              <h4>Contact</h4>
              <ui className="list-unstyled">
                <li>Something</li>
                <li>Something</li>
                <li>Something</li>
              </ui>
            </div>
          </div>

          <hr />
          
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} MoviePlex | All rights reserved |
              Terms of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    );
  }

export default Footer;