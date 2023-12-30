import React from 'react';
import "./Dish.css";
import diet1 from "../images/diet1.png";
import diet2 from "../images/diet2.png";
import diet3 from "../images/diet3.png";
import { MdArrowOutward } from "react-icons/md";

export default function Dish() {
  return (
    <div className='dish'>
    <h2 className='dish__headd'>Our Signature Dish</h2>
    <div className='dish__dish'>
        <div className='dish__t'>
        <img className='dishtop__img' src={diet1} alt='' />
        <div className='dishtop'>Delhi special</div>
        <div className='dishtop__below'>
        <p className='dishtop__head'>START FROM ₹90</p>
        <p className='dishtop__para'>SEEKH KABAB (Buffalo)</p>
        <p className='dishtop__title'>4 pcs</p>
        <div className='dishtop__button'>ORDER NOW<MdArrowOutward className='dishtop__arrow'/></div>
        </div>
        </div>

        <div className='dish__menuu'>
        <div className='dish__mennuu'>
            <h3 className='dish__head'>Eat Tasty Food  From Our Kitchen</h3>
            <p className='dish__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur </p>
<div className='dish__order'>ORDER MORE DISHES<MdArrowOutward className='dishtop__arrow'/></div>
<div className='dish__img'>
<div>
    <img className='dishbt__img' src={diet2} alt=' ' />
    <div className='dishtop__beloww'>
        <p className='dishtop__head'>START FROM ₹200</p>
        <p className='dishtop__para'>SEEKH KABAB ROLL (Buffalo)</p>
        <p className='dishtop__title'>4 pcs</p>
        <div className='dishtop__button'>ORDER NOW<MdArrowOutward className='dishtop__arrow'/></div>
        </div>
</div>
<div>
    <img className='dishbt__img1' src={diet3} alt=' ' />
    <div className='dishtop__beloww1'>
        <p className='dishtop__head'>START FROM ₹200</p>
        <p className='dishtop__para'>SEEKH KABAB ROLL (Buffalo)</p>
        <p className='dishtop__title'>4 pcs</p>
        <div className='dishtop__button'>ORDER NOW<MdArrowOutward className='dishtop__arrow'/></div>
        </div>
</div>
</div>
</div>
        </div>
    </div>
    </div>
  )
}
