import React from 'react';

export const RadioField = ({ types = [], name }) =>
  types.map((type, index) => (
    <label>
      {type}
      <input
        type="radio"
        id={type}
        name={name}
        value={type}
        defaultChecked={index === 0}
      />
    </label>
  ));
