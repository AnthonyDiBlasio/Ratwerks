import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/RatwerksEngineering";
import NavTabs from "./components/NavTabs";
import Contact from './components/Contact'
import Footer from "./components/Footer";

function App() {
    return (

        <Router>
          
                <NavTabs />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <Footer />
       
        </Router>

    );
}

export default App;
