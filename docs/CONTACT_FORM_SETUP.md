# Contact Form Setup Guide

## Current Implementation

The contact form is currently configured for **static export** (Azure Static Web Apps). This means the form validation happens client-side, and form submissions are logged to the console.

## Integration Options for Production

To make the contact form fully functional in production, you need to integrate with a third-party service. Here are the recommended options:

---

## Option 1: Formspree (Recommended)

**Best for**: Quick setup, reliable service  
**Cost**: Free tier (50 submissions/month), paid plans from $10/month  
**Website**: https://formspree.io/

### Setup Steps:

1. **Sign up at Formspree.io**
   - Create a free account at https://formspree.io/
   - Create a new form
   - Get your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)

2. **Update the contact form component**

Edit `src/components/contact-form.tsx`:

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formData = new FormData(e.currentTarget);
    
    // Submit to Formspree
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      toast({
        title: 'Success!',
        description: 'Thank you for your message! We will get back to you shortly.',
      });
      formRef.current?.reset();
    } else {
      throw new Error('Failed to submit');
    }
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Failed to send message. Please try again later.',
      variant: 'destructive',
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

3. **Add to environment variables** (optional)

Create `.env.local`:
```bash
NEXT_PUBLIC_FORMSPREE_ID=YOUR_FORM_ID
```

Then use in code:
```typescript
const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
  // ...
});
```

---

## Option 2: Web3Forms

**Best for**: Privacy-focused, no account required  
**Cost**: Free (unlimited forms)  
**Website**: https://web3forms.com/

### Setup Steps:

1. **Get Access Key**
   - Go to https://web3forms.com/
   - Enter your email to get an access key

2. **Update the contact form**

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: 'Success!',
        description: 'Thank you for your message! We will get back to you shortly.',
      });
      formRef.current?.reset();
    } else {
      throw new Error('Failed to submit');
    }
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Failed to send message. Please try again later.',
      variant: 'destructive',
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Option 3: EmailJS

**Best for**: Direct email sending from client-side  
**Cost**: Free tier (200 emails/month), paid plans from $7/month  
**Website**: https://www.emailjs.com/

### Setup Steps:

1. **Sign up and configure**
   - Create account at https://www.emailjs.com/
   - Add email service (Gmail, Outlook, etc.)
   - Create email template
   - Get Service ID, Template ID, and Public Key

2. **Install EmailJS**

```bash
npm install @emailjs/browser
```

3. **Update the contact form**

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.currentTarget,
      'YOUR_PUBLIC_KEY'
    );

    toast({
      title: 'Success!',
      description: 'Thank you for your message! We will get back to you shortly.',
    });
    formRef.current?.reset();
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Failed to send message. Please try again later.',
      variant: 'destructive',
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Option 4: Azure Functions (Advanced)

**Best for**: Full control, Azure ecosystem integration  
**Cost**: Azure Functions consumption plan (very low cost)

### Setup Steps:

1. **Create Azure Function**

Create `api/contact/index.ts`:

```typescript
import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import sgMail from '@sendgrid/mail';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      context.res = {
        status: 400,
        body: { error: 'Missing required fields' }
      };
      return;
    }

    // Send email using SendGrid (or any email service)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    await sgMail.send({
      to: 'contact@solitudeinfotech.com',
      from: 'noreply@solitudeinfotech.com',
      subject: `Contact Form: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `<strong>From:</strong> ${name} (${email})<br><br>${message}`,
    });

    context.res = {
      status: 200,
      body: { success: true }
    };
  } catch (error) {
    context.log.error('Error processing contact form:', error);
    context.res = {
      status: 500,
      body: { error: 'Internal server error' }
    };
  }
};

export default httpTrigger;
```

2. **Deploy Function to Azure**

```bash
func azure functionapp publish your-function-app-name
```

3. **Update contact form to use Azure Function**

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }),
});
```

---

## Option 5: Server-Side Rendering (SSR) Mode

**Best for**: Need full backend control  
**Cost**: Azure App Service (~$13/month minimum)

### Setup Steps:

1. **Switch to SSR configuration**

```bash
# Restore server actions
mv src/app/actions.ts.disabled src/app/actions.ts

# Copy SSR config
cp next.config.ssr.ts next.config.ts
```

2. **Deploy to Azure App Service** (not Static Web Apps)

Follow the Azure App Service deployment guide in `docs/AZURE_DEPLOYMENT.md`

3. **Configure email service**

Install email package:
```bash
npm install nodemailer
```

Update `src/app/actions.ts` to send real emails using your email service.

---

## Comparison Table

| Service | Setup Difficulty | Cost | Features | Best For |
|---------|-----------------|------|----------|----------|
| **Formspree** | ⭐ Easy | Free-$10/mo | Email notifications, spam protection | Quick setup |
| **Web3Forms** | ⭐ Easy | Free | Privacy-focused, no account | Simple needs |
| **EmailJS** | ⭐⭐ Medium | Free-$7/mo | Direct email sending | Client control |
| **Azure Functions** | ⭐⭐⭐ Hard | ~$0.20/1M | Full control, integration | Advanced users |
| **SSR Mode** | ⭐⭐⭐ Hard | $13+/mo | Full backend, database | Enterprise |

---

## Recommended Approach

### For Most Users:
1. Use **Formspree** or **Web3Forms** (easiest, free)
2. Keep current Static Web Apps deployment
3. 5 minutes to set up

### For Enterprise:
1. Use **Azure Functions** or **SSR Mode**
2. Full control over data and email
3. Higher cost but more features

---

## Testing Your Setup

After integration, test your contact form:

1. Fill out the form with valid data
2. Submit the form
3. Check:
   - Success toast appears
   - Form resets
   - Email received (check inbox/spam)
4. Test error cases:
   - Invalid email format
   - Empty required fields
   - Network errors

---

## Security Considerations

1. **Rate Limiting**: Most services provide built-in rate limiting
2. **Spam Protection**: Use reCAPTCHA or service-provided spam filters
3. **Input Validation**: Already implemented client-side
4. **HTTPS**: Automatically provided by Azure
5. **Environment Variables**: Store API keys in Azure Configuration

---

## Support

For issues or questions:
- Check service documentation
- Open GitHub issue
- Contact development team

---

**Ready to connect your form? Choose a service above and follow the steps!**
