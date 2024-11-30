import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CitySelection = () => {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch cities from the backend
        const fetchCities = async () => {
            try {
                const response = await fetch('http://localhost:3000/UserFindPgByCity/', {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    // body: JSON.stringify({city}),
                    credentials:"include",
                }); // Adjust API endpoint as needed
    
                if (!response.ok) {
                    throw new Error('Failed to fetch cities');
                }
                const data = await response.json();
                console.log("data",data)
                setCities(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCities();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    const onCitySelect=async(city) => {
        console.log(city)

        const result = await fetch('http://localhost:3000/GetPgByCity', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({city}),
            credentials:"include",
        });
        if (!result.ok) {
            throw new Error('Failed to fetch pgs');
        }
        const data = await result.json();
        console.log("data",data)

        navigate('/UserPgList', { state: { pgData: data } });//state can also be passed along with the navigate function
    }
    
    return (
        <div className="container  mx-auto p-6 bg-gradient-to-l from-black to-cyan-700  w-full h-full min-h-screen">
            <h1 className="text-2xl font-bold text-white mb-4 text-center">Select a City to Find PGs</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cities.map((city, index) => (
                    <div
                        key={index}
                        onClick={() => onCitySelect(city)}
                        className="cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                    >
                        <h2 className="text-xl font-semibold">{city}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CitySelection;
