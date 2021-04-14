import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


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
