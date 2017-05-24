import React from 'react';
import PropTypes from 'prop-types';
import ObserverItem from '../ObserverItem';
import theme from './theme.css';

const ObserverList = ({ errors }) => (
  <div className={theme.observerList}>
    {errors.map((error, index) => (
      <ObserverItem
        key={index}
        item={error}
      />
    ))}
  </div>
);

ObserverList.propTypes = {
  errors: PropTypes.array,
};

export default ObserverList;
