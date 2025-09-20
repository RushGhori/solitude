import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import { services } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === service.imageId);

  return (
    <div className="animate-fade-in">
      <section className="relative w-full h-[60vh] hero-gradient text-primary-foreground">
        {image && (
          <Image
            src={image.imageUrl}
            alt={service.title}
            fill
            className="object-cover opacity-10"
            data-ai-hint={image.imageHint}
            priority
          />
        )}
        <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">
            {service.title}
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-primary-foreground/80 mt-4">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold font-headline mb-4">Service Overview</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {service.description}
            </p>
            
            <h3 className="text-2xl font-bold font-headline mb-6">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <aside className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><Check className="text-primary h-5 w-5" /><span>Benefit One</span></li>
                  <li className="flex items-center gap-3"><Check className="text-primary h-5 w-5" /><span>Benefit Two</span></li>
                  <li className="flex items-center gap-3"><Check className="text-primary h-5 w-5" /><span>Benefit Three</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-headline text-primary-foreground">Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Contact us today to learn how this service can help your business.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </div>
  );
}
