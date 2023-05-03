import React from "react";
import "./styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info_page">
        <p>Infinite Insights</p>
        <small>Discover a unique perspective on Infinite Insights</small>
      </div>
      <div className="footer__info_developers">
        <p>Copyright &copy; 2023 Infinite Insights</p>
        <p>
          developed by: <span className="footer_name">Benjamin Flores</span> And{" "}
          <span className="footer_name">Luis Avendaño</span>
        </p>
      </div>
    </footer>
  );
};
