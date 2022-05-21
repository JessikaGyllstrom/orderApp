import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState('');
  const [country, setCountry] = useState('');
  const [wage, setWage] = useState(0);

  const addBox = () => {
    Axios.get('http://localhost:3001/api', { 
    name: name, 
    age: age, 
    country: country, 
    position: position, 
    wage: wage,
    }).then(() => {
      console.log("success");
      console.log(name);
    })
  }

  return (
    <div className="App">
      <div className="information">
        <h1>Boxinator</h1>
        <label>Name</label>
        <input type="text" onChange={(event) => {
          setName(event.target.value);
        }}/>
        <label>Age</label>
        <input type="number" onChange={(event) => {
          setAge(event.target.value);
        }}/>        
        <label>Position</label>
        <input type="text" onChange={(event) => {
          setPosition(event.target.value);
        }}/>        
        <label>County</label>
        <input type="text" onChange={(event) => {
          setCountry(event.target.value);
        }}/>          
        <label>Wage per year</label>
        <input type="number" onChange={(event) => {
          setWage(event.target.value);
        }}/>        
        <button onClick={addBox}>Save</button>
      </div>
    </div>
  );
}

export default App;
