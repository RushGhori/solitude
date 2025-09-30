'use server';

import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';

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
    // Store locally in a JSON file under src/data/contact-submissions.json
    try {
      const dataDir = path.join(process.cwd(), 'src', 'data');
      const filePath = path.join(dataDir, 'contact-submissions.json');
      await fs.mkdir(dataDir, { recursive: true });
      let existing: unknown[] = [];
      try {
        const buf = await fs.readFile(filePath, 'utf-8');
        existing = JSON.parse(buf);
        if (!Array.isArray(existing)) existing = [];
      } catch (_) {
        existing = [];
      }
      const entry = {
        ...parsed.data,
        receivedAt: new Date().toISOString(),
      };
      existing.push(entry);
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf-8');
    } catch (err) {
      console.error('Failed to persist contact submission locally:', err);
    }
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
