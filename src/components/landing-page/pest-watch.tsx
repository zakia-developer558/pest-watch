import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import search from '../../assets/landing-page/Icon1.svg'
import megaphone from '../../assets/landing-page/Icon2.svg'
import clock from '../../assets/landing-page/Icon3.svg'
 // or use regular img tag if not using Next.js

export default function ProtectCommunitiesSection() {
  const features = [
    {
      icon: search, // Remove the curly braces
      title: "Smarter Surveillance",
      description:
        "Continuously updates outbreak data and overlays it with environmental conditions to detect hotspots early.",
    },
    {
      icon: clock, // Remove the curly braces
      title: "Targeted Action Plans",
      description:
        "Enables pest companies and councils to plan site-specific responses based on AI-ranked risk severity and urgency.",
    },
    {
      icon: megaphone, // Remove the curly braces
      title: "Public Awareness Engine",
      description:
        "Keeps households informed with region-specific updates and prevention tips through email, SMS, or app notifications.",
    },
  ]

  return (
    <section className="bg-[#231F20] text-white py-16 px-4 w-full" style={{fontFamily:'Poppins'}}>
      <div className="max-w-6xl mx-auto">
        {/* Main Heading and Description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Built to Protect Communities Faster
          </h2>
          <p className="text-[#9B9996] max-w-4xl mx-auto leading-relaxed" style={{width:'667px'}}>
            PEST Watch connects live field data with predictive intelligence to reduce infestation risk, save resources,
            and support local decision-makers.
          </p>
        </div>

        {/* Features Grid */}
       <div className="grid md:grid-cols-3 gap-6">
  {features.map((feature, index) => (
    <Card key={index} className="border-0 bg-[#231F20] max-w-[300px] h-full">
      <CardHeader className="items-left space-y-4 pb-4"> {/* Added space-y-4 and pb-4 */}
        {/* Icon with consistent margin */}
        <div className="mb-4"> {/* Added margin-bottom */}
          <img
            src={feature.icon} 
            alt={feature.title}
            width={32}
            height={32}
            className="text-foreground"
          />
        </div>
        
        {/* Title */}
        <CardTitle className="text-white font-bold">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0"> {/* Removed top padding to control spacing */}
        {/* Description */}
        <CardDescription className="text-[#9B9996] -mt-4">{feature.description}</CardDescription>
      </CardContent>
    </Card>
  ))}
</div>
      </div>
    </section>
  )
}