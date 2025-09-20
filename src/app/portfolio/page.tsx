import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore a selection of our finest work and success stories. See how we have helped our clients achieve their goals.',
};

export default function PortfolioPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-portfolio');
  const projectImages = projects.map(p => {
    const placeholder = PlaceHolderImages.find(img => img.id === p.imageId);
    return { ...p, ...placeholder };
  });

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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">Our Work</h1>
          <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/80 mt-4">
            A showcase of our commitment to excellence and innovation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectImages.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
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
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-headline">{project.title}</h3>
                  <p className="text-primary font-medium">{project.category}</p>
                  <p className="text-muted-foreground text-sm mt-2">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
