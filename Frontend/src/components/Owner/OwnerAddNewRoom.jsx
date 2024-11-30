// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";

// const OwnerAddPG = () => {
//     const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
//     const [imageFiles, setImageFiles] = useState([]);

//     const onSubmit = async (data) => {
//         console.log(data);

//         // Create a FormData object to handle both form fields and images
//         const formData = new FormData();
        
//         // Append form fields to FormData
//         for (const key in data) {
//             formData.append(key, data[key]);
//         }

//         // Append the image files if they exist
//         imageFiles.forEach(file => {
//             formData.append('images', file); // Use 'images' to collect multiple files
//         });

//         // Send a POST request with FormData
//         const result = await fetch('http://localhost:3000/AddNewRoom/', {
//             method: "POST",
//             body: formData // Send formData which contains both fields and files
//         });

//         const res = await result.text();
//         console.log(res);
//     };

//     return (
//         <>
//             {isSubmitting && <div>Loading...</div>}

//             <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
//                 <select className='bg-slate-300' id="occupancy" {...register("occupancy", { required: { value: true, message: "Mandatory field" } })}>
//                     <option value="">-- Choose occupancy type --</option>
//                     <option value="single occupancy">Single Occupancy</option>
//                     <option value="double occupancy">Double Occupancy</option>
//                     <option value="triple occupancy">Triple Occupancy</option>
//                 </select>
//                 {errors.occupancy && <span style={{ color: "red" }}>{errors.occupancy.message}</span>}

//                 <input className='bg-slate-300' type='number' placeholder='Room Price' {...register("Roomprice", {
//                     required: { value: true, message: "Mandatory field" },
//                     valueAsNumber: true,
//                     validate: (value) => !isNaN(value) || "Please enter a valid number"
//                 })} />
//                 {errors.Roomprice && <span className='text-red-600'>{errors.Roomprice.message}</span>}

//                 <input className='bg-slate-300' type='number' placeholder='No Of Vacant Rooms' {...register("VacantRooms", {
//                     required: { value: true, message: "Mandatory field" },
//                     valueAsNumber: true,
//                     validate: (value) => !isNaN(value) || "Please enter a valid number"
//                 })} />
//                 {errors.VacantRooms && <span className='text-red-600'>{errors.VacantRooms.message}</span>}

//                 {/* Image upload input */}
//                 <input 
//                     type="file" 
//                     accept="image/*" 
//                     onChange={(e) => setImageFiles(Array.from(e.target.files))} 
//                     multiple
//                     className='bg-slate-300'
//                 />
//                 {imageFiles.length > 0 && (
//                     <div>
//                         <span>Selected images:</span>
//                         <ul>
//                             {imageFiles.map((file, index) => (
//                                 <li key={index}>{file.name}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}

//                 <input disabled={isSubmitting} className='bg-red-400' type="submit" />
//             </form>
//         </>
//     );
// }

// export default OwnerAddPG;


// import React from 'react'
// import { useForm } from "react-hook-form";

// const OwnerAddPG = () => {
//     const { register, 
//         handleSubmit, 
//         watch, 
//         formState: { errors,isSubmitting } } = useForm();

//     const onSubmit = async (data) => {
//         console.log(data);
//         const result =  await fetch('http://localhost:3000/AddNewRoom/',{method: "POST",headers:{"Content-Type":"application/json",} ,body: JSON.stringify(data)})
//         const res= await result.text(); 
//         console.log(res);
//     };
    
//     return (
//         <>
//         {isSubmitting && <div>Loading...</div>}

//         <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
//         {/* register your input into the hook by invoking the "register" function */}
//             {/* <input  type='' placeholder='Enter Room Type' {...register("roomType",{required:{value : true, message : "Mandatory field"}})} />
//             {errors.roomType && <span className='text-red-600'>{errors.roomType.message}</span>} */}

//             <select className='bg-slate-300' id="occupancy" {...register("occupancy", { required: {value : true, message : "Mandatory field"}})}>
//                 <option value="">-- Choose occupancy type --</option>
//                 <option value="single occupancy">Single Occupancy</option>
//                 <option value="double occupancy">Double Occupancy</option>
//                 <option value="triple occupancy">Triple Occupancy</option>
//             </select>
//             {errors.occupancy && <span style={{ color: "red" }}>{errors.occupancy.message}</span>}

//             <input className='bg-slate-300' type='number' placeholder='Room Price'{...register("Roomprice",{required:{value : true, message : "Mandatory field"},valueAsNumber: true,
//                 validate: (value) => !isNaN(value) || "Please enter a valid number"})} />
//             {errors.Roomprice && <span className='text-red-600'>{errors.Roomprice.message}</span>}
                
//             <input className='bg-slate-300' type='number' placeholder='No Of Vacant Rooms'{...register("VacantRooms",{required:{value : true, message : "Mandatory field"},valueAsNumber: true,
//                 validate: (value) => !isNaN(value) || "Please enter a valid number"})} />
//             {errors.VacantRooms && <span className='text-red-600'>{errors.VacantRooms.message}</span>}
            
//             <input disabled={isSubmitting} className='bg-red-400' type="submit" />
//     </form>
//     </>
//     )
// }

// export default OwnerAddPG

// import React from 'react'
// import { useForm } from "react-hook-form";

// const OwnerAddPG = () => {
//     const { register, 
//         handleSubmit, 
//         watch, 
//         formState: { errors,isSubmitting } } = useForm();

//     const onSubmit = async (data) => {
//         console.log(data);
//         const result =  await fetch('http://localhost:3000/AddNewRoom/',{method: "POST",headers:{"Content-Type":"application/json",} ,body: JSON.stringify(data)})
//         const res= await result.text(); 
//         console.log(res);
//     };
    
//     return (
//         <div className="flex items-center justify-center h-screen bg-black">
//         <div className="text-center p-8 bg-gray-900 shadow-lg rounded-lg text-white">
        
//         {isSubmitting && <div>Loading...</div>}

//         <form className='flex flex-col gap-6 ' onSubmit={handleSubmit(onSubmit)}>
//         {/* register your input into the hook by invoking the "register" function */}
//             {/* <input  type='' placeholder='Enter Room Type' {...register("roomType",{required:{value : true, message : "Mandatory field"}})} />
//             {errors.roomType && <span className='text-red-600'>{errors.roomType.message}</span>} */}

//             <select className='bg-gray-900 text-white' id="occupancy" {...register("occupancy", { required: {value : true, message : "Mandatory field"}})}>
//                 <option value="">-- Choose occupancy type --</option>
//                 <option value="single occupancy">Single Occupancy</option>
//                 <option value="double occupancy">Double Occupancy</option>
//                 <option value="triple occupancy">Triple Occupancy</option>
//             </select>
//             {errors.occupancy && <span style={{ color: "red" }}>{errors.occupancy.message}</span>}

//             <input className='bg-gray-900 text-white' type='number' placeholder='Room Price'{...register("Roomprice",{required:{value : true, message : "Mandatory field"},valueAsNumber: true,
//                 validate: (value) => !isNaN(value) || "Please enter a valid number"})} />
//             {errors.Roomprice && <span className='text-red-600'>{errors.Roomprice.message}</span>}
                
//             <input className='bg-gray-900 text-white' type='number' placeholder='No Of Vacant Rooms'{...register("VacantRooms",{required:{value : true, message : "Mandatory field"},valueAsNumber: true,
//                 validate: (value) => !isNaN(value) || "Please enter a valid number"})} />
//             {errors.VacantRooms && <span className='text-red-600'>{errors.VacantRooms.message}</span>}
            
//             <input disabled={isSubmitting} className='bg-blue-700 text-white rounded-md' type="submit" />
//     </form>
//     </div>
//     </div>
//     )
// }

// export default OwnerAddPG

import React from 'react'
import { useForm } from "react-hook-form";

const OwnerAddPG = () => {
    const { register, 
        handleSubmit, 
        watch, 
        formState: { errors,isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        const formData = new FormData();
        formData.append("occupancy", data.occupancy);
        formData.append("Roomprice", data.Roomprice);
        formData.append("VacantRooms", data.VacantRooms);

        // Handle image files
        for (let i = 0; i < data.images.length; i++) {
            formData.append("images", data.images[i]);
        }

        const result =  await fetch('http://localhost:3000/AddNewRoom/',{method: "POST",body: formData,credentials:"include"}) //,headers:{"Content-Type":"application/json",} 
        const res= await result.text(); 
        console.log(res);
    };
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-repeat" style={{ backgroundImage: 'url("https://st3.depositphotos.com/3336339/37106/i/450/depositphotos_371068526-stock-photo-dark-silver-cubes-abstract-metallic.jpg")' }}>"
        <div className="text-center p-8 bg-gradient-to-r from-black to-gray-500 shadow-lg rounded-lg text-white">
        
        {isSubmitting && <div>Loading...</div>}

        <form className='flex flex-col gap-6 ' onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
            {/* <input  type='' placeholder='Enter Room Type' {...register("roomType",{required:{value : true, message : "Mandatory field"}})} />
            {errors.roomType && <span className='text-red-600'>{errors.roomType.message}</span>} */}

            <select className='bg-white text-black' id="occupancy" {...register("occupancy", { required: {value : true, message : "Mandatory field"}})}>
                <option value="">-- Choose occupancy type --</option>
                <option value="single occupancy">Single Occupancy</option>
                <option value="double occupancy">Double Occupancy</option>
                <option value="triple occupancy">Triple Occupancy</option>
            </select>
            {errors.occupancy && <span style={{ color: "red" }}>{errors.occupancy.message}</span>}

            <input className='bg-gradient-to-r from-black to-gray-500 text-white' type='number' placeholder='Room Price'{...register("Roomprice",{required:{value : true, message : "Mandatory field"},valueAsNumber: true,
                validate: (value) => !isNaN(value) || "Please enter a valid number"})} />
            {errors.Roomprice && <span className='text-red-600'>{errors.Roomprice.message}</span>}
                
            <input className='bg-gradient-to-r from-black to-gray-500 text-white' type='number' placeholder='No Of Vacant Rooms'{...register("VacantRooms",{required:{value : true, message : "Mandatory field"},valueAsNumber: true,
                validate: (value) => !isNaN(value) || "Please enter a valid number"})} />
            {errors.VacantRooms && <span className='text-red-600'>{errors.VacantRooms.message}</span>}
            
            {/* <input type="image" /> */}

            {/* Image upload */}
            <input type="file" {...register("images", { required: { value: true, message: "Please upload at least one image" } })} multiple />
            {errors.images && <span className='text-red-600'>{errors.images.message}</span>}

            <input disabled={isSubmitting} className='bg-gray-500 text-black rounded-md' type="submit" />
    </form>
    </div>
    </div>
    )
}

export default OwnerAddPG