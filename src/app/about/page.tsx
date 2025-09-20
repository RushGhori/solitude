import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { teamMembers } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Linkedin, Twitter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, vision, and the dedicated team behind Solitude Infotech Inc..',
};

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-about');
  const teamImages = teamMembers.map(member => {
    const placeholder = PlaceHolderImages.find(img => img.id === member.imageId);
    return { ...member, ...placeholder };
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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">About Solitude Infotech Inc.</h1>
          <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/80 mt-4">
            The minds and mission behind our drive for innovation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                To empower businesses with transformative digital solutions, fostering growth, innovation, and a competitive edge in a rapidly evolving world. We are committed to building partnerships based on trust, transparency, and a shared passion for excellence.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To be the leading catalyst for digital evolution, recognized for our strategic thinking, creative solutions, and unwavering dedication to our clients' success. We envision a future where technology and human ingenuity converge to solve the world's most complex challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              The passionate professionals dedicated to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamImages.map((member) => (
              <Card key={member.id} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  {member.imageUrl && (
                    <Image
                      src={member.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      width={128}
                      height={128}
                      className="rounded-full mx-auto mb-4 border-4 border-primary/10"
                      data-ai-hint={member.imageHint}
                    />
                  )}
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm mt-2">{member.bio}</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Twitter size={20} />
                    </a>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
