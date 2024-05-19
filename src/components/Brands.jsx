import React from "react";
import "@/scroll.css";
const data = [
    { id: 1, url: "https://i.ibb.co/qdbSh8b/Ubiquiti-Logo.webp" },
    { id: 2, url: "https://i.ibb.co/jfVVND1/vmware.webp" },
    { id: 3, url: "https://i.ibb.co/sVVDrZf/microsoft-logo.webp" },
    { id: 4, url: "https://i.ibb.co/Czwx9KN/Mikrotik-logo.webp" },
    { id: 5, url: "https://i.ibb.co/84Xr9Lw/webdev8.webp" },
    { id: 6, url: "https://i.ibb.co/LgMTb1b/webdev9.webp" },
    { id: 7, url: "https://i.ibb.co/5GV6g6p/webdev10.webp" },
    { id: 8, url: "https://i.ibb.co/2W59kC7/react-logo-512.webp" },
    { id: 9, url: "https://i.ibb.co/wdb5x12/webdev7.webp" },
];

function Brands() {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold p-6">Our Brands</h1>
            <div className="scroll" style={{ "--time": "20s" }}>
                <div className="flex gap-2">
                    {data.map((item) => (
                        <div key={item.id} className="w-32 h-32">
                            <div className="w-full">
                                <img src={item.url} alt={`Brand ${item.id}`} className="imagen object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Brands;