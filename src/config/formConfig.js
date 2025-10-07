export const formFields = [
  {
    id: 'firstName',
    name: 'firstName',
    type: 'text',
    label: 'First Name',
    placeholder: 'Enter your first name',
    validations: [
      { type: 'required', message: 'First name is required' },
      { type: 'minLength', value: 2, message: 'Must be at least 2 characters' },
      { type: 'maxLength', value: 50, message: 'Must be less than 50 characters' }
    ]
  },
  {
    id: 'lastName',
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
    placeholder: 'Enter your last name',
    validations: [
      { type: 'required', message: 'Last name is required' },
      { type: 'minLength', value: 2, message: 'Must be at least 2 characters' }
    ]
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email Address',
    placeholder: 'example@email.com',
    validations: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email' }
    ]
  },
  {
    id: 'phone',
    name: 'phone',
    type: 'tel',
    label: 'Phone Number',
    placeholder: '+1 (555) 123-4567',
    validations: [
      { type: 'required', message: 'Phone number is required' },
      { type: 'phone', message: 'Please enter a valid phone number' }
    ]
  },
  {
    id: 'age',
    name: 'age',
    type: 'number',
    label: 'Age',
    placeholder: 'Enter your age',
    validations: [
      { type: 'required', message: 'Age is required' },
      { type: 'min', value: 18, message: 'Must be at least 18 years old' },
      { type: 'max', value: 120, message: 'Please enter a valid age' }
    ]
  },
  {
    id: 'dateOfBirth',
    name: 'dateOfBirth',
    type: 'date',
    label: 'Date of Birth',
    validations: [
      { type: 'required', message: 'Date of birth is required' }
    ]
  },
  {
    id: 'address',
    name: 'address',
    type: 'text',
    label: 'Street Address',
    placeholder: '123 Main Street',
    validations: [
      { type: 'required', message: 'Address is required' },
      { type: 'minLength', value: 5, message: 'Address is too short' }
    ]
  },
  {
    id: 'city',
    name: 'city',
    type: 'text',
    label: 'City',
    placeholder: 'New York',
    validations: [
      { type: 'required', message: 'City is required' }
    ]
  },
  {
    id: 'state',
    name: 'state',
    type: 'text',
    label: 'State/Province',
    placeholder: 'NY',
    validations: [
      { type: 'required', message: 'State is required' }
    ]
  },
  {
    id: 'zipCode',
    name: 'zipCode',
    type: 'text',
    label: 'ZIP/Postal Code',
    placeholder: '10001',
    validations: [
      { type: 'required', message: 'ZIP code is required' },
      { type: 'zipCode', message: 'Please enter a valid ZIP code' }
    ]
  },
  {
    id: 'country',
    name: 'country',
    type: 'text',
    label: 'Country',
    placeholder: 'United States',
    validations: [
      { type: 'required', message: 'Country is required' }
    ]
  },
  {
    id: 'username',
    name: 'username',
    type: 'text',
    label: 'Username',
    placeholder: 'Choose a username',
    validations: [
      { type: 'required', message: 'Username is required' },
      { type: 'minLength', value: 4, message: 'Username must be at least 4 characters' },
      { type: 'alphanumeric', message: 'Username can only contain letters and numbers' }
    ]
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Create a strong password',
    validations: [
      { type: 'required', message: 'Password is required' },
      { type: 'minLength', value: 8, message: 'Password must be at least 8 characters' },
      { type: 'password', message: 'Password must contain uppercase, lowercase, number, and special character' }
    ]
  },
  {
    id: 'confirmPassword',
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    placeholder: 'Re-enter your password',
    validations: [
      { type: 'required', message: 'Please confirm your password' },
      { type: 'match', field: 'password', message: 'Passwords do not match' }
    ]
  },
  {
    id: 'company',
    name: 'company',
    type: 'text',
    label: 'Company Name',
    placeholder: 'Your company',
    validations: [
      { type: 'minLength', value: 2, message: 'Company name is too short' }
    ]
  },
  {
    id: 'jobTitle',
    name: 'jobTitle',
    type: 'text',
    label: 'Job Title',
    placeholder: 'Software Developer',
    validations: [
      { type: 'required', message: 'Job title is required' }
    ]
  },
  {
    id: 'website',
    name: 'website',
    type: 'url',
    label: 'Website',
    placeholder: 'https://example.com',
    validations: [
      { type: 'url', message: 'Please enter a valid URL' }
    ]
  },
  {
    id: 'linkedin',
    name: 'linkedin',
    type: 'url',
    label: 'LinkedIn Profile',
    placeholder: 'https://linkedin.com/in/username',
    validations: [
      { type: 'url', message: 'Please enter a valid URL' }
    ]
  },
  {
    id: 'bio',
    name: 'bio',
    type: 'textarea',
    label: 'Biography',
    placeholder: 'Tell us about yourself...',
    validations: [
      { type: 'maxLength', value: 500, message: 'Bio must be less than 500 characters' }
    ]
  },
  {
    id: 'newsletter',
    name: 'newsletter',
    type: 'checkbox',
    label: 'Subscribe to newsletter',
    validations: []
  }
];