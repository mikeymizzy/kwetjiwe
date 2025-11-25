"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Briefcase, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Business Funding",
    subtitle: "Unlock Capital for Growth",
    description:
      "We connect you with the right funders and structure deals that get approved. Your growth partner from application to funding.",
    icon: TrendingUp,
    color: "from-accent/90 to-accent",
    backgroundImage: "/hero-business-funding.jpg",
  },
  {
    id: 2,
    title: "Advisory",
    subtitle: "Strategic Business Guidance",
    description:
      "Expert advisory services for complex transactions, acquisitions, and expansions. Navigate business challenges with confidence.",
    icon: Briefcase,
    color: "from-accent/90 to-accent",
    backgroundImage: "/hero-advisory.jpg",
  },
  {
    id: 3,
    title: "Consulting",
    subtitle: "Transform Your Operations",
    description:
      "Business development, restructuring, and executive mentorship. Optimize operations and build sustainable competitive advantages.",
    icon: Users,
    color: "from-accent/90 to-accent",
    backgroundImage: "/hero-consulting.jpg",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const CurrentIcon = slides[currentSlide].icon

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.backgroundImage || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            <div className="absolute inset-0 bg-black/60" />
            <div className={cn("absolute inset-0 bg-gradient-to-br", slide.color, "opacity-60")} />

            <div className="relative h-full flex items-center justify-center">
              <div className="container mx-auto px-6 text-center text-white">
                {/* Icon */}
                <div className="mb-8 flex justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center animate-in fade-in zoom-in duration-700">
                    <CurrentIcon size={48} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <p className="text-lg md:text-xl font-sans font-semibold uppercase tracking-wider mb-4 opacity-90">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold mb-6 tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl font-sans mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/services"
                      className="px-8 py-4 bg-white text-gray-900 font-sans font-bold rounded-lg hover:bg-white/90 transition-all text-lg shadow-2xl"
                    >
                      Explore Services
                    </Link>
                    <Link
                      href="/contact"
                      className="px-8 py-4 bg-transparent border-2 border-white text-white font-sans font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all text-lg"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide ? "bg-white w-10" : "bg-white/50 hover:bg-white/70",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
