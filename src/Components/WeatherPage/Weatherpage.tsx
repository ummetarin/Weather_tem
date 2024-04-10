import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaTemperatureLow } from "react-icons/fa6";
import { RiHeartAddLine } from "react-icons/ri";

const Weatherpage = () => {
  
  const{city}=useParams()
  console.log(city);
  const [weatherData, setWeatherData] = useState([]);

  const handletoggle=()=>{
    console.log(true);
  }

  const api={
    key:"e6a10a0e71854dc5e3542f780cd86a9a",
    base:"https://api.openweathermap.org/data/2.5/"
  }

  useEffect(()=>{
    fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
    .then((response) => response.json())
    .then((data) => {
      setWeatherData(data)
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
    });
  },[])
  console.log(weatherData);

  const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };



  return (
    <div className="flex justify-center py-12">

    <div className=" w-[650px]   h-[400px]" style={{
            backgroundImage:
              "url(https://i.ibb.co/5sfgJ4H/istockphoto-947314334-612x612.jpg)",
          }}>
     <div className="flex flex-row justify-around items-center">

      <div>
      <h1 className="mb-6 pt-20 text-4xl font-bold">
          {weatherData ? convertKelvinToCelsius(weatherData.main?.temp).toFixed(2) : 'Loading...'}°C
        </h1>
          
              <h1 className="mb-3 text-2xl font-bold">{weatherData?.name}</h1>
              <h1 className="text-xl pt-3 font-bold flex items-center gap-6 pb-4 ">Wind temp : {weatherData?.wind?.deg} Deg <FaTemperatureLow /></h1>
              <h1 onClick={handletoggle}><RiHeartAddLine className="text-3xl"></RiHeartAddLine></h1>
      </div>
      <div className="mt-20">
              <h1 className="text-xl py-1 font-medium">Weather : {weatherData && weatherData.weather && weatherData.weather.length > 0 ? weatherData.weather[0].description : 'Loading...'}</h1>
                 <h1 className="text-xl py-1.5 font-medium">Wind Speed : {weatherData?.wind?.speed}</h1>
                <h1 className="text-xl py-1.5 font-medium">Humadity : {weatherData?.main?.humidity}</h1>
                <h1 className="text-xl py-1.5 font-medium">Sunrise : {weatherData?.sys?.sunrise}</h1>                
                <h1 className="text-xl py-1.5 font-medium">Sunset : {weatherData?.sys?.sunset}</h1>                

        
      </div>

     </div>
    


    </div>




      {/* <div className="px-36 py-12">
        <div
          className="hero h-[400px] "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/5sfgJ4H/istockphoto-947314334-612x612.jpg)",
          }}
        >
          <div className="flex md:flex-row ">
          <div>
<h1>gagga</h1>
          </div>
          <div>
<h1>uhuhu</h1>
          </div>

          </div>
          
          {/* <div className=" flex flex-row   text-white">
            <div className="">
          <div className="pb-6">
          <h1 className="text-3xl font-bold flex items-center gap-6 ">{weatherData?.wind?.deg} Deg <FaTemperatureLow /></h1>
          </div>
              <h1 className="mb-5 text-4xl font-bold">{weatherData?.name}</h1>
              <p className="mb-5">
               {weatherData?.main?.temp}
              </p>
              <h1><RiHeartAddLine className="text-3xl"></RiHeartAddLine></h1>
            </div>
            <div className="w-[50%]">
                {/* <h1 className="text-xl py-1 font-medium">Weather : {weatherData?.weather[0].description}</h1> */}
                {/* <h1 className="text-xl py-1 font-medium">Wind Speed : {weatherData?.wind?.speed}</h1>
                <h1 className="text-xl py-1 font-medium">Humadity : {weatherData?.main?.humidity}</h1>
                <h1 className="text-xl py-1 font-medium">Sunrise : {weatherData?.sys?.sunrise}</h1>                
                <h1 className="text-xl py-1 font-medium">Sunset : {weatherData?.sys?.sunset}</h1>                



             
            </div>
          </div>  */}
        {/* </div>
      </div> */} 
    </div>
  );
};

export default Weatherpage;
