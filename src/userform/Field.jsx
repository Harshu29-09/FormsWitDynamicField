import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFormData } from './formSlice';
import './Field.css';

function Field() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: '',
    label: '',
    type: '',
    options: [''],
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  const handleOption = (index, value) => {
    const newOptions = [...form.options];
    newOptions[index] = value;
    setForm((prevForm) => ({ ...prevForm, options: newOptions }));
  };

  const handleAdd = () => {
    setForm((prevForm) => ({ ...prevForm, options: [...prevForm.options, ''] }));
  };

  const handleDelete = (index) => {
    setForm((prevForm) => ({
      ...prevForm,
      options: prevForm.options.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFormData(form));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <div className="field-container">
          <label className="field-label" htmlFor="id">
            Id
            <div className="input-container">
              <input type="text" name="text" id="id" onChange={handleChange} className="input-field" />
            </div>
          </label>
        </div>
        <div className="field-container">
          <label className="field-label" htmlFor="label">
            Label
            <div className="input-container">
              <input type="text" id="label" onChange={handleChange} className="input-field" />
            </div>
          </label>
        </div>
        <div className="field-container">
          <label className="field-label" htmlFor="type">
            Type
            <div className="input-container">
              <select name="type" id="type" onChange={handleChange} value={form.type} className="input-field">
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="radio">Radio</option>
                <option value="select">Select</option>
              </select>
            </div>
          </label>
        </div>
        {(form.type === 'radio' || form.type === 'select') && (
          <div className="options-container">
            <label className="field-label" htmlFor="Options">
              Options
              {form.options.map((option, index) => (
                <div className="option-container">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOption(index, e.target.value)}
                    className="input-field margin-left"
                  />
                  <button type="button" className="delete-button" onClick={() => handleDelete(index)}>
                    DELETE
                  </button>
                </div>
              ))}
            </label>
            <button type="button" onClick={handleAdd} className="add-button margin-left">
              +
            </button>
          </div>
        )}
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  );
}

export default Field;
