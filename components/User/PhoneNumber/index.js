import React, { useState,useEffect } from "react";
import { RightIcons } from "../../Svg/index";
import cls from "./user.module.scss";
import axios from "axios";
import { useRouter } from "next/router";

const Phone = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter()


  const send = (e) => {
    e.preventDefault();
    axios
      .post("https://api.bs365.uz/api/auth/code/create", {
        phone: phone,
      })
      .then((response) => {
        sessionStorage.setItem("phone", phone)
        router.push(
          {
            pathname: `/user`,
            query: {
              step: 2
            },
          },
          `/user?step=${2}`,
          { shallow: true, scroll: true }
        );
      })
      .catch((error) => {
        
      });
  };


  return (
    <>
      <div className={cls.folder}>
        <div className={cls.homeItem}>
          <p>Главная</p>
          <div className={cls.inHomeItem}>
            <RightIcons />
          </div>
        </div>
        <div className={cls.authorizationItem}>
          <p>авторизация</p>
        </div>
      </div>
      <div className="container">
        <div className={cls.authorization}>
          <div className={cls.inAuthorization}>
            <form>
              <div className={cls.authorizationTitle}>
                <p>Авторизация</p>
              </div>
              <div className={cls.inputText}>
                <p>Введите номер телефона</p>
                <div className={cls.numberInput}>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="+998 (__) ___ __ __"
                  />
                </div>
              </div>
              <div className={cls.continueBtn}>
                <button onClick={send}>
                  <p>продолжить</p>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
};
export default Phone;
