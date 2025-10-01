'use client';

import { useState, useRef, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// Static export compatible contact form
// For production, integrate with a service like Formspree, Web3Forms, or EmailJS
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      };

      // Basic validation
      if (!data.name || data.name.length < 2) {
        toast({
          title: 'Error',
          description: 'Name must be at least 2 characters.',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }

      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        toast({
          title: 'Error',
          description: 'Please enter a valid email address.',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }

      if (!data.subject || data.subject.length < 5) {
        toast({
          title: 'Error',
          description: 'Subject must be at least 5 characters.',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }

      if (!data.message || data.message.length < 10) {
        toast({
          title: 'Error',
          description: 'Message must be at least 10 characters.',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }

      // For static deployment: Log to console (replace with actual service in production)
      // Example integrations:
      // - Formspree: https://formspree.io/
      // - Web3Forms: https://web3forms.com/
      // - EmailJS: https://www.emailjs.com/
      console.log('Contact form submission:', data);
      
      // Simulate successful submission
      toast({
        title: 'Success!',
        description: 'Thank you for your message! We will get back to you shortly.',
      });
      
      formRef.current?.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your Name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="your@email.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" placeholder="Inquiry Subject" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message..." rows={6} required />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
