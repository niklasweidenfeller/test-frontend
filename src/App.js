import logo from './logo.svg';
import './App.css';
import axios from "axios";

function onButtonPress() {
  let movies;

  axios.get("https://testprojectniklas-backend.herokuapp.com/movies")
  .then(function (response) {
    // handle success
    alert(response.data);
    movies = response.data;
  })
  .catch(function (error) {
    // handle error
    alert(error);
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Just a test :-)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onButtonPress}>get Movies from backend</button>
      </header>
    </div>
  );
}

export default App;
