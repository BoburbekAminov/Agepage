import React from "react";
import {
    RightIcons,
    BasketItem,
} from "../Svg/index"
import cls from "../BasketPage/basketpage.module.scss"



export default function BasketPage({zapros}) {


    return (
        <>
            <div className={cls.folder}>
                <div className={cls.homeFolder}>
                    <p>Главная</p>
                    <div className={cls.inHomeItem}><RightIcons /></div>
                </div>
                <div className={cls.basketFolder}>
                    <p>корзина</p>
                </div>
            </div>
            <div className="container">
                <div className={cls.basket}>
                    <div className={cls.basketWrap}>
                        <p>Корзина</p>
                    </div>
                    <div className={cls.type}>
                        <div className={cls.inType}>
                            <p>Товары</p>
                        </div>
                        <div className={cls.quantityAndPrice}>
                            <div className={cls.quantity}>
                                <p>количество</p>
                            </div>
                            <div className={cls.price}>
                                <p>цена</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.goods}>
                        <div className={cls.goodsWrap}>
                            <div className={cls.goodsGrid}>
                                {zapros.length && zapros.map((item) => (
                                    <div className={cls.inGoodsGrid}>
                                        <div className={cls.goodsImg}>
                                        <img src={item.product.images[0].url} />
                                        </div>
                                        <div className={cls.productName}>
                                            <p>Ноутбук</p>
                                            <div className={cls.goodsName}>
                                                <p>{item.product.name}</p>
                                            </div>
                                        </div>
                                        <div className={cls.goodsQuantity}>
                                            <div className={cls.goodsQuantityBtn}>
                                                <div className={cls.subtractionBtn}><button><p>-</p></button></div>
                                                <p>1</p>
                                                <div className={cls.toAddBtn}><button><p>+</p></button></div>
                                            </div>
                                        </div>
                                        <div className={cls.goodsPrice}>
                                            <p>7 370 000 cум</p>
                                        </div>
                                        <button className={cls.basketItem}><BasketItem /></button>
                                    </div>
                                ))} 
                            </div>
                        </div>
                        <div className={cls.orderSummary}>

                            <div className={cls.orderSummaryText}>
                                <p>Итог заказа</p>
                            </div>
                            <hr />
                            <div className={cls.order}>
                                <div className={cls.orderQuantity}>
                                    <p>Количество товара:</p>
                                    <span>3</span>
                                </div>
                                <div className={cls.orderQuantity}>
                                    <p>Ноутбук:</p>
                                    <span> 1 шт.</span>
                                </div>
                                <div className={cls.orderQuantity}>
                                    <p>Конфигуратор: </p>
                                    <span>1 шт.</span>

                                </div>
                                <div className={cls.orderQuantity}>
                                    <p> Наушники: </p>
                                    <span>1 шт.</span>
                                </div>
                            </div>
                            <hr />
                            <div className={cls.wrapAll}>
                                <div className={cls.totalAmount}>
                                    <p>Общая сумма:</p>
                                    <span> 29 480 000 сум</span>
                                    <div className={cls.totalcomment}>
                                        <span> Без учета доставки</span>
                                    </div>

                                </div>
                                <div className={cls.totalBtn}>
                                    <div className={cls.checkoutBtn}>
                                        <button><p>оформить заказ</p></button>
                                    </div>
                                    <div className={cls.clickBtn}>
                                        <button><p>купить в 1 клик</p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}