import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import { Navigation, Footer, Home, Beers, Bands, Beer, TopTrack, SearchArtist } from "./components";


function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/beers">
                    <Route path="/beers" element={<Beers />}></Route>
                    <Route path=":id" element={<Beer />}></Route>
                </Route>
                <Route path="/bands">
                    <Route path="/bands" element={<Bands />}></Route>
                    <Route path=":str" element={<TopTrack />}></Route>
                    <Route path="/bands/artist/:str" element={<SearchArtist />}></Route>
                </Route>
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;
