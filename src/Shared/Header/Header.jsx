import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Using react-icons for menu icon

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div>
            <nav className="bg-blue-700 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-lg font-semibold">ASDL</Link>
                    
                    {/* Menu icon for small screens */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} aria-label="Toggle menu">
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                    
                    {/* Links for medium and large screens */}
                    <div className="hidden md:flex space-x-4">
                        <Link to="/about" className="hover:underline">About Us</Link>
                        <Link to="/services" className="hover:underline">Services</Link>
                        <Link to="/subsidiaries" className="hover:underline">Subsidiaries</Link>
                        <Link to="/careers" className="hover:underline">Careers</Link>
                        <Link to="/clients" className="hover:underline">Clients</Link>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                    </div>
                </div>
                
                {/* Dropdown menu for small screens */}
                {isOpen && (
                    <div className="md:hidden bg-blue-700 text-white space-y-2 p-4">
                        <Link to="/about" className="block hover:underline" onClick={toggleMenu}>About Us</Link>
                        <Link to="/services" className="block hover:underline" onClick={toggleMenu}>Services</Link>
                        <Link to="/subsidiaries" className="block hover:underline" onClick={toggleMenu}>Subsidiaries</Link>
                        <Link to="/careers" className="block hover:underline" onClick={toggleMenu}>Careers</Link>
                        <Link to="/clients" className="block hover:underline" onClick={toggleMenu}>Clients</Link>
                        <Link to="/contact" className="block hover:underline" onClick={toggleMenu}>Contact</Link>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;
 