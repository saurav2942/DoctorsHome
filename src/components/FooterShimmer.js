import React from "react";

const FooterShimmer = () => {
  return (
    <div className="w-screen h-auto font-sansInter animate-pulse bg-slate-50">
      {/* {First compnent} */}
      <div className="w-full h-auto flex justify-start p-3">
        <div className="w-[70%] flex text-center items-center gap-10 ml-[10%]">
          <div className="text-normal text-[18px] leading-5"></div>
          <div className="text-normal text-[18px] leading-5 "></div>
          <div className="text-normal text-[18px] leading-5 "></div>
        </div>
      </div>

      {/* {Second compnent} */}
      <div className="w-full h-[246px] flex justify-start p-5 items-center relative">
        <div className="w-[30%] h-full flex justify-center items-center">
          <div className="bg-slate-200 w-[30%] h-[50%] p-5"></div>
        </div>
        <div className="w-[1px] h-[30%] border-[1px] drop-shadow-sm absolute left-[25%] top-15"></div>

        <div className="w-[60%] h-full flex flex-col justify-center items-center ">
          <div className="w-[60%] h-[100%] flex flex-col justify-center">
            <div class="flex-1 space-y-6 py-1 flex flex-col justify-center">
              <div class="h-2 bg-slate-200 rounded p-2"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-200 rounded col-span-2 p-2"></div>
                  <div class="h-2 bg-slate-200 rounded col-span-1 p-2"></div>
                </div>
                <div class="h-2 bg-slate-200 rounded p-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterShimmer;
