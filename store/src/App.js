import Navbar from './Navbar';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import firebase from './Firebase';

import './App.css';

function App() {
  return (
<>
<Navbar />

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="shop" element={<Shop />} />
</Routes>
</>
  );
}

export default App;
