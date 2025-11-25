import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-secondary pt-20 pb-10 border-t border-border overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/footer-background.jpg" alt="Footer background" fill className="object-cover opacity-10" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/logo-20kwetjiwe.png"
                alt="Kwetjiwe Logo"
                width={200}
                height={100}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6 font-sans">
              Bridging the gap between clients and funders. We provide unique business solutions for companies seeking
              to reinvest, grow, or raise capital.
            </p>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-sm font-sans">
                  5th Floor, Bloukrans Building, Lynnwood Bridge, Pretoria, 0081
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm font-sans">+27 12 880 0282</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm font-sans">info@kwetjiweconsulting.co.za</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-sans mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors font-sans">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-muted-foreground hover:text-primary transition-colors font-sans">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors font-sans">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-sans mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <Link
                href="#"
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground font-sans">
            © {new Date().getFullYear()} Kwetjiwe Consulting (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0 font-sans">
            A subsidiary of Bodibe Ba Thaba Holdings
          </p>
        </div>
      </div>
    </footer>
  )
}
