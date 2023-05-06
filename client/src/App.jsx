import ComingSoon from './components/ComingSoon';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
           <Route exact path="/" element={<ComingSoon />} />
         </Routes>
        </div>
        </BrowserRouter>
    </>
  )
}

export default App
