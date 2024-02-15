import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFormData } from './formSlice';
import './Field.css';

function Form() {
  const formData = useSelector(selectFormData);

  const [form, setForm] = useState({});

  const initialFormFields = formData.map((field) => ({ ...field }));

  const handleInputChange = (event) => {
    const {
      id, type, value, checked,
    } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form>
      {initialFormFields.map((field) => (
        <div key={field.id} className="form-container">
          <div className="label-container">
            <label className="field-label" htmlFor={field.id}>
              {field.label}
            </label>
          </div>
          {field.type === 'select' && (
            <select
              id={field.id}
              onChange={handleInputChange}
              className="select-field"
            >
              <option value="">
                Select
                {' '}
                {field.label}
              </option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}

          {field.type === 'radio' && (
            <div className="input-container">
              {field.options.map((option) => (
                <div key={option} className="radio-option">
                  <input
                    type="radio"
                    id={option}
                    name={field.id}
                    value={option}
                    onChange={handleInputChange}
                  />
                  <label htmlFor={option} className="radio-label">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}

          {field.type !== 'radio' && field.type !== 'select' && (
            <input
              type={field.type}
              id={field.id}
              value={form[field.id] || ''}
              onChange={handleInputChange}
              className="input-container"
            />
          )}
        </div>
      ))}
    </form>
  );
}

export default Form;
