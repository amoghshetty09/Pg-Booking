import React from 'react';
import { useNavigate } from 'react-router-dom';
import pgimage from '../../assets/images/WhatsApp6.jpeg'
const OwnerHomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen" >
        <div className="w-1/3 text-center p-12 bg-gradient-to-t from-red-800 to-black shadow-lg ">
            <h1 className="text-3xl font-bold mb-6 text-white">User Dashboard</h1>
            <p className="text-lg mb-8 text-white">Manage your PG listings and rooms.</p>
            <div className="space-y-6">
            <button
                className="w-full px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => navigate('/UserFindPgByCity')}
            >
                Find PG
            </button>
            {/* <button
                className="w-full px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => navigate('/AddRoomOwner')}
            >
                Add/Update Room
            </button> */}
            {/* <button
                className="w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => navigate('/Owner/ViewPgDetails')}
            >
                View PG Details 
            </button> */}
            <button
                className="w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => navigate('/UserViewProfile')}
            >
                View My Profile 
            </button>
            <button
                className="w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => navigate('/UserBookings')}
            >
                View Customer Bookings
            </button>
            </div>
        </div>
        <div className="w-2/3 opacity-100 ">
        <img 
            src={pgimage}
            alt="abstract pic of pg" 
            className="w-full h-full object-fill" 
            />
            <div className="absolute top-1/4 left-1/2 transform translate-x-2/3  space-y-4">
                <button className="w-3/4  px-2 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={() => navigate('/FAQs')}
                >
                    FAQ's
                </button>
                <button className=" w-3/4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={() => navigate('/Aboutus')}
                >
                    About Us
                </button>
                <button className=" w-3/4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={() => navigate('/Contactus')}
                >
                    Contact Us
                </button>
            </div>
        </div>
        </div>
    );
};

export default OwnerHomePage;
