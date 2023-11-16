import './App.scss';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from './components/Header';
import Menu from './pages/Menu';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Reservations from './pages/Reservations';

function App() {
  const PageLayout = () => (
    <>
      <Header />
      <Outlet />
    </>
  );

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<PageLayout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/reservaciones" element={<Reservations />} />
          </Route>
          <Route exact path="/admin/login" element={<Login />} />
          <Route path="*" element={<h1>Page not Found!</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;