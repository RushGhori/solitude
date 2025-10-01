# Azure Deployment Quick Start

This quick start guide will help you deploy the Solitude Infotech Inc. website to Azure in under 10 minutes.

## Prerequisites

- [x] Azure account ([Sign up for free](https://azure.microsoft.com/free/))
- [x] GitHub account
- [x] This repository forked or pushed to your GitHub account

## Option 1: Azure Static Web Apps (5 minutes)

### Step 1: Create Static Web App

1. Go to [Azure Portal](https://portal.azure.com)
2. Click **"Create a resource"** → Search **"Static Web App"**
3. Click **"Create"**

### Step 2: Configure

Fill in these details:

| Field | Value |
|-------|-------|
| **Subscription** | Your subscription |
| **Resource Group** | Create new: `solitude-rg` |
| **Name** | `solitude-infotech` (or your choice) |
| **Plan type** | Free |
| **Region** | Choose closest to you |
| **Source** | GitHub |
| **Organization** | Your GitHub username |
| **Repository** | `solitude` |
| **Branch** | `main` |
| **Build Presets** | Next.js |
| **App location** | `/` |
| **Output location** | `out` |

### Step 3: Deploy

1. Click **"Review + create"**
2. Click **"Create"**
3. Wait 2-3 minutes for deployment
4. GitHub Actions will automatically build and deploy your site

### Step 4: Access Your Site

1. Go to your Static Web App in Azure Portal
2. Copy the URL (e.g., `https://your-app.azurestaticapps.net`)
3. Open in browser

**Done! Your site is live! 🎉**

---

## Option 2: Azure App Service (7 minutes)

Use this if you need server-side rendering.

### Step 1: Update Configuration

Remove or comment out the `output: 'export'` line in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  // output: 'export',  // Comment this out for SSR
  // ... rest of config
};
```

### Step 2: Create App Service

1. Go to [Azure Portal](https://portal.azure.com)
2. Click **"Create a resource"** → Search **"Web App"**
3. Click **"Create"**

### Step 3: Configure

Fill in these details:

| Field | Value |
|-------|-------|
| **Subscription** | Your subscription |
| **Resource Group** | Create new: `solitude-rg` |
| **Name** | `solitude-infotech` (must be unique) |
| **Publish** | Code |
| **Runtime stack** | Node 20 LTS |
| **Operating System** | Linux |
| **Region** | Choose closest to you |
| **Pricing plan** | B1 (or higher) |

### Step 4: Configure Deployment

1. After creation, go to your App Service
2. Click **"Deployment Center"**
3. Select **"GitHub"** as source
4. Authorize GitHub and select:
   - **Organization**: Your username
   - **Repository**: `solitude`
   - **Branch**: `main`
5. Save

### Step 5: Configure Startup

1. Go to **"Configuration"** → **"General settings"**
2. Set **Startup Command**: `npm start`
3. Save

**Done! Your site will deploy in 5-7 minutes! 🎉**

---

## Verify Deployment

### Check Deployment Status

**For Static Web Apps:**
- GitHub: Go to **Actions** tab in your repository
- Azure: Check **"Environments"** in your Static Web App

**For App Service:**
- Azure: Go to **"Deployment Center"** → **"Logs"**

### Common URLs

- **Static Web App**: `https://your-app-name.azurestaticapps.net`
- **App Service**: `https://your-app-name.azurewebsites.net`

---

## Next Steps

### 1. Configure Custom Domain

1. Purchase a domain (e.g., from GoDaddy, Namecheap)
2. In Azure Portal → Your resource → **"Custom domains"**
3. Add your domain and update DNS records
4. SSL certificate is automatically provisioned

### 2. Set Environment Variables

1. In Azure Portal → Your resource → **"Configuration"**
2. Add application settings:
   ```
   NEXT_PUBLIC_API_URL=https://your-api.com
   NODE_ENV=production
   ```
3. Save and restart

### 3. Enable Monitoring

1. In Azure Portal → Your resource → **"Application Insights"**
2. Enable Application Insights
3. View metrics, logs, and performance data

---

## Troubleshooting

### Issue: Build fails in GitHub Actions

**Solution:**
1. Check GitHub Actions logs
2. Verify `output: 'export'` is in `next.config.ts` (for Static Web Apps)
3. Ensure all dependencies are in `package.json`

### Issue: Site shows 404 or blank page

**Solution:**
1. Verify build completed successfully
2. Check output location is set to `out`
3. Clear browser cache

### Issue: Deployment takes too long

**Normal deployment times:**
- Static Web Apps: 2-5 minutes
- App Service: 5-10 minutes

If longer, check:
1. GitHub Actions status
2. Azure deployment logs
3. Network connectivity

---

## Cost Estimates

### Azure Static Web Apps
- **Free tier**: $0/month (100 GB bandwidth)
- **Standard tier**: $9/month (unlimited bandwidth)

### Azure App Service
- **B1 Basic**: ~$13/month (1 core, 1.75 GB RAM)
- **P1V2 Premium**: ~$80/month (autoscaling enabled)

**Recommendation**: Start with Static Web Apps (Free tier) → Upgrade as needed

---

## Getting Help

- **Full Documentation**: [docs/AZURE_DEPLOYMENT.md](AZURE_DEPLOYMENT.md)
- **Azure Support**: [Azure Portal](https://portal.azure.com) → **"Help + support"**
- **GitHub Issues**: Open an issue in this repository

---

## Summary

✅ **Fastest**: Azure Static Web Apps (5 minutes)  
✅ **Best for**: Static sites, SPAs, JAMstack apps  
✅ **Most flexible**: Azure App Service (7 minutes)  
✅ **Best for**: SSR, APIs, complex backends

Choose Static Web Apps unless you specifically need SSR or backend features.

---

**Ready to deploy? Let's go! 🚀**
