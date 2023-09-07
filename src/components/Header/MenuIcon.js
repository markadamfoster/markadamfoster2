import React from "react";
import PropTypes from "prop-types";
import { FiMenu, FiX } from "react-icons/fi";

import { colors } from "Constants";

MenuIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export function MenuIcon({ isOpen }) {
  if (isOpen) {
    return <FiX color={colors.textDark} />;
  } else {
    return <FiMenu style={{ opacity: 0.4 }} />;
  }
}
