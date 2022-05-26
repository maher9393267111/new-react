import React from 'react';
import {BiStar} from 'react-icons/bi';
import { customersays as data } from './data';
import Slider from "react-slick";


const Customersay = () => {

    let arr = Array.apply(null, Array(10))
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



<Slider {...settings}>


{ data.map((item, index) => (


<div className=' ml-6'>
{/* -card--- */}
<div className='  border-2  border-teal-300  shadow-2xl lg:w-[298px]  h-[300px]'>


{/* content--- */}



<div className=' container'>


{/* -stars */}


<div>
{ arr.map((val,idx) => (

<div className=' b'>
ds

</div>


)
)}
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