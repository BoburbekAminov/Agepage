import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    MenuIcon,
    LogoIcon,
    SearchIcon,
    BasketIcon,
    BackIcon,
    Registration,
    SearchIcons,
    RegistrationIcon,
    Basket,
    ChosenOne
} from "../../Svg/index"
import cls from "../Header/header.module.scss"
import axios from 'axios'
import Cookies from "universal-cookie";


export default function Header() {

    const [data, setData] = useState([])
    // const [check, setCheck] = useState(true)

    useEffect(() => {
        axios.get('https://api.bs365.uz/api/categories')
            .then((res) => {
                setData(res.data.data)
            }).catch((e => {
                console.log(e)
            }))
    }, [])
    return (
        <>
            <div className={cls.header}>
                <div className={cls.wrapHeader}>
                    <div className={cls.logoAndMenu}>
                        <div><MenuIcon /></div>
                        <Link href={'/'}>
                            <div><LogoIcon /></div>
                        </Link>
                    </div>
                    <div className={cls.inMenu}>
                        {data.length && data.slice(0, 6).map((item) => (
                            <>
                                <div className={cls.menu}>
                                    <Link href={{
                                        pathname: '/catalog/[catalog]'
                                    }}
                                        as={`/catalog/${item.slug}`}
                                    >
                                        <p>{item.name}</p>
                                    </Link>
                                </div>
                            </>
                        ))}
                    </div>

                    <div className={cls.icons}>
                        <div className={cls.searchItem}><SearchIcon /></div>
                        <Link href={'/chosen'}>
                            <div className={cls.chosenOne}>
                                <div className={cls.inChosenOne}>
                                    <ChosenOne />
                                </div>
                            </div>
                        </Link>
                        <Link href={'/user'}>
                            <div className={cls.registration}>
                                <BackIcon />
                                <div className={cls.inRegistration}>
                                    <Registration />
                                </div>
                            </div>
                        </Link>
                        <Link href={'/basketpage'}>
                            <div className={cls.basketItem}><BasketIcon /></div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cls.mobileHeader}>
                <div className={cls.mobileMenuVsLogo}>
                    <div className={cls.mobileMenu}><MenuIcon /></div>
                    <div className={cls.mobileLogo}><LogoIcon /></div>
                </div>
                <div className={cls.mobileIcons}>
                    <div className={cls.mobileSearch}>
                        <button> <SearchIcons /></button>
                    </div>
                    <div className={cls.mobileRegistration}>
                        <button> <RegistrationIcon /></button>
                    </div>
                    <div className={cls.mobileBasked}>
                        <button><Basket /></button>
                    </div>
                </div>
            </div>
        </>
    )
}