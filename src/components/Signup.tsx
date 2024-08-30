import React, { useState } from 'react';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const errors: Partial<FormData> = {};

    if (!formData.username) {
      errors.username = 'Username is required';
    }if(formData.username === "number"){
        errors.username="Incorrect name";
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data:', formData);
      alert('Sign Up Successful!');
      setFormData({ username: '', email: '', password: '', confirmPassword: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
        {formErrors.username && <p style={{ color: 'red' }}>{formErrors.username}</p>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
        {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
        {formErrors.password && <p style={{ color: 'red' }}>{formErrors.password}</p>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
        {formErrors.confirmPassword && (
          <p style={{ color: 'red' }}>{formErrors.confirmPassword}</p>
        )}
      </div>
      <button type="submit" style={{ padding: '10px 15px', fontSize: '16px' }}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
