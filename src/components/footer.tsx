import Link from 'next/link';
import { Mountain } from 'lucide-react';
import { socialLinks } from '@/lib/placeholder-data';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="font-headline">Solitude Infotech Inc.</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Driving Growth Through Innovation.
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/mobile-development" className="text-muted-foreground hover:text-primary">Mobile Development</Link></li>
              <li><Link href="/services/web-development" className="text-muted-foreground hover:text-primary">Web Development</Link></li>
              <li><Link href="/services/web-and-mobile-design" className="text-muted-foreground hover:text-primary">Web and Mobile design</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">All Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              {/* <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary">Portfolio</Link></li> */}
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Niagra Falls<br/>Toronto, ON. Canada</p>
              <p>Email: <a href="mailto:contact@solitudeinfotech.com" className="hover:text-primary">solitudeinfotech@gmail.com</a></p>
              {/* <p>Phone: <a href="tel:+14164567890" className="hover:text-primary">(416) 456-7890</a></p> */}
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Solitude Infotech Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
