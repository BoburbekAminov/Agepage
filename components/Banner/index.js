import React from "react";
import cls from "../Banner/banner.module.scss"



export default function Banner() {
    return (
        <>
            <div className="container">
                <div className={cls.banner}>
                    <div className={cls.inBanner}>

                        <div className={cls.tobacco}>
                            <div className={cls.bannerText}>
                                <div className={cls.textTitle}>
                                    <p>Моноблоки</p>
                                </div>
                                <div className={cls.bannerInfo}>
                                    <p>Тут будет текст с описанием по теме последнего  поколение комьютера может быть две строки</p>
                                </div>
                                <div className={cls.banerBtn}>
                                    <button>перейти в каталог</button>
                                </div>
                            </div>
                            <img className={cls.tobaccoImg} src="tobacco.png" />
                            <div className={cls.computersItem}>
                                <img src="computers.png" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className={cls.mobileBanner}>
                    <div className={cls.inMobileBanner}>
                        <div className={cls.mobileText}>
                            <p>Моноблоки</p>
                            <div className={cls.mobileTitle}>
                                <span>Тут будет текст с описанием по теме последнего
                                    поколение комьютера может быть две строки
                                </span>
                            </div>
                        </div>
                        <div className={cls.mobileImg}>
                            <img className={cls.mobileTobacco} src="tobaccoImg.png"/>
                            <div className={cls.mobileBtn}>
                                <button><p>перейти в каталог</p></button>
                            </div>
                            <div className={cls.mobileComputer}>
                                <img src="computers.png"/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}