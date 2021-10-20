import {
  faFacebookSquare,
  faPinterest,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    color: "#E8E8E8",
    backgroundColor: "#212529",
    padding: "20px",
  };

  const socialStyle = {
    fontSize: "40px",
  };

  return (
    <div id="footer" style={footerStyle} className="footer mt-auto">
      <p>© Friends HealthCare</p>
      <p>Contact: +880 2441139</p>
      <small>Email: friendshealthcarebd@gmail.com</small>
      <div style={socialStyle} className="text-decoration-none">
        <a
          href="https://www.facebook.com/FriendsHealthCareBD"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-secondary m-4"
        >
          <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
        </a>
        <a
          href="https://www.youtube.com/channel/UCQ63j7sgWDca6hvnsVhdeqA"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-secondary m-4"
        >
          <FontAwesomeIcon icon={faYoutubeSquare}></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default Footer;
