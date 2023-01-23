import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Foooter/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Favorites from "./Pages/Favorites/Favorites";

import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
