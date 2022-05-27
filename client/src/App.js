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
    Axios.post("http://localhost:8080/addbox",{
    receiverName: values.receiverName, 
    weight: values.weight, 
    boxcolor: values.boxcolor, 
    destinationCountry: values.destinationCountry, 
    shippingCost: 123,
    }) .then(() => {
      console.log("Success!");
    });
  };
  useEffect(() => {
    Axios.get("http://localhost:8080/listboxes")
    .then((response) => {
      setBoxList(response.data)
    });
  }, []);
  return (
    <div className="container">
      <form>
        <h1>Boxinator</h1>
        <label>Name: </label>
          <input 
          type="name" 
          name="receiverName"
          required
          onChange={handleChangedValues}
        />
        <label>Weight: </label>
        <input 
          type="number" 
          name="weight"
          min="1"
          required
          onChange={handleChangedValues}
        />
        <label>Select box-color</label>
        <input type="color" 
          id="boxcolor" 
          name="boxcolor"
          required
          onChange={handleChangedValues}
        />
          <select 
          id="destinationCountry" 
          name="destinationCountry"
          required
          onChange={handleChangedValues}
          >
            <option value=""></option>
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
        <table>
          <thead>
            <tr>
              <th>Receiver</th>
              <th>Weight</th>
              <th>Box Color</th>
              <th>Shipping cost</th>
            </tr>
          </thead>
          <tbody>
            {boxList.map((val, key) => {
          return (
            <tr key={key}>
              <td>{ val.receiverName }</td>
              <td>{val.weight}</td>
              <td 
              style={{
                backgroundColor: val.boxcolor
              }}>
              </td>
              <td>{ val.shippingCost }</td>
            </tr>
          );
        })}
        </tbody>
      </table>  
    </div>
  )}
export default App;