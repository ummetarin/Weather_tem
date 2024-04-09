
import React, { useState } from "react";
import { Link } from "react-router-dom";


const CityesPart = ({ item }) => {

  // const [weatherData, setWeatherData] = useState(null);

  // const api={
  //   key:"e6a10a0e71854dc5e3542f780cd86a9a",
  //   base:"https://api.openweathermap.org/data/2.5/"
  // }

 
  // const handleCitiesWeather = (cityname) => {
  //   fetch(`${api.base}weather?q=${item.name}&appid=${api.key}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setWeatherData(data)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching weather data:', error);
  //     });
  // };
  

  return (
    <>
        <td className="py-4 px-6 border-b">{item.cou_name_en}</td>
       <Link to={`/weather/${item?.name}`}><td className="py-4 px-6 border-b">{item.name}</td></Link>
        <td className="py-4 px-6 border-b">{item.timezone}</td>
        <td className="py-4 px-6 border-b text-end">{item.country_code}</td>
    </>
  );
};

export default CityesPart;
