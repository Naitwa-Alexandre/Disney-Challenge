import './App.css';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import PaginationOutlined from './components/PaginationOutlined';

function App() {
  return (
    <main className="App">
      <SearchBar />
      <Cards />
      <PaginationOutlined />
    </main>
  );
}

export default App;
