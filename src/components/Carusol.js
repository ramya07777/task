import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Carusol.css";
import CarusolDetail from "../detail/CarusolDetail";

export default function Carusol() {
    
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "30px",
      slidesToShow: 3,
      speed: 500,
      dots: true
      };

      return (
        <div className="top__slide">
       
         <h2 className="carus">Our Customers Love</h2>

          <Slider {...settings}>
          {CarusolDetail.map((slid, index)=>(
            <div className="slide" key={index}>
            <img src={slid.image} alt="" />
              <p className="slide__para">{slid.name}</p>
           <p className="slide__head">{slid.title}</p>
           <p className="slide__paraa">{slid.sub}</p>
           <p className="slide__week">{slid.end}</p>
            </div>
          ))}
            
           
          </Slider>
     </div>
      );

}
