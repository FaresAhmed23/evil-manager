export const validateField = (value, validations, formData = {}) => {
  for (const validation of validations) {
    const { type, value: ruleValue, message, field } = validation;

    switch (type) {
      case 'required':
        if (!value || value.toString().trim() === '') {
          return message;
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          return message;
        }
        break;

      case 'phone':
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (value && !phoneRegex.test(value)) {
          return message;
        }
        break;

      case 'url':
        if (value) {
          try {
            new URL(value);
          } catch {
            return message;
          }
        }
        break;

      case 'minLength':
        if (value && value.length < ruleValue) {
          return message;
        }
        break;

      case 'maxLength':
        if (value && value.length > ruleValue) {
          return message;
        }
        break;

      case 'min':
        if (value && Number(value) < ruleValue) {
          return message;
        }
        break;

      case 'max':
        if (value && Number(value) > ruleValue) {
          return message;
        }
        break;

      case 'alphanumeric':
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        if (value && !alphanumericRegex.test(value)) {
          return message;
        }
        break;

      case 'password':
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
        if (value && !passwordRegex.test(value)) {
          return message;
        }
        break;

      case 'match':
        if (value !== formData[field]) {
          return message;
        }
        break;

      case 'zipCode':
        const zipRegex = /^\d{5}(-\d{4})?$/;
        if (value && !zipRegex.test(value)) {
          return message;
        }
        break;

      default:
        break;
    }
  }

  return null;
};

export const validateForm = (formData, fieldConfigs) => {
  const errors = {};
  
  fieldConfigs.forEach(field => {
    const error = validateField(
      formData[field.name],
      field.validations,
      formData
    );
    
    if (error) {
      errors[field.name] = error;
    }
  });

  return errors;
};