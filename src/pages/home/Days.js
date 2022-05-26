import React from "react";
import { days } from "./data";
const Days = () => {
  const array1 = [1, 2, 3];

  return (
    <div className=" mt-4 mb-12">
      <div>
        {/* -header--- */}

        <div className=" text-center  ch">
          <h1 className=" font-bold text-2xl mb-4">
            Save over 50% on gate prices with Istanbul E-pass
          </h1>

          {/* -mini title- */}

          <p className=" font-semibold mb-4">
            You´d save 115,00 € with this example itinerary
          </p>
        </div>

        {/* ------grid days--- */}

        <div>
          {/* -gird days- */}

          <div className=" ">
            <div className="  grid grid-cols-12 gap-3 ml-6 mr-6  ">
              {array1.map((item, index) => (
                <div className=" sm:col-span-12 min-h-[200px] mb-6   lg:col-span-4">
                  {/* ----header day - */}

                  <div>
                    {/* -flex--- header */}
                    <div className="  w-[290px]  relative top-[27px]  mx-auto flex justify-between">
                      {/* -left- */}
                      <div className="   font-bold text-2xl text-white bg-[#009ba8]  p-4 ">
                        <h1>Day{index + 1}</h1>
                      </div>

                      {/* -right- */}

                      <div className=" relative top-[28px] font-bold">
                        Price without Pass
                      </div>
                    </div>
                  </div>

                  <ul className="">
                    {/* -----day array in li--- */}

                    {days.map((day) => (
                      <li className="   hover:bg-[#27326f]    mx-auto w-[305px] border-2 p-6 mt-6 border-teal-400 ">
                        <div className=" z-10">
                          <h1 className="ch z-10 font-bold hover:text-white  text-md">
                            {day?.name.split(" ").slice(0, 3).join(" ")} ...
                            <span>{day.price}</span>
                          </h1>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Days;
