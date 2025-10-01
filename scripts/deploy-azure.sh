#!/bin/bash

# Azure Deployment Script for Solitude Infotech Inc.
# This script helps deploy the application to Azure manually

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if Azure CLI is installed
check_azure_cli() {
    if ! command -v az &> /dev/null; then
        print_error "Azure CLI is not installed. Please install it from:"
        print_error "https://docs.microsoft.com/cli/azure/install-azure-cli"
        exit 1
    fi
    print_info "Azure CLI is installed"
}

# Function to check if user is logged in to Azure
check_azure_login() {
    if ! az account show &> /dev/null; then
        print_warning "Not logged in to Azure. Please login..."
        az login
    else
        print_info "Already logged in to Azure"
        ACCOUNT=$(az account show --query name -o tsv)
        print_info "Current subscription: $ACCOUNT"
    fi
}

# Function to build the application
build_app() {
    print_info "Building the application..."
    npm ci
    npm run build
    print_info "Build completed successfully"
}

# Function to deploy to Azure Static Web Apps
deploy_static_web_app() {
    print_info "Deploying to Azure Static Web Apps..."
    
    read -p "Enter your Azure Static Web App name: " APP_NAME
    read -p "Enter your resource group name: " RESOURCE_GROUP
    
    # Get deployment token
    print_info "Getting deployment token..."
    DEPLOYMENT_TOKEN=$(az staticwebapp secrets list \
        --name "$APP_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --query "properties.apiKey" -o tsv)
    
    if [ -z "$DEPLOYMENT_TOKEN" ]; then
        print_error "Failed to get deployment token"
        exit 1
    fi
    
    print_info "Deploying using SWA CLI..."
    npx @azure/static-web-apps-cli deploy \
        --deployment-token "$DEPLOYMENT_TOKEN" \
        --app-location "." \
        --output-location "out"
    
    print_info "Deployment completed!"
    APP_URL=$(az staticwebapp show \
        --name "$APP_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --query "defaultHostname" -o tsv)
    print_info "Your app is available at: https://$APP_URL"
}

# Function to deploy to Azure App Service
deploy_app_service() {
    print_info "Deploying to Azure App Service..."
    
    read -p "Enter your Azure App Service name: " APP_NAME
    read -p "Enter your resource group name: " RESOURCE_GROUP
    
    print_info "Creating deployment package..."
    
    # Create a zip file excluding unnecessary files
    zip -r deploy.zip . \
        -x "*.git*" \
        -x "*node_modules*" \
        -x "*.next/cache*" \
        -x "*.vscode*" \
        -x "*tmp*" \
        -x "*.env*"
    
    print_info "Uploading and deploying to Azure..."
    az webapp deployment source config-zip \
        --name "$APP_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --src deploy.zip
    
    # Clean up
    rm deploy.zip
    
    print_info "Deployment completed!"
    APP_URL=$(az webapp show \
        --name "$APP_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --query "defaultHostName" -o tsv)
    print_info "Your app is available at: https://$APP_URL"
}

# Main menu
show_menu() {
    echo ""
    echo "=================================="
    echo "Azure Deployment Script"
    echo "=================================="
    echo "1. Deploy to Azure Static Web Apps"
    echo "2. Deploy to Azure App Service"
    echo "3. Build application only"
    echo "4. Exit"
    echo "=================================="
    read -p "Select an option (1-4): " choice
    
    case $choice in
        1)
            check_azure_cli
            check_azure_login
            build_app
            deploy_static_web_app
            ;;
        2)
            check_azure_cli
            check_azure_login
            build_app
            deploy_app_service
            ;;
        3)
            build_app
            ;;
        4)
            print_info "Exiting..."
            exit 0
            ;;
        *)
            print_error "Invalid option. Please select 1-4."
            show_menu
            ;;
    esac
}

# Start the script
print_info "Starting Azure deployment script for Solitude Infotech Inc."
print_info "This script will help you deploy your application to Azure"
echo ""

# Check Node.js installation
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 20.x"
    exit 1
fi

NODE_VERSION=$(node -v)
print_info "Node.js version: $NODE_VERSION"

# Show menu
show_menu
