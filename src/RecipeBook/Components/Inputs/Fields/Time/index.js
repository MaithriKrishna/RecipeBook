import React from 'react';

export const TimeField = ({
  name = '',
  minTime = '0',
  maxTime = '60',
  label = '',
  className = '',
  fieldClassName,
}) => (
  <label className={className}>
    {label}
    <input
      type="number"
      name={name}
      min={minTime}
      max={maxTime}
      className={fieldClassName}
    />
  </label>
);
