import React from "react";
import { slide2 } from "./data";
import Slider from "react-slick";
const splitme = "hello maher,howareyoy,goo to home";

const Slider2 = () => {
  const settings = {
    // dots: true,
    infinite: true,
    arrows: false,
    //autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  const makesplit = (desc) => {
    const splitdesc = desc.split(",");

    return splitdesc.map((item, index) => {
      return (
        // every , section is a div and item single
        <div key={index} className="  mb-4">
          <h1>{item}</h1>
        </div>
      );
    });
  };

  return (
    <div className="  h-[500px]  pt-12 mb-12 shadow-lg ">
      <div>
        {/* ---header-- */}

        <div className=" text-center font-bold text-xl mb-6">
          <header className=" line1">
            Top Istanbul Attractions | Free entry with Istanbul E-pass | 2, 3, 5
            or 7 days
          </header>
        </div>




{/* -----map   data ----- */}


<Slider className='h-full w-screen ' {...settings}>

{
    slide2.map((item, index) => {


        return (


            <div className="card ml-[1px] mr-[1px] w-[33%]  h-[300px]">

                {/* -image- */}

<div className="w-[70%] h-[100%] border-teal-400 border-2">




<div className=" h-[66%] w-[100%] image-wrapp">

    <img className=" w-full h-full object-cover" src={item?.mainImage} alt="" />
</div>

</div>

            </div>

        ) } )
}

</Slider>


      
      </div>
    </div>
  );
};

export default Slider2;
