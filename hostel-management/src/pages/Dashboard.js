import { useState, useEffect } from "react";
//  import { Card, CardContent } from "./components/ui/CardComponent";
import { motion } from "framer-motion";
import { FaUserGraduate, FaUserTie, FaBuilding, FaClipboardList, FaBed, FaEnvelopeOpenText, FaExclamationTriangle, FaUtensils, FaMapMarkerAlt, FaCamera } from "react-icons/fa";

function Dashboard() {
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
        userType && (
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
                    <div className="bg-red-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4">
                      <FaExclamationTriangle size={40} className="text-red-500" />
                      <span className="text-lg font-semibold text-gray-700">Complaints</span>
                    </div>
                    <div className="bg-orange-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer" onClick={() => setMessOption(messOption ? null : "mess")}>
                      <FaUtensils size={40} className="text-orange-500" />
                      <span className="text-lg font-semibold text-gray-700">Mess</span>
                    </div>
                    {messOption === "mess" && (
                      <>
                        <div className="bg-orange-100 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer">
                          <span className="text-gray-700">Mess Details</span>
                        </div>
                        <div className="bg-orange-200 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer">
                          <span className="text-gray-700">Mess Bill (Paid/Unpaid)</span>
                        </div>
                        <div className="bg-orange-300 hover:shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer">
                          <span className="text-gray-700">Last Day Notification</span>
                        </div>
                      </>
                    )}
                  </>
                )}
      
          
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
    </motion.div>
        )
    
    );
}
