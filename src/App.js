import './App.css';
import Home from './pages/Home';
import CardDetails from './pages/CardDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/:id" element={ <CardDetails /> } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
