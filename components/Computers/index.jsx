import React from "react";
import {
    RightIcon,
 } from "../Svg/index"
import cls from "../Computers/computers.module.scss"
// import Test from './Test'

export default function Computers({innerData}) {
    return (
        <>
            <div  className="container">
                <div className={cls.ourProducts}>
                    <div className={cls.title}>
                        <p>Наши товары</p>
                        {/* <Test childComponent={innerData}/> */}
                        <button className={cls.right}><RightIcon/></button>
                    </div>
                    <div className={cls.grids}>
                        <div className={cls.computer}>
                            <img src="laptops.png" />
                            <div className={cls.inComputer}>
                                <p>Ноутбуки</p>
                                <span>от 4 000 000 сум</span> 
                            </div>
                        </div>
                        <div className={cls.computer}>
                            <img src="laptops.png" />
                            <div className={cls.inComputer}>
                                <p>Ноутбуки</p>
                                <span>от 4 000 000 сум</span> 
                            </div>
                           
                        </div>
                        <div className={cls.computer}>
                            <img src="laptops.png" />
                            <div className={cls.inComputer}>
                                <p>Ноутбуки</p>
                                <span>от 4 000 000 сум</span> 
                            </div>
                        </div>
                        <div className={cls.computer}>
                            <img src="laptops.png" />
                            <div className={cls.inComputer}>
                                <p>Ноутбуки</p>
                                <span>от 4 000 000 сум</span> 
                            </div>
                        </div>
                        <div className={cls.computer}>
                            <img src="laptops.png" />
                            <div className={cls.inComputer}>
                                <p>Ноутбуки</p>
                                <span>от 4 000 000 сум</span> 
                            </div>
                        </div>
                        <div className={cls.computer}>
                            <img src="laptops.png" />
                            <div className={cls.inComputer}>
                                <p>Ноутбуки</p>
                                <span>от 4 000 000 сум</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}