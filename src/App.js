import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
     <h1> First React App</h1>
     <img src="https://images.unsplash.com/photo-1619157267030-1e13d0d0a23e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1238&q=80"alt="" srcSet=""></img>
      <button onClick={BuyCar}>Buy Car</button>
      </header>
    </div>
  );
}

function BuyCar(){
  alert("You Clicked Me!");
}
export default App;
