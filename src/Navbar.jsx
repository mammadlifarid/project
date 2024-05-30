import { useState } from "react";
export default function Navbar() {
  const [setInputType] = useState("password");
  const toggleInputType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
    document.getElementById("span").innerHTML =
      '<i className="fa-solid fa-eye"></i>';
  };

  

  return (
   <div>
      <div className="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
          <a className="navbar-brand px-3 logo" href="/">
            <i className="fa-solid fa-shop mr-2 text-white "></i>
          </a>
          <img
            className="bakuelectronics-img"
            src="https://www.bakuelectronics.az/assets/img/logo.svg"
            alt=""
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
       <div className="navbarabout">
        <nav  className="nav">
        
          <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
          <a href="/about">About Us</a>
          </li>
          <li>
          <a href="/FAQ">FAQ</a>
          </li>
          <li>
          <a href="/contact us">Contact Us</a>
          </li>
          </ul>
        </nav>
        </div>
          <button
            className="box-none btn btn-outline-danger ml-2"
            data-toggle="modal"
            data-target="#login_modal"
          >
            <i className="fa-solid fa-right-to-bracket mr-2"></i>Login
            <img
              className="Login-img"
              src="https://cdn-icons-png.freepik.com/256/3033/3033143.png"
              alt=""
            />
          </button>
          <button
            className="box-none btn btn-outline-danger ml-2"
            data-toggle="modal"
            data-target="#register_modal"
          >
            <i className="fa-solid fa-user-plus mr-2"></i>Register
            <img
              className="Register-img"
              src="https://static.thenounproject.com/png/3104881-200.png"
              alt=""
            />
          </button>
          <button
            className="box-none btn btn-outline-danger ml-2"
            data-toggle="modal"
            data-target="#cart_modal"
          >
            <i className="fa-solid fa-cart-shopping mr-2"></i>Cart (9+)
            <img
              className="Cart-img"
              src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
              alt=""
            />
          </button>
        
  <button className="box-none btn btn-outline-danger ml-2"
  data-toggle="modal"
  data-target="#paymentModal" >
  <i className="fa-solid fa-credit-card mr-2"></i>Payment
  <img
    className="Payment-img"
    src="https://www.freeiconspng.com/uploads/payment-icon-credit-payment-icon-0.png"
    alt="Payment Icon"/>
</button>
        </nav>

        <div className="modal fade" id="login_modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title mx-2">Welcome Back!</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="form">
                  <div className="form-group px-3">
                    <input
                      type="text"
                      className="form-control input"
                      placeholder="Enter your existing username"
                      required
                      id="login_username_input"
                    />
                  </div>
                  <div className="form-group px-3 span-div">
                    <input
                      className="form-control input"
                      type="password"
                      id="login-password_input"
                      required
                      placeholder="Enter your password"
                    />
                    <span
                      className="span"
                      onClick={toggleInputType}
                      id="span"
                    >
                      <i
                        className="fa-solid fa-eye-slash"
                        id="eye_close"
                      ></i>
                    </span>
                  </div>

                  <button className="btn btn-dark">Sign in</button>
                  <br />
                  <p className="terms-p">
                    By continuing, you agree to Our
                    <a href="#"> Conditions of Use</a> and
                    <a href="#"> Privacy Notice</a>.
                  </p>

                  <a
                    href="https://www.google.com"
                    className="google-a"
                    type="button"
                  >
                    <i className="fa-brands fa-google mr-2 "></i>Sign in with
                    Google
                    <img
                      className="Google-img"
                      src="https://static-00.iconduck.com/assets.00/google-logo-icon-503x512-d3y72ufg.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop"
                    className="frgt-password"
                  >
                    Forgot your password?
                  </a>
                  <p className="have-account">
                    {" "}
                    Don't have an account? Click sign up below to create a new
                    account!
                    <button
                      type="button"
                      className="btn btn-linn btn-dark mx-auto"
                      data-dismiss="modal"
                      data-target="#register_modal"
                      data-toggle="modal"
                    >
                      {" "}
                      Sign up <i className="fa-solid fa-caret-right"></i>{" "}
                    </button>{" "}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="register_modal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" style={{ color: '#333' }}>Sign Up</h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form className="form text-center">
          <div className="form-group">
            <label htmlFor="register_username_input" style={{ color: '#333' }}>
              Your name
            </label>
            <input
              type="text"
              className="input form-control"
              required
              id="register_username_input"
              placeholder="Enter your first and last name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="register_email_input" style={{ color: '#333' }}>Email</label>
            <input
              className="input form-control"
              type="email"
              required
              id="register_email_input"
              placeholder="Enter a Valid Email Address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="register_password_input" style={{ color: '#333' }}>Password</label>
            <input
              className="input form-control"
              type="password"
              required
              id="register_password_input"
              placeholder="Create a strong password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm_register_password_input" style={{ color: '#333' }}>
              Confirm your password
            </label>
            <input
              className="input form-control"
              type="password"
              required
              id="confirm_register_password_input"
              placeholder="Confirm your password"
            />
          </div>
          <button className="btn btn-dark mx-auto">Register</button>
        </form>
      </div>
    </div>
  </div>
</div>

        <div className="modal fade" id="cart_modal">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title mx-2">Your Cart</h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="parent">
   
          {[
            {
          
              brand: "Xiaomi",
              model: "Redmi Note 13 pro",
              price: 359,
              description: "256GB Black",
              img_url:
                "https://cdn.dsmcdn.com/ty1176/product/media/images/prod/SPM/PIM/20240222/02/746b1fb0-6f5c-3279-886c-f51a77779cd3/1_org_zoom.jpg",
            },
            {
              brand: "Apple",
              model: "IPhone 13 ",
              price: 799,
              description: "128GB Star light",
              img_url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTru6pNpap7n7HswEHOR5E8xXX2FaKa_KenxQKQ23p0OconhVbrvfWCElikbGE2-PbiIwU&usqp=CAU",
            },
            {
              id:"iphone-15-pro-max",
              img_url:"https://cdn.dsmcdn.com/ty1003/product/media/images/prod/PIM/20230921/07/f4ccfb76-b2c1-43ed-8c45-69429e8e925c/1_org_zoom.jpg",
              brand:"Apple",
              model:"iPhone 15 Pro Max",
              description:"256GB Natural Titanium",
              price: 1099,
              salePrice: 899,
            },
            {
              brand: "Realme",
              model: "C55",
              price: 299,
              description: "128GB Sun Light ",
              img_url:
                "https://cdn.dsmcdn.com/ty1012/product/media/images/prod/SPM/PIM/20231012/09/66e9655c-3641-35e1-96ba-4555fc43d726/1_org_zoom.jpg",
            },
            {
              brand: "Samsung",
              model: "Galaxy A54",
              price: 459,
              description: "256GB White",
              img_url:
                "https://cdn.dsmcdn.com/ty806/product/media/images/20230329/10/314649979/898797220/2/2_org_zoom.jpg",
            },
            {
              brand: "Samsung",
              model: "Galaxy S24 Ultra",
              price: 1499,
              description: "512GB Titanium Gray",
              img_url:
                "https://cdn.dsmcdn.com/ty1117/product/media/images/prod/PIM/20240103/11/30220ba1-9026-4281-a547-e33749fe04ab/1_org_zoom.jpg",
            },
            {
              brand: "Huawei",
              model: "P50 Pocket",
              price: 899,
              description: " 256GB White ",
              img_url: "https://cdn.dsmcdn.com/ty650/product/media/images/20221216/16/239325388/652014969/1/1_org_zoom.jpg",
            }
          ].map((product, index) => (
            <div key={index} className="child">
              <img
                className="cart-item-photo"
                src={product.img_url}
                alt={`${product.brand} ${product.model}`}
              />
              <div className="cart-item-details">
                <h4 className="cart-item-name">
                  <span className="text-bold">{product.brand}</span>{" "}
                  {product.model}
                </h4>
                <p className="cart-item-specs">
                  <span className="text-bold">Specifications:</span>{" "}
                  {product.description}
                </p>
                <p className="cart-item-price">
                  <span className="text-bold">Price:</span>{" "}
                  <span className="text-color-primary">
                    ${product.price.toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="cart-item-total">
                <p>
                  <span className="text-bold">Total:</span>{" "}
                  <span className="text-color-primary">
                    ${product.price.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          ))}
      
        </div>
      
        <div className="subtotal">
          <p className="subtotal-label text-bold text-color-primary">Subtotal:</p>
          <p className="subtotal-amount text-bold">$10999.99 or (
Ten thousand nine hundred ninety-nine dollars and ninety-nine cents) </p>
<p className="terms-p">
                    By continuing, you agree to Our
                    <a href="#"> Conditions of Use</a> and
                    <a href="#"> Privacy Notice</a>.
                  </p>
        </div>
      </div>
      <div className="modal-footer mx-auto w-50">
      <button
                      type="button"
                      className="btn btn-linn btn-dark"
                      data-dismiss="modal"
                      data-target="#paymentModal"
                      data-toggle="modal"
                    >
                      {" "}
                      Pay <i className="fa-solid fa-caret-right"></i>{" "}
                    </button>{" "}
     
      </div>
    </div>
  </div>
</div>


<div className="modal" id="paymentModal" style={{ display: 'none' }}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" style={{ color: '#333' }}>Payment Details</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => document.getElementById('paymentModal').style.display = 'none'}>
          <span aria-hidden="true">&times;</span>
        </button>
        
      </div>
      <div className="modal-body">
        <form className="text-center">
          <div className="form-group">
            <label htmlFor="cardNumber" style={{ color: '#333' }}>Card Number</label>
            <input type="text" className="form-control" id="cardNumber" required placeholder="Enter card number" />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate" style={{ color: '#333' }}>Expiry Date</label>
            <input type="text" className="form-control" id="expiryDate" required placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv" style={{ color: '#333' }}>CVV</label>
            <input type="text" className="form-control" id="cvv" required placeholder="CVV" />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolderName" style={{ color: '#333' }}>Cardholder Name</label>
            <input type="text" className="form-control" id="cardHolderName" required placeholder="Enter cardholder name" />
          </div>
          <button type="submit" className="btn btn-primary mx-auto">Save Your Card And Pay</button>
          <p className="terms-p">
                    By continuing, you agree to Our
                    <a href="#"> Conditions of Use</a> and
                    <a href="#"> Privacy Notice</a>.
                  </p>
         
        </form>
      </div>
    </div>
  </div>
  
</div>

      </div>
      
      <footer className="footer bg-gray py-3 text-center text-dark">
        <div className="footer-rights">
          <p>© 2024 Baku Electronics. All rights reserved.</p>
          <a
            href="https://www.bakuelectronics.az/privacy-policy.html"
            className="terms-services"
          >
            Terms and Services
          </a>
          <div className="payment methods">
            <h2 className="payment-method">Payment:</h2>
            <img
              className="visa-method"
              src="https://www.bakuelectronics.az/assets/img/visa-pay-logo.svg"
              alt=""
            />
            <img
              className="master-method"
              src="https://www.bakuelectronics.az/assets/img/mastercard.svg"
              alt=""
            />
          </div>
        </div>
      </footer>
      
    </div>
    
  );
}

