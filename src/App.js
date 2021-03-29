import './App.css';
import React from 'react';
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Footer from "./components/Footer";


const App = () => {

    return (
        <div className="app">
           <Header />
           <Aside />
           <Main />
           <Footer />
        </div>
    )
}

export default App;
