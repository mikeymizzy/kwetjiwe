import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, TrendingUp } from "lucide-react"
import { BreadcrumbHero } from "@/components/breadcrumb-hero"

export default function ClientsPage() {
  return (
    <div className="pt-36 font-sans">
      <BreadcrumbHero
        title="Our Track Record"
        subtitle="We pride ourselves on the success of our clients across multiple sectors."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Clients" }]}
      />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-primary" size={32} />
              </div>
              <p className="text-4xl font-sans font-bold text-foreground mb-2">50+</p>
              <p className="text-muted-foreground font-sans">Clients Served</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-accent" size={32} />
              </div>
              <p className="text-4xl font-sans font-bold text-foreground mb-2">Multiple</p>
              <p className="text-muted-foreground font-sans">Sectors Covered</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="text-primary" size={32} />
              </div>
              <p className="text-4xl font-sans font-bold text-foreground mb-2">100%</p>
              <p className="text-muted-foreground font-sans">Commitment Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kwetjiwe Clients */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-12 bg-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground">
              Clients Under Kwetjiwe Consulting
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/luxury-hotel-safari.jpg"
                alt="Leopard Sands"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-3 w-fit">
                  2020
                </span>
                <h3 className="text-2xl font-sans font-bold mb-2 text-white">Leopard Sands Boutique Hotel</h3>
                <p className="text-sm text-white/80 mb-4 font-sans">Kruger National Park</p>
                <div className="h-px w-16 bg-primary mb-4" />
                <p className="text-sm text-white/90 leading-relaxed font-sans">
                  Raised capital and provided comprehensive transaction advisory services for luxury hospitality
                  venture.
                </p>
              </div>
            </div>

            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/restaurant-franchise-chicken.jpg"
                alt="Fine Prospects"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3 w-fit">
                  2021
                </span>
                <h3 className="text-2xl font-sans font-bold mb-2 text-white">Fine Prospects</h3>
                <p className="text-sm text-white/80 mb-4 font-sans">Galito's Franchise Start-up</p>
                <div className="h-px w-16 bg-accent mb-4" />
                <p className="text-sm text-white/90 leading-relaxed font-sans">
                  Capital raising and transaction advisory services for franchise establishment in the QSR sector.
                </p>
              </div>
            </div>

            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/student-accommodation-building.jpg"
                alt="Nyeti Group"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-3 w-fit">
                  2021
                </span>
                <h3 className="text-2xl font-sans font-bold mb-2 text-white">Nyeti Group</h3>
                <p className="text-sm text-white/80 mb-4 font-sans">Student Accommodation</p>
                <div className="h-px w-16 bg-primary mb-4" />
                <p className="text-sm text-white/90 leading-relaxed font-sans">
                  Acquisition and establishment advisory for student housing development project.
                </p>
              </div>
            </div>

            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/breadcrumb-background.jpg"
                alt="Xitshavani Lodge"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3 w-fit">
                  2024
                </span>
                <h3 className="text-2xl font-sans font-bold mb-2 text-white">Xitshavani Lodge</h3>
                <p className="text-sm text-white/80 mb-4 font-sans">Phalaborwa, Limpopo</p>
                <div className="h-px w-16 bg-accent mb-4" />
                <p className="text-sm text-white/90 leading-relaxed font-sans">
                  Supported luxury lodge project near Kruger National Park with capital raising and advisory for its
                  safari-style, modern build ahead of opening. Follow their social channels for launch specials and
                  booking updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BBT Clients */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-12 bg-accent" />
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground">Clients Under Bodibe Ba Thaba</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <div className="group relative p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-40 h-40 bg-white rounded-lg border border-border flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src="/tq.jpg"
                      alt="TQ IT Solutions"
                      width={160}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-sans text-foreground mb-2">TQ IT Solutions</h3>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold font-sans rounded-full mb-3 w-fit">
                      2017
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 font-sans">
                In partnership with Khuledu, performed comprehensive business development services to drive growth and
                operational efficiency in the IT sector.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary font-semibold font-sans">
                <span>Business Development</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-teal-50 to-white rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-40 h-40 bg-white rounded-lg border border-border flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src="/fish.jpg"
                      alt="Fish & Chip Co"
                      width={160}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-sans text-foreground mb-2">Fish & Chip Co</h3>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold font-sans rounded-full mb-3 w-fit">
                      Deal Facilitation
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 font-sans">
                Served as deal facilitator between Fish & Chip Co, NYDA, and Anglo-American Zimela Fund. Also
                facilitated a wholesale transaction for business expansion.
              </p>
              <div className="flex items-center gap-2 text-sm text-accent font-semibold font-sans">
                <span>Transaction Facilitation</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 md:col-span-2">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-40 h-40 bg-white rounded-lg border border-border flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src="/stenda.jpg"
                      alt="Stenda Trading"
                      width={160}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-sans text-foreground mb-2">Stenda Trading</h3>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold font-sans rounded-full mb-3 w-fit">
                      Advisory
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 font-sans">
                Provided comprehensive transaction advisory and capital raising consultancy services to support
                strategic business objectives and growth initiatives.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary font-semibold font-sans">
                <span>Capital Raising & Advisory</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/abstract-financial-graph-lines.jpg"
            alt="Success story background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-accent/90" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-white">Become Our Next Success Story</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-sans">
            Join our growing list of satisfied clients who have achieved their business goals with our support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary text-lg font-bold font-sans rounded-lg hover:bg-white/90 transition-all shadow-2xl"
          >
            Start Your Journey <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
