import React, { useEffect, useState } from 'react';

const Favouriteitems = () => {
    const [storedCities, setStoredCities] = useState([]);
    useEffect(() => {
        // Check if local storage is supported
        if (typeof localStorage !== 'undefined') {
          // Retrieve the stored cities from local storage
          const citiesFromStorage = JSON.parse(localStorage.getItem('cities')) || [];
          // Update the state with the retrieved cities
          setStoredCities(citiesFromStorage);
        }
      }, []); 
    return (
        <div>
      <h2 className='text-2xl font-bold  text-center py-4'>Added Cities</h2>
      <div>
        
    <div className="overflow-x-auto ">
    <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
        <thead>
            <tr className="bg-[#333333] text-white">
                <th className="py-3 px-6 text-left border-b">City Name</th>
                <th className="py-3 px-6 text-left border-b">Temperature</th>
            </tr>
        </thead>
        <tbody>
            {
                storedCities.map((city,index)=>(
                    <tr className="hover:bg-gray-50 transition duration-300">
                    <td className="py-4 px-6 border-b">{city?.name} </td>
                    <td className="py-4 px-6 border-b">{city?.temp}</td>
                </tr>
                ))
            }
           
        </tbody>
    </table>
    </div>
    
      </div>
    </div>
    );
};

export default Favouriteitems;
