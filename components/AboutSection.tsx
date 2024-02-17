import React from "react";
import Image from "next/image";

const services = [
  { service: "대출 도서 반납 대행" },
  { service: "문 앞에서 책 수거" },
  { service: "저렴한 이용료" },
  { service: "시간 절약" },
  { service: "편리함" },
  { service: "안전한 책 관리" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          도도북스 서비스 소개
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              도도북스란?
            </h1>
            <p>
              도도북스는 <span className="font-bold">{"Door to Door Books"}</span>의 약자로, 고객님의 문 앞에서 도서관까지 책을 반납해드리는 서비스입니다.
            </p>
            <br />
            <p>
              바쁜 직장인, 아이가 어려서 외출하기 어려운 가정, 거동이 불편한 노년층을 위해, 고객이 도서관에서 빌린 책을 대신 반납해드립니다. 단 <span className="font-bold">2천원</span>의 서비스 이용료로, 도서관에 직접 가지 않아도 됩니다.
            </p>
            <br />
            <p>
              도도북스는 <span className="font-bold">편리함</span>과 <span className="font-bold">시간 절약</span>을 제공함으로써, 더 많은 분들이 독서의 즐거움을 누릴 수 있도록 돕습니다.
            </p>
            <br />
            <p>
              우리의 서비스를 통해, 바쁜 일상 속에서도 책과 함께하는 행복한 순간을 만들어보세요. 도도북스는 여러분의 문 앞에서 책을 안전하게 전달할 준비가 되어 있습니다. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">서비스 이점</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {services.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-teal-500 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                  >
                    {item.service}
                  </p>
                )
              })}
            </div>
            <Image
              src="/services-image.png" // 서비스 관련 이미지 경로로 변경해주세요.
              alt="도도북스 서비스 이미지"
              width={350}
              height={350}
              className="hidden md:block md:relative md:top-3 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
