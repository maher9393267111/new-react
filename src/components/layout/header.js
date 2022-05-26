import React from 'react';
import Slider from 'react-slick';
const Header = () => {


    const settings = {
        // dots: true,
         infinite: true,
         arrows: false,
         autoplay: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1
       };
 


    return (
        <div>
            

{/* ----slide1---- */}


<div className=' text-center bg-[#d1276f] p-3 text-white font-bold text-xl'>

<Slider {...settings}>

{/* --1---- */}
<div>
    <h1>
 Valid for two years  from purchase  date
    </h1>
</div>


{/* -2------ */}

<div>

    <h1>
istanbul  entry to top istanbyl  attractions
    </h1>
</div>





    </Slider>



</div>


        </div>
    );
}

export default Header;
