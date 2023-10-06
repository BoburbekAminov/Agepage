import React, { useState, } from "react";
import {
    Stars,
} from "../../Svg/index"
import cls from "../Characteristic/characteristic.module.scss";
import Modal from "react-modal";

const customStyles = {
    content: {
      top: "45%",
      left: "50%",
      right: "auto",
      buttom: "auto",
      maxWidth: "640px",
      width:"100%",
      marginRight: "-40%",
      transform: "translate(-50%, -50%)",
      
    },
  };

export default function Characteristic() {
    // const [hide, setHide] = useState(false)
    const [index, setIxdex] = useState(0)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const [getData, setGetData] = useState(null);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const OpenFunction = () => {
        setOpen(!open);
    };

    

    function getParent() {
        return document.querySelector(".modalAuth");
    }
    return (
        <>
            <div className={cls.tabs}>
                <div className={cls.inTabs}>
                    <div className={cls.infoTabs}>
                        <p onClick={() => { setIxdex(0) }}>Характеристика</p>
                        <p onClick={() => { setIxdex(1) }}>Отзывы</p>
                    </div>
                </div>
            </div>
            <div className="container">
                {index == 0 ? (
                    <>
                        <form className={cls.tabsText}>
                            <div className={cls.titleCharacteristic}>
                                <p>Характеристика</p>
                                <div className={cls.textInfo}>
                                    <p>Комплектующие</p>
                                    <div className={cls.inTextInfo}>
                                        <div className={cls.device}>
                                            <p>Процессор</p>
                                            <p>Видеокарта</p>
                                            <p>Оперативка</p>
                                            <p>Накопитель</p>
                                            <p>Матрица экрана</p>
                                            <p>Модель процессора</p>
                                            <p>Объем памяти HDD</p>
                                        </div>
                                        <div className={cls.deviceName}>
                                            <p>Core™i5-10210U</p>
                                            <p>2 GB GeForce® MX230</p>
                                            <p>DDR4 8GB</p>
                                            <p>HDD 1TB</p>
                                            <p>IPS</p>
                                            <p>i5-1035G1</p>
                                            <p>1000 gb</p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={cls.accessoriesTitle}>
                                <p>Аксессуары</p>
                                <div className={cls.textAccessories}>
                                    <div className={cls.inTextAccessories}>
                                        <p>Монитор</p>
                                        <p>Клавиатура</p>
                                        <p>Мышка</p>
                                        <p>Наушники</p>
                                        <p>Кресло</p>
                                        <p>Wi-Fi роутер</p>
                                        <p>Пилот</p>

                                    </div>
                                    <div className={cls.inAccessoriesName}>
                                        <p>Core™i5-10210U</p>
                                        <p>2 GB GeForce® MX230</p>
                                        <p>DDR4 8GB</p>
                                        <p>HDD 1TB</p>
                                        <p>IPS</p>
                                        <p>i5-1035G1</p>
                                        <p>1000 gb</p>
                                    </div>

                                </div>
                            </div>
                            <div className={cls.Other}>
                                <p>Другое</p>
                                <div className={cls.textOther}>
                                    <div className={cls.inOther}>
                                        <p>Монитор</p>
                                        <p>Клавиатура</p>
                                        <p>Мышка</p>
                                        <p>Наушники</p>

                                    </div>
                                    <div className={cls.nameOther}>
                                        <p>Core™i5-10210U</p>
                                        <p>2 GB GeForce® MX230</p>
                                        <p>DDR4 8GB</p>
                                        <p>HDD 1TB</p>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </>
                ) : (
                    <form className={cls.reviewsTabs} >
                        <div className={cls.reviews}>
                            <p>Отзывы 5</p>

                            <div className={cls.inReviews}>
                                <div onClick={openModal} className={cls.allReviews}>
                                    <p>Все отзывы</p>
                                </div>

                                <div className={cls.byDate}>
                                    <p>По дате</p>
                                </div>
                                <div className={cls.estimates}>
                                    <p>По оценки</p>
                                </div>
                            </div>
                        </div>
                        <div className={cls.comment}>
                            <div className={cls.incomment}>
                                <div className={cls.commentAuthor}>
                                    <div className={cls.authorImage}>
                                        <img src="Ellipse 63.png" />
                                    </div>
                                    <div className={cls.authorTitle}>
                                        <div className={cls.authorName}>
                                            <p>Катерина Самойлюк</p>
                                            <Stars />
                                        </div>
                                        <div className={cls.authorText}>
                                            <p>Производители выпускают как маленькие, 11-дюймовые модели, так и 17-дюймовые устройства.
                                                Есть категории диагоналей 15,6–17 и 13,3–14, которые почти не различаются между собой.
                                            </p>
                                        </div>
                                        <div className={cls.commentDate}>
                                            <p>15 Март, 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cls.reviewRating}>
                                <div className={cls.inReviewRating}>
                                    <div className={cls.reviewRatingText}>
                                        <p>Рейтинг отзывов</p>

                                    </div>
                                    <div className={cls.starIcons}>
                                        <img src="1.png" />
                                    </div>
                                    <div className={cls.starIcons}>
                                        <img src="1.png" />
                                    </div>
                                    <div className={cls.starIcons}>
                                        <img src="1.png" />
                                    </div>
                                    <div className={cls.starIcons}>
                                        <img src="1.png" />
                                    </div>
                                    <div className={cls.starIcons}>
                                        <img src="1.png" />
                                    </div>
                                    <div className={cls.reviewRatingBtn}>
                                        <button><p>написать отзыв</p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
                <div className="modalAuth">
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        parentSelector={getParent}
                        contentLabel="Example Modal"
                    >
                        <div className={cls.innerModal}>
                            <div className={cls.textModal}>
                                <p>Оставить отзыв</p>
                            </div>
                            <div className={cls.inModal}>
                                
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>

        </>
    )
}