import React from 'react';
import Slider from "react-slick";
const Mainslide = () => {

const images = ['https://istanbulepass.com/uploads/images/b_istanbul-old-city-view.jpg'
,'https://istanbulepass.com/uploads/images/b_istanbul-view.jpg',
'https://istanbulepass.com/uploads/images/b_istanbul-visit.jpg',
'https://istanbulepass.com/uploads/images/b_hagia-sophia-istanbul-view.jpg'

]


    const settings = {
       // dots: true,

         infinite: true,
         arrows: true,
         autoplay: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1
       };


    return (
        <div className=' relative  h-[300px] mb-24'>
        

<div className=' w-full min-h-[400px]'>



<Slider className='h-full w-screen ' {...settings}>


{images.map((image,index)=>{

    
    return(
    
    <div className='   w-screen'>
    <img
    className=' h-[400px] w-[100vw]'
    src={image} alt=""/>
    </div>
    
    )
    
    })}




    </Slider>





</div>



{/* -----fixed- */}

<div className='sm:left-[1px] sm:ml-12 absolute top-[100px] left-[88px] opacity-[0.7] bottom-6 w-[600px] h-[280px] border-2 bg-slate-100'>
<div>

{/* ----content---- */}
<div className=' '>


<div className='sm:flex justify-between lg:block  text-[#27326f] ml-6'>

    <div>

   
    <header className='  text-3xl  mt-8  font-bold'>Istanbul E-pass</header>

<div className=' mt-8 w-[77%]'>

<div className=' font-bold text-xl'>
    <p>Sightseeing city pass, Best way to get around Istanbul. FREE entry to top Istanbul Attractions. All in 1 digital pass.</p>
</div>

</div>

{/* -buttons- */}


<div className='  mt-6'>

<button 
className='p-2 bg-teal-600 text-white hover:text-teal-600 w-[133px] mr-4 hover:bg-white'

> attractions</button>


<button

className='p-2   bg-purple-600 text-white hover:text-purple-600 w-[133px] mr-4 hover:bg-white'
> Buy Now</button>


</div>



</div>



</div>




</div>



</div>




</div>








        
        </div>
    );
}

export default Mainslide;
