
import React, { useState } from "react";
import { Link } from "react-router-dom";


const CityesPart = ({ item }) => {


  

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
