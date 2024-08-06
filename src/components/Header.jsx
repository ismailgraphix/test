import React from 'react';
import logo from "../assets/logo.png"; 
import { FaSearch } from 'react-icons/fa';

export default function Header({ className, ...props }) {
    return (
        <div>
            <header {...props} className={`${className} bg-[#1A1A1A] py-4 px-6 z-20 relative`}>
                {/* Top section with logo and search */}
                <div className="flex items-center">
                    {/* Logo and Title container */}
                    <div className="flex-shrink-0 cursor-pointer flex items-center space-x-4">
                        
                        <img
                            src={logo}
                            alt="Primary Logo"
                            className="h-16 w-auto object-contain" 
                           
                        />
                        <h1 className="text-white text-lg font-rethink leading-tight" >
                            BAZE <br /> UNIVERSITY
                        </h1>
                    
                    </div>
                    
                    <div className="flex-grow flex items-center justify-between ml-8">
                        {/* Search Bar */}
                        <div className="relative flex-grow max-w-md mx-8">
                            <input
                                type="text"
                                name="Search"
                                placeholder="Search"
                                className="w-full h-10 px-4 rounded-md font-rethink border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4D4D4D]"
                            />
                            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 object-contain" />
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex gap-8 items-center font-rethink">
                            <div className="relative group">
                                <button className="text-white font-rethink hover:text-[#4D4D4D]">
                                    About Baze
                                </button>
                                <div className="absolute hidden group-hover:block mt-2 w-48 bg-white rounded-md shadow-lg z-30">
                                    <a href="#our-team" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Team</a>
                                    <a href="#our-mission" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Mission</a>
                                    <a href="#our-vision" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Vision</a>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className="text-white hover:text-[#4D4D4D]">
                                    Admissions
                                </button>
                                <div className="absolute hidden group-hover:block mt-2 w-48 bg-white rounded-md shadow-lg z-30">
                                    <a href="#admissions-team" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Admissions Team</a>
                                    <a href="#apply" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Apply</a>
                                    <a href="#requirements" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Requirements</a>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className="text-white hover:text-[#4D4D4D]">
                                    Academics
                                </button>
                                <div className="absolute hidden group-hover:block mt-2 w-48 bg-white rounded-md shadow-lg z-30">
                                    <a href="#academic-programs" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Programs</a>
                                    <a href="#faculty" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Faculty</a>
                                    <a href="#research" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Research</a>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className="text-white hover:text-[#4D4D4D]">
                                    Research
                                </button>
                                <div className="absolute hidden group-hover:block mt-2 w-48 bg-white rounded-md shadow-lg z-30">
                                    <a href="#research-teams" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Teams</a>
                                    <a href="#publications" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Publications</a>
                                    <a href="#projects" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Projects</a>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className="text-white hover:text-[#4D4D4D]">
                                    Resources
                                </button>
                                <div className="absolute hidden group-hover:block mt-2 w-48 bg-white rounded-md shadow-lg z-30">
                                    <a href="#library" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Library</a>
                                    <a href="#labs" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Labs</a>
                                    <a href="#facilities" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Facilities</a>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className="text-white hover:text-[#4D4D4D]">
                                    Portal
                                </button>
                                <div className="absolute hidden group-hover:block mt-2 w-48 bg-white rounded-md shadow-lg z-30">
                                    <a href="#student-portal" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Student Portal</a>
                                    <a href="#staff-portal" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Staff Portal</a>
                                    <a href="#alumni-portal" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Alumni Portal</a>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className="text-white hover:text-[blue-400]">
                                    Contact
                                </button>
                                <div className="absolute hidden group-hover:block mt-2 w-48 bg-white rounded-md shadow-lg z-30">
                                    <a href="#contact-us" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact Us</a>
                                    <a href="#location" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Location</a>
                                    <a href="#hours" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Hours</a>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="flex-shrink-0 ml-8">
                        <button  className="px-4 py-2 bg-[#4D4D4D] font-rethink text-white rounded-md hover:bg-[#d8d7d7] hover:text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#4D4D4D]">
                            <a href="https://learn.bazeuniversity.edu.ng/">Apply Now</a>
                            
                        </button>
                    </div>
                </div>
            </header>

            {/* Message Bar */}
            <div className="w-full bg-[#999999] py-2 z-10 relative">
                <p className="flex justify-center items-center !font-extrabold !text-white">
                    <span className='font-rethink font-light'>Admission for the September 2024 academic session is ongoing.&nbsp;</span>
                    <a href="https://learn.bazeuniversity.edu.ng/" className="underline font-rethink cursor-pointer">
                        Apply Now!
                    </a>
                </p>
            </div>
        </div>
    );
}
