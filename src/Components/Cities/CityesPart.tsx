import { Link } from "react-router-dom";

interface CityProps {
  item: {
    cou_name_en: string;
    name: string;
    timezone: string;
    country_code: string;
  };
}

const CityesPart: React.FC<CityProps> = ({ item }) => {
  return (
    <>
      <td className="py-4  md:text-xl text-sm md:px-6 border-b px-2">{item.cou_name_en}</td>
      <td className="py-4 md:text-xl text-sm md:px-6 border-b">
        <Link to={`/weather/${item?.name}`}>{item.name}</Link>
      </td>
      <td className="py-4 md:text-xl text-sm md:px-6 border-b">{item.timezone}</td>
      <td className="py-4 md:text-xl text-sm md:px-6 px-2 border-b text-end">{item.country_code}</td>
    </>
  );
};

export default CityesPart;
