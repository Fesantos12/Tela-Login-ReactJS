import {BrowserRouter as Router, Swith, Route, Routes, Link} from 'react-router-dom'

import './App.css'
import Index from './components/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
    </Router>
  );
}

export default App;
