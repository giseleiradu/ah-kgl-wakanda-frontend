import React from 'react';
import { PropTypes } from 'prop-types';
import './Button.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import google from '../../../assets/images/google.png';
import facebook from '../../../assets/images/facebook.png';
import twitter from '../../../assets/images/twitter.png';

/**
 * Switch button icons
 * @param {*} name
 * @returns {object} Icon
 */
const setIcon = name => {
  switch (name) {
    case 'google':
      return google;
    case 'facebook':
      return facebook;
    case 'twitter':
      return twitter;
    default:
      return null;
  }
};

/**
 * Change the element
 * opacity
 *
 * @param {*} e
 * @param {*} value
 * @returns {void}
 */
const changeOpacity = (e, value) => {
  e.target.style.opacity = value;
};

/**
 * Shared button component
 * @param {object} props
 * @returns {object} Jsx component
 */
const Button = ({ social, text, color, full, size, disabled, icon, loading, outline }) => {
  return (
    <React.Fragment>
      {!social ? (
        <div
          role="button"
          tabIndex="-1"
          className="ah-button"
          style={{
            backgroundColor: outline ? '#fff' : color || null,
            color: outline ? color : null,
            border: outline ? '1px solid #f46036' : null,
            display: full ? 'block' : 'inline-block',
            fontSize: `${size}px`,
            opacity: disabled ? 0.8 : 1,
          }}
          onMouseDown={e => (!disabled ? changeOpacity(e, 0.8) : null)}
          onMouseUp={e => (!disabled ? changeOpacity(e, 1) : null)}
        >
          {loading ? <div className="spinner" /> : null}
          {icon ? (
            <FontAwesomeIcon icon={icon} className="ah-icon" style={{ fontSize: `${size}px` }} />
          ) : null}
          <span>{text}</span>
        </div>
      ) : (
        <div className="social" style={{ width: `${size + 6}px`, height: `${size + 6}px` }}>
          <img src={setIcon(social)} style={{ width: size ? `${size}px` : '40px' }} alt="" />
        </div>
      )}
    </React.Fragment>
  );
};

Button.defaultProps = {
  social: null,
  text: '',
  color: '#f46036',
  full: false,
  size: 14,
  disabled: false,
  icon: null,
  loading: false,
  outline: false,
};

Button.propTypes = {
  social: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  full: PropTypes.bool,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  icon: PropTypes.any,
  loading: PropTypes.bool,
  outline: PropTypes.bool,
};

export default Button;