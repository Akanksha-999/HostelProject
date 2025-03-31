import React from "react";

const AvailableRooms = () => {
  const roomsData = [
    {
      type: "Single",
      totalRooms: 20,
      
      block: "A Block",
      attachedBathroom: "Yes",
      furniture: "Bed, Table",
      ac: "No",
      wifi: "Yes",
      powerBackup: "Yes",
      anuallyFee: "₹39,500",
      employees: "2 (Ishaan, Sharad, Misha)",
    },
    {
      type: "Double",
      totalRooms: 15,
      
      block: "B Block",
      attachedBathroom: "No",
      furniture: "Bed, Chair",
      ac: "Yes",
      wifi: "Yes",
      powerBackup: "Yes",
      anuallyFee: "₹35,500",
      employees: "1 (Devansh)",
    },
    {
      type: "Triple",
      totalRooms: 10,
      
      block: "C Block",
      attachedBathroom: "Yes",
      furniture: "Bed, Wardrobe",
      ac: "No",
      wifi: "No",
      powerBackup: "No",
      anuallyFee: "₹28,500",
      employees: "3 (Ishita, Neha, Karan, Arjun)",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100 border-b">
            <tr>
              {[
                "Room Type",
                "Total Rooms",
               
                "Hostel Block",
                "Attached Bathroom",
                "Furniture",
                "AC",
                "Wi-Fi",
                "Power Backup",
                "Anually Fee",
                "Employees Assigned",
              ].map((header, index) => (
                <th
                  key={index}
                  className="text-left p-3 text-gray-700 font-semibold border"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roomsData.map((room, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{room.type}</td>
                <td className="p-3">{room.totalRooms}</td>
                
                <td className="p-3">{room.block}</td>
                <td className="p-3">{room.attachedBathroom}</td>
                <td className="p-3">{room.furniture}</td>
                <td className="p-3">{room.ac}</td>
                <td className="p-3">{room.wifi}</td>
                <td className="p-3">{room.powerBackup}</td>
                <td className="p-3">{room.anuallyFee}</td>
                <td className="p-3">{room.employees}</td>
              </tr>
            ))}
          </tbody>
        </table>

        

      </div>
    </div>
  );
};

export default AvailableRooms;
