import { Button } from "@/components/ui/button";
import logo from '../../assets/landing-page/Logo1.svg'
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full mx-[10px] mt-5 mb-5">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
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
        <nav className="hidden md:flex items-center gap-4">
          <Button variant="link" className="text-[#3BB44D]">
            <Link to="/">Home</Link>
          </Button>
           <Button variant="link" className="text-gray-800" asChild>
            <Link to="/faq">FAQ's</Link>
          </Button>
          <Button variant="link" className="text-gray-800">
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
        <div className={`
          fixed inset-0 bg-white z-40 transform transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Button 
              variant="link" 
              className="text-orange-500 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/">Home</Link>
            </Button>
            <Button 
              variant="link" 
              className="text-gray-800 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/faq">FAQ's</Link>
            </Button>
            <Button 
              variant="link" 
              className="text-gray-800 text-2xl"
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