import React from "react";
import {
    RightIcon
} from "../Svg/index"
import cls from "../News/news.module.scss"



export default function News(){
    return(
        <>
        <div className="container">
            <div className={cls.news}>
                <div className={cls.newsTitle}>
                    <p>Новости</p>
                    <div className={cls.newsBtn}>
                        <button><RightIcon/></button>
                    </div>
                </div>
                <div className={cls.newsItem}>
                    <div className={cls.newsImage}>
                        <img src="newsImg.png"/>
                        <div className={cls.imgText}>
                            <span>31 Май, 2022</span>
                            <p>Получи набор игрока от Aorus и Gigabyte!</p>
                        </div>
                    </div>
                    <div className={cls.newsImage}>
                        <img src="newsimg2.png"/>
                        <div className={cls.imgText}>
                            <span>1 Июль, 2022</span>
                            <p>Ноутбук для работы на космической станции</p>
                        </div>
                    </div>
                    <div className={cls.newsImage}>
                        <img src="newsImg3.png"/>
                        <div className={cls.imgText}>
                            <span>31 Май, 2022</span>
                            <p>Как выбрать ноутбук</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}