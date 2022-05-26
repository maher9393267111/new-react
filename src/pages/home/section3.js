import React from "react";

const Section3 = () => {
  return (
    <div>
      <div>
        {/* --header--- */}

        <div className="  font-bold text-2xl text-center mt-6 mb-12">
          <h1 className=" ch">sectio3</h1>
        </div>

        {/* -content-- */}

        <div>
          <div className="mx-auto border-2 ml-8 mr-8 min-h-[333px]  border-teal-500">
            {/* ----div flex---- */}

            <div className="  sm:flex-col-reverse  lg:flex-row flex justify-between">
              <div className=" flex-[45%] sm:mt-14 lg:mt-0    shadow-3xl">
                <div className=" h-full ">
                  <img
                    className=" ml-8 w-1/2 h-full object-cover"
                    src="https://istanbulepass.com/assets/images/suleymaniye-mosque-from-bosphorus.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div className="  flex-[55%] lg:mb-20   ">
                <div>
                  {/* -header- */}

                  <div className="  mt-14 mb-8">
                    <h1 className=" ch font-bold text-2xl  lg:text-left sm:text-center ">
                      How much you’ll save with Istanbul E-Pass
                    </h1>
                  </div>

                  {/* -----prices- */}

                  <div>
                    <div>
                      {/* -one----------- */}

                      {/* -flex- */}
                      <div className=" font-bold text-md flex pb-[27px] border-b-2 sm:ml-12 lg:ml-0   mr-[90px] border-b-emerald-300  justify-between">
                        {/* -left- */}

                        <div>
                          <h1>Total gate price without pass</h1>
                        </div>

                        {/* -right- */}

                        <div>
                          <h1>$218,00</h1>
                        </div>
                      </div>
                    </div>

                    {/* -----two price------------- */}

                    <div className=" mt-6">
                      {/* -flex- */}
                      <div className=" font-bold  text-md flex pb-[27px] border-b-2 sm:ml-12 lg:ml-0   mr-[90px] border-b-emerald-300  justify-between">
                        {/* -left- */}

                        <div>
                          <h1>3-day Istanbul E-Pass</h1>
                        </div>

                        {/* -right- */}

                        <div>
                          <h1>$103,00</h1>
                        </div>
                      </div>
                    </div>

                    {/* -three price---- */}

                    <div>
                      <div className=" mt-6">
                        {/* -flex- */}
                        <div className=" font-bold  text-md flex  sm:ml-12 lg:ml-0   mr-[90px]   justify-between">
                          {/* -left- */}

                          <div>
                            <h1 className=" text-[#D30072] text-xl">
                              You save over 53%
                            </h1>
                          </div>

                          {/* -right- */}

                          <div>
                            <h1 className="text-[#D30072] text-xl">$115,00</h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* -buttons--- */}

                    <div>
                      {/* -flext buttons- */}
                      <div className=" mt-8 flex  justify-between">
                        <button className=" float-left ml-10 rounded-lg w-[45%] p-1.5 font-bold hover:text-blue-500 hover:bg-white  bg-[#009ba8] text-white">
                          Buy your pass nowSee more example itineraries
                        </button>

                        <button className=" float-left w-[40%]  mr-8 rounded-lg text-white font-bold  hover:text-purple-500 hover:bg-white  bg-purple-400  ">
                          €115,00 Buy your pass now
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
    </div>
  );
};

export default Section3;
