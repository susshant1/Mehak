import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <>
        <div>
            <center><strong><h2>Contact</h2></strong></center><hr />
        </div>
       <div className='ContactForm'>
      <div className='containers'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                  </div>
                </div>
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><hr />
    <div>
        <h3>Visit us @ </h3><a href="#">www.abcConstruction.com</a>
        <h3>Phone no:</h3> 9876543210
        <h3>Email Adress:</h3>AbcConsturction@gmail.com
        <h3>Adress:</h3> Abc Construction.pvt.ltd, Falano Buidling, Floor: 2nd, Opposite to xyz, mall road

    </div>
  

        </>
    );
}

export default Contact;
