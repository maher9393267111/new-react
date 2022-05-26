import React from "react";
import { listOne, listTwo } from "./data";
const Footer = () => {



    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };



  return (
    <div className=" min-h-[222px] mt-12 shadow-2xl bg-slate-100">
      <div>
        <div>
          {/* -----grid- */}

          <div className="  grid ml-4 mr-4 gap-8 grid-cols-12">
            {/* -----lists- */}

            <div className=" xs:col-span-12 lg:col-span-5 mt-10 mr-16 ml-6 ">
              <div>
                {/* -flex two list- */}

                <div className="flex justify-between mx-8  ">
                  {/* --list Onee- */}

                  <div>
                    <h1 className=" mt-4 mb-4 ch font-bold text-xl">
                      Istanbul E-pass
                    </h1>
                    {/* -items-- */}
                    <div>
                      <div>
                        <ul>
                          {listOne.map((item, index) => {
                            return (
                              <li className="mb-4 font-semibold text-md">
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* ----list Two---- */}

                  <div className=" ">
                    <h1 className=" mb-4 ch font-bold text-lg mt-4">
                      Usefull Links
                    </h1>

                    <div>
                      <ul className="mb-4">
                        {listTwo.map((item, index) => {
                          return (
                            <li className=" mb-4 font-semibold">{item}</li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --right flex---- */}

            <div className=" h-full xs:col-span-12 lg:col-span-7">
              <div className="h-full">
                {/* -flex 3----- */}

                <div className="h-full flex xs:flex-col lg:flex-row md:justify-between ml-8 mr-12">
                  {/* -inputs- */}

                  <div className=" m ml-8 lg:w-[45%]">
                    {/* -header- */}

                    <div>
                      <h1 className="ch font-semibold lg:mt-8 text-xl">
                        Usefull Links
                      </h1>

                      {/* ------- */}

                      <div>
                        <div>
                          {/* flex------ */}

                          <div className=" flex relative r-[33px] mt-8">
                            {/* ----input- */}

                            <div>
                              <input
                                type="email"
                                className="p-4   outline-pink-500   "
                                placeholder=" write your email here"
                              />
                            </div>

                            {/* -button-- */}

                            <div className=" self-center p-4 text-white font-bold bg-pink-500 flex-1">
                              <button>Subscribe</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* -social icons---------------------- */}

                  <div className=" m">
                  
                  
                  <div>

<div>
    <h1  className=" font-semibold mb-8 ch">
        Social Media 
        
         
    </h1>

{/* -icons- */}


<div>
    <div className='flex gap-3'>

     <i class="fa-brands fa-instagram ic "></i> 
     <i class="fa-brands fa-twitter ic"></i>
     <i class="fa-brands fa-facebook ic"></i> 
     <i class="fa-brands fa-linkedin ic"></i>   



    </div>
</div>



{/* ------app icons---- */}


<div>

{/* -header- */}


<div className=" mt-20">

    <h1 className="ch  font-semibold text-lg">
        Get Istanbul E-pass App
    </h1>
</div>


{/* -flkex images- */}


<div className="mt-5">
<div  className="flex gap-5">

<div>
    <img src="https://istanbulepass.com/assets/images/app-store.png" alt="" />
</div>


<div>
    <img src="https://istanbulepass.com/assets/images/google-play.png" alt="" />
</div>



</div>


</div>


</div>






</div>





                  </div>
                  



                  
                  
                  </div>

                  {/* ---mobile icons--- */}

                  <div className="m">

<div>

    <button

    onClick = {goToTop}
    className=" p-2    font-bold   hover:text-white"
    
    >

<i class="fa-solid fa-arrow-up rounded-full bg-green-400 p-4 hover:text-white"></i>


    </button>
</div>




                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
