import { Button } from "@/components/ui/button";
import logo from '../../assets/landing-page/Logo1.svg'
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Helper function to determine if a path is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full mt-5 mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Button variant="ghost" className="p-0 hover:bg-transparent">
          <img 
            src={logo}
            alt="The ant design logo" 
            width={120} 
            height={60} 
            className="h-auto" 
          />
        </Button>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="link" className={`${isActive('/') ? 'text-[#3BB44D]' : 'text-gray-800'}`}>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="link" className={`${isActive('/faq') ? 'text-[#3BB44D]' : 'text-gray-800'}`}>
            <Link to="/faq">FAQs</Link>
          </Button>
          <Button variant="link" className={`${isActive('/terms-conditions') ? 'text-[#3BB44D]' : 'text-gray-800'}`}>
            <Link to="/terms-conditions">Terms and Conditions</Link>
          </Button>
        </nav>

        {/* Mobile menu button - visible only on mobile */}
        <Button 
          variant="ghost" 
          className="md:hidden p-2 z-50" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile drawer - full screen overlay */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Button 
              variant="link" 
              className={`text-2xl ${isActive('/') ? 'text-[#3BB44D]' : 'text-gray-800'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/">Home</Link>
            </Button>
            <Button 
              variant="link" 
              className={`text-2xl ${isActive('/faq') ? 'text-[#3BB44D]' : 'text-gray-800'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/faq">FAQ's</Link>
            </Button>
            <Button 
              variant="link" 
              className={`text-2xl ${isActive('/terms-conditions') ? 'text-[#3BB44D]' : 'text-gray-800'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/terms-conditions">Terms and Conditions</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}