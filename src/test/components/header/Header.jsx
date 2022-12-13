import React from 'react';
import './Header.css';
//import {logo} from './Logo.png';

const Header = () => {
  return(
    <nav>
      <div className='div-header'>
        <div className='div-svg'>
          <img src='src\test\components\header\Logo.svg' width="40" height="40"/>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>

        </div>
      </div>
    </nav>
  )
}
const domContainer = document.querySelector('#Header');
const root = ReactDOM.createRoot(domContainer);
root.render(<Header />, document.getElementById('Header'));
//export default Header;