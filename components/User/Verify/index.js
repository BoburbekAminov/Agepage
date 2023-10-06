import React, {useState} from "react";
import cls from "../Verify/verify.module.scss";
import axios from "axios";
import { useRouter } from "next/router";



const Verify=()=> {
  const [code, setCode] = useState("");
  const router = useRouter()
  const phone = sessionStorage.getItem("phone")
  const send = (e) => {
    e.preventDefault();
    axios
      .post("https://api.bs365.uz/api/auth/verify", {
        code: code,
        phone: phone
      })
      .then((response) => {
        console.log(response,"repoonse")
        sessionStorage.setItem("key", response.data?.key)
        sessionStorage.setItem("id", response.data?.id)

        router.push(
          {
            pathname: `/user`,
            query: {
              step: 3
            },
          },
          `/user?step=${3}`,
          { shallow: true, scroll: true }
        );
      })
      .catch((error) => {
      });
  };




  return (
    <>
      <div className="container">
        <div className={cls.authorizationCode}>
          <form>
            <div className={cls.authorizationTitle}>
              <p>Авторизация</p>
            </div>
            <div className={cls.inputText}>
              <p>Введите код отправленный на номер телефона </p>
              <div className={cls.codeInput}>
                <input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  type="text"
                  placeholder=" __ __ __"
                />
              </div>
            </div>
            <div className={cls.confirmBtn}>
              <button onClick={send}>
                <p>подтвердить</p>
              </button>
            </div>
            <div className={cls.repeatedBtn}>
              <button>
                <p>Запросить код повторно можно через 30 секунд</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Verify