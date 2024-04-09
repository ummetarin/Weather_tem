import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Navber = () => {
  return (
    <div>
      <nav className="flex items-center justify-between shadow-lg  px-4 py-2">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
          <h2><TiWeatherPartlySunny className="h-12 w-24 text-blue-700" /></h2>
        </div>
        <div>
            Weather Cheak
        </div>
      
      </nav>
    </div>
  );
};

export default Navber;
