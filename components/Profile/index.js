import React, { useState, useEffect } from "react";
import { RightIcons,  } from "../Svg";
import cls from "../Profile/profile.module.scss";
import axios from "axios";
import Cookies from 'universal-cookie'




export default function Profile({ info }) {
  const cookie = new Cookies();
  const access_token = cookie.get('accessToken');
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get('https://api.bs365.uz/api/user/orders', {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }).then((response) => {
      console.log(response, "product")
      setProduct(response.data.data)
    }).catch((error) => {});

  }, [])
  // console.log(product, "product")
  console.log(info, "info")

  return (
    <>
      <div className={cls.route}>
        <p>Главная</p>
        <RightIcons />
        <div className={cls.last}>
          <p>личный кабинет</p>
        </div>
      </div>
      <table>
        <tr>
          <th>
            Name 1
          </th>
          <th>
            Name 2
          </th>
          <th>
            Name 3
          </th>

        </tr>
        {product.length && product.map((item) => (
          <tr key={item.id}>
            <td>
              {item.cart.items[0].product.images[0].url}
            </td>
            <td>
              {item.cart.items[0].product.name}
            </td>
            <td>
              {item.cart.items[0].product.price}
            </td>
          </tr>
        ))}

      </table>
    </>
  );
}
