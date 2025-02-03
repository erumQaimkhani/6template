// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// const Signup: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   const validateForm = () => {
//     let newErrors: { [key: string]: string } = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.includes("@")) newErrors.email = "Invalid email address";
//     if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form Submitted:", formData);
//       alert("Signup Successful! ✅");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
 
//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//       >
//         {showForm ? "Hide Sign-Up" : "Show Sign-Up"}
//       </button>

//       {showForm && (
//         <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

//           <form onSubmit={handleSubmit} className="space-y-4">
      
//             <div>
//               <label className="block text-gray-700">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your name"
//               />
//               {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//             </div>

      
//             <div>
//               <label className="block text-gray-700">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your email"
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//             </div>

//             <div>
//               <label className="block text-gray-700">Password</label>
//               <div className="relative">
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   placeholder="Enter your password"
//                 />
//                 <span
//                   onClick={() => setPasswordVisible(!passwordVisible)}
//                   className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
//                 >
//                   {passwordVisible ? "👁️" : "🔒"}
//                 </span>
//               </div>
//               {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//             </div>

       
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//             >
//               Sign Up
//             </button>
//           </form>

//           <p className="text-center text-sm mt-4">
//             Already have an account?{" "}
//             <Link href="/login" className="text-blue-600 hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Signup;
"use client";
import React, { useState } from "react";
import Link from "next/link";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}; // Changed 'let' to 'const'

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email address";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("Signup Successful! ✅");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {showForm ? "Hide Sign-Up" : "Show Sign-Up"}
      </button>

      {showForm && (
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                />
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                >
                  {passwordVisible ? "👁️" : "🔒"}
                </span>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Signup;
