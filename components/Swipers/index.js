import React from "react";
import cls from "../Swipers/swipers.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';


import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Navigation, Pagination, } from "swiper";

const Swipers = () => {
    return (
        <>
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination,]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className={cls.smoke} src="diim.png" />
                        <div className={cls.textAndPhoto}>
                            <div className={cls.text}>
                                <div className={cls.title}>
                                    <p>Последние поколение компьютера</p>
                                    <div className={cls.descripton}>
                                        <span>Тут будет текст с описанием по теме последнего  поколение
                                            комьютера может быть две строки
                                        </span>
                                    </div>
                                </div>
                                <div className={cls.textBtn}>
                                    <button><p>подробнее</p></button>
                                </div>
                            </div>
                            <img className={cls.photo} src="кейс 1.png" />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>

                </Swiper>
            </div>
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination,]}
                    className="myMobileSwiper"
                >
                    <SwiperSlide>
                        <img className={cls.mobileSmoke} src="Дым-1.png" />
                        <div className={cls.mobileTextVsImg}>
                            <div className={cls.mobileText}>
                                <div className={cls.mobileImg} >
                                    <img src="кейс 1.png" />
                                </div>
                                
                                <div className={cls.mobileTitle}>
                                    <p>Последние поколение компьютера</p>
                                    <div className={cls.mobileDescripton}>
                                        <span>Тут будет текст с описанием по теме последнего  поколение
                                            комьютера может быть две строки
                                        </span>
                                    </div>
                                </div>
                                <div className={cls.mobileTextBtn}>
                                    <button><p>подробнее</p></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}
export default Swipers;