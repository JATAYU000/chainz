import LandingPage from './pages/LandingPage.js';
import BicyclePage from './pages/BicylesPage.js';
import ContactPage from './pages/ContactPage.js';
import BuyPage from './pages/BuyPage.js';
import DetailsPage from './pages/DetailsPage.js';

import React, { useState } from 'react';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import ElectricPage from './pages/ElectricPage.js';
import GearedPage from './pages/GearedPage.js';
import GearlessPage from './pages/GearlessPage.js';

function App() {
  const [index, setIndex] = useState(1);
  return (
    <div className="Main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/bicycles" element={<BicyclePage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/buy" element={<BuyPage/>} />
            <Route path="/details" element={<DetailsPage index = {index}/>} />
            <Route path="/electric" element={<ElectricPage index = {index} setIndex = {setIndex}/>} />
            <Route path="/geared" element={<GearedPage index = {index} setIndex = {setIndex}/>} />
            <Route path="/gearless" element={<GearlessPage index = {index} setIndex = {setIndex}/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
