// // src/components/Signup.jsx
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// function Signup() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

//     const onSubmit = async (data) => {
//         console.log('Form Data:', data);
//         try {
//             const result = await fetch('http://localhost:3000/owner/', {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(data)
//             });
//             const res = await result.text();
//             console.log('Response from server:', res);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     }

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
//                 <h2 className="text-2xl font-bold text-center text-gray-800">Signup</h2>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
//                         <input
//                             {...register('email', { required: true })}
//                             type="email"
//                             id="email"
//                             className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                         <input
//                             {...register('password', { required: true })}
//                             type="password"
//                             id="password"
//                             className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
//                     </div>
//                     <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600" disabled={isSubmitting}>
//                         {isSubmitting ? 'Submitting...' : 'Signup'}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Signup;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import pgimage from '../../assets/images/WhatsApp3.jpeg'

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        try {
            const result = await fetch('http://localhost:3000/owner/', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const res = await result.json();

            if (res.success) {
                // Redirect the user on successful login
                window.location.href = res.redirect;
            } else {
                console.error(res.message); // Handle error messages
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-gradient-to-l from-black to-gray-700 flex flex-col justify-center items-center p-8">
            
                <h2 className="text-2xl font-bold text-center text-white">Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email address</label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700 "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                        <input
                            {...register('password', { required: true })}
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700 "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
                    </div>
                  
                    <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-cyan-500 rounded-full hover:bg-cyan-700" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Signup'}
                    </button>
                    <div>
    <li style={{ listStyleType: "none", textAlign: "center", marginTop: "1rem" }}>
        <Link to="/OwnerLogin" style={{ color: "white", textDecoration: "underline" }}>
            Login
        </Link>
    </li>
    
</div>

                    
                </form>
                
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
}

export default Signup;
