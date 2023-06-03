import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Home";
import Collection from "./pages/Collection";
import DeckEditor from "./pages/DeckEditor";
import GameBoard from "./pages/GameBoard";
import Protected from "./pages/Protected";
import Authorized from "./pages/Authorized";
import Overlay from "./components/Overlay";
import "./styles/App.css";

function App() {

  const [ overlayIsOpen, setOverlayIsOpen ] = useState(false);

  const changeOverlay = () => {
    setOverlayIsOpen(!overlayIsOpen);
  }

  return (
    <BrowserRouter>
      <Overlay isOpen={overlayIsOpen}/>
      <Routes>
        <Route element={<Protected/>}>
          <Route path="/collection" element={<Collection handleOverlayChange={changeOverlay} overlayIsOpen={overlayIsOpen}/>}></Route>
          <Route path="/play" element={<GameBoard handleOverlayChange={changeOverlay} overlayIsOpen={overlayIsOpen}/>}></Route>
          <Route path="/deck-builder" element={<DeckEditor/>}></Route>
        </Route>
        <Route element={<Authorized/>}>
          <Route path="/log-in" element={<LoginPage/>}></Route>
          <Route path="/sign-up" element={<SignupPage/>}></Route>
        </Route>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
