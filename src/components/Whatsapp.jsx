import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
    const phoneNumber = "254738552698";
    const message = "Hi I need help with your services";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const [showPulse, setShowPulse] = useState(false);

    useEffect(() => {
        let hideTimer = null;
        const intervalId = setInterval(() => {
            setShowPulse(true);
            hideTimer = setTimeout(() => setShowPulse(false), 1000);
        }, 7000);

        return () => {
            clearInterval(intervalId);
            if (hideTimer) clearTimeout(hideTimer);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 group">
            <div
                className={`absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm transition-all duration-200 ease-out origin-right whitespace-nowrap z-10 ${
                    showPulse
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-105"
                }`}
                aria-hidden={!showPulse}
            >
                Hey! Chat with us
            </div>

            <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-xl hover:scale-110 transition-all"
            >
                <FaWhatsapp size={29} />
            </a>
        </div>
    );
};

export default WhatsApp;