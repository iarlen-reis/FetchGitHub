import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Foooter/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Favorites from "./Pages/Favorites/Favorites";
import Repositories from "./Pages/Repositories/Repositories";

import GlobalStyle from "./styles/globalStyles";

import { RepositoryProvider } from "./contexts/RepositoryContext";
import { RepositoryContext } from "./contexts/RepositoryContext";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <RepositoryProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/repositories" element={<Repositories />} />
          </Routes>
        </RepositoryProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
