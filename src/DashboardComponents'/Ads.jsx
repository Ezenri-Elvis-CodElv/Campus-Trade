import React from "react";
import "./ads.css";

const Ads = () => {
  return (
    <div className="ads-post-body">
      <div className="ads-post-name-holder">
        <h1 className="ads-user-name">Welcome User !</h1>
        <p className="asd-user-message">we're happy to have you here</p>
      </div>
      <section className="ads-payment-holder">
        <div className="ads-text">
          <h1 className="ads-promote">Promote your ads</h1>
        </div>
        <div className="ads-product-selection">
          <div className="ads-selection-holder">
            <div className="ads-product-name">
              <p>Product name</p>
            </div>
            <div className="ads-product-eg">
              <input
                type="text"
                placeholder="Eg Iphone xr, foams, hp laptops, Nike shoes etc"
              />
            </div>
          </div>

            <div className="ads-selection-holder">
              <div className="ads-product-name">
                <p>Categories</p>
              </div>
              <div className="ads-product-eg">
                <input type="text" placeholder="Gadgets" />
              </div>
            </div>
        </div>
<<<<<<< HEAD
        
=======
>>>>>>> 8c227aaa1bc0f41ac3234cab32fc1cda5f228aa9
        <div className="ads-payment">
          <div className="ads-payment-selection">
            <div className="ads-selection-text">Top</div>
            <div className="ads-price-description">
              <span className="ads-seven-days">7 days</span>
              <span className="ads-thirty-days">30 days</span>
              <span className="ads-price">₦ 3000</span>
            </div>
          </div>

          <div className="ads-payment-selection">
            <div className="ads-selection-text">Boost premium promo</div>
            <div className="ads-price-description">
              <span className="ads-promo-days">1 month</span>
              <span className="ads-promo-thirty-days"></span>
              <span className="ads-promo-price">₦ 27000</span>
            </div>
          </div>
        </div>
        <div className="ads-img-upload">
          <div className="ads-img"></div>
          <div className="ads-img-text"></div>
        </div>

        <div className="ads-payment-btn">
<button className="ads-btn">continue with payment</button>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default Ads;
=======
export default Ads;
>>>>>>> 8c227aaa1bc0f41ac3234cab32fc1cda5f228aa9
