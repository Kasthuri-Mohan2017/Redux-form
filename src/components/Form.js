import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm, resetForm } from '../formSlice';
import './Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    dispatch(updateForm({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      console.log('Form Submitted', formData);
      dispatch(resetForm());
      setError('');
    } else {
      setError('All fields are required!');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
