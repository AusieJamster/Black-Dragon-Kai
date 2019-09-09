import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";

function CustomNavDropDown(props) {
  return (
    <NavDropdown title={props.title}>
      {props.buttons.map(button => {
        let index = props.buttons.indexOf(button);
        return (
          <NavDropdown.Item key={index} as={Link} to={button.link} href="#">
            {button.text}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}

CustomNavDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  )
};

export default CustomNavDropDown;
