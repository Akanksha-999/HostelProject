import React from "react";
import { useState, useEffect } from "react";
const Information = () => {
    // Slideshow images
    const images = ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/509483210.jpg?k=eb9483e88bc17227c13a0b4c5a139bc15dc628d73b5044aed3ee0655b9c52cbe&o=&hp=1", "https://thumbs.dreamstime.com/b/typical-north-indian-thali-consisting-multiple-bowls-full-vegetables-curries-complete-meal-food-served-hostel-178707854.jpg", "https://content3.jdmagicbox.com/comp/vidisha/v3/9999p7592.7592.170921150159.a7v3/catalogue/madhav-udyan-bus-stand-vidisha-3u91z1zobp.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEdh40dWe5qn5Sq1MsSbra1GXZzBBc4e4gQ&s", "https://media-cdn.tripadvisor.com/media/photo-s/03/57/36/43/de-talak-hostel.jpg"];
        const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

    return (
<div className="max-w-5xl mx-auto p-8 space-y-10">
      
      <div className="flex flex-col items-start">
        <h2 className="text-3xl font-bold text-gray-900">Hostel Facilities</h2>
        <p className="text-lg text-gray-700 mt-4">
          Institute has Three Boys Hostels, having a total capacity of 325 and two Girls Hostels of 100 seats each.
          The Hostels are well equipped with adequate furniture and other living facilities like Aqua guard water purifying system and solar water heating system, geyser facility.
        </p>

        {/* Slideshow */}
        
        <div className="w-full flex justify-center mt-6">
      <div className="flex space-x-4">
        {/* First Image */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-1/2 h-64 object-cover rounded-lg shadow-xl transition-opacity duration-700"
        />
        
        {/* Second Image */}
        <img
          src={images[(currentIndex + 1) % images.length]} 
          alt={`Slide ${currentIndex + 2}`}
          className="w-1/2 h-64 object-cover rounded-lg shadow-xl transition-opacity duration-700"
        />
      </div>
    </div>
   </div>

      {/* Section 2: Text in Center, Image 3 on Left */}
      <div className="flex items-center space-x-6">
        <img src="https://img.freepik.com/premium-vector/dormitory-room-sharing-hostel-lodgers-cheerful-girlfriends-cartoon-characters-female-college-students-friends-sitting-bunk-bed-accommodation-rent-hotel-business_575670-1618.jpg" alt="Hostel Image 3" className="w-80 rounded-lg shadow-xl" />
        <p className="text-lg text-gray-700 max-w-2xl">
          Each hostel is having good facilities for recreation like an indoor games hall, reading room, and Television room.
          They also have their own power generation set in case of power failure, ensuring uninterrupted convenience for students.<br></br> <br></br>
          The inmates of the hostel live in a congenial and healthy atmosphere and abide by the rules to maintain strict discipline. 
           The mess of each hostel is run by students of the hostels under the guidance of respective Wardens.
        </p>
      </div>
    

<div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Girls Hostel</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Boys Hostel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Gajra Raje Hostel</td>
            <td className="border border-gray-300 px-4 py-2">Indira Gandhi Hostel</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Kalpana Chawla Hostel</td>
            <td className="border border-gray-300 px-4 py-2">Jawahar Lal Nehru Hostel</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Poly Hostel</td>
            <td className="border border-gray-300 px-4 py-2">Sir C.V. Raman Hostel</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">R.N. Tagore Hostel</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>


);
}

  export default Information;
  