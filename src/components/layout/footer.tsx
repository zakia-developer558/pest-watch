
import logo2 from '../../assets/landing-page/logo2.svg';
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Footer() {
   const isActive = (path:string) => location.pathname === path;
  return (
    <footer className="w-full mt-25 mx-[35px] py-8 relative">
      {/* Faded border effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      <div className="max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="text-gray-500 mb-4 md:mb-0">
            <img src={logo2} alt="logo2" />
          </div>
                 <nav className="hidden md:flex gap-4">
          <Button variant="link" className={`${isActive('/') ? 'text-gray-800' : 'text-gray-800'}`}>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="link" className={`${isActive('/faq') ? 'text-gray-800' : 'text-gray-800'}`}>
            <Link to="/faq">FAQs</Link>
          </Button>
          <Button variant="link" className={`${isActive('/terms-conditions') ? 'text-gray-800' : 'text-gray-800'}`}>
            <Link to="/terms-conditions">Terms and Conditions</Link>
          </Button>
        </nav>
        </div>
      </div>
    </footer>
  );
}