import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Menu from './pages/Menu';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;