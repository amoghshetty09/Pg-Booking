// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const PgListPage = () => {
//     const location = useLocation();
//     const { pgData } = location.state || { pgData: [] };
//     // console.log("pgpgc",pgData[0].City);
//     return (
//         <div className="bg-gray-100 min-h-screen p-8">
//             <h2 className="text-3xl font-bold text-center mb-8">Available PGs in {pgData[0].City}</h2>
            
//             {pgData.length > 0 ? (
//                 <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//                     {pgData.map((pg, index) => (
//                         <div key={index} onClick={()=>{ViewSinglePg}} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
//                             <h3 className="text-xl font-semibold text-blue-600 mb-2">{pg.PGname}</h3>
//                             <p className="text-white"><strong>City:</strong> {pg.City}</p>
//                             <p className="text-white"><strong>Price Range:</strong> {pg.PriceRange}</p>
//                             <p className="text-white"><strong>Contact:</strong> {pg.PhNumber}</p>
                            
//                             {/* Display Rooms and other details as needed */}
//                             {pg.Rooms && pg.Rooms.map((room, i) => (
//                                 <div key={i} className="mt-2">
//                                     <p className="text-white"><strong>Room Type:</strong> {room.RoomType}</p>
//                                     <p className="text-white"><strong>Room Price:</strong> {room.RoomPrice}</p>
//                                     <p className="text-white"><strong>Vacant Rooms:</strong> {room.VacantRooms}</p>
//                                 </div>
//                             ))}

//                             {pg.Images && pg.Images.length > 0 && (
//                                 <img
//                                     src={pg.Images[0]}  // Display the first image as an example
//                                     alt={`${pg.PGname} Image`}
//                                     className="w-full h-40 object-cover rounded-md mt-4"
//                                 />
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="text-center text-gray-500">No PGs available for the selected city.</p>
//             )}
//         </div>
//     );
// };

// export default PgListPage;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PgListPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pgData } = location.state || {};
   console.log(pgData);
    const handlePgClick = (pg) => {
        navigate('/PgDetailPage', { state: { pg } });
    };

    
    return (
        <div className="bg-gradient-to-l from-black  to-cyan-600 min-h-screen p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Available PGs in {pgData[0]?.City || 'the City'}</h2>
            
            {pgData.length > 0 ? (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {pgData.map((pg, index) => (
                        <div
                            key={index}
                            onClick={() => handlePgClick(pg)}
                            className="bg-gradient-to-r from-indigo-500 to-purple-700 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold text-white mb-2">{pg.PGname}</h3>
                            <p className="text-white"><strong>City:</strong> {pg.City}</p>
                            <p className="text-white"><strong>Price Range:</strong> {pg.PriceRange}</p>
                            <p className="text-white"><strong>Contact:</strong> {pg.PhNumber}</p>
                           
                            <p className="text-white"><strong>PG for </strong> {pg.Gender}</p>
                            
                            {pg.Images && pg.Images.length > 0 && (
                                <img
                                    src={pg.Images[0]}  // Display the first image as an example
                                    alt={`${pg.PGname} Image`}
                                    className="w-full h-40 object-cover rounded-md mt-4"
                                />
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No PGs available for the selected city.</p>
            )}
        </div>
    );
};

export default PgListPage;
