import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import LandingPage from "./pages/landing-page";
//import maskGroup from './assets/landing/Mask Group.png';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import TermsAndConditions from "./pages/terms-and-conditions";

// import FAQSection from "./pages/faq";
// import ContactPage from "./pages/contact-page";
// import TermsAndConditions from "./pages/terms-and-condition-page";
//import DashboardLayout from "@/components/layout/dashboardLayout";
//import DashboardLayout from "./components/layout/dashboardLayout";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="relative overflow-x-hidden">
        {/* Background elements remain the same */}
        {/* <img
          src={maskGroup}
          alt=""
          aria-hidden="true"
          className="hidden sm:block absolute left-0 top-0 w-full max-w-[1155px] h-[40vw] max-h-[678px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[678px] object-cover pointer-events-none select-none z-0"
          style={{ opacity: 0.5, transform: 'translateY(-80px)' }}
        /> */}
      
        <div
          className="block sm:hidden absolute left-0 w-full h-[320px] z-10 pointer-events-none select-none"
          style={{
            top: '60px',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottomRightRadius: '120px',
            borderBottomLeftRadius: '120px',
          }}
        />
        
        <div className="relative z-30">
          <Routes>
            {/* Public routes with header and footer */}
            <Route path="/" element={
              <>
                <Header /> 
                <LandingPage />
                <Footer />
              </>
            } />
            <Route path="/faq" element={
              <>
                <Header  />
                 <TermsAndConditions /> 
               
               
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Header  />
                {/* <ContactPage /> */}
               
                <Footer />
              </>
            } />
            <Route path="/" element={
              <>
                <Header  />
                {/* <FAQSection /> */}
                <Footer />
              </>
            } />
            <Route path="/sign-in" element={
              <>
                <Header  />
                {/* <Login /> */}
                <Footer />
              </>
            } />
            <Route path="/sign-up" element={
              <>
                <Header />
                {/* <GetForkSignup /> */}
                <Footer />
              </>
            } />
            <Route path="/process" element={
              <>
                <Header />
                {/* <CreatePage /> */}
                <Footer />
              </>
            } />
            <Route path="/create-agent" element={
              <>
                <Header  />
                {/* <CreateAgentPage /> */}
                <Footer />
              </>
            } />
            
            {/* Dashboard routes - no authentication yet */}
{/* <Route path="/dashboard" element={<DashboardLayout />}> */}
  {/* <Route index element={<DashboardHome />} />
  <Route path="Q&A" element={<CustomerQuestionsPage />} />
  <Route path="contacts" element={< ContactsPage/>} />
  <Route path="try-ai" element={< TryMyAI/>} />
  <Route path="business-profile" element={< BusinessProfilePage/>} />
  <Route path="appearance" element={< ConfigPage/>} />
  <Route path="billing" element={< SubscriptionPage/>} />
  <Route path="qualify-leads" element={< QualifyLeads/>} />
  <Route path="conversations" element={< ConversationPage/>} />
  <Route path="settings" element={< SettingsPage/>} />
  <Route path="menu-manager" element={< TrainingPage/>} />
  <Route path="other-data/review" element={< OtherDataPage/>} />
  <Route path="other-data/faqs" element={< OtherFAQPage/>} />
  <Route path="operational-data/rewards" element={< RewardPage/>} />
  <Route path="operational-data/reservation" element={< ReservationPage/>} />

<Route path="questions" element={< QuestionPage/>} /> */}










{/* 
</Route> */}
</Routes>
        </div>
      </div>

      {/* Mobile menu remains exactly the same */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/30 z-[100]"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          <div className="fixed inset-y-0 right-0 z-[101] w-[100%] max-w-[100%] sm:max-w-sm">
            <div className="h-[100vh] w-full bg-white shadow-xl flex flex-col">
              <div className="p-4 flex justify-end">
                <button type="button" className="p-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col px-6 py-6 space-y-8">
                <div className="flex flex-col space-y-6">
                  <Link to="/" className="text-2xl font-medium text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <Link
                    to="/faq"
                    className="text-2xl font-medium text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/terms-conditions"
                    className="text-2xl font-medium text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Terms and Conditions
                  </Link>
                  <Link
                    to="/contact"
                    className="text-2xl font-medium text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  {/* Add dashboard link to mobile menu */}
                  <Link
                    to="/dashboard"
                    className="text-2xl font-medium text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </div>

                <div className="mt-auto space-y-4">
                  <Link
                    to="/sign-in"
                    className="flex items-center justify-center w-full py-3 px-4 border border-[#ff6b1e] text-[#ff6b1e] rounded-md text-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Button
                    className="w-full py-6 bg-[#ff6b1e] hover:bg-[#eb5d25] text-white rounded-md text-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Router>
  );
};

export default App;