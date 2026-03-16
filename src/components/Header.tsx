import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <button className="menu">☰</button>
        <button className="offer">Agent Offer</button>
      </div>

      <div className="right">
        <button className="logout">Sign out</button>
        <span className="code">BSF1010PRO</span>
      </div>
    </div>
  );
};

export default Header;