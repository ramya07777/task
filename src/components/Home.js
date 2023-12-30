import React from 'react';
import "./Home.css";
import { MdArrowOutward } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import green from "../images/green.png";
import HomeDetail from '../detail/HomeDetail';

export default function Home() {
  return (
    <div className='home'>

<div className='home__detail'>

        <div className='home__home'>
<h1 className='home__head'>Our Meal Delivery Menus</h1>
<p className='home__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel commodo dolor.</p>

<div className='home__header'>
    <div className='home__menu'>Nutritious Menus</div>
    <div className='home__menu'>Diabetes Menus</div>
    <div className='home__menu'>Non-Vegetarian</div>
    <div className='home__menu'>Signature Menus</div>
</div>


        </div>

<div className='homme'>
        <div className='home__middle'>

<div className='home__top'>
    <h2 className='homemid__head'>Choose a Meals Per Week </h2>
    <div className='home__see'>SEE PLANS<MdArrowOutward className='home__arrow'/></div>
    </div>
<div className='home__bottom'>

{HomeDetail.map((home)=>(
  <div className='home__div'>
  <div className='home__image'>
    <img src={home.image} alt='' />
    <div className='homeimg__top'>
  <h3 className='homeimg__menu'>{home.name}</h3>
  <p className='homeimg__para'>{home.title}</p>
  <div className='home__bottomm'>
    <p className='home__botpara'><FaRegClock className='homeimg__clock' />{home.button}</p>
    <img src={green} alt='' />
  </div>
  <p className='homeimg__know'>KNOW MORE</p>
  </div>
</div>
</div>
))}


</div>

</div>
</div>
<div className='home__more'>SEE MORE MENUS</div>
        </div>
    </div>
  )
}
