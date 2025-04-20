import React from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import Navbar from "./Navbar";
import Gallery from "./components/Gallery";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <div>
                <Navbar active={"1"}/>
                <Gallery/>
                <Content/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
