import React from "react"
import { Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import ContactPage from "./pages/ContactPage";
import StartPage from "./pages/StartPage";


function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/events" element={<h2>Events</h2>} />
        <Route path="/events/create" element={<h2>Create Events</h2>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
