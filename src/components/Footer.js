import React from 'react';
import "./Footer.css";
import footlogo from "../images/footlogo.png";
import footicon from "../images/footicon.png";
import footlogo2 from "../images/footlogo2.png";
import footlogo3 from "../images/footlogo3.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='footer'>

<div className='foot__foot'>
    <div><img src={footlogo} alt='' />
    <p className='foot__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
</p>
<p className='foot__para'>Address:</p>
    </div>
    <div className='foot__side'>
        <p className='foot__sidehead'>Menus</p>
        <p className='foot__sideheadpara'>Menu Name</p>
        <p className='foot__sideheadpara'>Menu Name</p>
        <p className='foot__sideheadpara'>Menu Name</p>
        <p className='foot__sideheadpara'>Menu Name</p>
    </div>
    <div className='foot__side1'>
    <p className='foot__sidehead'>Plans</p>
        <p className='foot__sideheadpara'>Plan Name</p>
        <p className='foot__sideheadpara'>Plan Name</p>
        <p className='foot__sideheadpara'>Plan Name</p>
        <p className='foot__sideheadpara'>Plan Name</p>
    </div>
    <div className='foot__side2'>
    <p className='foot__sidehead'>Company</p>
        <p className='foot__sideheadpara'>Pricing</p>
        <p className='foot__sideheadpara'>Security</p>
        <p className='foot__sideheadpara'>Privasi Policy</p>
        <p className='foot__sideheadpara'>Term of use</p>
        <p className='foot__sideheadpara'>Carrer</p>
    </div>

    <div className='foot__bott'>
<p className='foot__bootpara'>Discover What's Cooking, </p>
<p className='foot__bootpara'>Subscribe Now</p>
<div className='foot__bottom'><input type="text" placeholder='Your email'className='footer__input' />
<img className='foot__botimg' src={footicon} alt='' />
</div>
<p className='foot__down'>Download the App</p>

<div className='footer__fott'>
    <img className='fott__img' src={footlogo2} alt='' />
  <img className='fott__img' src={footlogo3} alt='' />
</div>

    </div>
</div>


<div className='foot__icons'>
    <div className='foot__boticonimg'><TiSocialFacebook /><FaTwitter /><FaLinkedinIn /><IoLogoInstagram /></div>
       <div><p className='foot__iconspara'><span className='customerSupportText'>Customer Support:</span>   Help Center & FAQ | Contact&fobas.in | 9876543210</p></div>
<div></div>
</div>
<div className='footer__line'></div>
<p className='foot__final'>© 2023 Fobas | Powered by Name</p>
    </div>
  )
}
