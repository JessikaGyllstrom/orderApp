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
      <form>
        <h1>Boxinator</h1>
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
          <select 
          id="destinationCountry" 
          name="destinationCountry"
          value="Sweden"
          placeholder='select country...'
          onChange={handleChangedValues}
          >
          <option value="default" disabled hidden>
          Choose country
          </option>
            <option value="Sweden">Sweden</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
            <option value="Australia">Australia</option>
          </select>
   
        <button 
            onClick={() => handleClickButton()} 
            >
            Save
        </button>
      </form>   
    </div>
  );
}

export default App;