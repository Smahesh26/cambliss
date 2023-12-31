import React from "react";

const CouponInfoForm = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="checkout-coupon">
        <input type="text" placeholder="Coupon Code" required />
        <div className="bd-coupon-btn">
          <button className="fill-btn" type="submit">
            Apply Coupon
          </button>
        </div>
      </div>
    </form>
  );
};

export default CouponInfoForm;
