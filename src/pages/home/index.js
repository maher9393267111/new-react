import React from 'react';
import TextLoop from "react-text-loop";
import Mainslide from './mainslide';
import Slider2 from './slider2';
import { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import Layout from '../../components/layout';
  import { motion } from 'framer-motion';
import Benefits from './Benefits';
import Days from './Days';


const Home = () => {



    const settings = {
       // dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };



const [name,setName] = useState("");


    return (
        <Layout>
        <div>



<div>





{/* ------main slide-start- */}


<div>


    <Mainslide/>
</div>



{/* -slider 2--- */}

<div>

<Slider2/>

    <div>

    <div>

<div className='  text-center'>

    <button className=' font-bold hover-btn '>
        See All Attractions
    </button>
</div>


</div>
    </div>



{/* ------------  Benefits component*/}

<div>
    <Benefits/>
</div>


{/* -----Days--- */}


<div>


<Days/>

</div>



</div>





</div>






<div>


</div>


        </div>
        </Layout>
    );
}

export default Home;
