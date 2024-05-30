import React from 'react';
import './Care.css'; 

function Care() {
  return (
    <div className="care-container">
      <div className="header">
        <h1>Welcome to BakuElectronics</h1>
        <p>Your ultimate destination for cutting-edge electronics and unparalleled customer care.</p>
      </div>
      
      <div className="section">
        <h2>Our Commitment to You</h2>
        <p>At BakuElectronics, we understand that your satisfaction is paramount. That's why we prioritize not only providing top-quality products but also ensuring that you have peace of mind with every purchase. Our commitment to excellence is reflected in our comprehensive warranty program.</p>
      </div>
      
      <div className="section">
        <h2>1-Year Warranty</h2>
        <div className="warranty">
          <img className='warranty-img' src="https://image.oppo.com/content/dam/oppo/common/support/iws/en/iws_banner_pc.jpg" alt="Warranty" />
          <p>Our 1-year warranty is more than just a piece of paper; it's a symbol of our dedication to you, our valued customer. With this warranty, you can rest assured that your investment is protected. In the unlikely event of any manufacturing defects or malfunctions, simply reach out to us, and we'll swiftly address any issues, ensuring minimal disruption to your enjoyment of our products.</p>
        </div>
      </div>
      
      <div className="section">
        <h2>Exceptional Customer Service</h2>
        <div className="customer-service">
          <p>With our chat gpt service, your satisfaction extends beyond just warranties. At BakuElectronics, we pride ourselves on our exceptional customer service. Our knowledgeable and friendly staff are always ready to assist you, whether you have questions about a product, need assistance with troubleshooting, or require advice on the latest tech trends.</p>
          <img className='customer-img' src="https://omq.ai/static/1d0ec77800abe8ab074705a032d66661/f53d2/ChatGPT_Chatbot_headpicture_en.png" alt="Customer Service" />
        </div>
      </div>
      
      <div className="section">
        <h2>Exclusive Benefits</h2>
        <div className="benefits">
          <p>As a token of our appreciation for choosing BakuElectronics, we offer exclusive benefits to our loyal customers. From special discounts and promotions to members-only events, we're constantly finding new ways to show our gratitude. With BakuElectronics, you're not just a customer; you're part of our extended family.</p>
          <img className='benefits-img' src="https://www.labsmobile.com/en/blog/wp-content/uploads/2022/06/Labsmobile_Abril_SoportePremium_EN_V1.jpg" alt="Exclusive Benefits" />
        </div>
      </div>
      
      <div className="section">
        <h2>Extended Warranty Options</h2>
        <p>For those seeking added protection and peace of mind, we also offer optional extended warranty plans. These plans provide comprehensive coverage beyond the initial warranty period, ensuring that you can continue to enjoy your purchase worry-free for years to come. With BakuElectronics, you can invest in the future with confidence.</p>
      </div>
      
     
    </div>
    
  );
}

export default Care;
