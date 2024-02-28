import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col w-screen h-auto relative font-sansInter">
      {/* {Logo and Buttun Component} */}
      <div className="flex justify-center items-center w-full h-[60px] relative">
        <h2 className="text-center font-normal text-[18px]">(로고인입)</h2>
        <div className="w-[18%] absolute top-4 right-10 flex gap-5 font-medium text-[#fff]">
          <button className="bg-[#1554CF] rounded-3xl px-5 py-2 leading-5 text-[18px] text-center">
            로그인
          </button>
          <button className="bg-[#1B80DC] rounded-3xl px-4 py-2 leading-5 text-[18px] text-center">
            회원가입
          </button>
        </div>
      </div>

      {/* {Line Break} */}
      <div className="w-screen h-[1px] op-[10%] bg-[#000000] border-[1px]"></div>

      {/* {Navbar compnent} */}
      <div className="w-full flex p-3 justify-center font-medium">
        <div className="w-[70%] flex justify-evenly">
          <div className="font-medium leading-5 text-[18px] cursor-pointer">
            회사소개
          </div>
          <div className="font-medium leading-5 text-[18px] cursor-pointer">
            의료자문
          </div>
          <div className="cursor-pointer font-medium leading-5 text-[18px]">
            의료분석
          </div>
          <div className="font-medium cursor-pointer leading-5 text-[18px]">
            동시감정
          </div>
          <div className="font-medium leading-5 cursor-pointer text-[18px]">
            고객서비스
          </div>
        </div>
      </div>
      <div className="w-full h-[5px] bg-[#1554CF]"></div>
    </div>
  );
};

export default Header;
