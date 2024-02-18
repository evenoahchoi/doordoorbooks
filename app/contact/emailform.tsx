"use client";

import React, { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal, Button, DatePicker } from "antd";
import styles from "./EmailForm.module.css";
import moment, { Moment } from "moment";
import emailjs from "emailjs-com"; // emailjs-com 임포트

interface FormData {
  name: string;
  phone: string;
  address: string;
  detailAddress: string;
  date: Moment | null;
}

const EmailForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    detailAddress: "",
    date: null,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // EmailJS 사용자 ID로 초기화
    emailjs.init("0RNcJ11USAvUfX8zq"); // 여기에 실제 사용자 ID를 입력하세요.
  }, []);

  const onToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleComplete = (data: any) => {
    const fullAddress = data.address;
    const splitAddress = data.address.split(" ").splice(2).join(" ");

    setFormData({
      ...formData,
      address: fullAddress,
      detailAddress: splitAddress,
    });
    onToggleModal();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 이메일 전송 로직
    emailjs
      .sendForm(
        "service_mjsis4n",
        "template_jzikssn",
        e.currentTarget,
        "0RNcJ11USAvUfX8zq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("수거신청이 성공적으로 전송되었습니다!");
        },
        (error) => {
          console.log(error.text);
          alert("수거신청 전송에 실패했습니다.");
        }
      );

    // 폼 데이터 초기화
    setFormData({
      name: "",
      phone: "",
      address: "",
      detailAddress: "",
      date: null,
    });
  };

  const handleDateChange = (date: Moment | null) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: date,
    }));
  };

  return (
    <div className={styles["email-form-container"]}>
      <h1 className="font-bold text-2xl">도서 수거 신청</h1>
      <form onSubmit={handleSubmit} className={styles["email-form"]}>
        <div className={styles["form-group"]}>
          <input
            type="text"
            name="name"
            placeholder="성함"
            className={styles["form-control"]}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="text"
            name="phone"
            placeholder="연락처"
            className={styles["form-control"]}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <div className={styles["address-input-group"]}>
            <input
              type="text"
              name="address"
              placeholder="주소"
              className={`${styles["form-control"]} ${styles["address-input"]}`}
              value={formData.address}
              readOnly
            />
            <Button
              type="primary"
              onClick={onToggleModal}
              className={styles["address-search-button"]}
            >
              주소 검색
            </Button>
          </div>
          <input
            type="text"
            name="detailAddress"
            placeholder="상세 주소"
            className={styles["form-control"]}
            value={formData.detailAddress}
            onChange={(e) =>
              setFormData({ ...formData, detailAddress: e.target.value })
            }
          />

          <div className={styles["form-group"]}>
            {/* antd의 DatePicker 컴포넌트 추가 */}
            <DatePicker onChange={handleDateChange} value={formData.date} />
          </div>
          <button type="submit" className={styles["submit-button"]}>
            수거 신청하기
          </button>
        </div>
      </form>
      {isClient && isOpen && (
        <Modal
          title="주소 검색"
          visible={isOpen} // visible 속성 추가
          onOk={onToggleModal}
          onCancel={onToggleModal}
          footer={null}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </div>
  );
};

export default EmailForm;
