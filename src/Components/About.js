import React from 'react';
import './About.css'

const About = () => {
    return ( <>

        <div className='div0'>
           <center> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNjyc21prKmCrniCDa_lWLDHCTDssUt0rIA&usqp=CAU" alt="logo" /></center>
          <center><u><h1>About Us</h1></u></center>
        </div>
        <br />
        <br /> 

        
       <div className='div1'>
        <img className='divImg' src="https://www.goconstruct.org/media/xa4l2oao/are-you-experienced.jpg?anchor=center&mode=crop&width=293&height=190&rnd=132659746223170000" alt="" srcset="" />
       <h2>What is ABC Construction?</h2><br />
        <p>ABC Construct provides resources for anyone looking for a career in the construction and built environment sector. We showcase the many rewarding opportunities available and help people from all backgrounds to enter an exciting and growing industry which has a huge impact on the housing, industry and infrastructure.</p>
         </div> 
       <hr />
        
        <div className='div2'>
            <h2>Who is ABC Construct for?</h2> <br />
            <p>We’re here to support young people looking for opportunities to gain skills and employment, as well as more experienced people looking to change careers. Whether you’ve already chosen to enter the construction industry or are still deciding if it’s the right fit, ABC Construct provides information and advice on finding fulfilling, engaging roles that are right for your capabilities and interests. <br /> <br />
            Our resources can be used to inform and guide decisions by individuals, or to equip parents and careers advisors with valuable, easy to share guidance.</p>
        <img src="https://www.goconstruct.org/media/xa4l2oao/are-you-experienced.jpg?anchor=center&mode=crop&width=293&height=190&rnd=132659746223170000" height='230rem' width='300rem' alt="photo2" />
        <br /> 
        <hr />
        <div>
            <input type="text" placeholder='If you have any queries, feel free to write us'/>
        <button>Submit</button>
        </div>
        <hr /> <center><h4> <strong> <i>Thank you for Visiting !</i> </strong> </h4></center>
        </div>
        
        </>
    );
    
}

export default About;
