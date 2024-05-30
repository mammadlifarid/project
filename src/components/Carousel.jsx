import React from 'react';
import './Carousel.css'; 

export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide gradient-bg" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li> 
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li> 
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block mx-auto Image-1" src="https://www.apple.com/newsroom/videos/iphone-15-pro-action-button/posters/Apple-iPhone-15-Pro-lineup-Action-button-230912.jpg.large_2x.jpg" alt="First slide" />
          <div class="carousel-caption d-none d-md-block">
    <h5>OUR BEST SELLER PHONES: APPLE iPHONE 15 PRO MAX 512GB</h5>
    <p>LIMITED 30% SALE</p>
  </div>
        </div>
        <div className="carousel-item">
          <img className="d-block mx-auto Image-2" src="https://www.ytechb.com/wp-content/uploads/2023/04/Xiaomi-13-Ultra-Wallpapers.webp" alt="Second slide" />
          <div class="carousel-caption d-none d-md-block">
          <h5>OUR BEST SELLER PHONES: MI 13 ULTRA 512GB</h5>
    <p>LIMITED 30% SALE</p>
  </div>
        </div>
        <div className="carousel-item">
          <img className="d-block mx-auto Image-2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBD0_iTaLjFXPiMFp6kXOCNVvC8-G_u1_YZOwVynCSPTNVsODUt7oHbmxZ2tkE6bN1uVakCODeVYHJ9xas17Jp0rCtIMPrzB5Q1shpm9ZBG4f2GX3TJEuLBNZwR69oI5tPk21T-ake217qdXBbf56Tcl3EXD8e84trv39cuqMokIml5EOzKiLm0sB9/s800/Xiaomi-Leica-partnership.jpg" alt="Second slide" />
          <div class="carousel-caption d-none d-md-block">
          <h5>OUR BEST SELLER PHONES: MI 13 ULTRA 512GB</h5>
    <p>LIMITED 30% SALE</p>
  </div>
        </div>
        <div className="carousel-item">
          <img className="d-block mx-auto Image-3" src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/Captura-de-Tela-2023-09-12-as-14.57.09.png?w=732&h=412&crop=1" alt="Third slide" />
          <div class="carousel-caption d-none d-md-block">
          <h5>OUR BEST SELLER PHONES: APPLE iPHONE 15 PRO MAX 512GB</h5>
    <p>LIMITED 30% SALE</p>
  </div>
        </div>
        <div className="carousel-item">
          <img className="d-block mx-auto Image-3" src="https://www.gizbot.com/img/2023/08/samsung-galaxy-s24-ultra-1691584693.jpg" alt="Fourth slide" />
          <div class="carousel-caption d-none d-md-block">
          <h5>OUR BEST SELLER PHONES: SAMSUNG S24 ULTRA 512GB</h5>
    <p>LIMITED 10% SALE</p>
  </div>
        </div>
        <div className="carousel-item">
          <img className="d-block mx-auto Image-3" src="https://image.cnbcfm.com/api/v1/image/107377703-1708714730614-Xiaomi_14_Ultra.png?v=1708779861&w=929&h=523&vtcrop=y" alt="Fifth slide" />
          <div class="carousel-caption d-none d-md-block">
          <h5>OUR BEST SELLER PHONES: XIAOMI 14 ULTRA 1TB</h5>
    <p>LIMITED 25% SALE</p>
  </div>
        </div>
      </div>
      
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="Previous">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="Next">Next</span>
      </a>
    </div>
  );
}
