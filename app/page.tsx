"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Target,
  Brain,
  BarChart3,
  Users,
  Shield,
  Check,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Menu,
  X,
  TrendingUp,
  Rocket,
  Crown,
} from "lucide-react"
import { useState, useRef } from "react"
import { useInView } from "framer-motion"

// Enhanced Button Component with micro-animations
function Button({ children, className = "", variant = "default", size = "default", ...props }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold 
        transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
        shadow-lg hover:shadow-xl transform-gpu
        ${
          variant === "outline"
            ? "border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-white/5"
            : "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white shadow-purple-500/25"
        }
        ${size === "lg" ? "h-14 px-8 text-lg" : "h-12 px-6"}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Advanced Glass Card with hover effects
function GlassCard({ children, className = "", delay = 0, ...props }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 },
      }}
      className={`
        relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 
        backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl 
        hover:shadow-purple-500/10 transition-all duration-500 group
        before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br 
        before:from-purple-500/10 before:to-pink-500/10 before:opacity-0 
        hover:before:opacity-100 before:transition-opacity before:duration-500
        ${className}
      `}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

// Floating particles background
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

// Enhanced Navbar with scroll effects
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"])
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"])

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 w-full z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-10 w-10 text-purple-400" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ADmyBRAND AI
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {["Features", "Pricing", "About", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden md:block"
          >
            <Button className="relative overflow-hidden">
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get Started Free</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
            </Button>
          </motion.div>

          <motion.button
            className="md:hidden text-white p-2"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 overflow-hidden"
      >
        <div className="px-4 py-6 space-y-4">
          {["Features", "Pricing", "About", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white/80 hover:text-white transition-colors py-2 font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </motion.a>
          ))}
          <Button className="w-full mt-4">Get Started Free</Button>
        </div>
      </motion.div>
    </motion.nav>
  )
}

// Ultra-modern Hero Section
function HeroSection() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      <FloatingParticles />

      {/* Animated Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </motion.div>

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto text-center relative z-10">
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/30 mb-8"
            whileHover={{ scale: 1.05, y: -2 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.4)",
                "0 0 40px rgba(236, 72, 153, 0.4)",
                "0 0 20px rgba(168, 85, 247, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-purple-400 mr-3" />
            </motion.div>
            <span className="text-white/90 font-medium">🚀 Powered by Next-Gen AI Technology</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Transform Your
            <motion.span
              className="block bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Marketing Game
            </motion.span>
            <span className="block">with AI Magic ✨</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Experience the future of marketing with our revolutionary AI suite. Create stunning campaigns, analyze
            performance in real-time, and scale your business like never before.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <Button size="lg" className="group relative overflow-hidden">
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
            <span className="relative z-10 flex items-center">
              🚀 Start Your AI Journey
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <ArrowRight className="ml-3 h-6 w-6" />
              </motion.div>
            </span>
          </Button>

          <Button variant="outline" size="lg" className="group bg-transparent">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Play className="mr-3 h-6 w-6" />
            </motion.div>
            Watch Live Demo
          </Button>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              desc: "Deploy campaigns in seconds",
              color: "from-yellow-400 to-orange-500",
            },
            {
              icon: Target,
              title: "Precision AI",
              desc: "99.9% accuracy targeting",
              color: "from-green-400 to-emerald-500",
            },
            {
              icon: TrendingUp,
              title: "10x Growth",
              desc: "Average ROI increase",
              color: "from-blue-400 to-purple-500",
            },
          ].map((feature, index) => (
            <GlassCard key={index} delay={index * 0.2} className="p-8 text-center group">
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mx-auto mb-4`}
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.desc}</p>
            </GlassCard>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Advanced Features Section
function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Brain,
      title: "AI Content Wizard",
      description:
        "Generate viral-worthy content that converts with our advanced neural networks trained on billions of successful campaigns.",
      gradient: "from-purple-500 to-pink-500",
      stats: "500M+ words generated",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Get instant insights with beautiful dashboards that update in real-time. Make data-driven decisions faster than ever.",
      gradient: "from-blue-500 to-cyan-500",
      stats: "99.9% uptime guaranteed",
    },
    {
      icon: Users,
      title: "Audience Intelligence",
      description:
        "Discover hidden customer segments and predict behavior patterns with our advanced AI audience analysis engine.",
      gradient: "from-green-500 to-emerald-500",
      stats: "10M+ profiles analyzed",
    },
    {
      icon: Zap,
      title: "Auto-Optimization",
      description:
        "Let AI continuously optimize your campaigns 24/7. Improve performance while you sleep with smart automation.",
      gradient: "from-yellow-500 to-orange-500",
      stats: "Average 300% ROI boost",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Reach exactly the right people at the perfect moment with our quantum-powered targeting algorithms.",
      gradient: "from-red-500 to-pink-500",
      stats: "99.7% targeting accuracy",
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description:
        "Keep your brand safe with AI-powered compliance monitoring and automatic risk detection across all channels.",
      gradient: "from-indigo-500 to-purple-500",
      stats: "Zero compliance issues",
    },
  ]

  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <FloatingParticles />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="text-6xl">🚀</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Supercharge Your
            <motion.span
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Marketing Arsenal
            </motion.span>
          </h2>

          <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Unlock the full potential of AI-powered marketing with features that feel like magic ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <GlassCard className="p-8 h-full group cursor-pointer">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 relative overflow-hidden`}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <feature.icon className="w-8 h-8 text-white relative z-10" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-white/70 text-lg leading-relaxed mb-4">{feature.description}</p>

                <motion.div
                  className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.stats}
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Ultra-Modern Pricing Section
function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isAnnual, setIsAnnual] = useState(true)

  const pricingPlans = [
    {
      name: "Starter",
      icon: Rocket,
      price: 29,
      originalPrice: 49,
      description: "Perfect for ambitious startups",
      features: [
        "🚀 Up to 10 AI campaigns",
        "🎯 Smart content generation",
        "📊 Basic analytics dashboard",
        "💬 Community support",
        "☁️ 10GB cloud storage",
        "🎨 50+ premium templates",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      icon: Crown,
      price: 79,
      originalPrice: 129,
      description: "For growing businesses & agencies",
      features: [
        "⚡ Unlimited AI campaigns",
        "🧠 Advanced AI features",
        "📈 Real-time analytics",
        "🎯 Priority support",
        "☁️ 100GB cloud storage",
        "🎨 Premium templates",
        "🔬 A/B testing suite",
        "🔗 Custom integrations",
        "🛡️ Advanced security",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      icon: Sparkles,
      price: 199,
      originalPrice: 299,
      description: "For large-scale operations",
      features: [
        "🌟 Everything in Professional",
        "🏷️ White-label solution",
        "👨‍💼 Dedicated success manager",
        "🤖 Custom AI training",
        "☁️ Unlimited storage",
        "🔒 Enterprise security",
        "🔌 Full API access",
        "📊 Custom reporting",
        "🌍 Multi-region deployment",
      ],
      popular: false,
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <FloatingParticles />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="text-6xl">💎</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Choose Your
            <motion.span
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Success Plan
            </motion.span>
          </h2>

          <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-12">
            Start your AI marketing revolution today. All plans include our core magic ✨
          </p>

          {/* Billing Toggle */}
          <motion.div
            className="flex items-center justify-center mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3 }}
          >
            <span className={`mr-4 text-lg font-medium ${!isAnnual ? "text-white" : "text-white/60"}`}>Monthly</span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg"
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`ml-4 text-lg font-medium ${isAnnual ? "text-white" : "text-white/60"}`}>
              Annual
              <motion.span
                className="ml-2 text-green-400 text-sm font-bold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                (Save 40% 🎉)
              </motion.span>
            </span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative ${plan.popular ? "scale-105 z-10" : ""}`}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🔥 Most Popular
                  </div>
                </motion.div>
              )}

              <GlassCard
                className={`p-8 h-full relative overflow-hidden ${plan.popular ? "border-purple-500/50 bg-gradient-to-br from-white/20 to-white/5" : ""}`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <motion.div
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${plan.color} p-5 mx-auto mb-6`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <plan.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3 className="text-3xl font-black text-white mb-2">{plan.name}</h3>
                    <p className="text-white/70 mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-2xl text-white/60 line-through">
                          ${isAnnual ? Math.round(plan.originalPrice * 0.6) : plan.originalPrice}
                        </span>
                        <motion.span
                          className="text-5xl font-black text-white"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          ${isAnnual ? Math.round(plan.price * 0.6) : plan.price}
                        </motion.span>
                      </div>
                      <span className="text-white/60">/month</span>
                      {isAnnual && (
                        <motion.div
                          className="text-green-400 text-sm font-bold mt-1"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          💰 Save ${(plan.originalPrice - plan.price) * 12}/year
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-white/80"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                      >
                        <motion.div whileHover={{ scale: 1.2, rotate: 360 }} className="mr-3">
                          <Check className="w-5 h-5 text-green-400" />
                        </motion.div>
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full relative overflow-hidden ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} hover:shadow-2xl hover:shadow-purple-500/25`
                        : "bg-white/10 hover:bg-white/20 border-2 border-white/30"
                    }`}
                    size="lg"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 font-bold">
                      {plan.name === "Enterprise" ? "🚀 Contact Sales" : "✨ Start Free Trial"}
                    </span>
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-4">Trusted by 50,000+ businesses worldwide</p>
          <div className="flex justify-center items-center space-x-8">
            {[
              { label: "🚀 Startup", color: "text-pink-400" },
              { label: "🏢 Enterprise", color: "text-blue-400" },
              { label: "🎯 Agency", color: "text-red-400" },
              { label: "💼 SMB", color: "text-yellow-400" },
            ].map((company, index) => (
              <motion.span
                key={index}
                className={`text-2xl font-semibold ${company.color}`}
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                {company.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Footer
function Footer() {
  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <FloatingParticles />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <motion.div className="flex items-center space-x-3 mb-6" whileHover={{ scale: 1.05 }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="h-10 w-10 text-purple-400" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ADmyBRAND AI
              </span>
            </motion.div>

            <p className="text-white/70 mb-8 max-w-md text-lg leading-relaxed">
              Revolutionizing marketing with AI magic. Join the future of intelligent business growth. ✨
            </p>

            <div className="flex space-x-4">
              {[
                { icon: Twitter, color: "hover:text-blue-400" },
                { icon: Linkedin, color: "hover:text-blue-600" },
                { icon: Github, color: "hover:text-gray-400" },
                { icon: Mail, color: "hover:text-green-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Product",
              links: ["🚀 Features", "💎 Pricing", "🔌 API", "🔗 Integrations", "📚 Documentation"],
            },
            {
              title: "Company",
              links: ["🏢 About", "📝 Blog", "💼 Careers", "📞 Contact", "🔒 Privacy"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-bold mb-6 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <motion.a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white/60 text-sm mb-4 md:mb-0">© 2024 ADmyBRAND AI Suite. Crafted with ❤️ and AI magic.</p>
          <div className="flex space-x-6">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 via-slate-800 to-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Global Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.2, 0.9, 0.2],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
      </div>

      <Navbar />
      <main className="relative">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
