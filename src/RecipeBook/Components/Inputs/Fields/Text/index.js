import React from 'react';

export const TextField = ({
  name = '',
  type = 'small',
  label = '',
  className = '',
  fieldClassName,
}) => (
  <label className={className}>
    {label}
    {type === 'large' ? (
      <textarea name={name} className={fieldClassName} />
    ) : (
      <input type="text" name={name} className={fieldClassName} />
    )}
  </label>
);
