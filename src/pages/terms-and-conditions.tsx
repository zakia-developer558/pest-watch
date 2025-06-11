import { Button } from "@/components/ui/button"

export default function FAQSection() {
  const faqs = [
    {
      question: "Does Ant Wealth manage investments directly?",
      answer:
        "No. Ant Wealth does not trade, manage, or advise on any investments internally. All trading and execution occurs externally through arms-length third-party services. The LLC is strictly a passive holder of family-owned capital.",
    },
    {
      question: "Can I invest in Ant Wealth?",
      answer:
        "No. Ant Wealth is a closed family holding company. It does not solicit or accept external funds or partners of any kind. It exists solely to organize and passively manage internal family assets.",
    },
    {
      question: "Can I control what offers are shown?",
      answer:
        "Absolutely. While Purr AI recommends optimal timing, you retain full control over which offers, discounts, and messages get shown. Think of it as smart delivery—not a rule engine.",
    },
    {
      question: "Who operates the investment strategies?",
      answer:
        "Ant Wealth does not operate any strategies itself. Trading and asset management is contracted to external providers under formal agreements. The LLC only retains ownership of the underlying capital.",
    },
    {
      question: "Is Ant Wealth registered as an advisor?",
      answer:
        "No. Ant Wealth is not an RIA or financial advisor. It is not registered to manage money or provide investment services to others. It is a passive legal entity with no advisory function.",
    },
  ]

  return (
    <section className=" py-16 px-4">
      <div className="max-w-4xl mx-auto" style={{marginLeft:'100px' , fontFamily:'Poppins'}}>
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h2>

        {/* FAQ Items */}
        <div className="space-y-8 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {index + 1}. {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="bg-[#F9FAFB] rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We're here to help. Check out our contact us or reach out to our support team anytime—we're always ready to
            assist you
          </p>
          <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2">Contact Support</Button>
        </div>
      </div>
    </section>
  )
}
