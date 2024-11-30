// import React from 'react';
// import { useForm } from 'react-hook-form';

// function Login() {
//     const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

//     const onSubmit = async (data) => {
//         try {
//             const result = await fetch('http://localhost:3000/owner/login/', {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(data),
//                 credentials: "include",
//             });

//             const res = await result.json();

//             if (res.success) {
//                 // Redirect the user on successful login
//                 window.location.href = res.redirect;
//             } else {
//                 console.error(res.message); // Handle error messages
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="flex h-screen">

//             <div className="w-1/2 bg-gradient-to-l from-black to-gray-500 flex flex-col justify-center items-center p-8">

//             <div className="w-1/2 bg-black flex flex-col justify-center items-center p-8">

//                 <h2 className="text-2xl font-bold text-center text-white">Login</h2>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-white">Email address</label>
//                         <input
//                             {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" } })}
//                             type="email"
//                             id="email"
//                             className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700 "
//                         />
//                         {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
//                         <input
//                             {...register('password', { required: "Password is required" })} 
//                             type="password"
//                             id="password"
//                             className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700 "
//                         />
//                         {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//                     </div>

//                     <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-green-600 rounded-full hover:bg-green-700" disabled={isSubmitting}>

//                     <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700" disabled={isSubmitting}>

//                         {isSubmitting ? 'Logging in...' : 'Login'}
//                     </button>
//                 </form>
//             </div>
//             <div className="w-1/2">
//             <img 
//             src="https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" 
//             alt="Skyscrapers viewed from below with a clear sky" 
//             className="w-full h-full object-cover" 
//             />
//         </div>
//         </div>
//     );
// }

// export default Login;

import React from 'react';
import { useForm } from 'react-hook-form';
import pgimage from '../../assets/images/WhatsApp3.jpeg'

function Login() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        try {
            const result = await fetch('http://localhost:3000/owner/login/', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                credentials: "include",
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
            {/* Left Section */}
            <div className="w-1/2 bg-gradient-to-l from-black to-gray-700 flex flex-col justify-center items-center p-8">
           
              <h2 className="text-2xl font-bold text-center text-white">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email address</label>
                            <input
                                {...register('email', {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                                })}
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                            <input
                                {...register('password', { required: "Password is required" })}
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-medium text-white bg-green-600 rounded-full hover:bg-green-700"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                
            </div>
            {/* Right Section */}
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

export default Login;
