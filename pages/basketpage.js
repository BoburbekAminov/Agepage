import React, {useState, useEffect} from "react";

import BasketPage from "../components/BasketPage"
import axios from "axios";

export default function Basketpage(){
    const [data, setData] = useState({})


    useEffect(() => {
        axios.get('https://api.bs365.uz/api/cart/show', {

        }).then((response) => {
            setData(response.data.data.items)

        }).catch(() => {});

    }, [])

    console.log(data,"basked")
    return<>
    <BasketPage zapros={data}/>
    </>
}