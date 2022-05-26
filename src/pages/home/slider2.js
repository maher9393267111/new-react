import React from 'react';


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
 
 

const makesplit = () => {

// make array of items  every item start from ,
const splitme = 'hello maher,howareyoy,goo to home'
const splitme2 = splitme.split(',')


return splitme2.map((item,index) => {

    return (
        <div key={index}>
            <h1>
                {item}
            </h1>
        </div>
    )
})
   

  
// var arr = splitme.split(',');
// console.log(arr.length);
// return arr;

}



    return (
        <div className=' mt-12 mb-12'>
            
<div>

{/* ---header-- */}


<div className=' text-center font-bold text-xl'>
    <header className=' line1'>Top Istanbul Attractions | Free entry with Istanbul E-pass | 2, 3, 5 or 7 days</header>
</div>

{makesplit()}


</div>




        </div>
    );
}

export default Slider2;
