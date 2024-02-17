import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "책이 무거워요",
    description: "반납할 책이 너무 많아 무거워서 힘들 때, 도서관 이동 시간과 주차로 인한 불편함 등",
    image: "/library-users1.png",
     // 이미지 경로는 실제 파일 위치에 맞게 수정해 주세요.
  },
  {
    name: "시간이 없어요",
    description: "갑자기 시작된 야근, 아이가 아픈 경우",
    image: "/library-users2.png",
     // 이미지 경로는 실제 파일 위치에 맞게 수정해 주세요.
  },
  {
    name: "몸이 불편해요",
    description: "고령으로 도서관 가기가 쉽지 않아요",
    image: "/library-users3.png",
     // 이미지 경로는 실제 파일 위치에 맞게 수정해 주세요.
  },
  // 기타 서비스 설명을 이 배열에 추가합니다.
];

const ProjectsSection = () => {
  return (
    <section id="services">
      <h1 className="my-10 text-center font-bold text-4xl">
        도서관 이용자들이 겪는 불편함
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:space-x-12">
            <div className="md:w-1/2">
              <Image
                src={service.image}
                alt={service.name}
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="mt-8 md:w-1/2">
              <h1 className="text-2xl font-bold mb-6">{service.name}</h1>
              <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                {service.description}
              </p>
              {/* 여기에 추가적인 정보나 링크를 넣을 수 있습니다. */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
