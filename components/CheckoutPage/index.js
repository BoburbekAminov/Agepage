import React, { useState } from "react"
import {
    RightIcons,
    TopIcon,
} from "../Svg/index"
import cls from "../CheckoutPage/checkoutpage.module.scss"



export default function CheckoutPage() {
    const [index, setIxdex] = useState(0)
    const [number, setNumber] = useState(0)

    return (
        <>
            <div className={cls.folder}>
                <div className={cls.homeItem}>
                    <p>Главная</p>
                    <div className={cls.inHomeItem}><RightIcons /></div>

                </div>
                <div className={cls.brandItem}>
                    <p>корзина</p>
                    <div className={cls.inBrandItem}><RightIcons /></div>

                </div>
                <div className={cls.acerItem}>
                    <p>оформление заказа</p>
                </div>


            </div>
            <div className="container">
                <div className={cls.checkout}>
                    <div className={cls.checkoutText}>
                        <p>Оформление заказа</p>
                    </div>
                    <div className={cls.checkoutWrap}>
                        <div className={cls.listWrap}>
                            <div className={cls.list}>
                                <div className={cls.recipient}>
                                    <p>Получатель</p>
                                    <div className={cls.recipientInput}>
                                        <div className={cls.nameAndSurname}>
                                            <div className={cls.nameInput}><input type="text" placeholder="Имя" /></div>
                                            <div className={cls.surnameInput}><input type="text" placeholder="Фамилия" /></div>
                                        </div>
                                        <div className={cls.numberAndEmaile}>
                                            <div className={cls.numberInput}><input type="text" placeholder="+998 ( _ _ ) _ _ _  _ _  _ _" /></div>
                                            <div className={cls.emaileInput}><input type="text" placeholder="E-mail" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cls.delivery}>
                                    <p>Доставка</p>
                                    <div className={cls.deliveryTabs}>
                                        <div className={cls.inDeliveryTabs}>
                                            <p onClick={() => { setIxdex(0) }}>Получить доставку</p>
                                            <p onClick={() => { setIxdex(1) }}>я сам заберу</p>
                                        </div>
                                        {index == 0 ? (
                                            <>
                                                <div className={cls.regionAndArea}>
                                                    <div className={cls.regionInput}>
                                                        <input type="text" placeholder="Область" />
                                                        <button><TopIcon /></button>
                                                    </div>
                                                    <div className={cls.areaInput}>
                                                        <input type="text" placeholder="Район" />
                                                        <button><TopIcon /></button>
                                                    </div>
                                                </div>
                                                <div className={cls.addressInput}>
                                                    <input type="text" placeholder="Адрес (название улицы, дом и .т.д.)" />
                                                </div>
                                                <div className={cls.regionComment}>
                                                    <p>Доставка по городу Ташкент 20 000 сум, по регионам 100 000 сум</p>
                                                </div>
                                            </>
                                        ) : (
                                            <form className={cls.mapTabs}>
                                                <div className={cls.inMapTabs}>
                                                    <div className={cls.mapImage}>
                                                        <img src="Карта.png" />
                                                        <div className={cls.mapTitle}>
                                                            <p>Магазин GIGABYTE</p>
                                                            <span>
                                                                Ул. Лабзак, дом 2 A Показать на карте
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className={cls.workingTime}>
                                                        <p>Пн-Пт 10:00 до 18:00 </p>
                                                    </div>
                                                </div>
                                                <div className={cls.inMapTabs}>
                                                    <div className={cls.mapImage}>
                                                        <img src="Карта.png" />
                                                        <div className={cls.mapTitle}>
                                                            <p>Магазин GIGABYTE</p>
                                                            <span>
                                                                Ул. Лабзак, дом 2 A Показать на карте
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className={cls.workingTime}>
                                                        <p>Пн-Пт 10:00 до 18:00 </p>
                                                    </div>
                                                </div>
                                                <div className={cls.inMapTabs}>
                                                    <div className={cls.mapImage}>
                                                        <img src="Карта.png" />
                                                        <div className={cls.mapTitle}>
                                                            <p>Магазин GIGABYTE</p>
                                                            <span>
                                                                Ул. Лабзак, дом 2 A Показать на карте
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className={cls.workingTime}>
                                                        <p>Пн-Пт 10:00 до 18:00 </p>
                                                    </div>
                                                </div>

                                            </form>
                                        )}
                                    </div>

                                </div>
                                <div className={cls.payment}>
                                    <p>Оплата</p>
                                    <div className={cls.paymentTabs}>
                                        <div className={cls.inPaymentTabs}>
                                            <p onClick={() => { setNumber(0) }}>банковкая карта доставку</p>
                                            <p onClick={() => { setNumber(1) }}>наличными</p>
                                        </div>
                                        {number == 0 ? (
                                            <>
                                                <div className={cls.cardAndCode}>
                                                    <div className={cls.cardInput}>
                                                        <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
                                                    </div>
                                                    <div className={cls.codeInput}>
                                                        <input type="text" placeholder="−− / −−" />
                                                    </div>
                                                </div>
                                                <div className={cls.cardowner}>
                                                    <input type="text" placeholder="Владелец карты" />
                                                </div>
                                                <div className={cls.paymentBtn}>
                                                    <button><p>оплатить 29 480 000 сум</p></button>
                                                </div>
                                            </>
                                        ) : (
                                            <form className={cls.inCash}>
                                                <div className={cls.inCashBtn}>
                                                    <button><p>подтвердить заказ</p></button>
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={cls.yourOrder}>
                            <div className={cls.titleOrder}>
                                <p>Ваш заказ</p>
                            </div>
                            <div className={cls.inOrder}>
                                <img src="laptops.png" />
                                <div className={cls.textProduct}>
                                    <div className={cls.inProduct}>
                                        <p>Ноутбук</p>
                                    </div>
                                    <div className={cls.nameProduct}>
                                        <p>Acer Aspire 3 A315-34 (NX.Hezer.003)</p>
                                    </div>
                                    <div className={cls.productPrice}>
                                        <p>7 737 000 сум </p>
                                        <div className={cls.inProductPrice}>
                                            <p>(1 шт)</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={cls.inOrder}>
                                <img src="laptops.png" />
                                <div className={cls.textProduct}>
                                    <div className={cls.inProduct}>
                                        <p>Ноутбук</p>
                                    </div>
                                    <div className={cls.nameProduct}>
                                        <p>Acer Aspire 3 A315-34 (NX.Hezer.003)</p>
                                    </div>
                                    <div className={cls.productPrice}>
                                        <p>7 737 000 сум </p>
                                        <div className={cls.inProductPrice}>
                                            <p>(1 шт)</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={cls.inOrder}>
                                <img src="laptops.png" />
                                <div className={cls.textProduct}>
                                    <div className={cls.inProduct}>
                                        <p>Ноутбук</p>
                                    </div>
                                    <div className={cls.nameProduct}>
                                        <p>Acer Aspire 3 A315-34 (NX.Hezer.003)</p>
                                    </div>
                                    <div className={cls.productPrice}>
                                        <p>7 737 000 сум </p>
                                        <div className={cls.inProductPrice}>
                                            <p>(1 шт)</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={cls.totalPrice}>
                                <p>итого: 29 480 000 сум</p>
                                <div className={cls.commentTotalPrice}>
                                    <p>+ Доставка 20 000 сум</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}