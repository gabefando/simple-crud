import './App.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [type, setService] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <div className="App">
      <div className='information'>
        <label>Client/company name:</label>
        <input type="text"/>
        <label>Phone number:</label>
        <input type="text"/>
        <label>Address:</label>
        <input type="text"/>
        <label>Type of service:</label>
        <select id="serviceType">
          <option selected="selected">Choose...</option>
          <option>One time service</option>
          <option>Repeated service</option>
        </select>
        <label>Price (per service):</label>
        <input type="number"/>
        <label>Service description:</label>
        <textarea type="text"/>
        <button>Add Client</button>
      </div>
  </div>
  );
}

export default App;
