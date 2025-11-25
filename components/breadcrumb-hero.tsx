import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BreadcrumbHeroProps {
  title: string
  subtitle?: string
  breadcrumbs: { label: string; href?: string }[]
  backgroundImage?: string
}

export function BreadcrumbHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage = "/meaning.jpg",
}: BreadcrumbHeroProps) {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={backgroundImage || "/placeholder.svg"} alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/60 to-accent/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 mb-6 text-sm font-sans">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-accent transition-colors font-medium">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/70">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <ChevronRight size={16} className="text-white/50" />}
            </div>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 tracking-tight">{title}</h1>

        {/* Subtitle */}
        {subtitle && <p className="text-xl md:text-2xl font-sans opacity-90 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
