import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HomePage/>
    </div>
  );
}

export default App;
