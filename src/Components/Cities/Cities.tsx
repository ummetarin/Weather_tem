import CityesPart from "./CityesPart";


const Cities = () => {
    return (
        <div>
            <div>
            <div className="overflow-x-auto ">
            <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
                <thead>
                    <tr className="bg-[#333333] text-white">
                        <th className="py-3 px-6 text-left border-b">Name</th>
                        <th className="py-3 px-6 text-left border-b">Age</th>
                        <th className="py-3 px-6 text-left border-b">Gender</th>
                        <th className="py-3 px-6  border-b text-end">Address</th>
                    </tr>
                </thead>
                <tbody>
                  <CityesPart></CityesPart>
                </tbody>
            </table>
            </div>
            
                </div>
        </div>
    );
};

export default Cities;