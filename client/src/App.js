import './App.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [type, setService] = useState('');
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState('');

  const displayInfo = () => {
    console.log(name + phone + address + type + price + desc);
  };
  return (
    <div className="App">
      <div className='information'>
        <label>Client/company name:</label>
        <input type="text" onChange={(event) => {
              setName(event.target.value);
            }}
          />
        <label>Phone number:</label>
        <input type="text" onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        <label>Address:</label>
        <input type="text"onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        <label>Type of service:</label>
        <select onChange={(event) => {
              setService(event.target.value);
            }}>
          <option>Choose...</option>
          <option>One time service</option>
          <option>Repeated service (weekly)</option>
          <option>Repeated service (bi-weekly)</option>
          <option>Repeated service (monthly)</option>
        </select>
        <label>Price (per service):</label>
        <input type="number" onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        <label>Service description:</label>
        <textarea type="text" onChange={(event) => {
              setDesc(event.target.value);
            }}
          />
        <button onClick={displayInfo}>Add Client</button>
      </div>
  </div>
  );
}

export default App;
