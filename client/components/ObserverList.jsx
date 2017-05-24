import React from 'react';

const ObserverList = ({ errors }) => (
  <div>
    <ul>
      {errors.map((error, index) => (
        <li key={index}>{error.message}</li>
      ))}
    </ul>
  </div>
);

export default ObserverList;
