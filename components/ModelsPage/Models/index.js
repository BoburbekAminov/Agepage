import Link from "next/link";
import React, { useState } from "react";
import cls from "../Models/models.module.scss"

export default function Models({ data }) {

    return (
        <>
            <div className="container">
                <div className={cls.models}>
                    <div className={cls.modelsTitle}>
                        <p>Модели</p>
                    </div>
                    <div className={cls.modelsGrids} >
                        {data.childs?.length && data.childs.map((item) => (
                            <div className={cls.modelsComputer}>
                                <Link href={{
                                    pathname: '/catalog/[catalog]'
                                }}
                                    as={`/catalog/${item.slug}`}
                                >
                                    <img src={item.preview} />
                                    <div className={cls.modelsInComputer}>
                                        <p>{item.name}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}