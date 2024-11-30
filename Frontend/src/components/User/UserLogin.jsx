// src/components/Login.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import pgimage from '../../assets/images/WhatsApp5.jpeg'

function Login() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        console.log('Form Data:', data);
        try {
            const result = await fetch('http://localhost:3000/user/login/', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                credentials:"include",
            });
            const res = await result.json();
    
            if (res.success) {
                window.location.href = res.redirect; // Redirect the user on the frontend
            } else {
                console.error(res.message); // Handle any error messages
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        // <div className="flex items-center justify-center min-h-screen bg-gray-100">
        //     <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        //         <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        //             <div>
        //                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
        //                 <input
        //                     {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" } })}
        //                     type="email"
        //                     id="email"
        //                     className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                 />
        //                 {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        //             </div>
        //             <div>
        //                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        //                 <input
        //                     {...register('password', { required: "Password is required" })}
        //                     type="password"
        //                     id="password"
        //                     className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                 />
        //                 {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        //             </div>
        //             <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600" disabled={isSubmitting}>
        //                 {isSubmitting ? 'Logging in...' : 'Login'}
        //             </button>
        //         </form>
        //     </div>
        // </div>

        <div className="flex h-screen">
            <div className="w-1/2 bg-gradient-to-l from-black to-gray-700 flex flex-col justify-center items-center p-8" >
                <h2 className="text-2xl font-bold text-center text-white">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email address</label>
                        <input
                            {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" } })}
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                        <input
                            {...register('password', { required: "Password is required" })}
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>
                    <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-green-600 rounded-full hover:bg-green-700" disabled={isSubmitting}>
                        {isSubmitting ? 'Logging in...' : 'Login'}
                    </button>
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

export default Login;