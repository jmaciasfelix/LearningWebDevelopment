import React from 'react'
import Header from "./components/header/Header"
import Shorten from "./components/main/Shorten"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="container">
      <Header />
      <Shorten />
      <Footer />
    </div>
  );
}

export default App;
