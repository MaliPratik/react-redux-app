import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Entry from './components/Entry';


function App() {
  return (
    <div className='container'>
      <h1>React Redux App</h1>
      <Display/>
      <hr/>
      <Entry/>
    </div>
  );
}

export default App;
