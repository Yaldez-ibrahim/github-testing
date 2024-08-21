import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './pages/NavBar/NavBar';
import Collections from './pages/Collections/Collections';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
 return(
  <main>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route path="Collections" element={<Collections/>}></Route>
        <Route path="Men" element={<Men/>}></Route>
        <Route path="Women" element={<Women/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </main>
 )
}

export default App
