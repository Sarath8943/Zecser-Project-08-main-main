// // import { useNavigate } from 'react-router-dom';

// // const Profile = () => {
// //   const navigate = useNavigate();

// //   const handleLogOut = () => {
// //     // Do logout logic if needed
// //     navigate('/login');
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
// //     <div className="w-full max-w-6xl">
// //       {/* Header */}
// //       <div className="flex items-center justify-between mb-12">
// //         <h1 className="text-2xl font-bold text-green-800">Profile</h1>
// //         <div className="flex items-center gap-2">
// //           <span className="text-lg font-medium text-gray-800">David</span>
// //           <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center">
// //             <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// //             </svg>
// //           </div>
// //         </div>
// //       </div>

// //         <div className="flex flex-col lg:flex-row gap-12">
// //           {/* Left - Profile Info */}
// //           <div className="flex-1">
// //             <div className="flex items-center gap-4 mb-10">
// //               <div className="w-20 h-20 rounded-full overflow-hidden bg-pink-300">
// //                 <img
// //                   src="https://randomuser.me/api/portraits/men/32.jpg"
// //                   alt="Profile"
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
// //               <div>
// //                 <h2 className="text-xl font-bold text-gray-900 mb-1">dataname.David Spencer</h2>
// //                 <p className="text-gray-600"> Ceo</p>
// //               </div>
// //             </div>

// //             <h3 className="text-lg font-semibold mb-6 text-gray-900">dataname.Personal Information</h3>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
// //               <div>
// //                 <div className="text-sm text-gray-500 mb-1">First Name</div>
// //                 <div className="font-medium text-gray-900">David</div>
// //               </div>
// //               <div>
// //                 <div className="text-sm text-gray-500 mb-1">Last Name</div>
// //                 <div className="font-medium text-gray-900">Spencer</div>
// //               </div>
// //               <div>
// //                 <div className="text-sm text-gray-500 mb-1">Email</div>
// //                 <div className="font-medium text-gray-900">davidbbba@gmail.com</div>
// //               </div>
// //               <div>
// //                 <div className="text-sm text-gray-500 mb-1">Phone</div>
// //                 <div className="font-medium text-gray-900">0987775543</div>
// //               </div>
// //               <div>
// //                 <div className="text-sm text-gray-500 mb-1">Country</div>
// //                 <div className="font-medium text-gray-900">United Kingdom</div>
// //               </div>
// //               <div>
// //                 <div className="text-sm text-gray-500 mb-1">City</div>
// //                 <div className="font-medium text-gray-900">Amsterdam</div>
// //               </div>
// //               <div>
// //                 <div className="text-sm text-gray-500 mb-1">Postal Code</div>
// //                 <div className="font-medium text-gray-900">067845</div>
// //               </div>
// //               <div>
// //                 <div className="text-sm text-gray-500 mb-1">Tax Id</div>
// //                 <div className="font-medium text-gray-900">56100</div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="lg:w-72 w-full flex flex-col justify-start lg:justify-center gap-4">
// //   <button
// //     className="w-full py-3 px-6 rounded-xl bg-white text-green-800 font-semibold border-2 border-gray-200 shadow-sm hover:shadow-md hover:bg-green-50 transition duration-200"
// //     onClick={() => navigate('/admin/profile/edit')}
// //   >
// //     Edit Profile
// //   </button>

// //   <button
// //     className="w-full py-3 px-6 rounded-xl bg-white text-green-800 font-semibold border-2 border-gray-200 shadow-sm hover:shadow-md hover:bg-green-50 transition duration-200"
// //     onClick={() => navigate('/admin/profile/reset-password')}
// //   >
// //     Reset Password
// //   </button>

// //   <button
// //     className="w-full py-3 px-6 rounded-xl bg-white text-green-800 font-semibold border-2 border-gray-200 shadow-sm hover:shadow-md hover: transition duration-200"
// //     onClick={handleLogOut}
// //   >
// //     Log Out
// //   </button>
// // </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };




// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// const Profile = () => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     country: "",
//     city: "",
//     postalCode: "",
//     taxId: "",
//     role: "",
//     photo: "", // same key as EditProfile
//   });

//   useEffect(() => {
//     const storedData = localStorage.getItem("userProfile");
//     if (storedData) {
//       const parsedData = JSON.parse(storedData);

//       // Ensure we use "photo" instead of "profileImg"
//       setUser((prev) => ({
//         ...prev,
//         ...parsedData,
//         photo: parsedData.photo || parsedData.profileImg || "",
//       }));
//     } else {
//       const defaultData = {
//         firstName: "David",
//         lastName: "Spencer",
//         email: "davidbbba@gmail.com",
//         phone: "0987775543",
//         country: "United Kingdom",
//         city: "Amsterdam",
//         postalCode: "067845",
//         taxId: "56100",
//         role: "CEO",
//         photo: "https://randomuser.me/api/portraits/men/32.jpg",
//       };
//       setUser(defaultData);
//       localStorage.setItem("userProfile", JSON.stringify(defaultData));
//     }
//   }, []);

//   const handleLogOut = () => {
//     localStorage.removeItem("userProfile");
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleEditProfile = () => {
//     navigate("/admin/profile/edit", { state: { user } });
//   };

//   const handleResetPassword = () => {
//     navigate("/admin/profile/reset-password");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
//       <div className="w-full max-w-6xl">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-12">
//   <h1 className="text-3xl font-bold text-green-800">Profile</h1>
//   <div className="flex items-center gap-2">
//     <span className="text-lg font-medium text-gray-800">
//       {user.firstName}
//     </span>
//     <div className="w-10 h-10 rounded-full border-3  boder-green-700 flex items-center justify-center">
//       <svg
//         className="w-6 h-7 text-green-800"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 
//         2.24-5 5 2.24 5 5 5zm0 2c-3.33 
//         0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
//       </svg>
//     </div>
//   </div>
// </div>


//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Left - Profile Info */}
//           <div className="flex-1">
//             <div className="flex items-center gap-4 mb-10">
//               <div className="w-20 h-20 rounded-full overflow-hidden bg-pink-300">
//                 <img
//                   src={
//                     user.photo ||
//                     "https://randomuser.me/api/portraits/men/32.jpg"
//                   }
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900 mb-1">
//                   {user.firstName} {user.lastName}
//                 </h2>
//                 <p className="text-gray-600">{user.role}</p>
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold mb-6 text-gray-900">
//               Personal Information
//             </h3>

//             <div className="grid grid-cols-2  md:grid-cols-2 gap-2 gap-y-6">
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">First Name</div>
//                 <div className="font-medium text-gray-900">{user.firstName}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Last Name</div>
//                 <div className="font-medium text-gray-900">{user.lastName}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Email</div>
//                 <div className="font-medium text-gray-900">{user.email}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Phone</div>
//                 <div className="font-medium text-gray-900">{user.phone}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Country</div>
//                 <div className="font-medium text-gray-900">{user.country}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">City</div>
//                 <div className="font-medium text-gray-900">{user.city}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Postal Code</div>
//                 <div className="font-medium text-gray-900">
//                   {user.postalCode}
//                 </div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Tax Id</div>
//                 <div className="font-medium text-gray-900">{user.taxId}</div>
//               </div>
//             </div>
//           </div>

//           {/* Right - Buttons */}
//           <div className="lg:w-72 w-full flex flex-col justify-start lg:justify-center gap-4">
//             <button
//               className="w-full py-3 px-6 rounded-xl bg-white text-green-800 font-semibold border-2  "
//               onClick={handleEditProfile}
//             >
//               Edit Profile
//             </button>

//             <button
//               className="w-full py-3 px-6 rounded-xl bg-white text-green-800 font-semibold border-2 "
//               onClick={handleResetPassword}
//             >
//               Reset Password
//             </button>

//             <button
//               className="w-full py-3 px-6 rounded-xl bg-white text-green-800 font-semibold border-2 "
//               onClick={handleLogOut}
//             >
//               Log Out
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    postalCode: "",
    taxId: "",
    role: "",
    photo: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("userProfile");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUser((prev) => ({
        ...prev,
        ...parsedData,
        photo: parsedData.photo || parsedData.profileImg || "",
      }));
    } else {
      const defaultData = {
        firstName: "David",
        lastName: "Spencer",
        email: "davidbbba@gmail.com",
        phone: "0987775543",
        country: "United Kingdom",
        city: "Amsterdam",
        postalCode: "067845",
        taxId: "56100",
        role: "CEO",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
      };
      setUser(defaultData);
      localStorage.setItem("userProfile", JSON.stringify(defaultData));
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("userProfile");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleEditProfile = () => {
    navigate("/admin/profile/edit", { state: { user } });
  };

  const handleResetPassword = () => {
    navigate("/admin/profile/reset-password");
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 px-5 pt-6">
      <div className="w-full max-w-6xl mx-auto bg-gray-50">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-800">Profile</h1>
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg font-medium text-gray-800">
              {user.firstName}
            </span>
            <div className="w-10 h-10 rounded-full border-3 border-green-700 flex items-center justify-center">
              <svg
                className="w-6 h-7 text-green-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 
                2.24-5 5 2.24 5 5 5zm0 2c-3.33 
                0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
              </svg>
            </div>
          </div>
        </div>
  
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left - Profile Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-pink-300 flex-shrink-0">
                <img
                  src={user.photo || "https://randomuser.me/api/portraits/men/32.jpg"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-gray-600">{user.role}</p>
              </div>
            </div>
  
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Personal Information
            </h3>
  
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-34 gap-y-7">
              {[
                { label: "First Name", value: user.firstName },
                { label: "Last Name", value: user.lastName },
                { label: "Email", value: user.email },
                { label: "Phone", value: user.phone },
                { label: "Country", value: user.country },
                { label: "City", value: user.city },
                { label: "Postal Code", value: user.postalCode },
                { label: "Tax Id", value: user.taxId },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                  <div className="font-medium text-gray-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Right - Buttons */}
          <div className="lg:w-72 w-full flex flex-col justify-start lg:justify-center gap-4">
            <button
              className="w-full bg-white text-green-800 font-semibold text-lg py-4 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-transform duration-150 ease-in-out"
              onClick={handleEditProfile}
            >
              Edit Profile
            </button>
  
            <button
              className="w-full bg-white text-green-800 font-semibold text-lg py-4 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-transform duration-150 ease-in-out"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
  
            <button
              className="w-full bg-white text-green-800 font-semibold text-lg py-4 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-transform duration-150 ease-in-out"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}  

export default Profile;