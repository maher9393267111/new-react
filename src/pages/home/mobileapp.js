import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdSaveAlt } from "react-icons/md";
import { IoIosQrScanner } from "react-icons/io";
import { mob as data } from "./data";
import {FaGooglePlay, FaApple} from 'react-icons/fa'
import {AiOutlineApple} from "react-icons/ai";
const Mobileapp = () => {
  return (
    <div>
      <div>
        {/* -------gird--- */}

        <div className="  grid  grid-cols-12">
          {/* -mobile- */}

          <div className="      xs:col-span-12  lg:col-span-6">
            <div>
              <img
                src="https://www.svgrepo.com/show/162315/mobile-phone-popular-model-nexus-5.svg"
                alt=""
              />
            </div>
          </div>

          {/* -contetnt- */}

          <div className=" ml-8  xs:col-span-12  lg:col-span-6">
            {/* -header- */}

            <div>
              <h1 className="text-3xl  font-semibold   xs: mt-12 lg:mt-6">
                How does our App Work?
              </h1>
            </div>

            {/* ----inside- */}

            <div className=" container">
              {/* ---map---- */}

              {data.map((item, index) => {
                return (
                  <div>
                    <div className=" mt-8">
                      {/* -flex--- */}

                      <div className="  flex mb-16 justify-between">
                        {/* ---left icon- */}
                        <div>
                          <div className=" icon-parent  ">
                            <h3
                              className={`          relative ${
                                item.name === "Scan and Get in"
                                  ? "after:h-0 h-0   unvisible"
                                  : "after:bg-emerald-300  after:w-[3px] after:absolute  after:h-[55px]  "
                              }   ln inline-block p-3 text-center bg-teal-400 rounded-full`}
                            >
                              {item.icon}
                            </h3>
                          </div>
                        </div>

                        {/* -right- texts- */}

                        <div className=" self-center ">
                          {/* -name- */}

                          <div className="  font-bold ch">
                            <h1>{item.name}</h1>
                          </div>

                          {/* -item title- */}

                          <div className=" ch font-semibold">
                            <h1>{item.title}</h1>
                          </div>
                        </div>

                        <div></div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div></div>
            </div>
          </div>
        </div>

{/* -buttons- */}


<div className="  container ml-8 mr-8">
    

<div className=" flex xs:justify-center  xs:flex-col   md:flex-row  lg:justify-center  gap-8">

{/* --btn1- */}

<div  className=" xs:mx-auto lg:mx-1">

    <button>

        <div className=" flex  hover:text-black  hover:bg-white bg-black text-white w-[255px] justify-around p-3">
{/* -icon- */}
<div className=" self-center text-2xl">

<FaGooglePlay/>
</div>

{/* -text---- */}
<div>
available ON
<h1> Google Store</h1>
</div>

        </div>
   
    
    </button>
</div>



{/* -btn2- */}

<div  className=" xs:mx-auto lg:mx-1">

    <button>

        <div className=" flex  hover:text-black  hover:bg-white bg-black text-white w-[255px] justify-around p-3">
{/* -icon- */}
<div className=" self-center text-2xl">

<AiOutlineApple className=" text-[44px]  "/>
</div>

{/* -text---- */}
<div>
available In
<h1>App Store</h1>
</div>

        </div>
   
    
    </button>
</div>





</div>


</div>


      </div>
    </div>
  );
};

export default Mobileapp;
