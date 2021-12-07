import React from 'react';
import { Routes, Route } from "react-router-dom"
import ContactPage from "./pages/ContactPage";
// import EggRolls from './pages/EggRolls';
// import Hamburger from './pages/Hamburger';
import MenyPage from "./pages/MenyPage";
// import Pizza from './pages/Pizza';
import StartPage from './pages/StartPage';
import Navigation from './components/Navigation'
import MenyDishPage from './pages/MenyDishPage'

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/meny" element={<MenyPage />} />
        <Route path="/meny/:dish" element={<MenyDishPage />} />
        {/* <Route path="/meny/eggrolls" element={<EggRolls />} />
        <Route path="/meny/hamburger" element={<Hamburger />} />
        <Route path="/meny/pizza" element={<Pizza />} /> */}
      </Routes>
    </div >
  );
}

export default App;
