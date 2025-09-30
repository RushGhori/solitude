import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { services, projects, testimonials } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-home');
  const projectImages = projects.map(p => {
    const placeholder = PlaceHolderImages.find(img => img.id === p.imageId);
    return { ...p, ...placeholder };
  });
  const testimonialImages = testimonials.map(t => {
    const placeholder = PlaceHolderImages.find(img => img.id === t.imageId);
    return { ...t, ...placeholder };
  });

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[80vh] hero-gradient text-primary-foreground animate-fade-in">
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
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 font-headline animate-slide-in-from-bottom-and-fade-in delay-200">
            Driving Growth Through Innovation
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/80 mb-8 animate-slide-in-from-bottom-and-fade-in delay-300">
            Solitude Infotech Inc. offers top-tier consulting and digital services to
            elevate your business. Let's build the future, together.
          </p>
          <div className="flex gap-4 animate-slide-in-from-bottom-and-fade-in delay-400">
            <Button asChild size="lg">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-background animate-fade-in animation-delay-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              We provide a wide range of services to help your business succeed
              in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, i) => (
              <Card
                key={service.slug}
                className="flex flex-col hover:shadow-lg transition-shadow duration-300 animate-slide-in-from-bottom-and-fade-in"
                style={{animationDelay: `${600 + i * 150}ms`}}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-md">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {service.shortDescription}
                  </p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* <section id="portfolio" className="py-16 md:py-24 bg-card animate-fade-in animation-delay-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Our Recent Work
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              We take pride in our work. Here are some of our recent projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectImages.slice(0, 3).map((project, i) => (
              <Link href="/portfolio" key={project.id}>
                <div className="group block overflow-hidden rounded-lg border hover:shadow-xl transition-all duration-300 animate-slide-in-from-bottom-and-fade-in" style={{animationDelay: `${700 + i * 150}ms`}}>
                  <div className="relative h-60 w-full">
                    {project.imageUrl && (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={project.imageHint}
                      />
                    )}
                  </div>
                  <div className="p-4 bg-card">
                    <h3 className="text-lg font-semibold font-headline">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" variant="default">
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section> */}

      <section id="testimonials" className="py-16 md:py-24 bg-background animate-fade-in animation-delay-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Building strong relationships is at the core of our business.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonialImages.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between">
                      <CardContent className="pt-6">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic">
                          "{testimonial.quote}"
                        </p>
                      </CardContent>
                      <CardHeader className="flex-row items-center gap-4">
                        {testimonial.imageUrl && (
                            <Image
                              src={testimonial.imageUrl}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="rounded-full object-cover"
                              data-ai-hint={testimonial.imageHint}
                            />
                          )}
                        <div>
                          <CardTitle className="text-base font-semibold">
                            {testimonial.name}
                          </CardTitle>
                          <CardDescription>
                            {testimonial.company}
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="hero-gradient text-primary-foreground py-16 md:py-24 animate-fade-in animation-delay-800">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mt-2 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today
            for a free consultation.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
