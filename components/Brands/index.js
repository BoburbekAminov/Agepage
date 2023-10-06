import React from "react";
import {
    RightIcon,
} from "../Svg/index"
import cls from "../Brands/brands.module.scss"


export default function Brands() {
    return (
        <>
            <div className="container">
                <div className={cls.brandsItem}>
                    <div className={cls.brandsTitle}>
                        <div className={cls.inTitle}>
                            <p>Бренды</p>
                            <div className={cls.brandsBtn}>
                                <button>Посмотреть все</button>
                            </div>
                        </div>

                        <div className={cls.brandBtnIcon}>
                            <button><RightIcon /></button>
                        </div>
                    </div>
                    <div className={cls.brandsLogo}>
                        <div className={cls.firstLine}>
                            <div className={cls.acerLogo}>
                                <img src="acer.png" />
                            </div>
                            <div className={cls.apacerLogo}>
                                <img src="apacer.png" />

                            </div>
                            <div className={cls.biostarLogo}>
                                <img src="biostar.png" />

                            </div>

                        </div>
                        <div className={cls.secondLine}>
                            <div className={cls.aerocoolLogo}>
                                <img src="aerocool.png" />

                            </div>
                            <div className={cls.appleLogo}>
                                <img src="apple.png" />

                            </div>
                            <div className={cls.dellLogo}>
                                <img src="dell.png" />

                            </div>
                        </div>
                        <div className={cls.thirdLine}>
                            <div className={cls.afoxLogo}>
                                <img src="afox.png" />

                            </div>
                            <div className={cls.arktekLogo}>
                                <img src="arktek.png" />

                            </div>
                            <div className={cls.hpLogo}>
                                <img src="hp.png" />

                            </div>
                        </div>
                        <div className={cls.fourthLine}>
                            <div className={cls.amdLogo}>
                                <img src="amd.png" />

                            </div>
                            <div className={cls.asrockLogo}>
                                <img src="asrock.png" />

                            </div>
                            <div className={cls.intelLogo}>
                                <img src="intel.png" />

                            </div>

                        </div>
                        <div className={cls.fifthRow}>
                            <div className={cls.aocLogo}>
                                <img src="aoc.png" />

                            </div>
                            <div className={cls.asusLogo}>
                                <img src="asus.png" />

                            </div>
                            <div className={cls.lgLogo}>
                                <img src="lg.png" />

                            </div>

                        </div>
                        <div className={cls.sixthLine}>
                            <div className={cls.aorusLogo}>
                                <img src="aorus.png" />

                            </div>
                            <div className={cls.axleLogo}>
                                <img src="axle.png" />

                            </div>
                            <div className={cls.toshibaLogo}>
                                <img src="toshiba.png" />

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}