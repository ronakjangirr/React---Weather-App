import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Showtemp from './Showtemp';
import Weatherr from "./Weatherr.css";

function Weather() {
    let [city,setCity]=useState("");
    let [data, setData]=useState({
        description:"",
        temp:0,
        country:"",  
    })

        useEffect(()=>{
                
        },[handler])

    async function handler(){
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04fcc5a107154cacbc68d6938ada14b6`)
        .then((response)=>{
            setData({
                description:response.data.weather[0].description,
                temp:response.data.main.temp,
                country:response.data.sys.country,
                temp_max:response.data.main.temp_max,
                temp_min:response.data.main.temp_min,
                humidity:response.data.main.humidity,
                speed:response.data.wind.speed,
            })
        console.log(response.data)    
        })
    }
    return (
        <>
           <div className='div-style'>
                <h1 className='font-style'>Weather Forecast App</h1>                
            </div>

            <div className='div-style2'>
                <Form.Group className="mb-3">
                    <Form.Label className='font-style2'>Enter City</Form.Label>
                    <Form.Control type="text" placeholder="Search Your City" value={city} onChange={(e)=> setCity(e.target.value)} />
                </Form.Group>
            </div>
            <div className='div-style3'>
                <Button type="submit" variant="outline-dark" onClick={handler}>Search</Button>
            </div>    

            <Showtemp text={data}></Showtemp>
        </>
    )
}

export default Weather;
