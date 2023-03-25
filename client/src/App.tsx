import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Home";
import GameBoard from "./pages/GameBoard";
import Protected from "./pages/Protected";
import Authorized from "./pages/Authorized";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protected/>}>
          <Route path="/play" element={<GameBoard/>}></Route>
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
