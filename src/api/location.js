import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'

function Location({ sendloca }) {

    const [locations, setlocations] = useState([])
    const [locationname, setlocationname] = useState('')

    function Getlocation() {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${locationname}&limit=5&appid=2d00704c6acc49cc25b8420e592431ef`)
            .then((response) => {
                setlocations(response.data)
                console.log(locations)
            })
    }

    function Show() {

        const list = locations.map(loca => {
            return (
                <li className="list-group-item lis" >
                    {loca.name}
                    <button type="button" className="btn btn-info " onClick={() => sendloca(loca)} >choose</button>
                </li>
            )
        })
        return list

    }

    return (
        <div>
            <div className="g-0 text-center " >
                <input className="form-control me-2 col-10 " value={locationname} placeholder="location name" onChange={(event) => { setlocationname(event.target.value) }} ></input>
                <button className="btn btn-outline-success col-2 " onClick={() => { Getlocation() }} >Search</button>
            </div>
            <ul className="list-group" >< Show /></ul>



        </div>
    )

}

export default Location