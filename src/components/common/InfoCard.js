import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function InfoCard(props) {
  const charLimit = 280;
  const bodyText =
    props.text.length > charLimit
      ? props.text.slice(0, charLimit) + "... "
      : props.text;

  return (
    <div className="media" style={{ minHeight: "200px" }}>
      <img
        src={props.img}
        alt={props.alt}
        className="align-self-center mr-3 d-none d-xl-block"
        style={{ width: "300px", marginLeft: "3rem" }}
      />
      <div className="align-self-center media-body">
        <h2 className="text-center text-xl-left">{props.header}</h2>
        <img
          src={props.img}
          alt={props.alt}
          className="mx-auto mb-2 d-block d-xl-none"
          style={{ width: "300px", marginLeft: "3rem" }}
        />
        <p className="text-center text-xl-left">
          {bodyText}
          {props.text.length > charLimit && (
            <Link to={props.link}>Read More</Link>
          )}
        </p>
      </div>
    </div>
  );
}

InfoCard.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default InfoCard;
