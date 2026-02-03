import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movie from "./components/Movie";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Movie />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
