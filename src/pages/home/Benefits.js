import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { benefitsdata } from './data';
const Benefits = () => {
    return (
      <div className=' mt-6 mb-12'>
          <div>

{/* ---header- */}

<div className=' text-center text-2xl mb-8  text-[#27326f] font-bold'>
    <h1>Istanbul E-pass Benefits</h1>
</div>


{/* ----grid cards---- */}


<div>



<div  className=' grid gap-3 ml-6 w-full grid-cols-12'>

{benefitsdata.map((item,index)=>{


return (

<div className="     sm:col-span-6 lg:col-span-3    bg-gray-200">

{/* ---card- */}


<div className=' w-[315px]  h-[266px]' >

{/* -image--- */}


<div className='text-center  mt-14'>
    <img className=' mx-auto' src={item.image} alt="" />
</div>



<div className='  text-center  text-[#27326f]'>



{/* -name- */}

<div className=' font-bold text-2xl  mt-4 mb-4'>
    <h1>
        {item.name}
    </h1>
</div>

{/* -----title-=- */}


<div className='  font-semibold  ml-2 mr-2'>
    <h1>
        {item.title}
    </h1>
</div>


</div>


</div>



</div>


)})}





</div>


</div>



          </div>
      </div>
    );
}

export default Benefits;
