import React, { useEffect, useState } from "react";
import Phone from './PhoneNumber'
import Verify from './Verify'
import Personal from "./PersonalData";
import Profile from "../Profile";
import axios from "axios";
import Cookies from 'universal-cookie'


import { useRouter } from "next/router";
const User = () => {
    const cookie = new Cookies();
    const access_token = cookie.get("accessToken")

    const router = useRouter()
    console.log(router)


    useEffect(() => {
        if (access_token) {
            router.push(
                {
                    pathname: `/login`
                }
            )
        } else {
            router.push(
                {
                    pathname: `/user`
                }
            )
        }

    }, [])


    return (
        <>
            {(() => {
                switch (router.query?.step) {
                    case "1":
                        return (
                            <>
                                <Phone />
                            </>
                        )
                    case "2":
                        return (
                            <>
                                <Verify />
                            </>
                        )
                    case "3":
                        return (
                            <>
                                <Personal />
                            </>
                        )
                    default:
                        return (
                            <>
                                <Phone />
                            </>
                        )
                }
            })()}
        </>
    );
};
export default User;
