import React from "react"
import cls from "../Catalog/catalog.module.scss"

export default function Catalog() {
    return (
        <>
            <div className="container">
                <div className={cls.catalogItem}>
                    <div className={cls.catalogText}>
                        <p>
                            Каталог товаров
                        </p>
                    </div>
                    <div className={cls.inCatalog}>
                        <div className={cls.products}>
                            <div className={cls.productTitle}>
                                <p>Комплектующие</p>
                            </div>
                            <div className={cls.productsInfo}>
                                <p>Все внутренности кейса</p>
                            </div>
                            <div className={cls.productsBtn}>
                                <button>перейти в раздел</button>
                            </div>
                            <div className={cls.productImg}>
                                <img src="accessory.png" />
                            </div>
                        </div>
                        <div className={cls.products}>
                            <div className={cls.productTitle}>
                                <p>Комплектующие</p>
                            </div>
                            <div className={cls.productsInfo}>
                                <p>Все внутренности кейса</p>
                            </div>
                            <div className={cls.productsBtn}>
                                <button>перейти в раздел</button>
                            </div>
                            <div className={cls.productImg}>
                                <img src="accessory.png" />
                            </div>
                        </div>
                        <div className={cls.products}>
                            <div className={cls.productTitle}>
                                <p>Комплектующие</p>
                            </div>
                            <div className={cls.productsInfo}>
                                <p>Все внутренности кейса</p>
                            </div>
                            <div className={cls.productsBtn}>
                                <button>перейти в раздел</button>
                            </div>
                            <div className={cls.productImg}>
                                <img src="accessory.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}