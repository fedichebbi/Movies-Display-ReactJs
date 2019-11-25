import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Header/header";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import { Routes } from "./components/Routes/Routes";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
