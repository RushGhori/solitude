import Image from 'next/image';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Solitude Infotech Inc. team. We are here to answer your questions and help you get started.',
};

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-contact');

  return (
    <div className="animate-fade-in">
      <section className="relative w-full h-[50vh] hero-gradient text-primary-foreground">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-10"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">Contact Us</h1>
          <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/80 mt-4">
            We're here to help. Let's start a conversation.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or a project in mind? Fill out the form, and our team will get back to you shortly.
              </p>
              <Card>
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                You can also reach us through the following channels.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-md mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Office</h3>
                    <p className="text-muted-foreground">Niagara Falls<br/>Toronto, ON. Canada</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-md mt-1">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <a href="mailto:contact@solitudeinfotech.com" className="text-muted-foreground hover:text-primary transition-colors">contact@solitudeinfotech.com</a>
                  </div>
                </div>
                {/* <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-md mt-1">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    { <h3 className="font-semibold text-lg">Call Us</h3> }
                    { <a href="tel:+4164567890" className="text-muted-foreground hover:text-primary transition-colors">(416) 456-7890</a>}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
