"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "ADmyBRAND AI has completely transformed our marketing strategy. We've seen a 300% increase in engagement and our ROI has never been better. The AI-generated content is indistinguishable from our best copywriters.",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupBoost",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "As a startup, we needed to move fast and efficiently. ADmyBRAND AI allowed us to scale our marketing efforts without hiring a large team. The automation features are incredible and save us hours every day.",
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketing Manager",
    company: "GrowthLabs",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "The predictive analytics feature helped us identify our best-performing campaigns before we even launched them. We've reduced our ad spend by 40% while increasing conversions by 250%. Simply amazing!",
  },
  {
    name: "David Thompson",
    role: "Brand Manager",
    company: "InnovateCorp",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "The creative asset generation is mind-blowing. We can now produce high-quality visuals and copy in minutes instead of days. Our creative team can focus on strategy while AI handles the execution.",
  },
  {
    name: "Lisa Park",
    role: "Marketing VP",
    company: "ScaleUp Solutions",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "ADmyBRAND AI's audience intelligence helped us discover customer segments we never knew existed. Our targeting is now laser-focused and our campaigns perform better than ever before.",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-2 border-white/20"
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-white/70">{testimonials[currentIndex].role}</div>
                    <div className="text-purple-400 text-sm">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-purple-400" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
