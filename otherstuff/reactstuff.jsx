
class Navbar extends React.Component {
    render(){
        return(
            <div id="body">
            <header class="Allhead transparent" id="Header">
            <div class="header-logo">
                <a class="logo" title="VGTourism">
                    <img id="logo-image" src='https://i.imgur.com/Ioas0HD.png'></img>
                </a>
            </div>
            <div class="header-nav-full">
            <div class="header-left">
                <nav class="header-main" id="main-nav">
                    <ul class="header-main-list">
                        <li class="nav-text-color">
                            <a href="/destinations">Destinations</a>
                        </li>
                        <li>
                            <a href="/games">Games</a>
                        </li>
                    </ul>
                </nav>
            <div class="header-right">
                <nav class="header-sub" id="sub-nav">

                </nav>
            </div>
            </div>
            </div>
            </header>
            </div>
        )
    }
}


export default Navbar


import React from "react";
import '../../index.css';

 function Home() {
    return (<>
        <div id="hero-image">
        

                    
        </div>
      

        </>
    )
};

export default Home;






import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  return (

    <>
    <div class='App'>
      <div class="hero-image">
    <Navbar />
    </div>
    </div>
 
    <BrowserRouter>

<Routes>
  <Route path='/' element={<Home />}/>
  
</Routes>

</BrowserRouter>

  </>)
}

export default App;
