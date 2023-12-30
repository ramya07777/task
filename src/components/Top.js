import React from 'react';
import "./Top.css";
import img1 from "../images/img1.png";
import { MdArrowOutward } from "react-icons/md";
import Group from "../images/Group.png";

export default function Top() {
  return (
    <div className='top'>
<div className='top__top'>
<div className='top__left'>
    <h1 className='top__header'>Make Healthy Life.
Healthy Nutrition.
Delivered to your door.</h1>
<p className='top__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel commodo dolor. Vivamus eu nunc convallis, finibus arcu quis, ultrices purus. Integer suscipit ultricies tellus.</p>

<div className='top__bottomm'>
<div className='top__start'>GET STARTED<MdArrowOutward className='arrow__icon'/></div>
    <div className='top__play'>
        <img src={Group} alt='' />
        <p className='play__para'>See How Our Menus Are Helpfuly</p>
    </div>
</div>
</div>


<div className='top__bottom'>
    <img className='top__img' src={img1} alt='' />
</div>
</div>
    </div>
  )
}
