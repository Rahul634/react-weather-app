import './App.css';
import React, {useEffect, useState} from 'react'
import {GetData} from './Componant/Api'
function App() {
  const [Latitude, setLatitude] = useState();
  const [Longitude, setLongitude] = useState();
  
 useEffect(() => {
  navigator.geolocation.getCurrentPosition(function(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });
 }, [])
 const dataapi = GetData(Latitude, Longitude);
  return (
    <div className="App">
      {

      }
    </div>
  );
}

export default App;
