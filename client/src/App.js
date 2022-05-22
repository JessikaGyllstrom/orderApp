import React, {useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [values, setValues] = useState();
  console.log(values);
  const handleChangedValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue, 
      [value.target.name]: value.target.value, 
    }))
  };
 
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register",{
    receiverName: values.receiverName, 
    weight: values.weight, 
    boxcolor: values.boxcolor, 
    destinationCountry: values.destinationCountry, 
    }) .then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="container">
      <div className="form">
        <label>Name: </label>
          <input 
          type="text" 
          name="receiverName"
          onChange={handleChangedValues}
        />
        <label>Weight: </label>
        <input 
          type="text" 
          name="weight"
          onChange={handleChangedValues}
        />
        <label>Select box-color</label>
        <input type="color" id="boxcolor" name="boxcolor"
          onChange={handleChangedValues}
        />

        <label>Country: </label>
          <select id="destinationCountry" name="destinationCountry"
          onChange={handleChangedValues}
          >
            <option value="Sweden">Sweden</option>
            <option value="China">China</option>
            <option value="Fiat">Brazil</option>
            <option value="Audi">Australia</option>
          </select>
   
        <button 
            onClick={() => handleClickButton()} 
            >
            Save
        </button>
      </div>
    
    </div>
  );
}

export default App;