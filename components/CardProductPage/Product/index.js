import React from "react";
import {
    RightIcons,
    LeftIcon,
    RightIcon,
    Basket
} from "../../Svg/index"
import cls from "../Product/product.module.scss"


export default function Product() {

    return (
        <>
            <div className={cls.folder}>
                <div className={cls.homeItem}>
                    <p>Главная</p>
                    <div className={cls.inHomeItem}><RightIcons /></div>

                </div>
                <div className={cls.brandItem}>
                    <p>бренды</p>
                    <div className={cls.inBrandItem}><RightIcons /></div>

                </div>
                <div className={cls.acerItem}>
                    <p>acer</p>
                    <div className={cls.inAcerItem}><RightIcons /></div>
                </div>
                <div className={cls.laptopItem}>
                    <p>ноутбуки</p>

                </div>

            </div>
            <div className="container">
                <div className={cls.laptopInfo}>
                    <div className={cls.image}>
                        <div className={cls.inImg}>
                            <img src="laptops.png" />
                        </div>
                        <div className={cls.wrapImage}>
                            <div className={cls.leftItem}><button><LeftIcon /></button></div>
                            <div className={cls.gridImg}>
                                <div className={cls.inGrid}><img src="laptops.png" /></div>
                                <div className={cls.inGrid}><img src="laptops.png" /></div>
                                <div className={cls.inGrid}><img src="laptops.png" /></div>
                            </div>

                            <div className={cls.rightItem}><button><RightIcon /></button></div>
                        </div>

                    </div>
                    <div className={cls.laptopName}>
                        <div className={cls.laptopText}>
                            <div className={cls.productName}>
                                <p>Ноутбук</p>
                            </div>
                            <div className={cls.inLaptopName}>
                                <p>Acer Aspire 3 A315-57G NX.HZRSG.00J</p>
                                <div className={cls.latopPrice}>
                                    <span>7 370 000 сум </span>
                                </div>
                            </div>
                            <div className={cls.laptopComment}>
                                <p>Поможем Вам собрать рекомендуемый компьютер который
                                    подойдет Вам для любой работы и игр
                                </p>
                            </div>

                        </div>
                        <div className={cls.laptopQuantity}>
                            <div className={cls.inLaptopQuantity}>
                                <p>Количество</p>
                                <div className={cls.inQuantity}>
                                    <div className={cls.quantityBtn}>
                                        <div className={cls.subtractionBtn}><button><p>-</p></button></div>
                                        <p>1</p>
                                        <div className={cls.toAddBtn}><button><p>+</p></button></div>
                                    </div>
                                </div>
                            </div>
                            <div className={cls.color}>
                                <p>цвет</p>
                                <div className={cls.colorBtn}>
                                    <div className={cls.black}><button></button></div>
                                    <div className={cls.gray}> <button></button></div>
                                    <div className={cls.white}><button></button></div>
                                </div>
                            </div>

                        </div>
                        <div className={cls.laptopAddBasked}>
                            <div className={cls.buyBtn}>
                                <button><p><Basket/>ДОБАВИТЬ В КОРЗИНУ</p></button>
                            </div>
                            <div className={cls.laptopBtn}>
                                <button><p>КУПИТЬ В 1 КЛИК</p></button>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}