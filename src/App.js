import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import About from "./components/pages/About";
import FAQ from "./components/pages/FAQ";
import ContactUs from "./components/pages/ContactUs";
import "./App.css";
import Carousel from "./components/Carousel";
import Home from "./components/Home";
import Care from "./components/warrantytopic/Care";
import OurProducts from "./components/our products/OurProducts";
import Cookie from "./components/Cookies/Cookies";
import Reviews from "./components/Reviews";


function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  return (
    <BrowserRouter> 

        <div className="container">
          <Routes>
          <Route path="/home" exact component={Home} />

            <Route path="/about" element={<About />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/contact us" element={<ContactUs />} />
          </Routes>
        </div>
        <div className="App">
<Navbar favoritesCount={favorites.length} />
<Carousel/>
<Care />
<Cookie/>
<OurProducts/>
<Home addToFavorites={addToFavorites} />
<Reviews/>
</div>   
    </BrowserRouter>
  );
}

export default App;

{/* <div className="App">
<Navbar favoritesCount={favorites.length} />
<Carousel/>
<Home addToFavorites={addToFavorites} />

</div>
*/}