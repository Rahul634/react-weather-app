//28a5f601c629788efe8798469d7b9661
import axios from 'axios'
import { useState, useEffect } from 'react'

export const GetData = (Latitude, Longitude) => {
    const [state, setState] = useState();
    useEffect(() => {
        axios.get(`api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=28a5f601c629788efe8798469d7b9661`)
    .then((data) => {
        console.log(data);
    })
    }, [])
    return state;
}