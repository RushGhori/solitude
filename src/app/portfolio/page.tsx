  import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Coming Soon',
  description: 'Our portfolio page is coming soon. Stay tuned for our latest work and projects.',
};

export default function PortfolioPage() {
  return (
    <div className="animate-fade-in">
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter font-headline mb-6">
            Coming Soon
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            We're working hard to showcase our amazing portfolio. Check back soon to see our latest work and success stories.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>
    </div>
  );
}
