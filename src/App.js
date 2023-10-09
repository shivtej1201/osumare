import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/router/Home';
import Navbar from './components/router/Navbar';
import Middle from './components/router/Middle';
import Services from './components/router/Services';
import Navigation from './components/router/Navigation';
import Middlecopy from './components/router/Middlecopy';
import Middlecard from './components/router/Middlecard';
import Mind from './components/router/Mind';
import Video from './components/router/Video';
import Faq from './components/router/Faq';
import Contact from './components/router/Contact';
import Footer from './components/router/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>

            <Routes>
              <Route exact path="/" Component={Home}/>
            </Routes>
            <Middle/>
            <Services/>
            <Navigation/>
            <Middlecopy/>
            <Middlecard/>
            <Mind/>
            <Video/>
            <Faq/>
            <Contact/>
            <Footer/>

    </BrowserRouter>
    </>
  );
}

export default App;
