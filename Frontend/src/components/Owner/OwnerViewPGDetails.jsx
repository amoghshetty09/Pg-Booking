// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const OwnerPGDetails = () => {
//     const [pgDetails, setPgDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showMap, setShowMap] = useState(false);
//     const [coordinates, setCoordinates] = useState(null);
//     const [imgPath,setImgPath]= useState({'single':'','double':'','triple':''});
//     // Fetch PG details from the backend
//     useEffect(() => {
//         const fetchPGDetails = async () => {
//             try {
//                 const response = await fetch('http://localhost:3000/ViewPgDetails', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     credentials: 'include',
//                 });
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch PG details');
//                 }
//                 const data = await response.json();
//                 setPgDetails(data);
//                 console.log("Images",data[0].Rooms[0].Images)
//             } catch (error) {
//                 console.error('Error fetching PG details:', error);
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchPGDetails();
//     }, []);

//     // Function to fetch coordinates from LocationIQ API
//     const fetchCoordinates = async (address) => {
//         const apiKey = 'pk.9d5d1b1a66d30cb2e99aa6bcb5031f7a'; // Replace with your actual LocationIQ API key
//         const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(address)}&format=json`;

//         try {
//             const response = await fetch(url);
//             const json = await response.json();
//             if (json && json.length > 0) {
//                 const lat = json[0].lat;
//                 const lon = json[0].lon;
//                 console.log(`Coordinates: Latitude = ${lat}, Longitude = ${lon}`);
//                 return { lat, lon };
//             } else {
//                 throw new Error('No results found');
//             }
//         } catch (err) {
//             console.error('Error fetching coordinates:', err);
//             throw err;
//         }
//     };

//     // Handle showing the map after fetching coordinates
//     const handleShowLocation = async (pg) => {
//         if (pg?.Address) {
//             try {
//                 const coordinates = await fetchCoordinates(`${pg.Address}, ${pg.City}`);
//                 setCoordinates([coordinates.lat, coordinates.lon]);
//                 setShowMap(true);
//             } catch (error) {
//                 console.error('Error fetching location:', error);
//             }
//         }
//     };

//     // Loading, error, and empty PG details states
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//     if (!pgDetails || pgDetails.length === 0) return <div>No PG details available.</div>;

//     return (
//         <div className="p-8 min-h-screen mx-auto bg-gradient-to-l from-black to-gray-500 shadow-lg ">
//             <div className="mb-6 flex justify-center align-center">
//                 <img
//                     src="https://brandstand.com/cdn/shop/articles/FutureHotelDesignInfographic_Hero_dark.jpg?v=1593002276"
//                     alt="PG Pic"
//                     className="w-1/4 h-auto rounded-md"
//                 />
//             </div>
//             <h1 className="text-3xl font-bold mb-4 text-white text-center">PG Details</h1>
//             {pgDetails.map((pg, index) => (
//                 <div key={index} className="mb-6 flex flex-col items-center">
//                     <h2 className="text-2xl font-semibold text-white">{pg.PGname}</h2>
//                     <p className="text-white text-xl">Phone: {pg.PhNumber}</p>
//                     <p className="text-white text-xl">Address: {pg.Address}</p>
//                     <p className="text-white text-xl">City: {pg.City}</p>
//                     <p className="text-white text-xl">Price Range: ₹{pg.PriceRange}</p>
//                     <p className="text-white text-xl">Food-Menu:{pg.Food}</p>
//                     <p className="text-white text-xl">PG for {pg.Gender}</p>

//                     <div className="flex flex-col w-full mt-4">
//                         <h3 className="text-xl font-bold mb-3 text-white">Rooms</h3>
//                         {pg.Rooms.map((room, roomIndex) => (
//                             <div key={roomIndex} className="mb-4 p-4 bg-gradient-to-r from-black to-gray-500 rounded-lg shadow">
//                                 <p className="font-semibold text-white text-2xl">Room Type: {room.RoomType}</p>
//                                 <p className="text-white text-xl">Price: ₹{room.RoomPrice}</p>
//                                 <p className="text-white text-xl">Vacant Rooms: {room.VacantRooms}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <button
//                         onClick={() => handleShowLocation(pg)}
//                         className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
//                     >
//                         Show Location
//                     </button>

//                     {/* Map rendering */}
//                     {showMap && coordinates && (
//                         <div className="mt-6" style={{ width: '100%', height: '400px' }}>
//                             <MapContainer center={coordinates} zoom={15} style={{ width: '100%', height: '100%' }}>
//                                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                                 <Marker position={coordinates}>
//                                     <Popup>{pg.PGname}</Popup>
//                                 </Marker>
//                             </MapContainer>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default OwnerPGDetails;


// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import Slider from 'react-slick';
// import 'leaflet/dist/leaflet.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// // import img from '../../../../Backend/uploads/1732044932473-bg.JPG'
// const OwnerPGDetails = () => {
//     const [pgDetails, setPgDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showMap, setShowMap] = useState(false);
//     const [coordinates, setCoordinates] = useState(null);
//     const [imgPath, setImgPath] = useState({ single: '', double: '', triple: '' });

//     useEffect(() => {
//         const fetchPGDetails = async () => {
//             try {
//                 const response = await fetch('http://localhost:3000/ViewPgDetails', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     credentials: 'include',
//                 });
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch PG details');
//                 }
//                 const data = await response.json();
//                 setPgDetails(data);

//                 // console.log("roooo",data[0].Rooms)
//                 const basePath = 'http://localhost:3000';
//                 if (data[0] && data[0].Rooms) {
//                     const images = {
//                         single: basePath + data[0].Rooms[0]?.Images || '',
//                         double: basePath + data[0].Rooms[1]?.Images || '',
//                         triple: basePath + data[0].Rooms[2]?.Images || '',
//                     };
//                     setImgPath(images);
//                 }
//                 console.log("immm",imgPath);
                

//             } catch (error) {
//                 console.error('Error fetching PG details:', error);
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchPGDetails();
//     }, []);
//     useEffect(() => {
//         console.log("Updated imgPath:", imgPath);
//     }, [imgPath]);
//     const fetchCoordinates = async (address) => {
//         const apiKey = 'pk.9d5d1b1a66d30cb2e99aa6bcb5031f7a';
//         const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(address)}&format=json`;

//         try {
//             const response = await fetch(url);
//             const json = await response.json();
//             if (json && json.length > 0) {
//                 const lat = json[0].lat;
//                 const lon = json[0].lon;
//                 return { lat, lon };
//             } else {
//                 throw new Error('No results found');
//             }
//         } catch (err) {
//             console.error('Error fetching coordinates:', err);
//             throw err;
//         }
//     };

//     const handleShowLocation = async (pg) => {
//         if (pg?.Address) {
//             try {
//                 const coordinates = await fetchCoordinates(`${pg.Address}, ${pg.City}`);
//                 setCoordinates([coordinates.lat, coordinates.lon]);
//                 setShowMap(true);
//             } catch (error) {
//                 console.error('Error fetching location:', error);
//             }
//         }
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//     if (!pgDetails || pgDetails.length === 0) return <div>No PG details available.</div>;

//     // Slider settings
//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//     };

//     return (
//         <div className="p-8 min-h-screen mx-auto bg-gradient-to-l from-black to-gray-500 shadow-lg">
//             {/* <div className="mb-6 flex justify-center align-center">
//                 <img
//                     src="https://brandstand.com/cdn/shop/articles/FutureHotelDesignInfographic_Hero_dark.jpg?v=1593002276"
//                     alt="PG Pic"
//                     className="w-1/4 h-auto rounded-md"
//                 />
//             </div> */}
//             <h1 className="text-3xl font-bold mb-4 text-white text-center">PG Details</h1>
//             {pgDetails.map((pg, index) => (
//                 <div key={index} className="mb-6 flex flex-col items-center">
//                     <h2 className="text-2xl font-semibold text-white">{pg.PGname}</h2>
//                     <p className="text-white text-xl">Phone: {pg.PhNumber}</p>
//                     <p className="text-white text-xl">Address: {pg.Address}</p>
//                     <p className="text-white text-xl">City: {pg.City}</p>
//                     <p className="text-white text-xl">Price Range: ₹{pg.PriceRange}</p>
//                     <p className="text-white text-xl">Food-Menu: {pg.Food}</p>
//                     <p className="text-white text-xl">PG for {pg.Gender}</p>

//                     <div className="w-1/2 mt-8">
//                         <Slider {...sliderSettings}>
//                             <div>
//                                 <img
//                                     src={imgPath.single}
//                                     alt="Single Occupancy"
//                                     className="w-full h-auto rounded-md"
//                                 />
//                                 <p className="text-center text-white mt-2">Single Occupancy</p>
//                             </div>
//                             <div>
//                                 <img
//                                     src={imgPath.double}
//                                     alt="Double Occupancy"
//                                     className="w-full h-auto rounded-md"
//                                 />
//                                 <p className="text-center text-white mt-2">Double Occupancy</p>
//                             </div>
//                             <div>
//                                 <img
//                                     src={imgPath.triple}
//                                     alt="Triple Occupancy"
//                                     className="w-full h-auto rounded-md"
//                                 />
//                                 <p className="text-center text-white mt-2">Triple Occupancy</p>
//                             </div>
//                         </Slider>
//                     </div>
//                     <div className="flex flex-col w-full mt-4">
//                         <h3 className="text-xl font-bold mb-3 text-white">Rooms</h3>
//                         {pg.Rooms.map((room, roomIndex) => (
//                             <div key={roomIndex} className="mb-4 p-4 bg-gradient-to-r from-black to-gray-500 rounded-lg shadow">
//                                 <p className="font-semibold text-white text-2xl">Room Type: {room.RoomType}</p>
//                                 <p className="text-white text-xl">Price: ₹{room.RoomPrice}</p>
//                                 <p className="text-white text-xl">Vacant Rooms: {room.VacantRooms}</p>
//                             </div>
//                         ))}
//                     </div>
//                     <button
//                         onClick={() => handleShowLocation(pg)}
//                         className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
//                     >
//                         Show Location
//                     </button>

//                     {showMap && coordinates && (
//                         <div className="mt-6" style={{ width: '100%', height: '400px' }}>
//                             <MapContainer center={coordinates} zoom={15} style={{ width: '100%', height: '100%' }}>
//                                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                                 <Marker position={coordinates}>
//                                     <Popup>{pg.PGname}</Popup>
//                                 </Marker>
//                             </MapContainer>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default OwnerPGDetails;


// ldcl
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Slider from 'react-slick';
import 'leaflet/dist/leaflet.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaPhone, FaMapMarkerAlt, FaCity, FaRupeeSign, FaUtensils } from 'react-icons/fa';

const OwnerPGDetails = () => {
    const [pgDetails, setPgDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showMap, setShowMap] = useState(false);
    const [coordinates, setCoordinates] = useState(null);
    const [imgPath, setImgPath] = useState({ single: '', double: '', triple: '' });

    useEffect(() => {
        const fetchPGDetails = async () => {
            try {
                const response = await fetch('http://localhost:3000/ViewPgDetails', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch PG details');
                }
                const data = await response.json();
                setPgDetails(data);

                const basePath = 'http://localhost:3000';
                if (data[0] && data[0].Rooms) {
                    const images = {
                        single: basePath + data[0].Rooms[0]?.Images || '',
                        double: basePath + data[0].Rooms[1]?.Images || '',
                        triple: basePath + data[0].Rooms[2]?.Images || '',
                    };
                    setImgPath(images);
                }
            } catch (error) {
                console.error('Error fetching PG details:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPGDetails();
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Ensure arrows are enabled
        prevArrow: <button className="slick-prev">←</button>, // Custom prev arrow
        nextArrow: <button className="slick-next">→</button>, // Custom next arrow
    };
    

    const fetchCoordinates = async (address) => {
        const apiKey = 'pk.9d5d1b1a66d30cb2e99aa6bcb5031f7a';
        const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(address)}&format=json`;

        try {
            const response = await fetch(url);
            const json = await response.json();
            if (json && json.length > 0) {
                const lat = json[0].lat;
                const lon = json[0].lon;
                return { lat, lon };
            } else {
                throw new Error('No results found');
            }
        } catch (err) {
            console.error('Error fetching coordinates:', err);
            throw err;
        }
    };

    const handleShowLocation = async (pg) => {
        if (pg?.Address) {
            try {
                const coordinates = await fetchCoordinates(`${pg.Address}, ${pg.City}`);
                setCoordinates([coordinates.lat, coordinates.lon]);
                setShowMap(true);
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!pgDetails || pgDetails.length === 0) return <div>No PG details available.</div>;

    return (
        <div className="p-6 min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-500">
            <h1 className="text-4xl font-bold text-center mb-8 text-white">PG Details</h1>
            {pgDetails.map((pg, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-lg rounded-lg p-6 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Basic PG Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-white">{pg.PGname}</h2>
                            <div className="mt-4 space-y-3 text-white">
                                <p className="flex items-center">
                                    <FaPhone className="mr-2 text-blue-500" /> {pg.PhNumber}
                                </p>
                                <p className="flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-green-500" /> {pg.Address}
                                </p>
                                <p className="flex items-center">
                                    <FaCity className="mr-2 text-red-500" /> {pg.City}
                                </p>
                                <p className="flex items-center">
                                    <FaRupeeSign className="mr-2 text-yellow-500" /> Price Range: ₹{pg.PriceRange}
                                </p>
                                <p className="flex items-center">
                                    <FaUtensils className="mr-2 text-pink-500" /> Food Menu: {pg.Food}
                                </p>
                                <p>PG for: {pg.Gender}</p>
                            </div>
                        </div>

                        {/* Slider Section */}
                        <div className="rounded-lg overflow-hidden shadow-lg relative">
                        <Slider {...sliderSettings} className="relative">
                            <div className="relative flex overflow-hidden justify-center p-4">
                                <img
                                    src={imgPath.single}
                                    alt="Single Occupancy"
                                    className="w-full max-h-96 object-cover rounded-md"
                                />
                                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg bg-gradient-to-r from-black via-gray-800 to-black bg-opacity-80 px-4 py-1 rounded">
                                    Single Occupancy
                                </p>
                            </div>
                            <div className="relative flex justify-center p-4">
                                <img
                                    src={imgPath.double}
                                    alt="Double Occupancy"
                                    className="w-full max-h-96 object-cover rounded-md"
                                />
                                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg bg-gradient-to-r from-black via-gray-800 to-black bg-opacity-80 px-4 py-1 rounded">
                                    Double Occupancy
                                </p>
                            </div>
                            <div className="relative flex justify-center p-4">
                                <img
                                    src={imgPath.triple}
                                    alt="Triple Occupancy"
                                    className="w-full max-h-96 object-cover rounded-md"
                                />
                                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg bg-gradient-to-r from-black via-gray-800 to-black bg-opacity-80 px-4 py-1 rounded">
                                    Triple Occupancy
                                </p>
                            </div>
                        </Slider>
                            
                        </div>

                    </div>

                    {/* Rooms Section */}
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-3 text-white">Available Rooms</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {pg.Rooms.map((room, roomIndex) => (
                                <div key={roomIndex} className="p-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded shadow">
                                    <p className="font-semibold text-white">Type: {room.RoomType}</p>
                                    <p className="text-gray-300">Price: ₹{room.RoomPrice}</p>
                                    <p className="text-gray-300">Vacant Rooms: {room.VacantRooms}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Show Location Button */}
                    <div className="mt-4 flex justify-center">
                        <button
                            onClick={() => handleShowLocation(pg)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
                        >
                            Show Location
                        </button>
                    </div>

                    {/* Map Section */}
                    {showMap && coordinates && (
                        <div className="mt-6 rounded-lg overflow-hidden shadow-lg" style={{ width: '100%', height: '400px' }}>
                            <MapContainer center={coordinates} zoom={15} style={{ width: '100%', height: '100%' }}>
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={coordinates}>
                                    <Popup>{pg.PGname}</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    )}
                </div>
            ))}
        </div>

    );
};

export default OwnerPGDetails;

