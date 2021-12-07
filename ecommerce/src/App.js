import React from "react"
import { Routes, Route } from "react-router-dom"
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;