import React from 'react';
import "./Header.css";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <div className='header'>

<div className='header__header'>
<div  className='header__img'>
<img src={logo} alt='' />
</div>
<p className='header__para'>PLANS</p>
<p className='header__para'>OUR MENUS</p>
<p className='header__para'>MEAL SUBSCRIPTION</p>
<p className='header__para'>ABOUT US</p>
</div>

<div className='header__bottom'>
<p className='header__login'>LOG IN</p>
    <div className='header__start'>GET STARTED</div>
</div>

    </div>
  )
}
