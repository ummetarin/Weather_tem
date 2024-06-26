import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaTemperatureLow } from "react-icons/fa6";
import { RiHeartAddLine } from "react-icons/ri";
import { IoIosHeartDislike } from "react-icons/io";
interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
  name: string;
  sys: {
    sunrise: number;
    sunset: number;
  };
}

const Weatherpage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const api = {
    key: "e6a10a0e71854dc5e3542f780cd86a9a",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  useEffect(() => {
    fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
      .then((response) => response.json())
      .then((data: WeatherData) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city]);

  const convertKelvinToCelsius = (kelvin: number): number => {
    return kelvin - 273.15;
  };

  const handletoggle = () => {
    setIsFavorite(!isFavorite);
    if (typeof localStorage !== "undefined") {
      const storedCities: { name: string; temp: number }[] = JSON.parse(
        localStorage.getItem("cities") || "[]"
      );
      const cityIndex = storedCities.findIndex(
        (cityItem) => cityItem.name === weatherData?.name
      );
      if (cityIndex === -1) {
        storedCities.push({
          name: weatherData!.name,
          temp: convertKelvinToCelsius(weatherData!.main.temp),
        });
        localStorage.setItem("cities", JSON.stringify(storedCities));
         alert("Added to Favourite list")
      } else {
        storedCities.splice(cityIndex, 1);
        localStorage.setItem("cities", JSON.stringify(storedCities));
       alert("Remove from Favourite list")
      }
    } else {
      alert("Local storage is not supported in your browser!");
    }
  };

  useEffect(() => {
    if (
      weatherData &&
      weatherData.weather &&
      weatherData.weather.length > 0
    ) {
      const weatherDescription = weatherData.weather[0].description.toLowerCase();
      if (weatherDescription.includes("clear sky")) {
        setBackgroundImage("url(https://i.ibb.co/PDPgvB7/images-15.jpg)");
      } else if (weatherDescription.includes("light rain")) {
        setBackgroundImage("url(https://i.ibb.co/j8RMzYn/9.jpg)");
      } else if (weatherDescription.includes("overcast clouds")) {
        setBackgroundImage(
          "url(https://i.ibb.co/0GK4Gd0/picture-cloudy-sky-with-overcast-sun-125540-2438.jpg)"
        );
      } else if (weatherDescription.includes("few clouds")) {
        setBackgroundImage("url(https://i.ibb.co/gTXPfvg/images-13.jpg)");
      } else if (weatherDescription.includes("moderate rain")) {
        setBackgroundImage("url(https://i.ibb.co/RykPd11/images-12.jpg)");
      } else if (weatherDescription.includes("broken clouds")) {
        setBackgroundImage("url(https://i.ibb.co/2Ws4rWM/images-16.jpg)");
      } else if (weatherDescription.includes("scattered clouds")) {
        setBackgroundImage(
          "url(https://i.ibb.co/5R429ZP/scattered-clouds-in-the-sky-indicating-a-change-in-weather-free-photo.jpg)"
        );
      } else if (weatherDescription.includes("sunny")) {
        setBackgroundImage("url(https://i.ibb.co/QcZtKf1/images-14.jpg)");
      } else {
        setBackgroundImage(
          "url(https://i.ibb.co/2sLZSvN/overcast-clouds-mist-daylight.jpg)"
        );
      }
    } else {
      setBackgroundImage(
        "url(https://i.ibb.co/7SvTSrK/1-bq2-Kfw7h-VXwu-Wm9-GQXGZw.png)"
      );
    }
  }, [weatherData]);

  return (
    <div className="flex justify-center py-12">
      <div
        className="w-[750px] h-[400px]"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-row text-white justify-around items-center">
          <div>
            <h1 className="mb-6 pt-20 text-4xl font-bold">
              {weatherData
                ? convertKelvinToCelsius(weatherData.main.temp).toFixed(2)
                : "Loading..."}
              °C
            </h1>
            <h1 className="mb-3 text-2xl font-bold">{weatherData?.name}</h1>
            <h1 className="text-xl pt-3 font-bold flex items-center gap-6 pb-4 ">
              Wind temp : {weatherData?.wind.deg} Deg <FaTemperatureLow />
            </h1>
            <h1 onClick={handletoggle}>
              {isFavorite ? (
                <>
                  <IoIosHeartDislike className="text-3xl" />
                </>
              ) : (
                <>
                  <RiHeartAddLine className="text-3xl"></RiHeartAddLine>
                </>
              )}
            </h1>
          </div>
          <div className="mt-20">
            <h1 className="text-xl py-1 font-medium">
              Weather :{" "}
              {weatherData?.weather && weatherData.weather.length > 0
                ? weatherData.weather[0].description
                : "Loading..."}
            </h1>
            <h1 className="text-xl py-1.5 font-medium">
              Wind Speed : {weatherData?.wind.speed}
            </h1>
            <h1 className="text-xl py-1.5 font-medium">
              Humadity : {weatherData?.main.humidity}
            </h1>
            <h1 className="text-xl py-1.5 font-medium">
              Sunrise : {weatherData?.sys.sunrise}
            </h1>
            <h1 className="text-xl py-1.5 font-medium">
              Sunset : {weatherData?.sys.sunset}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weatherpage;
