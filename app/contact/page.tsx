import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { BreadcrumbHero } from "@/components/breadcrumb-hero"

export default function ContactPage() {
  return (
    <div className="pt-36 min-h-screen font-sans">
      <BreadcrumbHero
        title="Contact Us"
        subtitle="Ready to discuss your business needs? We're here to help you bridge the gap to capital."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-8 text-foreground">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-sans">
                Whether you're looking to raise capital, restructure your business, or explore strategic opportunities,
                our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-6 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold mb-2 text-foreground">Visit Our Office</h3>
                    <p className="text-muted-foreground leading-relaxed font-sans">
                      5th Floor, Bloukrans Building
                      <br />
                      Lynnwood Bridge, Pretoria, 0081
                      <br />
                      South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold mb-2 text-foreground">Call Us</h3>
                    <p className="text-muted-foreground font-sans">
                      <a href="tel:+27121400915" className="hover:text-accent transition-colors">
                        +27 12 140 0915
                      </a>
                      <br />
                      <a href="tel:+27798891233" className="hover:text-accent transition-colors">
                        +27 79 889 1233
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold mb-2 text-foreground">Email Us</h3>
                    <p className="text-muted-foreground font-sans">
                      <a href="mailto:bodibe@kwetjiwe.co.za" className="hover:text-primary transition-colors">
                        bodibe@kwetjiwe.co.za
                      </a>
                      <br />
                      <a href="mailto:bodibe@bodibebathaba.co.za" className="hover:text-primary transition-colors">
                        bodibe@bodibebathaba.co.za
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold mb-2 text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground font-sans">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-primary to-accent p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl h-full flex flex-col">
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl">
                <h3 className="text-2xl font-sans font-bold text-white mb-4">Send Us a Message</h3>
                <p className="text-white/80 font-sans mb-6">
                  Use the form below to reach us directly. We typically respond within one business day.
                </p>
                <div className="rounded-xl overflow-hidden bg-white">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSec7mxbI34BCMjI4DvYYWQr__1x2IHoq8cqTXv7I84MeLPrfQ/viewform?embedded=true"
                    className="w-full min-w-0 h-[780px] border-0"
                    loading="lazy"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
