"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const faqs = [
  {
    question: "How does ADmyBRAND AI generate content?",
    answer:
      "Our AI uses advanced natural language processing and machine learning models trained on millions of high-performing marketing campaigns. It analyzes your brand voice, target audience, and campaign objectives to generate personalized, engaging content that resonates with your customers.",
  },
  {
    question: "Can I integrate ADmyBRAND AI with my existing marketing tools?",
    answer:
      "We offer seamless integrations with over 50+ popular marketing platforms including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows for custom integrations with your proprietary systems.",
  },
  {
    question: "How accurate are the predictive analytics?",
    answer:
      "Our predictive models achieve 85-92% accuracy in forecasting campaign performance. We continuously improve our algorithms using real campaign data and machine learning techniques. The accuracy increases as the system learns more about your specific audience and industry.",
  },
  {
    question: "Is my data secure with ADmyBRAND AI?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and maintain SOC 2 Type II certification. Your data is never shared with third parties and is stored in secure, geographically distributed data centers.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including 24/7 chat support, detailed documentation, video tutorials, and webinar training sessions. Professional and Enterprise plans include priority support and dedicated account managers.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you'll retain access to all your data and campaigns.",
  },
  {
    question: "Do you offer custom AI training for enterprise clients?",
    answer:
      "Yes! Enterprise clients can access custom AI training services where we fine-tune our models specifically for your industry, brand voice, and unique requirements. This typically improves performance by 15-25% compared to our standard models.",
  },
  {
    question: "How quickly can I see results?",
    answer:
      "Most customers see improvements in their campaign performance within the first week of using ADmyBRAND AI. Significant results, including increased ROI and engagement rates, are typically observed within 2-4 weeks as the AI learns and optimizes your campaigns.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Questions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get answers to the most common questions about ADmyBRAND AI Suite and how it can transform your marketing
            efforts.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/70 transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
