import React, { useEffect, useState } from "react";

interface City {
  name: string;
  temp: string;
}

const Favouriteitems: React.FC = () => {
  const [storedCities, setStoredCities] = useState<City[]>([]);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedCitiesString = localStorage.getItem("cities");
      if (storedCitiesString !== null) {
        const citiesFromStorage: City[] = JSON.parse(storedCitiesString);
        setStoredCities(citiesFromStorage);
      }
    }
    
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-4">Added Cities</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
            <thead>
              <tr className="bg-[#333333] text-white">
                <th className="py-3 md:text-xl text-sm md:px-6 px-2  text-left border-b">City Name</th>
                <th className="py-3 md:text-xl text-sm md:px-6 px-2 text-left border-b">Temperature</th>
              </tr>
            </thead>
            <tbody>
              {storedCities.map((city, index) => (
                <tr
                  className="hover:bg-gray-50 transition duration-300"
                  key={index}
                >
                  <td className="py-4 md:text-xl text-sm md:px-6 px-2 border-b">{city?.name} </td>
                  <td className="py-4 md:text-xl text-sm md:px-6 px-2 border-b">{city?.temp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Favouriteitems;
