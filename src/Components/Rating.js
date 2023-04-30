import React from 'react';
import Newstar from './Newstar';
import './Rating.css';

const Rating = () => {
    return ( 
        <> 
        <center><h2>Rating</h2></center> <hr />
        
        <div className='container'>
            
        <div className='div1'>
        <Newstar/>
       
        <textarea name="text1" id="" cols="80" rows="4"> Avinash Jha </textarea> 
        </div> <br />
        <div className='div1'>
        <Newstar/>
        <textarea name="text1" id="" cols="80" rows="4"> Avinash Jha </textarea>
        </div> <br />

        <div className='div1'>
        <Newstar/>
        <textarea name="text1" id="" cols="80" rows="4"> Avinash Jha </textarea>
        </div> <br />
        <div className='div1'>
        <Newstar/>
        <textarea name="text1" id="" cols="80" rows="4"> Avinash Jha </textarea>
        </div> <br />
        </div>
        
        <br /><hr />
        <center><h3><i> Thanks for Vising !!</i></h3></center>
        </>
    )
  
    
    
}

export default Rating;
