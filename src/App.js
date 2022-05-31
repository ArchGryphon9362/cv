import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <p>Main App</p>
      <Link to='/'>About</Link>
      <br />
      <Link to='/projects'>Projects</Link>
    </div>
  );
}

export default App;
