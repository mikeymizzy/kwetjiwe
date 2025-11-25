import Link from "next/link"
import { ArrowRight, CheckCircle2, Briefcase, TrendingUp, FileText, Users, Target, BarChart } from "lucide-react"
import Image from "next/image"
import { BreadcrumbHero } from "@/components/breadcrumb-hero"

export default function ServicesPage() {
  return (
    <div className="pt-36 font-sans">
      <BreadcrumbHero
        title="Our Services"
        subtitle="Tailored solutions to bridge the gap between your vision and the capital needed to achieve it."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* Service 1: Business Solutions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                <Briefcase size={16} />
                Service 01
              </div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-foreground">Business Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-sans">
                We provide strategic guidance to help your business navigate challenges and seize opportunities. Our
                business solutions are designed to optimize performance and prepare your organization for sustainable
                growth.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Target className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-foreground mb-1">Business Development</h3>
                    <p className="text-sm text-muted-foreground font-sans">
                      Strategic planning and market positioning to drive growth and competitive advantage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <BarChart className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-foreground mb-1">Organizational Restructuring</h3>
                    <p className="text-sm text-muted-foreground font-sans">
                      Optimize your organizational structure for efficiency and scalability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Users className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-foreground mb-1">Executive Mentorship</h3>
                    <p className="text-sm text-muted-foreground font-sans">
                      One-on-one coaching to develop leadership capabilities and strategic thinking.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold font-sans rounded-lg hover:bg-primary/90 transition-all"
              >
                Discuss Your Needs <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/business-meeting-strategy-dark.jpg" alt="Business Solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Capital Raising */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image src="/financial-growth-chart-dark.jpg" alt="Capital Raising" fill className="object-cover" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6">
                <TrendingUp size={16} />
                Service 02
              </div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-foreground">
                Capital Raising Holistic Package
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-sans">
                Our comprehensive capital raising service is designed to take the burden off your shoulders. We handle
                the complexities of funding so you can focus on running your business.
              </p>

              <div className="grid gap-6">
                <div className="relative p-6 bg-white rounded-xl border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <FileText className="text-accent" size={16} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl font-bold mb-2 text-foreground">Preparation</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                        Drafting of business plans and financial projections aligned with funder expectations and
                        industry standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-6 bg-white rounded-xl border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="text-accent" size={16} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl font-bold mb-2 text-foreground">Due Diligence</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                        Conducting pre-due diligence on the transaction before submission to ensure complete readiness
                        and compliance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-6 bg-white rounded-xl border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <Users className="text-accent" size={16} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl font-bold mb-2 text-foreground">Facilitation</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                        Engaging with funders and facilitating the transaction until final approval and successful
                        closing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-6 bg-white rounded-xl border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <Target className="text-accent" size={16} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl font-bold mb-2 text-foreground">Specialized Support</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                        Tailored services for start-ups, acquisitions, expansions, and other complex financial
                        transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold font-sans rounded-lg hover:bg-accent/90 transition-all"
                >
                  Start Your Journey <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-foreground">Why Choose Kwetjiwe?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
              We don't just advise — we partner with you throughout your entire journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-sans font-bold mb-3 text-foreground">Proven Track Record</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Successfully facilitated numerous transactions across multiple sectors since 2020.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-sans font-bold mb-3 text-foreground">End-to-End Support</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                We walk with you from initial planning through final approval and beyond.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-sans font-bold mb-3 text-foreground">Deep Expertise</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Part of BODIBE BA THABA Holdings with extensive industry connections and knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/cta-services-background.jpg" alt="CTA background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-accent/95" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-white">Let's Discuss Your Needs</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-sans">
            Schedule a consultation to explore how we can help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary text-lg font-bold font-sans rounded-lg hover:bg-white/90 transition-all shadow-2xl"
          >
            Get Started Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
