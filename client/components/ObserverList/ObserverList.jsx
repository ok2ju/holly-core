import React from 'react';
import PropTypes from 'prop-types';
import ObserverItem from '../ObserverItem';
import theme from './theme.css';

const ObserverList = ({ messages }) => (
  <div className={theme.observerList}>
    {messages.map((message, index) => (
      <ObserverItem
        key={index}
        item={message}
      />
    ))}
  </div>
);

ObserverList.propTypes = {
  messages: PropTypes.array,
};

export default ObserverList;
