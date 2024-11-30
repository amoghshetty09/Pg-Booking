// import React, { useState, useEffect } from "react";

// const BookingForm = ({ onBookingSuccess }) => {
//     const [formData, setFormData] = useState({
//         user: "", // Will be populated after fetching user data
//         email: "", // Will be populated after fetching user data
//         bookingDate: "", // Will be converted to a Date object
//         roomBooked: "",
//         bookingStatus: "pending", // Default status
//     });

//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         // Fetch User profile and PG details from the backend
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("http://localhost:3000/UserProfile", {
//                     method: "GET",
//                     credentials: "include",
//                 });
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch user data");
//                 }
//                 const data = await response.json();
//                 setFormData((prevData) => ({
//                     ...prevData,
//                     user: data._id, // Automatically set user ID
//                     email: data.email, // Automatically set email
//                 }));
//             } catch (err) {
//                 setError(err.message);
//             }
//         };

//         fetchData();
//     }, []);

//     // Handle form field changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null);
//         setLoading(true);

//         try {
//             const bookingData = {
//                 ...formData,
//                 bookingDate: new Date(formData.bookingDate), // Ensure the date is in Date format
//             };

//             const response = await fetch("http://localhost:3000/bookPG", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(bookingData),
//             });

//             if (!response.ok) {
//                 throw new Error("Failed to book PG. Please try again.");
//             }

//             const result = await response.json();
//             if (onBookingSuccess) onBookingSuccess(result); // Notify parent component if needed
//             alert("Booking successful!");
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-6 max-w-md mx-auto bg-gray-800 text-white rounded-md shadow-md">
//             <h2 className="text-2xl font-bold mb-4">Book a PG</h2>
//             {error && <p className="text-red-500">{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 {/* User ID (Hidden Field) */}
//                 <input
//                     type="hidden"
//                     name="user"
//                     value={formData.user}
//                 />

//                 {/* Email Field (Read-Only) */}
//                 <label className="block mb-2">
//                     Email:
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         readOnly
//                         className="block w-full p-2 mt-1 rounded-md bg-gray-700 text-gray-400 cursor-not-allowed"
//                     />
//                 </label>

//                 {/* Booking Date Field */}
//                 <label className="block mb-2">
//                     Booking Date:
//                     <input
//                         type="date"
//                         name="bookingDate"
//                         value={formData.bookingDate}
//                         onChange={handleChange}
//                         required
//                         className="block w-full p-2 mt-1 rounded-md bg-gray-700 text-white"
//                     />
//                 </label>

//                 {/* Room Booked Field */}
//                 <label className="block mb-2">
//                     Room Booked:
//                     <input
//                         type="text"
//                         name="roomBooked"
//                         value={formData.roomBooked}
//                         onChange={handleChange}
//                         required
//                         className="block w-full p-2 mt-1 rounded-md bg-gray-700 text-white"
//                         placeholder="Enter Room Type"
//                     />
//                 </label>

//                 {/* Booking Status Field */}
//                 <label className="block mb-2">
//                     Booking Status:
//                     <select
//                         name="bookingStatus"
//                         value={formData.bookingStatus}
//                         onChange={handleChange}
//                         required
//                         className="block w-full p-2 mt-1 rounded-md bg-gray-700 text-white"
//                     >
//                         <option value="pending">Pending</option>
//                         <option value="confirmed">Confirmed</option>
//                         <option value="cancelled">Cancelled</option>
//                     </select>
//                 </label>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full p-2 mt-4 rounded-md bg-blue-600 hover:bg-blue-700"
//                 >
//                     {loading ? "Booking..." : "Book Now"}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default BookingForm;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const BookingForm = ({ onBookingSuccess }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const { pg } = location.state || {};

    const [formData, setFormData] = useState({
        user: "", // Will be populated after fetching user data
        email: "", // Will be populated after fetching user data
        bookingDate: "", // Will be converted to a Date object
        roomBooked: "",
        bookingStatus: "pending", // Default status
        pg_id: pg._id,
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch User profile and PG details from the backend
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/UserProfile", {
                    method: "GET",
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const data = await response.json();
                setFormData((prevData) => ({
                    ...prevData,
                    user: data.user?.Userid || "",
                    email: data.user?.email || "", // Safely access email from user object
                }));
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const bookingData = {
                ...formData,
                bookingDate: new Date(formData.bookingDate), // Ensure the date is in Date format
            };

            const response = await fetch("http://localhost:3000/BookPg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(bookingData),
            });

            if (!response.ok) {
                throw new Error("Failed to book PG. Please try again.");
            }

            const result = await response.json();
            navigate('/PaymentOptions',{ state: { pg } })
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen bg-gradient-to-l from-black via-gray-200 to-black">
        <div className="p-6 max-w-md mx-auto bg-gray-800 text-white rounded-md shadow-md ">
            <h2 className="text-2xl font-bold mb-4">Book a PG</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
                {/* User ID (Hidden Field) */}
                <input
                    type="hidden"
                    name="user"
                    value={formData.user}
                />

                {/* Email Field (Read-Only) */}
                <label className="block mb-2">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        readOnly
                        className="block w-full p-2 mt-1 rounded-md bg-gray-700 text-gray-400 cursor-not-allowed"
                    />
                </label>

                {/* Booking Date Field */}
                <label className="block mb-2">
                    Booking Date:
                    <input
                        type="date"
                        name="bookingDate"
                        value={formData.bookingDate}
                        onChange={handleChange}
                        required
                        className="block w-full p-2 mt-1 rounded-md bg-gray-700 text-white"
                    />
                </label>

                {/* Room Booked Field */}
                <label className="block mb-2">
                    Occupancy Type
                    <select name="roomBooked"
                        value={formData.roomBooked}
                        onChange={handleChange} className="block w-full p-2 mt-1 rounded-md bg-gray-700 text-white" id="occupancy" required>
                        <option value="">-- Choose occupancy type --</option>
                        <option value="single occupancy">Single Occupancy</option>
                        <option value="double occupancy">Double Occupancy</option>
                        <option value="triple occupancy">Triple Occupancy</option>
                    </select>
                </label>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full p-2 mt-4 rounded-md bg-green-600 hover:bg-green-700"
                >
                    {loading ? "Booking..." : "Book Now"}
                </button>
            </form>
        </div>
        </div>
    );
};

export default BookingForm;
