import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-auto font-sansInter">
      {/* {First compnent} */}
      <div className="w-full h-auto flex justify-start bg-[#EEF3FE] p-3">
        <div className="w-[70%] flex text-center items-center gap-10 ml-[10%]">
          <div className="text-normal text-[18px] leading-5">
            서비스이용약관
          </div>
          <div className="text-normal text-[18px] leading-5 ">
            개인정보처리방침
          </div>
          <div className="text-normal text-[18px] leading-5 ">
            이메일무단수집거부
          </div>
        </div>
      </div>

      {/* {Second compnent} */}
      <div className="bg-[#E3EAF7] w-full h-[246px] flex justify-start p-5 items-center relative">
        <div className="w-[30%] h-full flex justify-center items-center">
          <div className="text-[18px] leading-5 font-medium">(로고인입)</div>
        </div>
        <div className="w-[1px] h-[30%] border-[1px] border-[#cbd5e1] drop-shadow-sm absolute left-[25%] top-15"></div>
        <div className="w-[60%] h-full flex items-center ">
          <div className="w-[60%]">
            (주)의료감정분석원 l OOO l T. 02-0000-0000 l F. 02-0000-0000
            사업자등록번호 : 000-00-00000 l E. ddd@gmail.com 01234 무슨시 무슨구
            무슨로 347 무슨빌딩 1302호
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
