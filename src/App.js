import LandingPage from './pages/LandingPage.js';
import BicyclePage from './pages/BicylesPage.js';
import React, { useState } from 'react';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="Main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/bicycles" element={<BicyclePage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
