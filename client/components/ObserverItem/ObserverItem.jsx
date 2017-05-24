import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';

const getFilename = (path) => {
  const parts = path.split('/');
  return parts[parts.length - 1];
};

const ObserverItem = ({ item }) => (
  <div className={theme.observerItem}>
    <h2 className={theme.message}>{item.message}</h2>
    <div className={theme.info}>
      <span className={theme.special}>{getFilename(item.fileName)}</span> -&nbsp;
      <span className={theme.special}>{item.functionName}</span> function&nbsp;
      in <span className={theme.special}>{getFilename(item.fileName)}</span>&nbsp;
      at <span className={theme.special}>{item.lineNumber}:{item.columnNumber}</span>
    </div>
  </div>
);

ObserverItem.propTypes = {
  item: PropTypes.shape({
    message: PropTypes.string,
    functionName: PropTypes.string,
    fileName: PropTypes.string,
    lineNumber: PropTypes.number,
    columnNumber: PropTypes.number,
  }),
};

export default ObserverItem;
