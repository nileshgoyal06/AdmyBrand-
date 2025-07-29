"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, BarChart3, Users, Zap, Target, Shield, Sparkles, TrendingUp } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Content Generation",
    description:
      "Create compelling ad copy, social media posts, and email campaigns with our advanced AI that understands your brand voice.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics Dashboard",
    description:
      "Get real-time insights into campaign performance with beautiful visualizations and actionable recommendations.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Audience Intelligence",
    description: "Discover and target your ideal customers with AI-driven audience analysis and behavioral insights.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Automated Campaign Optimization",
    description: "Let AI continuously optimize your campaigns for better performance, higher ROI, and reduced costs.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description:
      "Reach the right people at the right time with our sophisticated targeting algorithms and lookalike modeling.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Brand Safety & Compliance",
    description:
      "Ensure your campaigns meet all regulations and maintain brand safety with automated compliance checking.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Sparkles,
    title: "Creative Asset Generation",
    description:
      "Generate stunning visuals, videos, and creative assets tailored to your brand and campaign objectives.",
    gradient: "from-teal-500 to-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Predictive Performance",
    description: "Forecast campaign success before launch with our predictive analytics and performance modeling.",
    gradient: "from-violet-500 to-purple-500",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your marketing campaigns with the power of artificial
            intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full hover:scale-105 transition-transform duration-300 group">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
