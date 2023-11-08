import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Menu from './pages/Menu';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  const isLoginRoute = window.location.pathname === '/admin/login';

  return (
    <BrowserRouter>
      <div>
      {!isLoginRoute && <Header /> }
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/admin/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;