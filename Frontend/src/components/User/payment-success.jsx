import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate();

    const handleReturnToHome = () => {
        navigate('/UserHome');  // Navigate to home or wherever you'd like
    };

    return (
        <div className="h-screen bg-gradient-to-l from-green-600 to-black">
        <div className="max-w-md mx-auto p-8 bg-gray-900 shadow-lg rounded-lg text-center">
            <h2 className="text-white text-3xl font-semibold mb-6">Payment Successful!</h2>
            <p className="text-white mb-6">Thank you for your payment. Your transaction was completed successfully.</p>

            <button
            onClick={handleReturnToHome}
            className="w-full py-3 mt-6 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
            Return to Home
            </button>
        </div>
        </div>
    );
};

export default PaymentSuccess;
