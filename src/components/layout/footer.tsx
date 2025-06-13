import logo2 from '../../assets/landing-page/logo2.svg';
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Footer() {
   const isActive = (path:string) => location.pathname === path;
  return (
    <footer className="w-full mt-16 mx-auto py-8">
      {/* Faded border effect */}
      <div className="top-0 left-0 mx-auto right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            <img src={logo2} alt="logo2" className="h-8" />
          </div>
          <nav className="hidden md:flex gap-6">
            <Button variant="link" className={`${isActive('/') ? 'text-gray-800' : 'text-gray-800'} hover:text-gray-600`}>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="link" className={`${isActive('/faq') ? 'text-gray-800' : 'text-gray-800'} hover:text-gray-600`}>
              <Link to="/faq">FAQs</Link>
            </Button>
            <Button variant="link" className={`${isActive('/terms-conditions') ? 'text-gray-800' : 'text-gray-800'} hover:text-gray-600`}>
              <Link to="/terms-conditions">Terms and Conditions</Link>
            </Button>
          </nav>
        </div>
      </div>
    </footer>
  );
}