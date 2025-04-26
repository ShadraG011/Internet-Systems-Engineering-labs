import React, {useState} from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import Navbar from "./Navbar";
import Gallery from "./components/Gallery";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ControlledForm from "./ControlledForm";

const wordsArray = [
    "дом",
    "домик",
    "домовой",
    "река",
    "реклама",
    "рекорд",
    "солнце",
    "солнечный",
    "солярий",
    "гора",
    "горка",
    "горный",
    "машина",
    "машинист",
    "магазин",
    "маг",
    "магнит",
    "дерево",
    "день",
    "дед"
];


function App() {

    const [words, setWords] = useState(wordsArray);

    const addItem = (newItem: string) => {
        setWords(prev => [...prev, newItem]);
        console.log(words)
    };
    return (
        <div className="App">
            <div>
                <Navbar active={"1"}/>
                <ControlledForm words={words} addNewWord={addItem}/>
                <Gallery/>
                <Content/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
