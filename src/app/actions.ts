'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawFormData = Object.fromEntries(formData.entries());
  const parsed = contactFormSchema.safeParse(rawFormData);

  if (parsed.success) {
    console.log('Form submitted successfully:', parsed.data);
    // Here you would typically send an email or save the data to a database.
    // For this demo, we'll just simulate a success response.
    return {
      success: true,
      message: 'Thank you for your message! We will get back to you shortly.',
    };
  } else {
    return {
      success: false,
      message: 'Please correct the errors below.',
      errors: parsed.error.flatten().fieldErrors,
    };
  }
}
