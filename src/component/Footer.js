import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="social-icons">
          <a href="#" class="fab fa-lg fa-linkedin"></a>
          <a
            href="mailto:youremail@example.com"
            class="fas fa-lg   fa-envelope"
          ></a>
          <a href="#" class="fab fa-lg  fa-instagram"></a>
        </div>
        <div className="thank">
          <p>Thank You For Visiting Page !</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
