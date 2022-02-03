import './App.css';
import SearchBar from './components/SearchBar';
import { useGlobalContext } from './context';

function App() {
  const data = useGlobalContext();
  return (
    <main className="App">
      <SearchBar />
      <h2>{ data }</h2>
    </main>
  );
}

export default App;
