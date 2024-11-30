import { useState, useEffect } from 'react';

const ScheduledVisits = () => {
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

    // Loading, error, and empty PG details states
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!pgDetails || pgDetails.length === 0) return <div>No PG details available.</div>;

    const VisitDate = ({ visitDate }) => {
        console.log(visitDate)
        const formattedDate = new Date(visitDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        return <span>{formattedDate}</span>;
    };

    return (
        <div className="p-8 min-h-screen mx-auto bg-gradient-to-l from-black to-gray-500 shadow-lg ">
            <h1 className="text-3xl font-bold mb-4 text-white text-center">PG Details</h1>
            {pgDetails.map((pg, index) => (
                <div key={index} className="mb-6 flex flex-col items-center">
                    <h2 className="text-2xl font-semibold text-white">{pg.PGname}</h2>
                    <p className="text-white text-xl">Phone: {pg.PhNumber}</p>
                    <p className="text-white text-xl">Address: {pg.Address}</p>
                    <p className="text-white text-xl">City: {pg.City}</p>
                    <p className="text-white text-xl">Price Range: ₹{pg.PriceRange}</p>

                    <div className="flex flex-col w-full mt-4">
                        <h3 className="text-3xl font-bold mb-3 text-white">Scheduled Visits</h3>
                        {pg.scheduledVisits.map((scheduledVisit, Index) => (
                            <div key={Index} className="mb-4 p-4 bg-gradient-to-r from-black to-gray-500 rounded-lg shadow">
                                <p className="font-semibold text-white text-2xl">User Name: {scheduledVisit.name}</p>
                                <p className="text-white text-xl">Phone No: {scheduledVisit.phone}</p>
                                <p className="text-white text-xl">
                                    Scheduled Date: <VisitDate visitDate={scheduledVisit.visitDate} />
                                </p>
                                <p className="text-white text-xl">Status: {scheduledVisit.status}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScheduledVisits;
