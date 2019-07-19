import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, value, className }) => (
    <button className={className} onClick={onClick}>{value}</button>
);

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    value: PropTypes.string
}

Button.defaultProps = {
    onClick: () => {},
    className: "",
    value: ""
}

export default Button;