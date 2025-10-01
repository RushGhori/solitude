# Azure Deployment Guide for Solitude Infotech Inc.

This guide provides comprehensive steps to deploy the Next.js application to Microsoft Azure using multiple deployment methods.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Option 1: Azure Static Web Apps (Recommended)](#option-1-azure-static-web-apps-recommended)
3. [Option 2: Azure App Service](#option-2-azure-app-service)
4. [Environment Variables](#environment-variables)
5. [Custom Domain Configuration](#custom-domain-configuration)
6. [Monitoring and Troubleshooting](#monitoring-and-troubleshooting)

---

## Prerequisites

Before deploying to Azure, ensure you have:

1. **Azure Account**: Sign up at [azure.microsoft.com](https://azure.microsoft.com)
2. **Azure CLI** (optional but recommended): Install from [docs.microsoft.com/cli/azure/install-azure-cli](https://docs.microsoft.com/cli/azure/install-azure-cli)
3. **GitHub Account**: For CI/CD integration
4. **Node.js 20.x**: Installed locally for testing

---

## Option 1: Azure Static Web Apps (Recommended)

Azure Static Web Apps is the recommended deployment method for this Next.js application as it provides:
- Automatic global CDN distribution
- Free SSL certificates
- Built-in CI/CD with GitHub Actions
- Staging environments for pull requests
- Cost-effective for static sites

### Step 1: Create Azure Static Web App

#### Using Azure Portal:

1. Go to [Azure Portal](https://portal.azure.com)
2. Click **"Create a resource"**
3. Search for **"Static Web App"** and select it
4. Click **"Create"**
5. Fill in the details:
   - **Subscription**: Select your subscription
   - **Resource Group**: Create new or select existing
   - **Name**: `solitude-infotech` (or your preferred name)
   - **Plan type**: Free (or Standard for production)
   - **Region**: Choose closest to your users
   - **Source**: GitHub
   - **Organization**: Your GitHub username
   - **Repository**: `solitude`
   - **Branch**: `main`
   - **Build Presets**: Next.js
   - **App location**: `/`
   - **Api location**: Leave empty
   - **Output location**: `out`
6. Click **"Review + create"** then **"Create"**

#### Using Azure CLI:

```bash
# Login to Azure
az login

# Create a resource group
az group create \
  --name solitude-rg \
  --location eastus

# Create Static Web App (this will prompt for GitHub authorization)
az staticwebapp create \
  --name solitude-infotech \
  --resource-group solitude-rg \
  --source https://github.com/YOUR_USERNAME/solitude \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "out" \
  --login-with-github
```

### Step 2: Configure GitHub Secrets

Azure will automatically create a GitHub Actions workflow file. The deployment token is stored as a GitHub secret:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Verify that `AZURE_STATIC_WEB_APPS_API_TOKEN` exists (added automatically)

### Step 3: Verify Deployment

1. GitHub Actions workflow will trigger automatically on push to `main`
2. Monitor the deployment in the **Actions** tab of your GitHub repository
3. Once complete, access your app at the URL provided in the Azure Portal

### Step 4: Configure Custom Domain (Optional)

1. In Azure Portal, navigate to your Static Web App
2. Click **"Custom domains"** in the left menu
3. Click **"+ Add"**
4. Enter your domain name (e.g., `www.solitudeinfotech.com`)
5. Follow the DNS configuration instructions
6. Wait for validation (may take up to 48 hours)

---

## Option 2: Azure App Service

Use Azure App Service if you need:
- Full server-side rendering (SSR)
- API routes with backend logic
- Database connections
- Custom server middleware

### Step 1: Update Configuration for SSR

If you need SSR, modify `next.config.ts`:

```typescript
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Remove or comment out 'output: export' for SSR
  // output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Keep unoptimized: true for App Service, or configure Azure CDN
    unoptimized: true,
    remotePatterns: [
      // ... existing patterns
    ],
  },
};

export default nextConfig;
```

### Step 2: Create Azure App Service

#### Using Azure Portal:

1. Go to [Azure Portal](https://portal.azure.com)
2. Click **"Create a resource"**
3. Search for **"Web App"** and select it
4. Click **"Create"**
5. Fill in the details:
   - **Subscription**: Select your subscription
   - **Resource Group**: Create new or select existing
   - **Name**: `solitude-infotech` (must be globally unique)
   - **Publish**: Code
   - **Runtime stack**: Node 20 LTS
   - **Operating System**: Linux
   - **Region**: Choose closest to your users
   - **Pricing plan**: Select appropriate tier (B1 minimum for production)
6. Click **"Review + create"** then **"Create"**

#### Using Azure CLI:

```bash
# Create App Service Plan
az appservice plan create \
  --name solitude-plan \
  --resource-group solitude-rg \
  --location eastus \
  --sku B1 \
  --is-linux

# Create Web App
az webapp create \
  --name solitude-infotech \
  --resource-group solitude-rg \
  --plan solitude-plan \
  --runtime "NODE:20-lts"

# Configure deployment settings
az webapp config appsettings set \
  --name solitude-infotech \
  --resource-group solitude-rg \
  --settings WEBSITE_NODE_DEFAULT_VERSION=20-lts
```

### Step 3: Configure Deployment

#### Option A: GitHub Actions (Recommended)

1. Download the publish profile:
   ```bash
   az webapp deployment list-publishing-profiles \
     --name solitude-infotech \
     --resource-group solitude-rg \
     --xml
   ```

2. Add the publish profile to GitHub Secrets:
   - Go to GitHub repository **Settings** → **Secrets and variables** → **Actions**
   - Create new secret: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Paste the entire XML content from step 1

3. Rename the workflow file:
   ```bash
   mv .github/workflows/azure-app-service.yml.example .github/workflows/azure-app-service.yml
   ```

4. Update the workflow file with your app name:
   - Edit `.github/workflows/azure-app-service.yml`
   - Change `AZURE_WEBAPP_NAME: your-app-name` to your actual app name

5. Push to trigger deployment:
   ```bash
   git add .github/workflows/azure-app-service.yml
   git commit -m "Enable Azure App Service deployment"
   git push
   ```

#### Option B: Local Deployment using Azure CLI

```bash
# Build the application
npm run build

# Deploy using ZIP deploy
az webapp deployment source config-zip \
  --name solitude-infotech \
  --resource-group solitude-rg \
  --src <path-to-your-zip-file>
```

### Step 4: Configure App Service Settings

```bash
# Set Node.js startup command
az webapp config set \
  --name solitude-infotech \
  --resource-group solitude-rg \
  --startup-file "npm start"

# Enable HTTP/2
az webapp config set \
  --name solitude-infotech \
  --resource-group solitude-rg \
  --http20-enabled true

# Configure port (Next.js uses 3000 by default)
az webapp config appsettings set \
  --name solitude-infotech \
  --resource-group solitude-rg \
  --settings PORT=3000
```

---

## Environment Variables

### Configure Environment Variables in Azure

#### For Static Web Apps:

1. Go to Azure Portal → Your Static Web App
2. Click **"Configuration"** in the left menu
3. Add environment variables:
   - Click **"+ Add"**
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: Your API URL
   - Click **"OK"** and **"Save"**

#### For App Service:

```bash
az webapp config appsettings set \
  --name solitude-infotech \
  --resource-group solitude-rg \
  --settings \
    NEXT_PUBLIC_API_URL=https://api.example.com \
    NODE_ENV=production
```

### Required Environment Variables

Create a `.env.production` file (add to `.gitignore`):

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://your-api-url.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Any other environment-specific variables
```

---

## Custom Domain Configuration

### For Static Web Apps:

1. In Azure Portal, navigate to your Static Web App
2. Click **"Custom domains"**
3. Click **"+ Add"** → **"Custom domain on Azure DNS"** or **"Custom domain on other DNS"**
4. For external DNS (like GoDaddy, Namecheap):
   - Add CNAME record: `www` → `your-app.azurestaticapps.net`
   - Add TXT record for validation
5. Wait for DNS propagation (up to 48 hours)
6. SSL certificate is automatically provisioned

### For App Service:

1. In Azure Portal, navigate to your App Service
2. Click **"Custom domains"**
3. Click **"+ Add custom domain"**
4. Enter your domain name
5. Add DNS records:
   - CNAME: `www.yourdomain.com` → `your-app.azurewebsites.net`
   - TXT: For validation
6. Click **"Validate"** then **"Add"**
7. For SSL:
   - Click **"TLS/SSL settings"**
   - Click **"Private Key Certificates (.pfx)"** → **"+ Create App Service Managed Certificate"**
   - Select your custom domain and click **"Create"**
   - Go back to **"Custom domains"** and click **"Add binding"**

---

## Monitoring and Troubleshooting

### Enable Application Insights

#### For Static Web Apps:
Application Insights is automatically enabled. View metrics in Azure Portal.

#### For App Service:

```bash
# Create Application Insights resource
az monitor app-insights component create \
  --app solitude-insights \
  --location eastus \
  --resource-group solitude-rg \
  --application-type web

# Get instrumentation key
INSTRUMENTATION_KEY=$(az monitor app-insights component show \
  --app solitude-insights \
  --resource-group solitude-rg \
  --query instrumentationKey -o tsv)

# Configure App Service to use Application Insights
az webapp config appsettings set \
  --name solitude-infotech \
  --resource-group solitude-rg \
  --settings APPLICATIONINSIGHTS_CONNECTION_STRING="InstrumentationKey=$INSTRUMENTATION_KEY"
```

### View Logs

#### For Static Web Apps:
```bash
# View build logs in GitHub Actions
# Access logs in Azure Portal → Your Static Web App → "Functions" → "Application Insights"
```

#### For App Service:
```bash
# Stream logs
az webapp log tail \
  --name solitude-infotech \
  --resource-group solitude-rg

# Download logs
az webapp log download \
  --name solitude-infotech \
  --resource-group solitude-rg \
  --log-file logs.zip
```

### Common Issues and Solutions

#### Issue: Static Web App build fails

**Solution:**
1. Check GitHub Actions logs for errors
2. Verify `staticwebapp.config.json` configuration
3. Ensure `output: 'export'` is set in `next.config.ts`
4. Verify all dependencies are in `package.json`

#### Issue: App Service shows 500 error

**Solution:**
```bash
# Enable detailed error messages
az webapp config set \
  --name solitude-infotech \
  --resource-group solitude-rg \
  --detailed-error-logging-enabled true

# Check logs
az webapp log tail \
  --name solitude-infotech \
  --resource-group solitude-rg
```

#### Issue: Images not loading

**Solution:**
- For Static Export: Ensure `unoptimized: true` in `next.config.ts`
- For App Service: Configure Azure CDN or use external image hosting
- Verify image paths are correct (use relative paths)

#### Issue: CSS not loading after deployment

**Solution:**
1. Clear browser cache
2. Verify build completed successfully
3. Check `staticwebapp.config.json` MIME types
4. For App Service, verify startup command is correct

---

## Cost Optimization

### Static Web Apps Pricing:
- **Free tier**: 100 GB bandwidth/month, perfect for small sites
- **Standard tier**: $9/month, includes custom domains and more bandwidth

### App Service Pricing:
- **B1 Basic**: ~$13/month (for development/testing)
- **P1V2 Premium**: ~$80/month (for production with autoscaling)
- **Use reserved instances**: Save up to 55% with 1-year or 3-year commitments

### Tips to Reduce Costs:
1. Use Static Web Apps for static content (cheaper)
2. Enable autoscaling only during peak hours
3. Use Azure CDN for static assets
4. Set up auto-shutdown for non-production environments
5. Monitor usage with Azure Cost Management

---

## Security Best Practices

1. **Enable HTTPS only**: Already enabled by default in Azure
2. **Use managed identities**: For accessing Azure resources
3. **Configure CORS**: In Static Web Apps configuration
4. **Enable Azure DDoS Protection**: For production apps
5. **Set up Web Application Firewall (WAF)**: For App Service
6. **Rotate secrets regularly**: Use Azure Key Vault
7. **Enable diagnostic logging**: For security monitoring

---

## CI/CD Pipeline

The GitHub Actions workflows automatically:
1. ✅ Install dependencies
2. ✅ Build the Next.js application
3. ✅ Run tests (if configured)
4. ✅ Deploy to Azure
5. ✅ Create staging environments for PRs (Static Web Apps)

Monitor deployments:
- GitHub: Repository → Actions tab
- Azure: Portal → Your resource → Deployments

---

## Support and Resources

### Official Documentation:
- [Azure Static Web Apps Docs](https://docs.microsoft.com/azure/static-web-apps/)
- [Azure App Service Docs](https://docs.microsoft.com/azure/app-service/)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

### Azure Support:
- [Azure Support Plans](https://azure.microsoft.com/support/plans/)
- [Azure Community Forums](https://docs.microsoft.com/answers/products/azure)

### Quick Links:
- [Azure Portal](https://portal.azure.com)
- [Azure Status](https://status.azure.com/)
- [Azure Pricing Calculator](https://azure.microsoft.com/pricing/calculator/)

---

## Quick Start Checklist

- [ ] Create Azure account
- [ ] Choose deployment method (Static Web Apps or App Service)
- [ ] Create Azure resource
- [ ] Configure GitHub secrets
- [ ] Update workflow configuration
- [ ] Configure environment variables
- [ ] Test deployment
- [ ] Configure custom domain (optional)
- [ ] Enable monitoring
- [ ] Set up alerts

---

For questions or issues, please open a GitHub issue or contact the development team.
