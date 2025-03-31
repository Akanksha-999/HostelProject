import { useState, useEffect } from "react";
//  import { Card, CardContent } from "./components/ui/CardComponent";
import { motion } from "framer-motion";
import { FaUserGraduate, FaUserTie, FaBuilding, FaClipboardList, FaBed, FaEnvelopeOpenText, FaExclamationTriangle, FaUtensils, FaMapMarkerAlt, FaCamera } from "react-icons/fa";

function Home() {
    const [userType, setUserType] = useState(null);
    const [attendanceOption, setAttendanceOption] = useState(null);
    const [messOption, setMessOption] = useState(null);
    const [isLogin, setIsLogin] = useState(true);
  
    useEffect(() => {
      if (userType) {
        document.getElementById("dashboard").scrollIntoView({ behavior: "smooth" });
      }
    }, [userType]);
    return(
<div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-8">
    <motion.h1 className="text-4xl font-bold text-center text-black-700 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      Hostel Management System
    </motion.h1>
    
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
    {userType === "hostel" && (
            <>
              <div className="bg-blue-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4">
                <span className="text-lg font-semibold">Available Rooms</span>
              </div>
              <div className="bg-yellow-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4">
                <span className="text-lg font-semibold">Total Employees</span>
              </div>
            </>
          )}     
    
 </div>

    );
}
  
