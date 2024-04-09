
import React from "react";

const CityesPart = ({ item }) => {
  return (
    <>
        <td className="py-4 px-6 border-b">{item.cou_name_en}</td>
        <td className="py-4 px-6 border-b">{item.name}</td>
        <td className="py-4 px-6 border-b">{item.timezone}</td>
        <td className="py-4 px-6 border-b text-end">{item.country_code}</td>
    </>
  );
};

export default CityesPart;
