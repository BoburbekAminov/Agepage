import React, { useState } from "react";
import cls from "../PersonalData/personaldata.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie'

const Personal = () => {
  const cookie = new Cookies();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const key = sessionStorage.getItem("key");
  const idData = sessionStorage.getItem("id");

  const router = useRouter();

  const send = (e) => {
    e.preventDefault();
    axios
      .post("https://api.bs365.uz/api/auth/signup", {
        email: email,
        first_name: firstname,
        id: idData,
        key: key,
        last_name: lastname,
        password: password,
        password_confirmation: confirmation,
        termsAndConditions: "true",
      })
      .then((response) => {
        cookie.set('accessToken', response.data.access_token)
        setTimeout(() => {
          router.push({
            pathname: `/profile`,
          });
        }, 500);
      })
      .catch((error) => { });
  };
  return (
    <>
      <div className="container">
        <div className={cls.personalWrap}>
          <form>
            <div className={cls.inPersonal}>
              <div className={cls.nameAndSurname}>
                <div className={cls.nameText}>
                  <p>Имя</p>
                  <div className={cls.nameInput}>
                    <input
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      type="text"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                </div>
                <div className={cls.surnameText}>
                  <p>Фамилия</p>
                  <div className={cls.surnameInput}>
                    <input
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      type="text"
                      placeholder="Введите вашу фамилию"
                    />
                  </div>
                </div>
              </div>
              <div className={cls.emailText}>
                <p>E-mail</p>
                <div className={cls.emailInput}>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div className={cls.code}>
                <div className={cls.codeText}>
                  <p>Пароль</p>
                  <div className={cls.codeInput}>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="text"
                      placeholder="Введите пароль"
                    />
                  </div>
                </div>
                <div className={cls.confirmCode}>
                  <p>Подтверждение пароля</p>
                  <div className={cls.confirmInput}>
                    <input
                      value={confirmation}
                      onChange={(e) => setConfirmation(e.target.value)}
                      type="text"
                      placeholder="Подтверждение пароля"
                    />
                  </div>
                </div>
              </div>
              <div className={cls.confirmBtn}>
                <button onClick={send}>
                  <p>подтвердить</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Personal;
