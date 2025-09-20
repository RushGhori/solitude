import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest industry insights, news, and updates from the Solitude Infotech Inc. team.',
};

export default function BlogPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-blog');
  const enrichedBlogPosts = blogPosts.map(post => {
    const placeholder = PlaceHolderImages.find(img => img.id === post.imageId);
    return { ...post, ...placeholder };
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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">Our Insights</h1>
          <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/80 mt-4">
            Industry analysis, company news, and thought leadership from Solitude Infotech Inc..
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enrichedBlogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-56 w-full">
                    {post.imageUrl && (
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        data-ai-hint={post.imageHint}
                      />
                    )}
                  </div>
                </Link>
                <CardHeader>
                  <CardTitle className="font-headline text-xl leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    By {post.author} on {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
