import React from 'react';

const FormInput = ({ field, value, error, onChange, onBlur }) => {
  const { id, name, type, label, placeholder } = field;

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={`form-control ${error ? 'error' : ''}`}
            rows="4"
          />
        );

      case 'checkbox':
        return (
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id={id}
              name={name}
              checked={value || false}
              onChange={(e) => onChange({
                target: { name, value: e.target.checked }
              })}
              className="checkbox-input"
            />
            <label htmlFor={id} className="checkbox-label">
              {label}
            </label>
          </div>
        );

      default:
        return (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={`form-control ${error ? 'error' : ''}`}
          />
        );
    }
  };

  if (type === 'checkbox') {
    return (
      <div className="form-group checkbox-group">
        {renderInput()}
        {error && <span className="error-message">{error}</span>}
      </div>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
        {field.validations.some(v => v.type === 'required') && (
          <span className="required">*</span>
        )}
      </label>
      {renderInput()}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default FormInput;