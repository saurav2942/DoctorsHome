import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faPlus,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(fas, faPlus, faArrowAltCircleRight);
const image = new URL(
  "../assets/8117f27a022eb7161e25f2ca2767f38f.jpeg",
  import.meta.url
);
const Home = () => {
  return (
    <div className="w-screen h-auto flex flex-col gap-5 mb-[5%] relative">
      {/* {first compnent} */}
      <div className="w-full h-[30%] flex relative">
        <div
          className="w-[50%] h-[400px] rounded-br-[250px] z-20 text-white flex flex-col justify-center items-center py-10 px-20"
          style={{
            background:
              "linear-gradient(111.78deg, #1554CE 16.88%, #3A82D7 61.51%, #4C75DF 92.43%",
          }}
        >
          <div className="h-full flex flex-col gap-10 font-sansNoto">
            <div className="w-[70%] h-auto flex flex-col gap-2 whitespace-normal">
              <p className="font-[700] text-[18px] leading-5">
                OO의료감정분석원은
              </p>
              <p className="font-[700] text-[30px] leading-10">
                <span className="text-[#AAFF9C]">신뢰를 바탕</span>으로 한 전문
                컨설팅이 이루어집니다
              </p>
            </div>
            <div className="w-auto h-auto">
              <p className="font-[400] text-[15px] leading-5 text-[#FFFFFF]">
                전문성과 공정성을 기반으로 최고 수준의 의료감정서비스를
                제공합니다.
              </p>
            </div>
            <div className="w-auto h-auto">
              <button className="bg-[#FFFFFF] rounded-3xl px-5 py-2 leading-5 text-[18px] text-center text-[#1554CE] font-[700]">
                자세히보기
              </button>
            </div>
            <div className="w-auto h-auto flex gap-3">
              <div className="w-[12px] h-[12px] bg-[#AAFF9C] rounded-full"></div>
              <div className="w-[12px] h-[12px] bg-[#FFFFFF] rounded-full"></div>
              <div className="w-[12px] h-[12px] bg-[#FFFFFF] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-[400px] z-0 absolute right-0">
          <img className="z-0 inset-0 w-full h-full object-cover" src={image} />
        </div>
      </div>

      {/* {second compnent} */}
      <div className="w-screen h-auto flex justify-center items-center">
        <div className="w-auto h-auto py-5 flex gap-8 items-center justify-center">
          <div className="leading-5 text-[25px] font-[700] font-sansNoto text-[#1554CF]">
            의료자문
          </div>
          <div className="w-[40%] leading-5 text-[18px] font-[400] font-sansNoto whitespace-normal">
            공정하고 신뢰할 수 있는 정확한 분석으로 진행됩니다.
          </div>
          <div>
            <FontAwesomeIcon
              className="text-[1.8rem]"
              icon="fas fa-arrow-circle-right"
              style={{ color: "#1554cf" }}
            />
          </div>
        </div>

        <div className="w-auto h-auto px-5">
          <div className="w-[1px] h-[60px] border-[1px] border-[#cbd5e1] drop-shadow-sm bg-slate-400"></div>
        </div>

        <div className="w-auto h-auto py-5 flex gap-8 items-center justify-center">
          <div className="leading-5 text-[25px] font-[700] font-sansNoto text-[#1554CF]">
            의료자문
          </div>
          <div className="w-[40%] leading-5 text-[18px] font-[400] font-sansNoto whitespace-normal">
            공정하고 신뢰할 수 있는 정확한 분석으로 진행됩니다.
          </div>
          <div>
            <FontAwesomeIcon
              className="text-[1.8rem]"
              icon="fas fa-arrow-circle-right"
              style={{ color: "#1554cf" }}
            />
          </div>
        </div>
      </div>

      {/* {Line Break} */}
      <div className="w-screen h-[1px] op-[10%] bg-[#000000] border-[1px]"></div>

      <div className="text-white leading-6 font-700 absolute right-[10%] top-[53%] width-[10%] text-3xl px-7 py-5 bg-[#1554CF] rounded-br-lg rounded-tr-lg rounded-tl-lg rounded-bl-[1.3rem] font-sansNoto">
        {" "}
        Direct
      </div>

      {/* {third compnent} */}
      <div className="w-full h-[60%] font-sansNoto mb-5 flex justify-center">
        <div className="w-[80%] flex justify-evenly gap-7">
          <div className="w-[35%] h-auto flex flex-col justify-center gap-3">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-10">
                <button className="leading-6 text-[20px] font-bold border-b-4 rounded-sm border-[#1554CF] opacity-80 p-1">
                  공지사항
                </button>
                <button className="leading-6 text-[20px] font-medium opacity-50">
                  Q&A
                </button>
              </div>
              <button>
                <FontAwesomeIcon
                  className="text-[1.6rem]"
                  icon="fas fa-plus"
                  style={{ color: "#000000" }}
                />
              </button>
            </div>
            {/* {Line Break} */}
            <div className="w-full h-[1px] op-[10%] bg-[#000000] border-[1px]"></div>
            <div className="w-full h-auto flex flex-col justify-evenly gap-2 px-2">
              <div className="w-full h-auto flex justify-start items-center gap-10 text-center">
                <div>24.01.01</div>
                <div>공지사항 입니다. 이곳에는 공지사항 타이틀이 들어...</div>
              </div>
              <div className="w-full h-auto flex justify-start items-center gap-10 text-center">
                <div>24.01.01</div>
                <div>공지사항 입니다. 이곳에는 공지사항 타이틀이 들어...</div>
              </div>
              <div className="w-full h-auto flex justify-start items-center gap-10 text-center">
                <div>24.01.01</div>
                <div>공지사항 입니다. 이곳에는 공지사항 타이틀이 들어...</div>
              </div>
            </div>
          </div>

          <div className="w-[60%] h-auto flex justify-evenly font-sansNoto">
            <div className="w-auto h-auto bg-[#1B80DC] rounded-br-lg rounded-tr-lg rounded-tl-lg rounded-bl-[3rem] p-3 text-white flex flex-col items-start justify-center gap-4 px-8">
              <div className="w-full h-auto flex flex-col gap-2 whitespace-normal">
                <p className="font-[700] text-[20px] leading-5">계좌정보</p>
              </div>
              <div className="w-auto h-auto flex flex-col gap-2 justify-center items-start">
                <p className="font-[700] text-[30px] leading-10">
                  국민 000000-00-000000
                </p>
                <p className="font-[400] text-[20px] leading-5 text-[#AAFF9C]">
                  예금주 OOO
                </p>
              </div>
            </div>

            <div className="w-auto h-auto bg-[#263848] rounded-br-lg rounded-tr-lg rounded-tl-lg rounded-bl-[3rem] p-3 text-white flex flex-col items-start justify-center gap-4 px-8">
              <div className="w-full h-auto flex flex-col gap-2">
                <p className="font-[700] text-[20px] leading-5">계좌정보</p>
              </div>
              <div className="w-auto h-auto flex flex-col gap-2 justify-center items-start">
                <p className="font-[700] text-[30px] leading-10">
                  T. 02-0000-0000
                  <span className="font-[400] text-[20px] leading-5 text-[#AAFF9C] p-2">
                    Fax. 02-0000-0000
                  </span>
                </p>
                <p className="font-[400] text-[17px] leading-5 opacity-60">
                  오전 9시 ~ 오후 6시 (토,일,공휴일 휴무)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;