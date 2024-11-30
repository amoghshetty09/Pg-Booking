import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
const PgReview = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pg } = location.state || {};
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    if (!pg) {
        return <div>No PG details found.</div>;
    }
    // console.log(pg)
    // Handle star click event
    const handleStarClick = (value) => setRating(value);

    // Handle hover event on stars
    const handleStarHover = (value) => setHoverRating(value);

    // Reset hover effect when leaving the star
    const handleStarHoverLeave = () => setHoverRating(0);

    // Submit the review and rating as an object

    const onSubmit = async (data) => {
        const reviewData = {
            pg_id: pg._id,
            ratings: rating,  // Integer value for the rating (number of stars)
            feedback: review,  // String value for the review text
        };
        // console.log("data",data);
        const result =  await fetch('http://localhost:3000/rating/',{method: "POST",headers:{"Content-Type":"application/json",} ,credentials:"include",body: JSON.stringify(reviewData)})
        const res= await result.text(); 
        console.log("res",res);
    // Log the review object (You can replace this with an API call to send data to the backend)
    console.log('Review Submitted:', reviewData);
    // Reset form fields after submission
    setReview('');
    setRating(0);
    // Navigate back to the previous page
    navigate(-1);

    };
        
    return (
        <div className="bg-gradient-to-br from-gray-800 via-gray-400 to-gray-800 min-h-screen p-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-4">Review for {pg.PGname}</h2>

            <div className="bg-gray-400 rounded-lg shadow-md p-6 mb-8 w-full max-w-md">
                <p><strong>City:</strong> {pg.City}</p>
                <p><strong>Price Range:</strong> ₹{pg.PriceRange}</p>
                <p><strong>Contact:</strong> {pg.PhNumber}</p>
                {pg.Images && pg.Images.length > 0 && (
                    <img
                        src={pg.Images[0]} // Display the first image as an example
                        alt={`${pg.PGname} Image`}
                        className="w-full h-40 object-cover rounded-md mt-4"
                    />
                )}
            </div>

            <div className="bg-gray-400 rounded-lg shadow-md p-6 w-full max-w-md">
                <h3 className="text-2xl font-semibold mb-4">Submit Your Review</h3>

                {/* Rating section */}
                <div className="mb-4 flex items-center">
                    <label className="block text-gray-700 font-semibold mr-4">Rating:</label>
                    <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                size={24}
                                className={`cursor-pointer ${ (hoverRating || rating) >= star ? 'text-yellow-500' : 'text-gray-300' }`}
                                onClick={() => handleStarClick(star)}
                                onMouseEnter={() => handleStarHover(star)}
                                onMouseLeave={handleStarHoverLeave}
                            />
                        ))}
                    </div>
                </div>

                {/* Review text area */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Review:</label>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        rows="4"
                        className="border bg-gray-400 placeholder-black rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Write your review here"
                    ></textarea>
                </div>

                {/* Submit button */}
                <button
                    onClick={handleSubmit(onSubmit)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Submit Review
                </button>
            </div>
        </div>
    );
};

export default PgReview;
