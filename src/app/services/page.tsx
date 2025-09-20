import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Discover the comprehensive range of services offered by Solitude Infotech Inc., from strategic consulting to software development.',
};

export default function ServicesPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-services');

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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">Our Services</h1>
          <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/80 mt-4">
            Tailored solutions to fuel your business's growth and innovation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.slug} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                   <div className="bg-primary text-primary-foreground p-4 rounded-md">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-base">
                    {service.shortDescription}
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild>
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
