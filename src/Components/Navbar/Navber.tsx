
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";

const Navber = () => {
  return (
    <div>
      <nav className="flex items-center justify-between shadow-lg  px-4 py-2">
        <div className="scale-100  items-center flex cursor-pointer rounded-2xl px-3 py-2 md:text-xl text-sm font-semibold transition-all duration-200 hover:scale-110">
          <h2><TiWeatherPartlySunny className="md:h-12 h-8 md:w-24 w-16 text-blue-700" /></h2>
          <h1>Weather Forecast</h1>
        </div>
        <div>
          <Link to={'/fav'}><h1 className="flex items-center btn text-white bg-blue-600"><GrFavorite /> Favourites Items</h1></Link>
        </div>
      
      </nav>
    </div>
  );
};

export default Navber;
