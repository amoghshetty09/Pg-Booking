// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import pgimage from './../assets/images/WhatsApp4.jpeg'

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen">
        <div className="w-1/2 bg-black flex flex-col justify-center items-center p-8">
            <h1 className="text-6xl font-bold mb-4 gradient-text-animation">BeMyPG</h1>

            {/* <p className="text-white mb-6"> Who are you?</p> */}

            <p className="text-white mb-6"> How do you describe yourself?</p>

            <div className="w-full max-w-sm">
            {/* <a href="combine.html"> */}
                <button 
                type="button" 
                className="w-full bg-blue-600 text-white p-3 rounded-full font-semibold hover:bg-blue-800 transition duration-300 mb-4"
                onClick={() => navigate('/UserSignup')}>
                User
                </button>
            {/* </a> */}
            {/* <a href="combineowner.html"> */}
                <button 
                type="button" 
                className="w-full bg-cyan-500 text-white p-3 rounded-full font-semibold hover:bg-cyan-700 transition duration-300"
                onClick={() => navigate('/OwnerSignUp')}>
                Owner
                </button>
            {/* </a> */}
            </div>
        </div>
        <div className="w-1/2">
            <img 
            src={pgimage}
            alt="Skyscrapers viewed from below with a clear sky" 
            className="w-full h-full object-fill" 
            />
        </div>
        </div>
    );
};

export default HomePage;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// const HomePage = () => {
//     const navigate = useNavigate();
//     return (
//         <div className="flex h-screen">
//         <div className="w-1/2 bg-black flex flex-col justify-center items-center p-8">
//             <h1 className="text-5xl font-bold mb-4 text-white">BeMyPG</h1>
            
//             <p className="text-grey mb-6">Who the end user is?</p>
//             <div className="w-full max-w-sm">
//             <a href="combine.html">
//                 <button 
//                 type="button" 
//                 className="w-full bg-blue text-white p-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 mb-4"
//                 onClick={() => navigate('/UserSignup')}>
//                 User
//                 </button>
//             </a>
//             <a href="combineowner.html">
//                 <button 
//                 type="button" 
//                 className="w-full bg-blue text-white p-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
//                 onClick={() => navigate('/OwnerSignUp')}>
//                 Owner
//                 </button>
//             </a>
//             </div>
//         </div>
//         <div className="w-1/2">
//             <img 
//             src="https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" 
//             alt="Skyscrapers viewed from below with a clear sky" 
//             className="w-full h-full object-cover" 
//             />
//         </div>
//         </div>
//     );
// };

// export default HomePage;