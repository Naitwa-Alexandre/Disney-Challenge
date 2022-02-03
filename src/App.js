import './App.css';
import { useGlobalContext } from './context';

function App() {
  const data = useGlobalContext();
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>{ data }</h2>
    </div>
  );
}

export default App;
