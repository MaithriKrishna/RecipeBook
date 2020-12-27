import React from 'react';

export const SelectOptionField = ({ label = '', name = '', options = [] }) => (
  <label>
    {label}
    <select name={name}>
      {options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </select>
  </label>
);
