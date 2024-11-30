import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const PgDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pg } = location.state || {};


    const [showMap, setShowMap] = useState(false);
    const [coordinates, setCoordinates] = useState(null);

    console.log(pg.Address)
    const [showModal, setShowModal] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: '',
        phone: '',
        visitDate: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [averageRating, setAverageRating] = useState(0);

    if (!pg) return <p className="text-center text-gray-500">No details available for this PG.</p>;

    const handleNavigateToReview = (pg) => {
        navigate('/RatingMain', { state: { pg } });
    };

    const handleNavigateToBook = (pg) => {
        navigate('/UserReserveRoom', { state: { pg } });
    };

    const handleSchedule = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    // Function to fetch coordinates from LocationIQ API
    const fetchCoordinates = async (address) => {
        const apiKey = 'pk.9d5d1b1a66d30cb2e99aa6bcb5031f7a'; // Replace with your actual LocationIQ API key
        const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(address)}&format=json`;

        try {
            const response = await fetch(url);
            const json = await response.json();
            if (json && json.length > 0) {
                const lat = json[0].lat;
                const lon = json[0].lon;
                console.log(`Coordinates: Latitude = ${lat}, Longitude = ${lon}`);
                return { lat, lon };
            } else {
                throw new Error('No results found');
            }
        } catch (err) {
            console.error('Error fetching coordinates:', err);
            throw err;
        }
    };

    // Handle showing the map after fetching coordinates
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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const profileResponse = await fetch('http://localhost:3000/UserProfile', {
                    method: 'GET',
                    credentials: 'include',
                });

                if (!profileResponse.ok) {
                    throw new Error('Failed to fetch user profile');
                }

                const profileData = await profileResponse.json();
                setUserEmail(profileData.user.email);

                // Calculate average rating from pg.Review array if it exists
                if (pg.Review && pg.Review.length > 0) {
                    const totalRatings = pg.Review.length;
                    const sumOfRatings = pg.Review.reduce((sum, review) => sum + review.rating, 0);
                    const average = totalRatings > 0 ? sumOfRatings / totalRatings : 0;
                    setAverageRating(average);
                }

            } catch (err) {
                setErrorMessage(err.message);
            }
        };
        fetchData();
    }, [pg.Review]);


    const renderStars = (averageRating) => {
        const filledStars = Math.floor(averageRating);
        const halfStar = averageRating - filledStars >= 0.5 ? 1 : 0;
        const emptyStars = 5 - filledStars - halfStar;
    
        return (
            <>
                {'★'.repeat(filledStars).split('').map((star, index) => (
                    <span key={`filled-${index}`}>{star}</span>
                ))}
                {halfStar ? <span key="half">☆</span> : null}
                {'☆'.repeat(emptyStars).split('').map((star, index) => (
                    <span key={`empty-${index}`}>{star}</span>
                ))}
            </>
        );
    };

    const handleSubmitSchedule = async () => {
        const { name, phone, visitDate } = userDetails;
        if (!name || !phone || !visitDate) {
            setErrorMessage('All fields are required.');
            return;
        }
        
        try {
            const response = await fetch('http://localhost:3000/ScheduleVisit', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    userId: pg.user, 
                    email: userEmail,
                    name,
                    phone,
                    visitDate,
                    pgId: pg._id, 
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to schedule the visit.');
            }

            const data = await response.json();
            setShowModal(false);
        } catch (err) {
            setErrorMessage('Error: ' + err.message);
        }
    };

    return (
        <div className="bg-gradient-to-l from-gray-800 via-gray-400 to-gray-800 min-h-screen p-8 flex flex-col">
            <h2 className="text-3xl font-bold text-center mb-8">{pg.PGname}</h2>
            <p className="text-xl text-white"><strong>City:</strong> {pg.City}</p>
            <p className="text-xl text-white"><strong>Price Range:</strong> {pg.PriceRange}</p>
            <p className="text-xl text-white"><strong>Contact:</strong> {pg.PhNumber}</p>
            <p className="text-xl text-white"><strong>Address:</strong> {pg.Address}</p>
            <p className="text-xl text-white"><strong>FoodMenu:</strong> {pg.Food}</p>
            <p className="text-xl text-white"><strong>Gender:</strong> {pg.Gender}</p>
            
            {/* Display average rating */}
            <div className="text-xl text-white mb-4">
                <strong>Rating:</strong> {renderStars(averageRating)} ({averageRating.toFixed(1)})
            </div>

            {/* Display rooms */}
            <div className="mt-6 ">
                <h3 className="text-2xl font-semibold mb-4 text-white">Rooms</h3>
                {pg.Rooms.map((room, index) => (
                    <div key={index} className="mb-4 p-4 rounded-lg shadow bg-gradient-to-l from-gray-400 via-gray-800 to-gray-400">
                        <p><strong>Room Type:</strong> {room.RoomType}</p>
                        <p><strong>Room Price:</strong> ₹{room.RoomPrice}</p>
                        <p><strong>Vacant Rooms:</strong> {room.VacantRooms}</p>
                    </div>
                ))}
            </div>

            {/* Display images if available */}
            {pg.Images && pg.Images.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-4">Images</h3>
                    <img
                        src={pg.Images[0]}
                        alt={`${pg.PGname} Image`}
                        className="w-full h-80 object-cover rounded-md"
                    />
                </div>
            )}

            <button
                onClick={() => handleSchedule(pg)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-96 mx-auto"
            >
                Schedule Visit
            </button>
            <button
                onClick={() => handleNavigateToBook(pg)}
                className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-96 mx-auto"
            >
                Reserve Now
            </button>
            <button
                onClick={() => handleNavigateToReview(pg)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-96 mx-auto"
            >
                Submit Review
            </button>

            <button
                        onClick={() => handleShowLocation(pg)}
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-96 mx-auto"
                    >
                        Show Location
            </button>


            {/* Map rendering */}
            {showMap && coordinates && (
                <div className="mt-6" style={{ width: '100%', height: '400px' }}>
                    <MapContainer center={coordinates} zoom={15} style={{ width: '100%', height: '100%' }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={coordinates}>
                            <Popup>{pg.PGname}</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            )}

            {/* Modal for scheduling visit */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-gray-400 p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-xl font-bold mb-4">Schedule a Visit</h3>

                        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

                        <div className="mb-4">
                            <label className="block text-black">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={userDetails.name}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-gray-100 text-white rounded-lg border border-gray-300"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                value={userDetails.phone}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-gray-100 text-white rounded-lg border border-gray-300"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black">Date of Visit</label>
                            <input
                                type="date"
                                name="visitDate"
                                value={userDetails.visitDate}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-gray-100 text-black rounded-lg border border-gray-300"
                            />
                        </div>

                        <div className="flex justify-between">
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-600 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmitSchedule}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PgDetailPage;
