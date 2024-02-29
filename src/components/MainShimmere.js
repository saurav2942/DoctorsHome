import React from 'react'

const MainShimmere = () => {
  return (
    <div className="w-screen h-auto flex flex-col gap-5 mb-[5%] relative z-0 animate-pulse">
      {/* {first compnent} */}
      <div className="w-full h-[30%] flex relative">
        <div className="w-[50%] h-[400px] rounded-br-[250px] z-20 text-white flex flex-col justify-center items-center py-10 px-20 bg-slate-200">
          <div className="h-full flex flex-col gap-10 font-sansNoto">
            <div class="w-full flex-1 space-y-6 py-1 flex flex-col justify-start items-start">
              <div class="h-2 bg-slate-50 rounded p-20 py-2"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-5 gap-4">
                  <div class="h-2 bg-slate-50 rounded col-span-4 px-[30%] py-[5%]"></div>
                  <div class="h-2 bg-slate-50 rounded col-span-1 px-10 py-2"></div>
                </div>
                <div class="h-2 bg-slate-50 rounded p-2"></div>
              </div>
            </div>
            <div className="w-auto h-auto bg-slate-200"></div>
            <div className="w-auto h-auto">
              <button className="bg-slate-50 px-20 py-5 rounded-2xl"></button>
            </div>
            <div className="w-auto h-auto flex gap-3">
              <div className="w-[12px] h-[12px] bg-slate-50 rounded-full"></div>
              <div className="w-[12px] h-[12px] bg-slate-50 rounded-full"></div>
              <div className="w-[12px] h-[12px] bg-slate-50 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-[400px] z-0 absolute right-0 bg-slate-50 ">
          <div className="z-0 inset-0 w-full h-full object-cover" />
        </div>
      </div>

      {/* {second compnent} */}
      <div className="w-screen h-auto flex justify-center items-center">
        <div className="w-auto h-auto py-5 flex gap-8 items-center justify-center">
          <div className="bg-slate-200 px-20 py-5"></div>
          <div className="bg-slate-200 px-20 py-5"></div>
          <div>
            <div className="bg-slate-200 px-[10%] py-[2%]" />
          </div>
        </div>

        <div className="w-auto h-auto px-5">
          <div className="w-[1px] h-[60px] border-[1px] border-[#cbd5e1] drop-shadow-sm bg-slate-200"></div>
        </div>

        <div className="w-auto h-auto py-5 flex gap-8 items-center justify-center">
          <div className="leading-5 text-[25px] font-[700] font-sansNoto bg-slate-200 px-[10%] py-[2%]"></div>
          <div className="w-[40%] bg-slate-200 px-[10%] py-[2%]"></div>
          <div>
            <div className="text-[1.8rem] bg-slate-200 px-[10%] py-[2%]" />
          </div>
        </div>
      </div>

      {/* {Line Break} */}
      <div className="w-screen h-[1px] op-[10%] bg-[#000000] border-[1px]"></div>

      <div className="text-white leading-6 font-700 absolute right-[10%] top-[53%] width-[10%] text-3xl bg-slate-200 px-[10%] py-[2%] rounded-br-lg rounded-tr-lg rounded-tl-lg rounded-bl-[1.3rem] font-sansNoto">
        {" "}
      </div>

      {/* {third compnent} */}
      <div className="w-full h-[60%] font-sansNoto mb-5 flex justify-center">
        <div className="w-[80%] flex justify-evenly gap-7">
          <div className="w-[35%] h-auto flex flex-col justify-center gap-3">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-10">
                <button className="leading-6 text-[20px] font-bold border-b-4 rounded-sm bg-slate-200 px-5 py-4 opacity-80 p-1"></button>
                <button className="leading-6 text-[20px] font-medium opacity-50 bg-slate-200 px-5 py-4"></button>
              </div>
              <button>
                <div>
                  <div className="text-[1.8rem] bg-slate-200 px-5 py-4" />
                </div>
              </button>
            </div>
            {/* {Line Break} */}
            <div className="w-full h-[1px] op-[10%] bg-slate-200 border-[1px] px-10 py-1"></div>
            <div className="w-full h-auto flex flex-col justify-evenly gap-2 px-2">
              <div className="w-full h-auto flex justify-start items-center gap-10 text-center bg-slate-200 px-10 py-2"></div>
              <div className="w-full h-auto flex justify-start items-center gap-10 text-center bg-slate-200 px-10 py-2"></div>
              <div className="w-full h-auto flex justify-start items-center gap-10 text-center bg-slate-200 px-10 py-2"></div>
            </div>
          </div>

          <div className="w-[60%] h-auto flex justify-evenly font-sansNoto">
            <div className="w-auto h-auto bg-slate-200 rounded-br-lg rounded-tr-lg rounded-tl-lg rounded-bl-[3rem] p-3 text-white flex flex-col items-start justify-center gap-4 px-[20%]"></div>

            <div className="w-auto h-auto bg-slate-200 rounded-br-lg rounded-tr-lg rounded-tl-lg rounded-bl-[3rem] p-3 text-white flex flex-col items-start justify-center gap-4 px-[20%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainShimmere