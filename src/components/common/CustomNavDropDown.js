import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";

function CustomNavDropDown(props) {
  return (
    <NavDropdown title={props.title}>
      {props.buttons.map(button => {
        let index = props.buttons.indexOf(button);
        let style = button.disabled ? { color: "orange" } : {};

        return (
          <>
            <NavDropdown.Item
              key={index}
              as={Link}
              disabled={button.disabled}
              to={button.link}
              href="#"
              style={style}
            >
              {button.text}
            </NavDropdown.Item>
            {button.divider && <NavDropdown.Divider />}
          </>
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
  ),
  disabled: PropTypes.bool,
  divider: PropTypes.bool
};

export default CustomNavDropDown;
