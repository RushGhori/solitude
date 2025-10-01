# Deployment Configuration Guide

## Overview

This project can be deployed in two modes:

1. **Static Export** (Azure Static Web Apps) - Default configuration
2. **Server-Side Rendering (SSR)** (Azure App Service) - For full functionality

## Current Configuration

The project is currently configured for **Static Export** (`output: 'export'` in `next.config.ts`). This mode:

✅ Works with Azure Static Web Apps  
✅ Provides fast, globally distributed hosting  
✅ Offers free tier with 100 GB bandwidth  
❌ Contact form will not work (requires server-side code)

## Configuration Files

### Default: Static Export
- File: `next.config.ts`
- Best for: Azure Static Web Apps
- Features: Fast, CDN-distributed, cost-effective
- Limitation: Contact form requires client-side solution

### Alternative: SSR Mode
- File: `next.config.ssr.ts`
- Best for: Azure App Service
- Features: Full Next.js capabilities, server actions work
- Requirement: More expensive hosting

## How to Switch Configurations

### Switch to SSR Mode (for full contact form functionality)

1. **Backup current config:**
   ```bash
   cp next.config.ts next.config.static.ts
   ```

2. **Copy SSR config:**
   ```bash
   cp next.config.ssr.ts next.config.ts
   ```

3. **Deploy to Azure App Service** (not Static Web Apps)

### Switch to Static Mode (default)

1. **Restore static config:**
   ```bash
   cp next.config.static.ts next.config.ts
   ```
   
   Or ensure `next.config.ts` has:
   ```typescript
   output: 'export',
   ```

2. **Deploy to Azure Static Web Apps**

## Contact Form Solutions

### Option 1: Client-Side Form Service (Recommended for Static)

Use a third-party service like:
- **Formspree** (https://formspree.io)
- **Netlify Forms** (if using Netlify instead)
- **EmailJS** (https://www.emailjs.com)
- **Web3Forms** (https://web3forms.com)

**Implementation:**
```typescript
// In contact form component
const handleSubmit = async (data: FormData) => {
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });
};
```

### Option 2: Azure Functions API

Keep static export but add Azure Functions for the contact form:

1. Create `api` folder in project root
2. Add contact form function
3. Deploy alongside Static Web App
4. Update form to use API endpoint

### Option 3: Deploy with SSR

Use Azure App Service for full functionality:
- Follow Azure App Service deployment guide
- Contact form will work out of the box
- Higher hosting costs (~$13/month minimum)

## Recommended Approach

**For most users**: Use **Azure Static Web Apps** (current config) + **Client-side form service**

**Benefits:**
- ✅ Free or low-cost hosting
- ✅ Global CDN distribution
- ✅ Automatic HTTPS
- ✅ Contact form works via third-party service
- ✅ Easy setup

**For enterprise/production**: Use **Azure App Service** with SSR

**Benefits:**
- ✅ Full control over backend
- ✅ Custom server logic
- ✅ Database connections possible
- ✅ Advanced security features

## Deployment Commands

### For Static Export (Azure Static Web Apps)
```bash
# Build
npm run build

# Deploy (automated via GitHub Actions)
git push origin main
```

### For SSR (Azure App Service)
```bash
# Switch config
cp next.config.ssr.ts next.config.ts

# Build
npm run build

# Deploy (automated via GitHub Actions)
git push origin main
```

## Environment Variables

Both configurations support environment variables:

**Static Export:**
- Use `NEXT_PUBLIC_*` prefix for client-side variables
- Set in Azure Static Web Apps → Configuration

**SSR Mode:**
- Both `NEXT_PUBLIC_*` and server-side variables work
- Set in Azure App Service → Configuration → Application Settings

## Summary

| Feature | Static Export | SSR Mode |
|---------|--------------|----------|
| **Azure Service** | Static Web Apps | App Service |
| **Cost** | Free-$9/mo | $13-$80+/mo |
| **Contact Form** | Requires 3rd party | Native support |
| **Performance** | Excellent | Good |
| **Global CDN** | Built-in | Requires setup |
| **Setup Complexity** | Easy | Moderate |

**Default recommendation**: Stick with current Static Export + use Formspree or similar for contact form.
