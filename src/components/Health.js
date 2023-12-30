import React from 'react';
import "./Health.css";
import health from "../images/health.png";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Health() {
  return (
    <div className='health'>
    <div className='health__health'>
<div className='health__top'>
<h1 className='health__head'>Healthy & Tasty Foods 
With Natural Ingredients</h1>
<p className='health__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p className='health__button'>Start Subscription Now <IoIosArrowRoundForward className='health__icon'/></p>
</div>

<div className='health__bottom'>
    <img src={health} alt='' />
</div>
</div>
    </div>
  )
}
