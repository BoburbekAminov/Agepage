import React, {useState, useEffect} from "react";
import Profile from "@/components/Profile";
import Cookies from "universal-cookie";
import axios from "axios";
const profile =()=> {
    const cookie = new Cookies()
    const accesstoken = cookie.get('accessToken')
    const [item , setItem]= useState({})

    useEffect(()=>{
        axios.get('https://api.bs365.uz/api/user/info',{
            headers: {
                Authorization: `Bearer ${accesstoken}`
            }
        }).then((response)=>{
            console.log(response, "rescha")
            setItem(response.data.data)
        }).catch((error)=>{
        })
    },[])
    
    return (
        <Profile info={item}/>
    )   
}
export default  profile 