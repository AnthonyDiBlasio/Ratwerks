import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/RatwerksEngineering";
import NavTabs from "./components/NavTabs";
import Contact from './components/Contact'
import Footer from "./components/Footer";

function App() {
    return (

        <Router>
            <div className="site" style={{ flexGrow: 1 }}>
                <NavTabs />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <Footer />
            </div>
        </Router>

    );
}

export default App;
