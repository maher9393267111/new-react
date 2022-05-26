import React from 'react';
import {slide2} from './data'

const splitme = 'hello maher,howareyoy,goo to home'


const Slider2= () => {


    const settings = {
        // dots: true,
         infinite: true,
         arrows: false,
         autoplay: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1
       };
 
 

const makesplit = (desc) => {

 const splitdesc =  desc.split(',')


return splitdesc.map((item,index) => {

    return (
        <div key={index}>
            <h1>
                {item}
            </h1>
        </div>
    )
})
   

  


}



    return (
        <div className=' mt-12 mb-12'>
            
<div>

{/* ---header-- */}


<div className=' text-center font-bold text-xl'>
    <header className=' line1'>Top Istanbul Attractions | Free entry with Istanbul E-pass | 2, 3, 5 or 7 days</header>
</div>



{ slide2 && slide2.map((item,index) => {


return (

<div>

    <h1>
        { makesplit(item.sections[0].desc) }
    </h1>

</div>


) } ) }




</div>




        </div>
    );
}

export default Slider2;
