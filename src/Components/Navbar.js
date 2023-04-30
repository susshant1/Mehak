import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (<>
    <center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNjyc21prKmCrniCDa_lWLDHCTDssUt0rIA&usqp=CAU" alt="logo" srcset="" className='Image'/> </center> 
        <div className='navLine'>
  <ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li><br />
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li><br />
  <li class="nav-item">
    <a class="nav-link" href="#">Rating</a>
  </li><br />
  <li class="nav-item">
    <a class="nav-link">Contact</a>
  </li><br />
  <li class="nav-item">
    <a class="nav-link">Project</a>
    </li>
</ul>
</div>


       
        </>
    );
}

export default Navbar;
