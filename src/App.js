
import './App.css';

import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Rating from './Components/Rating';
import Contact from './Components/Contact';
import Project from './Components/Project';


function App() {
  return (
    <>
    <div className='float-container'>
  <Home/>

 <Routes>
    <Route path='/' element = {""}/>
    <Route path='about' element = {<About/>}/>
    <Route path='rating' element = {<Rating/>}/>
    <Route path='contact' element = {<Contact/>}/>
    <Route path='project' element = {<Project/>}/>
 </Routes>
   </div>
   </>
  );
}

export default App;
