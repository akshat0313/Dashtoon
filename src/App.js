import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageComponent from './components/createPost';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router >
      <div className="bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/image" element={<ImageComponent  />}  />
      </Routes>
      </div>
    </Router>
  );  
}

export default App;
