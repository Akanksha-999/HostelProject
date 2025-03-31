import { useState, useEffect } from "react";
//  import { Card, CardContent } from "./components/ui/CardComponent";
import { motion } from "framer-motion";
import { FaUserGraduate, FaUserTie, FaBuilding, FaClipboardList, FaBed, FaEnvelopeOpenText, FaExclamationTriangle, FaUtensils, FaMapMarkerAlt, FaCamera } from "react-icons/fa";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Information from "./Information";
import AvailableRooms from "./AvailableRooms";
import './App.css';

const AnimatedText = ({ text }) => {
  return (
    <div className="flex justify-center text-4xl font-bold text-black-600">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
          className=  "text-4xl md:text-5xl font-bold text-black-500 mb-8"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

function App() {
  const [userType, setUserType] = useState(null);
  const [attendanceOption, setAttendanceOption] = useState(null);
  const [messOption, setMessOption] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (userType) {
      document.getElementById("dashboard").scrollIntoView({ behavior: "smooth" });
    }
  }, [userType]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // ✅ Keep user logged in across tabs
    }
  }, []);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [mobile, setMobile] = useState("");
const [address, setAddress] = useState("");
const [country, setCountry] = useState("");
const [state, setState] = useState("");
const [error, setError] = useState("");
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [showInfo, setShowInfo] = useState(false); // State to track visibility
const [showRooms, setShowRooms] = useState(false);
const handleAuth = async (e) => {
  e.preventDefault();
  try {
    const url = isLogin ? "http://localhost:5000/api/login" : "http://localhost:5000/api/register";
    const data = isLogin
      ? { email, password }
      : { name, email, password, mobile, address, country, state };

    const response = await axios.post(url, data);

    if (response.status === 200) {
      alert("Login Successful ! 😊");

      // Store token (optional)
      localStorage.setItem("token", response.data.token);
      // Update state to show dashboard
      setIsAuthenticated(true);
    }
  } catch (error) {
    setError(error.response?.data?.message || "Something went wrong");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-8">
    {/* <motion.h1 className="text-4xl font-bold text-center text-black-700 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      Hostel Management System
    </motion.h1> */}
    <div className=" flex items-center justify-center ">
      <AnimatedText text="Hostel Management System" />
    </div>
  

    <div className="flex flex-col items-center space-y-10 mb-10">
      <div className="bg-white hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer w-1/3" onClick={() => setUserType("student")}>
        <div className="flex flex-col items-center py-8">
          <FaUserGraduate size={50} className="text-blue-500" />
          <h2 className="text-xl font-bold mt-4 text-gray-700">Student</h2>
        </div>
      </div>
      
      <div className="bg-white hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer w-1/3" onClick={() => setUserType("employee")}>
        <div className="flex flex-col items-center py-8">
          <FaUserTie size={50} className="text-green-500" />
          <h2 className="text-xl font-bold mt-4 text-gray-700">Employee</h2>
        </div>
      </div>
      
      <div className="bg-white hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer w-1/3" onClick={() => setUserType("hostel")}>
        <div className="flex flex-col items-center py-8">
          <FaBuilding size={50} className="text-purple-500" />
          <h2 className="text-xl font-bold mt-4 text-gray-700">Hostel Details</h2>
        </div>
      </div>

    </div>

<div className="App">
      {/* Show Dashboard if authenticated */}
      {isAuthenticated ? (
        <div className="dashboard">
         <motion.h1
  className="bg-purple-100 text-orange-500 text-center font-bold py-3 px-4 rounded-lg shadow-md cursor-pointer glow-text"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  <h1>"स्वागतम्"सृष्टेः शान्तिः भवतु सर्वत्र ☺️</h1>
</motion.h1>
<h1 className="text-lg text-white-300  glow-text"><strong>WELCOME!!</strong> {email} </h1>
          <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            onClick={() => {
              setIsAuthenticated(false);
              setUserType(null);
              localStorage.removeItem("token"); // Logout
            }}
          >
            Logout
          </button>
        </div>
      ) : (
<>
{userType && (
  <motion.div id="dashboard" className="mt-8 p-6 bg-white rounded-lg shadow-lg h-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <div className="flex flex-col space-y-6"> 
      {(userType === "student" || userType === "employee") && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-96">
            <h2 className="text-2xl font-semibold text-blue-400">
              {isLogin ? "Login" : "Register"}
            </h2>
            <form className="mt-4" onSubmit={handleAuth}>
              {!isLogin && (
                <>
                  <input type="text" placeholder="Name" className="w-full p-2 mb-2 rounded bg-gray-700" value={name} onChange={(e) => setName(e.target.value)} />
                  <input type="text" placeholder="Mobile No." className="w-full p-2 mb-2 rounded bg-gray-700" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                  <input type="text" placeholder="Address" className="w-full p-2 mb-2 rounded bg-gray-700" value={address} onChange={(e) => setAddress(e.target.value)} />
                  <input type="text" placeholder="Country" className="w-full p-2 mb-2 rounded bg-gray-700" value={country} onChange={(e) => setCountry(e.target.value)} />
                  <input type="text" placeholder="State" className="w-full p-2 mb-2 rounded bg-gray-700" value={state} onChange={(e) => setState(e.target.value)} />
                </>
              )}
              <input type="email" placeholder="Email" className="w-full p-2 mb-2 rounded bg-gray-700" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" className="w-full p-2 mb-2 rounded bg-gray-700" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 py-2 mt-4">
                {isLogin ? "Proceed to Dashboard" : "Register"}
              </button>
            </form>
            <p className="mt-4 text-gray-300 text-center cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
            </p>
            <button className="mt-4 w-full bg-red-500 hover:bg-red-600 py-2" onClick={() => setUserType(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  </motion.div>
)}
</>
 )
 }
</div>


{userType && (
      <motion.div id="dashboard" className="mt-8 p-6 bg-white rounded-lg shadow-lg h-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{userType} Dashboard</h3>
        <div className="flex flex-col space-y-6"> 
          {userType !== "hostel" && (
            <>
              <div className="bg-blue-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer" onClick={() => setAttendanceOption(attendanceOption ? null : "attendance") }>
                <FaClipboardList size={40} className="text-purple-500" />
                <span className="text-lg font-semibold text-gray-700">Attendance</span>
              </div>
              {attendanceOption === "attendance" && (
                <>
                  <div className="bg-red-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span className="text-gray-700">GPS Attendance</span>
                  </div>
                  <div className="bg-blue-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer">
                    <FaCamera className="text-blue-500" />
                    <span className="text-gray-700">Face Recognition</span>
                  </div>
                </>
              )}
              <div className="bg-green-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4">
                <FaEnvelopeOpenText size={40} className="text-blue-500" />
                <span className="text-lg font-semibold text-gray-700">Leave Entry</span>
              </div>
              <div className="bg-yellow-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4">
                <FaBed size={40} className="text-green-500" />
                <span className="text-lg font-semibold text-gray-700">Room Details</span>
              </div>
              <div className="bg-red-200 hover:shadow-lg p-6 flex flex-col items-center space-y-4">
                <FaExclamationTriangle size={40} className="text-red-500" />
                <span className="text-lg font-semibold text-gray-700">Complaints</span>
              </div>
              <div className="bg-pink-200 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer" onClick={() => setMessOption(messOption ? null : "mess")}>
                <FaUtensils size={40} className="text-orange-500" />
                <span className="text-lg font-semibold text-gray-700">Mess</span>
              </div>
              {messOption === "mess" && (
                <>
                  <div className="bg-yellow-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer">
                    <span className="text-gray-700">Mess Details</span>
                  </div>
                  <div className="bg-pink-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer">
                    <span className="text-gray-700">Mess Bill (Paid/Unpaid)</span>
                  </div>
                  <div className="bg-red-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer">
                    <span className="text-gray-700">Last Day Notification</span>
                  </div>
                </>
              )}
            </>
          )}

    
{userType === "hostel" && (
            <>
              <div className="bg-blue-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor pointer"
              onClick={() => setShowRooms(!showRooms)}
              >
              <span className="text-lg font-semibold"> Rooms</span>
              </div>
              {showRooms && <AvailableRooms />}
              <div
              className="bg-yellow-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer"
              onClick={() => setShowInfo(!showInfo)} // Toggle visibility
              >
             <span className="text-lg font-semibold">Information</span>
            </div>
             {showInfo && <Information />}

    </>
          )}     
    
 </div>
</motion.div>
    )}
  </div>
  );
}

export default App;
