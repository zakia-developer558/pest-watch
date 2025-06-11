import { siX, siFacebook, siYoutube } from "simple-icons/icons";
import logo2 from '../../assets/landing-page/logo2.svg';

export default function Footer() {
  return (
    <footer className="w-full mt-25 mx-[10px] py-8 relative">
      {/* Faded border effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            <img src={logo2} alt="logo2" />
          </div>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Twitter"
            >
              <img
                src={`data:image/svg+xml;base64,${btoa(siX.svg)}`}
                alt="Twitter"
                className="h-5 w-5"
              />
            </a>
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Facebook"
            >
              <img
                src={`data:image/svg+xml;base64,${btoa(siFacebook.svg)}`}
                alt="Facebook"
                className="h-5 w-5"
              />
            </a>
            <a
              href="https://youtube.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="YouTube"
            >
              <img
                src={`data:image/svg+xml;base64,${btoa(siYoutube.svg)}`}
                alt="YouTube"
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}