import './App.css';

function App() {
  return (
    <div className="App">
      <label>Client/company name:</label>
      <input type="text"/>
      <label>Phone number:</label>
      <input type="number"/>
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
  </div>
  );
}

export default App;
