import React, { useState, useEffect } from "react";
import {
  MenuLaptop,
  MenuLaptop2,
  Basket,
  ButtomIcon,
  PlusIcon,
} from "../Svg/index";
import cls from "../LaptopMadelsPage/laptopmadels.module.scss";
import { Checkbox } from "@nextui-org/react";
import { Collapse, Text } from "@nextui-org/react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Router, useRouter } from "next/router";

const LaptopMadelsPage = ({ data, idData }) => {
  const [index, setIxdex] = useState(0);
  const [getData, setGetdata] = useState([]);
  const router = useRouter();
  const cookie = new Cookies();


  useEffect(() => {
    axios
      .get("https://api.bs365.uz/api/products", {
        params: {
          category_id: idData,
          page: 1,
          per_page: 24,
          sort: "price",
          asc: 1,
        },
      })
      .then((res) => {
        setGetdata(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(getData, "getData")
  const addBusket = (id) => {
    console.log(id, "idd");
    axios.post("https://api.bs365.uz/api/cart/add", {
        item_shop_id: id,
        quantity: 1,
        
      }).then((res) => {
        console.log(res,"res")
        // setGetdata(res.data.data)
      }).catch(() => { "qoshilmadi" })
  }




  return (
    <>
      <div className={cls.laptopWrap}>
        <div className={cls.laptopTitle}>
          <div className={cls.filterBtn}>
            <button>
              <p>Сбросить фильтр</p>
            </button>
          </div>
          <div className={cls.laptop}>
            <p>Ноутбуки</p>
          </div>
          <div className={cls.laptopTabs}>
            <div className={cls.inLaptopTabs}>
              <div className={cls.theFirstTabs}>
                <button
                  className={index == 0 ? cls.active : cls.nonactive}
                  onClick={() => {
                    setIxdex(0);
                  }}
                >
                  <MenuLaptop />
                </button>
              </div>
              <div className={cls.secondTabs}>
                <button
                  className={index == 1 ? cls.active : cls.nonactive}
                  onClick={() => {
                    setIxdex(1);
                  }}
                >
                  <MenuLaptop2 />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.filterAndLaptop}>
          <div className={cls.resetFilter}>
            <div className={cls.laptopBrands}>
              <div className={cls.inlaptopBrands}>
                <Collapse.Group>
                  <Collapse
                    expanded={true}
                    arrowIcon={<PlusIcon />}
                    title="Бренды"
                  >
                    <div className={cls.appleLaptop}>
                      <Checkbox defaultSelected>Apple</Checkbox>
                    </div>
                    <div className={cls.appleLaptop}>
                      <Checkbox defaultSelected>Acer</Checkbox>
                    </div>
                    <div className={cls.appleLaptop}>
                      <Checkbox defaultSelected>asus </Checkbox>
                    </div>
                    <div className={cls.appleLaptop}>
                      <Checkbox defaultSelected>Aero</Checkbox>
                    </div>
                    <div className={cls.appleLaptop}>
                      <Checkbox defaultSelected>HP </Checkbox>
                    </div>
                  </Collapse>
                  <Collapse
                    expanded={true}
                    arrowIcon={<PlusIcon />}
                    title="Процессор "
                  ></Collapse>
                </Collapse.Group>
              </div>
            </div>
            <hr />
            <div className={cls.colorLaptop}>
              <p>Цвет</p>
              <div className={cls.colorLaptopBtn}>
                <div className={cls.black}>
                  <button></button>
                </div>
                <div className={cls.gray}>
                  <button></button>
                </div>
                <div className={cls.white}>
                  <button></button>
                </div>
              </div>
            </div>
          </div>
          {/* {console.log(getData, "getData")} */}
          {index == 0 ? (
            <>
              <div className={cls.laptopWrapGrid}>
                {getData.length && getData.map((item) => (
                    <div className={cls.laptopGrid}>
                      <div className={cls.laptopImage}>
                        <img src={item.images[0].types.medium_default} />
                      </div>
                      <div className={cls.laptopNameAndprice}>
                        <div className={cls.laptopImageName}>
                          <p>{item.name}</p>
                        </div>
                        <div className={cls.priceAndBtn}>
                          <div className={cls.laptopPrice}>
                            <p>{item.price}</p>
                          </div>
                          <div className={cls.basketBtn}>
                            <button
                              onClick={() =>
                                addBusket(item.random_shop.item_shop_id)
                              }
                            >
                              <Basket />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <>
              <div className={cls.laptopGridInfo}>
                {getData.length && getData.map((item) => (
                    <div className={cls.inlaptopGridInfo}>
                      <div className={cls.laptopImage}>
                        <img src={item.images[0].types.medium_default} />
                      </div>
                      <div className={cls.laptopWrapText}>
                        <div className={cls.laptopNameAndprice}>
                          <div className={cls.laptopImageName}>
                            <p>Acer Aspire 3 A315-34 (NX.Hezer.003)</p>
                            <div className={cls.laptopPrice}>
                              <p>3 580 000 сум</p>
                            </div>
                          </div>
                          <div className={cls.basketButton}>
                            <button>
                              <p>в корзину</p>{" "}
                              <div className={cls.cart}>
                                <Basket />
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className={cls.laptopInfo}>
                          <div className={cls.laptopInfoText}>
                            <p>Процессор:</p>
                            <span>Intel Celeron N4000</span>
                          </div>
                          <div className={cls.laptopInfoText}>
                            <p>Оперативная память:</p>
                            <span> 4 ГБ</span>
                          </div>
                          <div className={cls.laptopInfoText}>
                            <p>Накопитель:</p>
                            <span> HDD 500 ГБ</span>
                          </div>
                          <div className={cls.laptopInfoText}>
                            <p>Видеокарта:</p>
                            <span> Intel UHD Graphics 600</span>
                          </div>
                          <div className={cls.laptopInfoText}>
                            <p>Экран:</p>
                            <span>15.6″ (1600×900)</span>
                          </div>
                          <div className={cls.laptopInfoText}>
                            <p>USB:</p>
                            <span> 2.0 Type A x 2, 3.0 Type A</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
        <div className={cls.btn}>
          <button>
            <p>Показать еще</p>
            <ButtomIcon />
          </button>
        </div>
      </div>

    </>
  );
};

export default LaptopMadelsPage;
