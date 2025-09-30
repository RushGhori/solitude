import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Linkedin, Twitter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, vision, and the dedicated team behind Solitude Infotech Inc..',
};

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-about');
  const sheetalImage = PlaceHolderImages.find(img => img.id === 'sheetal-savani') ?? PlaceHolderImages.find(img => img.id === 'team-1');

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
            The mind and mission behind our drive for innovation.
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
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet the Brain</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              The passionate professional dedicated to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                {sheetalImage && (
                  <Image
                    src={sheetalImage.imageUrl}
                    alt="Portrait of Sheetal Savani"
                    width={128}
                    height={128}
                    className="rounded-full mx-auto mb-4 border-4 border-primary/10"
                    data-ai-hint={sheetalImage.imageHint}
                  />
                )}
                <h3 className="text-xl font-bold font-headline">Sheetal Savani</h3>
                <p className="text-primary font-medium">Founder & CEO</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Linkedin size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline">About Sheetal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Experienced application developer with almost 6 years of experience including Flutter and Android Native. Experience in E-commerce, Healthcare, Photo editing app, Audio/Video Calling app, and many more apps. I'm a Complex problem-solver with an analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code.
                </p>
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-2">Skills</h4>
                  <p>
                    Dart, Flutter, Android SDK, Android OS, JAVA, State management, Team Leading, Firebase Crashalytics, Analytics, Deep linking, Social auth, Firestore Database, REST API, SOAP, JSON, CSS3, Mixpanel, Agora, WebRTC, Git, GitLab, bitbucket, MS Office
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
