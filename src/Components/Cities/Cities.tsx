/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import CityesPart from "./CityesPart";

interface CityData {
  geoname_id: string;
  name: string;
  countrycode: string;
  timezone: string;
}

const Cities: React.FC = () => {
  const [data, setData] = useState<CityData[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch("/Countrydata.json")
      .then((res) => res.json())
      .then((allData: CityData[]) => setData(allData));
  }, []);

  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(filteredData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setData(sortedData);
  };

  return (
    <div>
      <div>
        <img
          className="w-full h-[370px]"
          src="https://i.ibb.co/Khg1nNM/ukweatherforecastoptimised.png"
          alt=""
        />
      </div>

      <div className="flex md:flex-row flex-col gap-5 py-12 justify-around items-center">
        <div className="flex md:flex-row flex-col  gap-3 items-center">
          <input
            value={search}
            onChange={handleChange}
            placeholder="Enter The City Name"
            className="md:w-[600px] w-[300px] h-[50px] p-3 border border-slate-950 bg-slate-300 text-black"
            type="text"
          />
          <button onClick={handleSearch} className="btn bg-blue-500 text-white">
            Search
          </button>
        </div>
        <div>
          <button onClick={handleSort} className="btn bg-blue-500 text-white">
            Sort
          </button>
        </div>
      </div>
      <div className="overflow-x-auto md:px-12">
        <table className="md:w-full sm:w-[550px] w-[320px] shadow-md border mx-auto border-gray-100 my-6">
          <thead>
            <tr className="bg-[#333333] text-white">
              <th className="py-3 md:text-xl text-sm md:px-6 px-2 text-left border-b">Country Name</th>
              <th className="py-3 md:text-xl text-sm md:px-6 text-left border-b">City Name</th>
              <th className="py-3 md:text-xl text-sm md:px-6 text-left border-b">Timezone</th>
              <th className="py-3 md:text-xl text-sm  md:px-6 px-2 border-b text-end">Country Code</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr
                className="hover:bg-gray-50 transition duration-300"
                key={item.geoname_id}
              >
                 {/* @ts-ignore */}
                <CityesPart item={item} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cities;
