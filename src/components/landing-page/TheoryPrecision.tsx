export default function PestIntelligenceSection() {
  const features = [
    {
      title: "Predictive Mapping",
      description:
        "Tracks seasonal trends and climate shifts to anticipate emerging outbreaks across affected regions in advance.",
    },
    {
      title: "Crowdsourced Alerts",
      description:
        "Aggregates pest activity from verified pest control providers and household reporters, organized by area code and type.",
    },
    {
      title: "AI Verification Layer",
      description:
        "Filters invalid or duplicated reports using real-time anomaly detection to ensure reliable pest data before forecasting.",
    },
    {
      title: "Open Source Data Access",
      description:
        "Offers public dashboards, APIs, and downloadable datasets for researchers, councils, and app developers to integrate insights.",
    },
  ]

  return (
    <section className="bg-[#DDDDDD] py-16 px-4 w-full" style={{fontFamily:'Poppins'}}>
      <div className="max-w-6xl mx-auto" >
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Where Technology Meets Pest Intelligence</h2>

        {/* Description */}
        <p className="text-black mb-12 leading-relaxed max-w-4xl" style={{width:'629px'}}>
          PEST Watch applies machine learning to crowdsourced incident data and live environmental feeds to create
          Australia's first open pest forecast system. From mapping outbreaks to predicting the next risk zones, the
          platform enables smarter action across households, governments, and pest professionals.
        </p>

        {/* Features Grid */}
        <div className="max-w-3xl mx-auto">

           <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-[#78736F]">{feature.title}</h3>
              <p className="text-[#78736F] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        </div>
       
      </div>
    </section>
  )
}
