import React from "react";
import {
    LogoIcon,
    TelegramIcon,
    InstagramIcon,
    FacebookIcon,
} from "../../Svg/index"
import cls from "../Footer/footer.module.scss"


export default function Footer() {
    return (
        <>
            <div className={cls.footer}>
                <div className='containerFooter'>
                    <div className={cls.wrapFooter}>
                        <div className={cls.info}>
                            <div className={cls.web}>
                                <div className={cls.logoFooter}>
                                    <LogoIcon />
                                </div>
                                <div className={cls.webPages}>
                                    <div className={cls.telegram}>
                                        <TelegramIcon />
                                    </div>
                                    <div className={cls.instagram}>
                                        <InstagramIcon />
                                    </div>
                                    <div className={cls.facebook}>
                                        <FacebookIcon />
                                    </div>
                                </div>
                            </div>
                            <div className={cls.models}>
                                <p>МОДЕЛИ</p>
                                <button className={cls.computers}>Компьютеры</button>
                                <button className={cls.laptops}>Ноутбуки</button>
                                <button className={cls.monoblocks}>Моноблоки</button>

                            </div>
                            <div className={cls.useful}>
                                <p>ПОЛЕЗНОЕ</p>
                                <button className={cls.configurator}>Конфигуратор </button>
                                <button className={cls.selection}>Подбор </button>
                                <button className={cls.brands}>ПК Бренды</button>

                            </div>
                            <div className={cls.catalog}>
                                <p>КАТАЛОГ</p>
                                <button className={cls.kits}>Комплектующие</button>
                                <button className={cls.accessoriesBtn}>Аксессуары</button>
                                <button className={cls.recommendations}>Рекомендации</button>
                            </div>
                            <div className={cls.aboutShop}>
                                <p>О МАГАЗИНЕ</p>
                                <button className={cls.aboutUs}>О нас </button>
                                <button className={cls.news}>Новости</button>
                                <button className={cls.contacts}>Контакты</button>
                            </div>
                            <div className={cls.subscribe}>
                                <p>НОВОСТНАЯ РАССЫЛКА</p>
                                <div className={cls.email}>
                                    <input type="text" placeholder="E-mail" />
                                </div>

                                <div className={cls.inSubscribe}>
                                    <button>подписаться</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={cls.reserved}>
                        <div className={cls.inReserved}>© 2022 Age.uz. Все права защищены</div>
                        <div className={cls.website}>
                            <p>Cайт сделал</p>
                            <span>MARGIN</span>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}