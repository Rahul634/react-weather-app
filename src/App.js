import axios from 'axios'
import './App.css';
import React, {useEffect, useState} from 'react'
import Clock from 'react-live-clock'
import {GetData} from './Componant/Api'
function App() {
  const [allValues, setAllValues] = useState({
    latitude: null,
    longitude: null,
    temp: null,
    locationName: null,
    country: null
 });
  
useEffect(() => {
  if(navigator.geolocation){
    getPosition()
    .then((position) => {
      console.log(position.coords.latitude)
      getWeather(position.coords.latitude, position.coords.longitude)
    })
  }
}, [])
const getPosition = () => {
  return new Promise(function(resolve, reject)  {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
const getWeather = async (Latitude, Longitude) => {
  const api = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&units=metric&appid=28a5f601c629788efe8798469d7b9661`
  ); 
  const data = await api.json()
  console.log(data)
  setAllValues({
    temp : Math.round(data.main.temp),
    locationName: data.name,
    country: data.sys.country
  })
}
  return (
    <div className="col-8 d-flex justify-content-center py-5">
      <div className="col-6 app-bg d-flex flex-wrap">
        <div className="col-12">
          <h2 className="text-white m-0">{allValues.locationName}</h2>
          <p className="text-white">IN</p>
        </div>
        <div className='col-12 mt-auto d-flex'>
          <h2 className="text-white m-0">
            <Clock format={'HH:mm:ss'} ticking={true}/>
          </h2>
          <p className="text-white m-0">
          <Clock format={'dddd, MMMM DD, YYYY'} date={''} />
          </p>
        </div>
        <div className="my-auto">
          <h1 className="text-white">{allValues.temp}°C</h1>
        </div>
        
      </div>
    </div>
  );
}

export default App;
