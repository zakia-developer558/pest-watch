
import { Button } from "@/components/ui/button";
import hero from '../../assets/landing-page/Image1.svg'
import pest from '../../assets/landing-page/Group.svg'

export const HeroSection = () => {
  return (
    <section className="min-h-screen  flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Illustration */}
        <div className="mb-8">
          <img
            src={hero}
            alt="Businessman with lightbulb and business charts illustration"
            width={1440}
            height={508}
            className="mx-auto"
           
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight" style={{fontFamily:'Poppins'}}> 
         Real-Time Pest Prediction <br/>
Across Australia
        </h1>

        {/* Description */}
        <p className="text-[#231F20] text-base md:text-[18px] max-w-3xl mx-auto mb-8 leading-relaxed" style={{fontFamily:'Poppins'}}>
          PEST Watch collects and verifies pest activity data from the public and pest control providers to build a nationwide AI-powered forecasting platform, keeping communities informed and enabling fast, proactive pest response in real time.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center">
  <img src={pest} alt="Pest" width={203.87} height={26.24} />
  <Button
          className="bg-[#3BB44D] w-[291.9px] h-[44.24px] text-white px-8 py-3 text-base font-semibold rounded-full -mt-1" style={{fontFamily:'Poppins'}}
        >
          Check Pest Risk In Your Area
        </Button>
</div>
        
      </div>
    </section>
  );
};