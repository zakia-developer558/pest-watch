import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import search from '../../assets/landing-page/Icon1.svg'
import megaphone from '../../assets/landing-page/Icon2.svg'
import clock from '../../assets/landing-page/Icon3.svg'

export default function ProtectCommunitiesSection() {
  const features = [
    {
      icon: search,
      title: "Smarter Surveillance",
      description:
        "Continuously updates outbreak data and overlays it with environmental conditions to detect hotspots early.",
    },
    {
      icon: clock,
      title: "Targeted Action Plans",
      description:
        "Enables pest companies and councils to plan site-specific responses based on AI-ranked risk severity and urgency.",
    },
    {
      icon: megaphone,
      title: "Public Awareness Engine",
      description:
        "Keeps households informed with region-specific updates and prevention tips through email, SMS, or app notifications.",
    },
  ]

  return (
    <section className="bg-[#231F20] text-white py-16 w-full" style={{fontFamily:'Poppins'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading and Description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Built to Protect Communities Faster
          </h2>
          <p className="text-[#9B9996] max-w-4xl mx-auto leading-relaxed">
            PEST Watch connects live field data with predictive intelligence to reduce infestation risk, save resources,
            and support local decision-makers.
          </p>
        </div>

        {/* Features Grid - Modified */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-[1200px] w-full justify-items-center">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-[#231F20] w-full max-w-[350px]">
                <CardHeader className="items-left space-y-4 pb-4">
                  <div className="mb-4">
                    <img
                      src={feature.icon} 
                      alt={feature.title}
                      width={56}
                      height={56}
                      className="text-foreground"
                    />
                  </div>
                  <CardTitle className="text-white font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-[#9B9996] -mt-4">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}