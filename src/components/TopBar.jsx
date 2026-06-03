import React from "react";
import { Mail, Phone, Globe } from "lucide-react";

const TopBar = () => {
    return (
        <div className="w-full bg-slate-950 text-slate-200 text-xs sm:text-sm">
            <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">

                <div className="flex items-center gap-2 text-slate-300">
                    <Globe size={14} className="text-green-400"/>
                    <span>Building modern digital solutions</span>
                </div>

                <div className="flex items-center gap-5">


                    <a href="info@nexoshieldtech.co.ke"
                    className="flex items-center gap-2 hover:text-green-400 transition">

                    <Mail size = {14} />
                    <span className="hidden sm:inline">info@nexoshieldtech.co.ke</span>
                    </a>

                    <a href="tel: +254738552698"
                    className="flex items-center gap-2 hover:text-green-400 transition"
                    >
                        <Phone size={14}/>
                        <span className="hidden sm:inline">+254 738 552 698</span>
                        </a>
                </div>
            </div>
        </div>    
                    
    );
};

export default TopBar;