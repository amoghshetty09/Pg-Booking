// // // import { useState, useEffect } from 'react';

// // // const pgBookings = () => {
// // //     const [pgDetails, setPgDetails] = useState(null);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState(null);

// // //     // Fetch PG details from the backend
// // //     useEffect(() => {
// // //         const fetchPGDetails = async () => {
// // //             try {
// // //                 const response = await fetch('http://localhost:3000/ViewPgDetails', {
// // //                     method: 'GET',
// // //                     headers: {
// // //                         'Content-Type': 'application/json',
// // //                     },
// // //                     credentials: 'include',
// // //                 });
// // //                 if (!response.ok) {
// // //                     throw new Error('Failed to fetch PG details');
// // //                 }
// // //                 const data = await response.json();
// // //                 setPgDetails(data);
// // //             } catch (error) {
// // //                 console.error('Error fetching PG details:', error);
// // //                 setError(error.message);
// // //             } finally {
// // //                 setLoading(false);
// // //             }
// // //         };
// // //         fetchPGDetails();
// // //     }, []);

// // //     // Loading, error, and empty PG details states
// // //     if (loading) return <div>Loading...</div>;
// // //     if (error) return <div>Error: {error}</div>;
// // //     if (!pgDetails || pgDetails.length === 0) return <div>No PG details available.</div>;

// // //     const VisitDate = ({ visitDate }) => {
// // //         console.log(visitDate)
// // //         const formattedDate = new Date(visitDate).toLocaleDateString("en-US", {
// // //             year: "numeric",
// // //             month: "long",
// // //             day: "numeric"
// // //         });
// // //         return <span>{formattedDate}</span>;
// // //     };

// // //     return (
// // //         <div className="p-8 min-h-screen mx-auto bg-gradient-to-l from-black to-gray-500 shadow-lg ">
// // //             <h1 className="text-3xl font-bold mb-4 text-white text-center">PG Details</h1>
// // //             {pgDetails.map((pg, index) => (
// // //                 <div key={index} className="mb-6 flex flex-col items-center">
// // //                     <h2 className="text-2xl font-semibold text-white">{pg.PGname}</h2>
// // //                     <p className="text-white text-xl">Phone: {pg.PhNumber}</p>
// // //                     <p className="text-white text-xl">Address: {pg.Address}</p>
// // //                     <p className="text-white text-xl">City: {pg.City}</p>
// // //                     <p className="text-white text-xl">Price Range: ₹{pg.PriceRange}</p>

// // //                     <div className="flex flex-col w-full mt-4">
// // //                         <h3 className="text-3xl font-bold mb-3 text-white">Reservations</h3>
// // //                         {pg.pgBookings.map((pgBooking, Index) => (
// // //                             <div key={Index} className="mb-4 p-4 bg-gradient-to-r from-black to-gray-500 rounded-lg shadow">
// // //                                 <p className="font-semibold text-white text-2xl">User Name: {pgBooking.email}</p>
// // //                                 <p className="text-white text-xl">Phone No: {pgBooking.phone}</p>
// // //                                 <p className="text-white text-xl">
// // //                                     Scheduled Date: <VisitDate visitDate={pgBooking.bookingDate} />
// // //                                 </p>
// // //                                 <p className="text-white text-xl">Status: {pgBooking.bookingStatus}</p>
// // //                                 <p className="text-white text-xl">Room Type : {pgBooking.roomBooked}</p>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             ))}
// // //         </div>
// // //     );
// // // };

// // // export default pgBookings;


// // import { useState, useEffect } from 'react';

// // const PgBookings = () => {
// //     const [pgDetails, setPgDetails] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);

// //     // Fetch PG details from the backend
// //     useEffect(() => {
// //         const fetchPGDetails = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:3000/ViewPgDetails', {
// //                     method: 'GET',
// //                     headers: {
// //                         'Content-Type': 'application/json',
// //                     },
// //                     credentials: 'include',
// //                 });
// //                 if (!response.ok) {
// //                     throw new Error('Failed to fetch PG details');
// //                 }
// //                 const data = await response.json();
// //                 setPgDetails(data);
// //             } catch (error) {
// //                 console.error('Error fetching PG details:', error);
// //                 setError(error.message);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };
// //         fetchPGDetails();
// //     }, []);

// //     // Handle booking status update
// //     const updateBookingStatus = async (pgId, bookingId, newStatus, roomType) => {
// //         try {
// //             const response = await fetch('http://localhost:3000/updateBookingStatus', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify({ pgId, bookingId, newStatus, roomType }),
// //                 credentials: 'include',
// //             });

// //             if (!response.ok) {
// //                 throw new Error('Failed to update booking status');
// //             }

// //             const updatedDetails = await response.json();
// //             setPgDetails(updatedDetails);
// //             alert(`Booking status updated to ${newStatus}`);
// //         } catch (error) {
// //             console.error('Error updating booking status:', error);
// //             alert('Error updating booking status. Please try again.');
// //         }
// //     };

// //     // Loading, error, and empty PG details states
// //     if (loading) return <div>Loading...</div>;
// //     if (error) return <div>Error: {error}</div>;
// //     if (!pgDetails || pgDetails.length === 0) return <div>No PG details available.</div>;

// //     const VisitDate = ({ visitDate }) => {
// //         const formattedDate = new Date(visitDate).toLocaleDateString('en-US', {
// //             year: 'numeric',
// //             month: 'long',
// //             day: 'numeric',
// //         });
// //         return <span>{formattedDate}</span>;
// //     };

// //     return (
// //         <div className="p-8 min-h-screen mx-auto bg-gradient-to-l from-black to-gray-500 shadow-lg">
// //             <h1 className="text-3xl font-bold mb-4 text-white text-center">PG Details</h1>
// //             {pgDetails.map((pg, index) => (
// //                 <div key={index} className="mb-6 flex flex-col items-center">
// //                     <h2 className="text-2xl font-semibold text-white">{pg.PGname}</h2>
// //                     <p className="text-white text-xl">Phone: {pg.PhNumber}</p>
// //                     <p className="text-white text-xl">Address: {pg.Address}</p>
// //                     <p className="text-white text-xl">City: {pg.City}</p>
// //                     <p className="text-white text-xl">Price Range: ₹{pg.PriceRange}</p>

// //                     <div className="flex flex-col w-full mt-4">
// //                         <h3 className="text-3xl font-bold mb-3 text-white">Reservations</h3>
// //                         {pg.pgBookings.map((pgBooking, Index) => (
// //                             <div key={Index} className="mb-4 p-4 bg-gradient-to-r from-black to-gray-500 rounded-lg shadow">
// //                                 <p className="font-semibold text-white text-2xl">User Name: {pgBooking.email}</p>
// //                                 <p className="text-white text-xl">Phone No: {pgBooking.phone}</p>
// //                                 <p className="text-white text-xl">
// //                                     Scheduled Date: <VisitDate visitDate={pgBooking.bookingDate} />
// //                                 </p>
// //                                 <p className="text-white text-xl">Status: {pgBooking.bookingStatus}</p>
// //                                 <p className="text-white text-xl">Room Type: {pgBooking.roomBooked}</p>
// //                                 <p className="text-white text-xl">Current Availability: {}</p>

// //                                 {/* Buttons for accepting or canceling the booking */}
// //                                 <div className="mt-4 flex gap-4">
// //                                     <button
// //                                         className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
// //                                         onClick={() =>
// //                                             updateBookingStatus(pg._id, pgBooking._id, 'confirmed', pgBooking.roomBooked)
// //                                         }
// //                                         disabled={pgBooking.bookingStatus === 'confirmed'}
// //                                     >
// //                                         Accept
// //                                     </button>
// //                                     <button
// //                                         className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
// //                                         onClick={() =>
// //                                             updateBookingStatus(pg._id, pgBooking._id, 'cancelled', pgBooking.roomBooked)
// //                                         }
// //                                         disabled={pgBooking.bookingStatus === 'cancelled'}
// //                                     >
// //                                         Cancel
// //                                     </button>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default PgBookings;


// import { useState, useEffect } from 'react';

// const PgBookings = () => {
//     const [pgDetails, setPgDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

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
//             } catch (error) {
//                 console.error('Error fetching PG details:', error);
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchPGDetails();
//     }, []);

//     // Handle booking status update
//     const updateBookingStatus = async (pgId, bookingId, newStatus, roomType) => {
//         try {
//             const response = await fetch('http://localhost:3000/updateBookingStatus', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ pgId, bookingId, newStatus, roomType }),
//                 credentials: 'include',
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to update booking status');
//             }

//             const updatedDetails = await response.json();
//             setPgDetails(updatedDetails);
//             alert(`Booking status updated to ${newStatus}`);
//         } catch (error) {
//             console.error('Error updating booking status:', error);
//             alert('Error updating booking status. Please try again.');
//         }
//     };

//     // Loading, error, and empty PG details states
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//     if (!pgDetails || pgDetails.length === 0) return <div>No PG details available.</div>;

//     const VisitDate = ({ visitDate }) => {
//         const formattedDate = new Date(visitDate).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//         });
//         return <span>{formattedDate}</span>;
//     };

//     return (
//         <div className="p-8 min-h-screen mx-auto bg-gradient-to-l from-black to-gray-500 shadow-lg">
//             <h1 className="text-3xl font-bold mb-4 text-white text-center">PG Details</h1>
//             {pgDetails.map((pg, index) => (
//                 <div key={index} className="mb-6 flex flex-col items-center">
//                     <h2 className="text-2xl font-semibold text-white">{pg.PGname}</h2>
//                     <p className="text-white text-xl">Phone: {pg.PhNumber}</p>
//                     <p className="text-white text-xl">Address: {pg.Address}</p>
//                     <p className="text-white text-xl">City: {pg.City}</p>
//                     <p className="text-white text-xl">Price Range: ₹{pg.PriceRange}</p>

//                     {/* Display Room Information */}
//                     <div className="mt-6 w-full">
//                         <h3 className="text-2xl font-bold text-white mb-4">Current Room Availability</h3>
//                         <div className="flex flex-wrap gap-4">
//                             {pg.Rooms.map((room, roomIndex) => (
//                                 <div
//                                     key={roomIndex}
//                                     className="bg-gradient-to-br from-gray-700 to-gray-900 p-4 rounded-lg shadow-lg text-white w-60 flex-shrink-0"
//                                 >
//                                     <h4 className="text-xl font-semibold mb-2">{room.RoomType}</h4>
//                                     <p className="text-lg">Price: ₹{room.RoomPrice}</p>
//                                     <p className="text-lg font-bold">Vacant Rooms: {room.VacantRooms}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>


//                     {/* Booking Information */}
//                     <div className="flex flex-col w-full mt-4">
//                         <h3 className="text-3xl font-bold mb-3 text-white">Reservations</h3>
//                         {pg.pgBookings.map((pgBooking, Index) => (
//                             <div key={Index} className="mb-4 p-4 bg-gradient-to-r from-black to-gray-500 rounded-lg shadow">
//                                 <p className="font-semibold text-white text-2xl">User Name: {pgBooking.email}</p>
//                                 <p className="text-white text-xl">Phone No: {pgBooking.phone}</p>
//                                 <p className="text-white text-xl">
//                                     Scheduled Date: <VisitDate visitDate={pgBooking.bookingDate} />
//                                 </p>
//                                 <p className="text-white text-xl">Status: {pgBooking.bookingStatus}</p>
//                                 <p className="text-white text-xl">Room Type: {pgBooking.roomBooked}</p>

//                                 {/* Buttons for accepting or canceling the booking */}
//                                 <div className="mt-4 flex gap-4">
//                                     <button
//                                         className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//                                         onClick={() =>
//                                             updateBookingStatus(pg._id, pgBooking._id, 'confirmed', pgBooking.roomBooked)
//                                         }
//                                         disabled={pgBooking.bookingStatus === 'confirmed'}
//                                     >
//                                         Accept
//                                     </button>
//                                     <button
//                                         className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//                                         onClick={() =>
//                                             updateBookingStatus(pg._id, pgBooking._id, 'cancelled', pgBooking.roomBooked)
//                                         }
//                                         disabled={pgBooking.bookingStatus === 'cancelled'}
//                                     >
//                                         Cancel
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default PgBookings;


import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PgBookings = () => {
    const [pgDetails, setPgDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch PG details from the backend
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
            } catch (error) {
                console.error('Error fetching PG details:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPGDetails();
    }, []);

    // Handle booking status update
    const updateBookingStatus = async (pgId, bookingId, newStatus, roomType) => {
        try {
            const response = await fetch('http://localhost:3000/updateBookingStatus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pgId, bookingId, newStatus, roomType }),
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to update booking status');
            }

            const updatedDetails = await response.json();
            setPgDetails(updatedDetails);
            toast.success(`Booking status updated to ${newStatus}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } catch (error) {
            console.error('Error updating booking status:', error);
            toast.error('Error updating booking status. Please try again.', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    // Loading, error, and empty PG details states
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!pgDetails || pgDetails.length === 0) return <div>No PG details available.</div>;

    const VisitDate = ({ visitDate }) => {
        const formattedDate = new Date(visitDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return <span>{formattedDate}</span>;
    };

    return (
        <div className="p-8 min-h-screen mx-auto bg-gradient-to-l from-black to-gray-500 shadow-lg">
            <ToastContainer />
            <h1 className="text-3xl font-bold mb-4 text-white text-center">PG Details</h1>
            {pgDetails.map((pg, index) => (
                <div key={index} className="mb-6 flex flex-col items-center">
                    <h2 className="text-2xl font-semibold text-white">{pg.PGname}</h2>
                    <p className="text-white text-xl">Phone: {pg.PhNumber}</p>
                    <p className="text-white text-xl">Address: {pg.Address}</p>
                    <p className="text-white text-xl">City: {pg.City}</p>
                    <p className="text-white text-xl">Price Range: ₹{pg.PriceRange}</p>

                    {/* Display Room Information */}
                    <div className="mt-6 w-full">
                        <h3 className="text-2xl font-bold text-white mb-4">Current Room Availability</h3>
                        <div className="flex flex-wrap gap-4">
                            {pg.Rooms.map((room, roomIndex) => (
                                <div
                                    key={roomIndex}
                                    className="bg-gradient-to-br from-gray-700 to-gray-900 p-4 rounded-lg shadow-lg text-white w-60 flex-shrink-0"
                                >
                                    <h4 className="text-xl font-semibold mb-2">{room.RoomType}</h4>
                                    <p className="text-lg">Price: ₹{room.RoomPrice}</p>
                                    <p className="text-lg font-bold">Vacant Rooms: {room.VacantRooms}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Booking Information */}
                    <div className="flex flex-col w-full mt-4">
                        <h3 className="text-3xl font-bold mb-3 text-white">Reservations</h3>
                        {pg.pgBookings.map((pgBooking, Index) => {
                            const isStatusFinal = pgBooking.bookingStatus === 'confirmed' || pgBooking.bookingStatus === 'cancelled';
                            return (
                                <div
                                    key={Index}
                                    className={`mb-4 p-4 rounded-lg shadow ${
                                        isStatusFinal ? 'opacity-50 bg-gray-700' : 'bg-gradient-to-r from-black to-gray-500'
                                    }`}
                                >
                                    <p className="font-semibold text-white text-2xl">User Name: {pgBooking.email}</p>
                                    <p className="text-white text-xl">Phone No: {pgBooking.phone}</p>
                                    <p className="text-white text-xl">
                                        Scheduled Date: <VisitDate visitDate={pgBooking.bookingDate} />
                                    </p>
                                    <p className="text-white text-xl">Status: {pgBooking.bookingStatus}</p>
                                    <p className="text-white text-xl">Room Type: {pgBooking.roomBooked}</p>

                                    {/* Buttons for accepting or canceling the booking */}
                                    <div className="mt-4 flex gap-4">
                                        <button
                                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                            onClick={() =>
                                                updateBookingStatus(pg._id, pgBooking._id, 'confirmed', pgBooking.roomBooked)
                                            }
                                            disabled={isStatusFinal}
                                        >
                                            Accept
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                            onClick={() =>
                                                updateBookingStatus(pg._id, pgBooking._id, 'cancelled', pgBooking.roomBooked)
                                            }
                                            disabled={isStatusFinal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PgBookings;