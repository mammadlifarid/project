import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us with any questions or concerns!</p>
        <ul>
          <li>Email: help@bakuelectronics.com</li>
          <li>Phone: 055-636-63-22</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
        <h3>Follow Us</h3>
        <p>Stay connected with us on social media!</p>
        <ul>
          <li>Facebook:@bakuelectronics </li>
          <li>Twitter: @bakuelectronics</li>
          <li>Instagram: @bakuelectronics</li>
        </ul>
        <h3>Office Hours</h3>
        <p>We're available at these times:</p>
        <ul>
          <li>Monday-Friday: 9:00 AM - 5:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Send us a Message</h2>
<p>(Notice: You Need To Register or Log In in order to send messages..)</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required placeholder= "enter your name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Topic:</label>
            <input type="email" id="email" name="email" required placeholder= "give a clear topic of your question" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required placeholder='write your question&problem'></textarea>
          </div>
          <button
           type="button"
className="btn btn-linn btn-dark "
data-dismiss="modal"
data-target="#login_modal"
data-toggle="modal"> {" "}
Send Message <i className="fa-solid fa-caret-right "></i>{" "} </button>
        </form>
      </div>
      <div className="map">
        <h2>Find Us Here</h2>
        <p>Baku,Azerbaijan Ganjlik zone</p>
      </div>
    </div>
    
  );
}
