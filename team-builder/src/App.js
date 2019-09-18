import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';


// the initial
const demoTeamData = [
  {
    name: 'Uzo',
    email: 'dddd@gmail.com',
    role: 'UI',
  }
]
const initialFormData = {
  name: "",
  email: "",
  role: ""
}

function App(props) {
  const [teamMember, setTeamMember] = useState(demoTeamData);
  const [formData, setFormData] = useState(initialFormData);

  const onChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {     teamMember.map(team => 
          <div>
            <h2>{team.name}</h2>
          </div>
          )
      }
      <Form 
       onChange={onChange}
       formData={formData}
      />

    </div>
  );
}

export default App;
