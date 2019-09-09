import React from "react";
import { SocialIcon } from "react-social-icons";
import PropTypes from "prop-types";

function FooterSocial(props) {
  let size = "3.5rem";
  let socialStyle = {
    height: size,
    width: size,
    marginRight: "5px"
  };
  let containerStyle = { height: size };

  return (
    <div className="ml-2 mb-3" style={containerStyle}>
      <SocialIcon url={props.link} className="float-left" style={socialStyle} />
      <a href={props.link} style={{ padding: "0.25rem" }}>
        <b style={{ fontSize: "1.2rem" }}>{props.action}</b>
        <br />
        <p style={{ display: "inline", padding: "0.25rem" }}>
          {"on " + props.socialName}
        </p>
      </a>
    </div>
  );
}

FooterSocial.propTypes = {
  link: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  socialName: PropTypes.string.isRequired
};

export default FooterSocial;
