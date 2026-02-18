"use client";

import Image from "next/image";
import whatsapp from "../assets/whatsapp.webp";


const Whatsapp = () => {
    const handleClick = () => {
        window.open("https://api.whatsapp.com/send?phone=+916396787418&text=Hello, I would like to inquire about your services.", "_blank");
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button onClick={handleClick} className="bg-green-500 rounded-full p-3 shadow-lg hover:shadow-xl transition duration-300">
                <Image src={whatsapp} alt="WhatsApp" className="w-10 h-10" />
            </button>
        </div>
    );
};

export default Whatsapp;