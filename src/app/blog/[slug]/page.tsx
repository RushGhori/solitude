import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === post.imageId);

  return (
    <article className="animate-fade-in">
      <header className="relative w-full h-[60vh] hero-gradient">
        {image && (
          <Image
            src={image.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-center px-4 text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">
            {post.title}
          </h1>
          <p className="text-lg mt-4">
            By {post.author} on {post.date}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert prose-headings:font-headline">
          <p className="lead text-xl text-muted-foreground">{post.excerpt}</p>
          <p>{post.content}</p>
          
          <h2>Sub-heading for Demonstration</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
          </p>
          <blockquote>
            "The journey of a thousand miles begins with a single step." - Lao Tzu
          </blockquote>
          <p>
            Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor. Aliquam congue fermentum nisl.
          </p>
        </div>
      </div>
    </article>
  );
}
