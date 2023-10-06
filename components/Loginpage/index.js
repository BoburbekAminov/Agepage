import React, { useState } from "react";
import cls from "../Loginpage/login.module.scss"
import axios from "axios";
import Cookies from "universal-cookie";
import { Router, useRouter } from "next/router";

const Loginpage = () => {
    const cookie = new Cookies();
    
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const send = (e) => {
        e.preventDefault();
        axios
            .post("https://api.bs365.uz/api/auth/login", {
                phone: phone,
                password: password,
            })
            .then((response) => {
                setTimeout(() => {
                    cookie.set("accessToken", response.data?.access_token);
                    router.push({
                        pathname: `/profile`,
                    });
                }, 1500)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <>
            <div className="container">
                <div className={cls.login}>
                    <div className={cls.inLogin}>
                        <form>
                            <div className={cls.loginTitle}>
                                <p>Логин</p>
                            </div>
                            <div className={cls.numberText}>
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
                            <div className={cls.passwordText}>
                                <p>Введите пароль</p>
                                <div className={cls.passwordInput}>
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="text"
                                        placeholder="_______________"
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
    )
}
export default Loginpage