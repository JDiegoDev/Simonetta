import './App.scss';
import ComingSoon from './components/ComingSoon';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  // temporary validation until other components are done
  const isComingSoonRoute = window.location.pathname === '/';

  return (
    <BrowserRouter>
      <div>
        {!isComingSoonRoute && <Header /> }
        <Routes>
          <Route exact path="/" element={<ComingSoon />} />
          <Route exact path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;