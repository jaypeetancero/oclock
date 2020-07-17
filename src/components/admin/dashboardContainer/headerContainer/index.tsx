import React from "react";

const HeaderContainer = () => {
  return (
    <div className="col-12 w-100 bg-dark d-flex align-items-center justify-content-between p-2 shadow">
      <span className="h3 text-white">O-Clock HRIS v2</span>
      <div className="d-flex align-items-center">
        <span className="h4 text-white mr-3">Jaypee Tan</span>
        <img
          src="https://i.ya-webdesign.com/images/businessman-png-icon-1.png"
          alt="user-profile"
          height="50px"
          width="50px"
        />
      </div>
    </div>
  );
};

export default HeaderContainer;
