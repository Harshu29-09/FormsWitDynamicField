import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Form from './userform/Form';
import Field from './userform/Field';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3 style={{ position: 'relative', left: '30%' }}>Dynamic Field</h3>
        <Field />
        <h3 style={{ position: 'relative', left: '30%' }}>Dynamic Form</h3>
        <Form />
      </div>
    </Provider>
  );
}

export default App;
