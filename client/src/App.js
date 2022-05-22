import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';


function App() {
  const [values, setValues] = useState();
  const [boxList, setBoxList] = useState([]);

  const handleChangedValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue, 
      [value.target.name]: value.target.value, 
    }))
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/addbox",{
    receiverName: values.receiverName, 
    weight: values.weight, 
    boxcolor: values.boxcolor, 
    destinationCountry: values.destinationCountry, 
    }) .then(() => {
      console.log("Success!");
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
          <select 
          id="destinationCountry" 
          name="destinationCountry"
          onChange={handleChangedValues}
          >
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