import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div > 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNjyc21prKmCrniCDa_lWLDHCTDssUt0rIA&usqp=CAU" alt="logo" srcset="" className='Image'/>
        <div className='Div1'>
             
        <div className='navLine'>
  <ul class="nav flex-column">
  <li  class="nav-item" >
    <a class="nav-link active" aria-current="page" href="#"><Link to='/'>Home</Link></a>
    </li><br />
  <li class="nav-item">
    <a class="nav-link" href="#"><Link to='/about'>About</Link></a>
  </li><br />
  <li class="nav-item">
    <a class="nav-link" href="#"><Link to='/rating'>Rating</Link></a>
  </li><br />
  <li class="nav-item">
    <a class="nav-link"><Link to='/contact'>Contact</Link></a>
  </li><br />
  <li class="nav-item">
    <a class="nav-link"><Link to='/project'>Project</Link></a>
    </li>
</ul>
</div>
</div>
<div>
 </div>
 
            
        </div>
    );
}

export default Home;
