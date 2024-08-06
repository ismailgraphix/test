import React from 'react';
import logo  from "../assets/logo.png"
import { FaFacebook, FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer({ ...props }) {
    return (
        <footer {...props} className={`${props.className} bg-white py-10 font-rethink`}>
            <div className="container mx-auto flex flex-col gap-10">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row gap-10">
                    {/* University Info */}
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="flex items-center gap-4">
                            {/* Logo and Heading */}
                            <div className="flex-shrink-0">
                                <img src={logo} alt="Footer Logo" className="h-16 w-auto object-contain" />
                     
                            </div>
                        </div>
                        <p className="text-gray-700">
                            Baze University, Abuja
                            <br />
                            Plot 686 Cadastral Zone C00
                            <br />
                            Behind National Judicial Institute, Kuchigoro
                            <br />
                            Jabi, Abuja
                        </p>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="h-4 w-4 text-gray-500" />
                            <p className="text-gray-700">info@bazeuniversity.edu.ng</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhone className="h-4 w-4 text-gray-500" />
                            <p className="text-gray-700">+234 9053374375</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex-1 flex flex-col gap-5">
                        <h2 className="text-xl font-bold text-gray-900">Quick Links</h2>
                        <ul className="flex flex-col gap-2">
                            <li><a href="/" className="text-[#4D4D4D] hover:text-black">About Baze</a></li>
                            <li><a href="/" className="text-[#4D4D4D] hover:hover:text-black">Our Campus</a></li>
                            <li><a href="/" className="text-[#4D4D4D] hover:hover:text-black">Events</a></li>
                            <li><a href="/" className="text-[#4D4D4D] hover:hover:text-black">News</a></li>
                            <li><a href="/" className="text-[#4D4D4D] hover:hover:text-black">Career</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="flex-1 flex flex-col gap-5">
                        <h2 className="text-xl font-bold text-gray-900">Resources</h2>
                        <ul className="flex flex-col gap-2">
                            <li><a href="/" className="text-[#4D4D4D] hover:hover:text-black">Baze Panaroma</a></li>
                            <li><a href="/" className="text-[#4D4D4D] hover:hover:text-black">Publications</a></li>
                            <li><a href="/" className="text-[#4D4D4D] hover:hover:text-black">Baze Brochure</a></li>
                            <li><a href="/" className="text-[#4D4D4D] hover:hover:text-black">ITR & Newsletter</a></li>
                        </ul>
                    </div>

                    {/* Directorete & Units */}
                    <div className="flex-1 flex flex-col gap-5">
                        <h2 className="text-xl font-bold text-gray-900">Directorate & Units</h2>
                        <ul className="flex flex-col gap-2">
                            <li><a href="/" className="text-[#4D4D4D] hover:hover:text-black">IT, Research and Innovation Office</a></li>
                            <li><a href="/" className="text-[#4D4D4D] hover:hover:text-black">Directorate of Strategy & Special Duties</a></li>
                            <li><a href="/" className="text-[#4D4D4D] hover:hover:text-black">Directorate of Security Services</a></li>
                            <li><a href="/" className="text-[#4D4D4D] hover:hover:text-black">Student Support Unit</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-300 pt-5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                        <div className="flex items-center gap-2 text-gray-600">
                            <p>&copy; 2024 Baze University. All Rights Reserved.</p>
                        </div>
                        <div className="flex gap-4">
                            <a href="/" className="text-gray-600 hover:text-[#4D4D4D]">
                                <FaFacebook size={24} />
                            </a>
                            <a href="/" className="text-gray-600 hover:text-[#4D4D4D]">
                                <FaTwitter size={24} />
                            </a>
                            <a href="/" className="text-gray-600 hover:text-[#4D4D4D]">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="/" className="text-gray-600 hover:text-[#4D4D4D]">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <a href="/" className="text-gray-600 hover:hover:text-black">Privacy Policy</a>
                            <a href="/" className="text-gray-600 hover:hover:text-black">Accessibility Policy</a>
                            <a href="/" className="text-gray-600 hover:hover:text-black">Disclaimer</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
