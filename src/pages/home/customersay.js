import React from 'react';
import {BiStar} from 'react-icons/bi';
import { customersays as data } from './data';
import Slider from "react-slick";
import { IconContext } from 'react-icons';


 const IconReturn = () => (
    <IconContext.Provider value={{ size: '26px', color: 'pink',  className: "" }}>
      <BiStar />
    </IconContext.Provider>
  );




const Customersay = () => {

    let arr = Array.apply(null, Array(5))
    //.map((val, idx) => idx);


    const settings = {
         dots: true,
        infinite: true,
        arrows: true,
        //autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024, // 1240px and up
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
             //   dots: true
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




    return (
        <div className=' mt-12 mb-12'>
            <div>

{/* ----header- */}


<div className=' ch '>
    <h1 className='font-bold mb-6 text-center text-2xl'>
    Our customers say
    </h1>

<div>
    <p className='  font-semibold ml-6 mr-6 text-md text-center'>Istanbul E-pass has an average rating of 5 <BiStar className=' inline  text-purple-600 text-3xl'/>  from our customers who reviews on TripAdvisor</p>
</div>


</div>



{/* ---slider--- */}


<div>



<Slider {...settings} className='  h-[400px]'>


{ data.map((item, index) => (


<div className=' ml-6'>
{/* -card--- */}
<div className='  border-2  border-teal-300  shadow-2xl lg:w-[298px]  h-[300px]'>


{/* content--- */}



<div className=' container mt-6 ml-8'>


{/* -stars */}


<div className=' flex gap-2 '>
{ arr.map((val,idx) => (

<div className=' '>

<span>< IconReturn className='text-2xl    font-bold  text-pink-600  ' /></span>


</div>


)
)}
</div>




{/* ----name-- */}


<div className=' mt-6 font-bold text-xl '>
    <h1>
        {item.main}
    </h1>
</div>




{/* --desc- */}

<div className='  float  w-[80%] text-center mt-6 font-semibold'>
    <h1>
        {item.title}
    </h1>
</div>


<div>






</div>







</div>


</div>




</div>


))}










    </Slider>



</div>


            </div>
        </div>
    );
}

export default Customersay;
