import React from 'react';

export const NumberField = ({
  name = '',
  min = '0',
  max = '100',
  label = '',
  className = '',
  fieldClassName,
}) => (
  <label className={className}>
    {label}
    <input
      type="number"
      name={name}
      min={min}
      max={max}
      className={fieldClassName}
    />
  </label>
);
