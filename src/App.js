import React, { useEffect, useState } from "react";
import axios from "axios";
import Location from "./api/location";
import './App.css'

function App() {
    const [send, setsend] = useState({})
    const [lat, setlat] = useState(33.1799965)
    const [lon, setlon] = useState(129.7152872)
    const [data, setdata] = useState({})
    const [get, setget] = useState(false)

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2d00704c6acc49cc25b8420e592431ef`)
            .then((response) => {
                setdata(response.data)
                setget(true)
                console.log(data)

            })
    }, [lat, lon])

    function sendloca(sendinfor) {
        setsend(sendinfor)
        setlat(sendinfor.lat)
        setlon(sendinfor.lon)
    }

    return (
        <div className=" container" id="show"  >
            <div className="show mt-5" >< Location sendloca={send => sendloca(send)} /></div>
            <div className="  infor " >
                <div>Do u mean:{send.name} in {send.country}</div>
                <div>temperature:{get && data.main.temp}</div>
            </div>


        </div>

    )
}
export default App