import './App.scss';
import ComingSoon from './components/ComingSoon';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Header /> */}
        <Routes>
        <Route exact path="/" element={<ComingSoon />} />
        <Route exact path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;