import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

const Input = ({ onChange, onKeyPress, value }) => {
    return(
        <div className="input-block">
            <i className="fas fa-film"></i>
            <input type="text" onChange={onChange} onKeyPress={onKeyPress} value={value} placeholder="Find your film" />
        </div>
    );
};

Input.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string
}

Input.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: ""
}

export default Input;