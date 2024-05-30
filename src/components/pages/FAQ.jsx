
import './FAQ.css';

import React from "react";

export default function FAQ() {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3>Do you offer free shipping?</h3>
        <p>
          Yes, we offer free shipping on all orders within the continental
          United States. For international orders, shipping rates may apply.
        </p>
      </div>

      <div className="faq-item">
        <h3>What payment methods do you accept?</h3>
        <p>
          We accept payment via credit card (Visa, Mastercard, American
          Express), PayPal, and bank transfer. We also offer financing options
          through select partners.
        </p>
      </div>

      <div className="faq-item">
        <h3>How can I track my order?</h3>
        <p>
          Once your order has been shipped, you will receive a tracking number
          via email. You can use this tracking number to monitor the status of
          your shipment on our website or the courier's website.
        </p>
      </div>

      <div className="faq-item">
        <h3>Do you offer refunds or exchanges?</h3>
        <p>
          Yes, we offer a 30-day return policy for eligible items. If you are
          not satisfied with your purchase, you can return it for a refund or
          exchange. Please note that certain conditions may apply.
        </p>
      </div>

      <div className="faq-item">
        <h3>Are your products covered by warranty?</h3>
        <p>
          Yes, all of our products are covered by a manufacturer's warranty.
          The duration and terms of the warranty may vary depending on the
          product. Please refer to the product description or contact customer
          service for more information.
        </p>
      </div>

      <div className="faq-item">
        <h3>How can I contact customer service?</h3>
        <p>
          You can contact our customer service team by phone at 1-800-555-1234
          or by email at support@bakuelectronics.com. Our representatives are
          available to assist you Monday through Friday, from 9:00 AM to 5:00
          PM EST.
        </p>
      </div>
    </div>
  );
}
