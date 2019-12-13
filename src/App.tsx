import React from 'react';
import Form from 'react-jsonschema-form';
import './App.css';

const schema = {
  title: 'First name',

};

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit
        {' '}
        <code>src/App.tsx</code>
        {' '}
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <div>
      <Form schema={schema} />
    </div>
  </div>
);

export default App;
