import PropTypes from 'prop-types';
import React from 'react';

const Loader = ({ message }) => (
  <div className="ui active dimmer">
    <div className="ui big text loader">{message}</div>
  </div>
);

Loader.propTypes = {
  message: PropTypes.string,
};

Loader.defaultProps = {
  message: 'Loaging...',
};

export default Loader;
