// import React, { useState } from 'react';

// const PaymentPage = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [error, setError] = useState('');

//   const handlePayment = (e) => {
//     e.preventDefault();

//     if (!cardNumber || !expiryDate || !cvv) {
//       setError('Please fill in all fields.');
//       return;
//     }

    
//     setError('');

  
//     alert('Payment processed successfully!');

    
//   };

//   return (
//     <div className="h-screen bg-gradient-to-l from-gray-600 to-black">
//     <div className="max-w-md mx-auto p-8 bg-gray-900 shadow-lg rounded-lg justify-center">
//       <h2 className="text-white text-2xl font-semibold mb-6">Payment Page</h2>
//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       <form onSubmit={handlePayment}>
//         <div className="mb-4">
//           <label className="block text-white mb-2">Card Number:</label>
//           <input
//             type="text"
//             value={cardNumber}
//             onChange={(e) => setCardNumber(e.target.value)}
//             className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-white mb-2">Expiry Date (MM/YY):</label>
//           <input
//             type="text"
//             value={expiryDate}
//             onChange={(e) => setExpiryDate(e.target.value)}
//             className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-white mb-2">CVV:</label>
//           <input
//             type="text"
//             value={cvv}
//             onChange={(e) => setCvv(e.target.value)}
//             className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Pay
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default PaymentPage;
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [error, setError] = useState("");
  const [paymentOption, setPaymentOption] = useState("");

  useEffect(() => {
    if (state?.selectedOption) {
      setPaymentOption(state.selectedOption); // Get the selected payment option from the state
    }
  }, [state]);


    const [UserData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch User profile and PG details from the backend
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/UserProfile',{method: "GET",credentials:"include"}); // Adjust API endpoint as needed
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setUserData(data);
                console.log(data)
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    // Post the booking
    const handleBookPg=async() => {
      console.log("Datatata",UserData)

      const result = await fetch('http://localhost:3000/BookPg', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({UserData}),
          credentials:"include",
      });
      if (!result.ok) {
          throw new Error('Failed to fetch pgs');
      }
      const data = await result.json();
      console.log("data",data)

    }
  



  const handlePayment = (e) => {
    e.preventDefault();

    // Validation logic based on the selected payment method
    if (paymentOption === "Credit Card" || paymentOption === "Debit Card") {
      if (!cardNumber || !expiryDate || !cvv) {
        setError("Please fill in all credit card details.");
        return;
      }
    } else if (paymentOption === "UPI") {
      if (!upiId) {
        setError("Please enter your UPI ID.");
        return;
      }
    } else if (paymentOption === "Bank Transfer") {
      // For Bank Transfer, you can add additional validations if needed
      alert("Bank Transfer details are being processed.");
      navigate("/payment-success");
      return;
    }

    setError("");
    alert(`${paymentOption} payment processed successfully!`);
    // Redirect or handle payment success logic here
    navigate("/payment-success");
  };

  return (
    <div className="h-screen bg-gradient-to-l from-gray-600 to-black">
      <div className="max-w-md mx-auto p-8 bg-gray-900 shadow-lg rounded-lg justify-center">
        <h2 className="text-white text-2xl font-semibold mb-6">Payment Page</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="mb-6 text-white text-xl font-semibold">
          <p>Selected Payment Method: {paymentOption}</p>
        </div>

        <form onSubmit={handlePayment}>
          {/* Conditional form rendering based on selected payment option */}
          {paymentOption === "Credit Card" || paymentOption === "Debit Card" ? (
            <>
              <div className="mb-4">
                <label className="block text-white mb-2">Card Number:</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2">Expiry Date (MM/YY):</label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2">CVV:</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </>
          ) : paymentOption === "Paytm" || "PhonePe" || "Google Pay" ? (
            <div className="mb-4">
              <label className="block text-white mb-2">Enter UPI ID:</label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ) : paymentOption === "Bank Transfer" ? (
            <div className="text-white mb-4">
              <p>Please complete the bank transfer using your bank's interface.</p>
            </div>
          ) : (
            <div className="text-white mb-4">
              <p>Please select a valid payment option.</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={()=>{handleBookPg()}}
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
