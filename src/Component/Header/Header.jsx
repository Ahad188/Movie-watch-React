import React from 'react';
import './Header.css'
const Header = () => {
     return (
          <div>
               <nav>
                    <h3>BindaS</h3>
                    <div className='div-a'>
                         <a href="/about">About</a>
                         <a href="/services">Services</a>
                         <a href="/team">Team</a>
                         <a href="/contact">Contact</a>
                          
                    </div>
               </nav>
          </div>
     );
};

export default Header;