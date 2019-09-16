import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";

function CustomNavDropDown(props) {
  return (
    <NavDropdown title={props.title}>
      {props.buttons.map(button => {
        let style = button.disabled ? { color: "orange" } : {};
        return (
          <React.Fragment key={button.text}>
            <NavDropdown.Item
              as={Link}
              disabled={button.disabled}
              to={button.link}
              href="#"
              style={style}
            >
              {button.text}
            </NavDropdown.Item>
            {button.divider && <NavDropdown.Divider />}
          </React.Fragment>
        );
      })}
    </NavDropdown>
  );
}

CustomNavDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
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
