import './App.css';
import { useState } from "react";
import Axios from 'axios'
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [type, setService] = useState('');
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState('');

  const [clientList, setClientList] = useState([]);

  const addClient = () => {
    Axios.post('http://localhost:3001/create',{
      name: name,
      phone: phone,
      address: address,
      type: type,
      price: price,
      desc: desc
    }).then(() => {
      console.log("success");
    });
  };

const getClients = () => {
  Axios.get('http://localhost:3001/clients',).then((response) => {
      setClientList(response.data)
    });
}

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
        <button onClick={addClient}>Add Client</button>
      </div>
      <div className='clients'>
        <button onClick={getClients}>Show All Clients</button>

        {clientList.map((val, key) => {
          return (
            <div className='client'>
              <h3>Name: {val.name}</h3>
              <h3>Tel: {val.phone}</h3>
              <h3>Address: {val.address}</h3>
              <h3>Type: {val.serviceType}</h3>
              <h3>Price: {val.price}$</h3>
              <h3>Description: {val.serviceDesc}</h3>
            </div>
          )
        })}
      </div>
  </div>
  );
}

export default App;
