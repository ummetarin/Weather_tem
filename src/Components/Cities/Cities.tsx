
import React, { useEffect, useState } from "react";
import CityesPart from "./CityesPart";

const Cities = () => {
   const [data, setData] = useState([]);
   const[search,setSearch]=useState("");



   useEffect(() => {
      fetch('/Countrydata.json')
      .then(res => res.json())
      .then(allData => setData(allData))
   }, []);
   console.log(data);

   const handlelick=()=>{
      const filterdata=data.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
      setData(filterdata)
   }

   const handlechange=(event)=>{
      setSearch(event.target.value);
   }

   const handleSort = () => {
      const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
      setData(sorted);
   };
   return (
      <div>
         <div>
            <img className="w-full h-[370px]" src="https://i.ibb.co/Khg1nNM/ukweatherforecastoptimised.png" alt="" />
         </div>

       <div className="flex flex-row py-12 justify-around items-center ">
      <div className="flex gap-3  items-center">
            <input value={search} onChange={handlechange}  placeholder="Enter The City Name "   className="w-[600px] h-[50px]  p-3 border border-slate-950 bg-slate-300 text-black" type="text" />
            <button  onClick={handlelick}   className="btn bg-blue-500 text-white">Search</button>
         </div>
         <div>
            <button  onClick={handleSort}  className="btn bg-blue-500 text-white">Sort</button>
         </div>
       </div>
         <div className="overflow-x-auto">
            <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
               <thead>
                  <tr className="bg-[#333333] text-white">
                     <th className="py-3 px-6 text-left border-b">Country Name</th>
                     <th  className="py-3 px-6 text-left border-b">City Name</th>
                     <th className="py-3 px-6 text-left border-b">Timezoon</th>
                     <th className="py-3 px-6 border-b text-end">Country Code</th>
                  </tr>
               </thead>
               <tbody>
                  {data?.map(item => <tr className="hover:bg-gray-50 transition duration-300" key={item?.geoname_id}><CityesPart  item={item} /></tr>)}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Cities;
