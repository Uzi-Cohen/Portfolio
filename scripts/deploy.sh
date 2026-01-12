#!/bin/bash

# AWS EC2 Deployment Script for Uzi Cohen Portfolio
# Run this script on your EC2 instance

set -e

echo "========================================="
echo "  Portfolio Deployment Script"
echo "========================================="

# Configuration
APP_DIR="/var/www/portfolio"
REPO_URL="https://github.com/Uzi-Cohen/Portfolio.git"
BRANCH="main"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then
    log_error "Please run as root or with sudo"
    exit 1
fi

# Update system
log_info "Updating system packages..."
apt-get update -y
apt-get upgrade -y

# Install Node.js 20.x if not installed
if ! command -v node &> /dev/null; then
    log_info "Installing Node.js 20.x..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
else
    log_info "Node.js is already installed: $(node --version)"
fi

# Install PM2 globally if not installed
if ! command -v pm2 &> /dev/null; then
    log_info "Installing PM2..."
    npm install -g pm2
else
    log_info "PM2 is already installed"
fi

# Install nginx if not installed
if ! command -v nginx &> /dev/null; then
    log_info "Installing Nginx..."
    apt-get install -y nginx
else
    log_info "Nginx is already installed"
fi

# Create app directory
log_info "Setting up application directory..."
mkdir -p $APP_DIR
cd $APP_DIR

# Clone or pull repository
if [ -d ".git" ]; then
    log_info "Pulling latest changes..."
    git fetch origin
    git checkout $BRANCH
    git pull origin $BRANCH
else
    log_info "Cloning repository..."
    git clone $REPO_URL .
    git checkout $BRANCH
fi

# Install dependencies
log_info "Installing dependencies..."
npm ci --production=false

# Build the application
log_info "Building the application..."
npm run build

# Create PM2 log directory
mkdir -p /var/log/pm2

# Stop existing PM2 process if running
log_info "Restarting PM2 process..."
pm2 stop uzi-portfolio || true
pm2 delete uzi-portfolio || true

# Start with PM2
pm2 start ecosystem.config.js --env production

# Save PM2 process list
pm2 save

# Setup PM2 to start on boot
pm2 startup systemd -u root --hp /root

# Configure Nginx
log_info "Configuring Nginx..."
cp nginx/portfolio.conf /etc/nginx/sites-available/portfolio

# Create symlink if it doesn't exist
if [ ! -L "/etc/nginx/sites-enabled/portfolio" ]; then
    ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
fi

# Remove default nginx site
rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
nginx -t

# Reload nginx
systemctl reload nginx

log_info "========================================="
log_info "  Deployment Complete!"
log_info "========================================="
log_info "Your portfolio is now running!"
log_info ""
log_info "Next steps:"
log_info "1. Update nginx/portfolio.conf with your domain"
log_info "2. Setup SSL with: certbot --nginx -d yourdomain.com"
log_info "3. Configure your domain DNS to point to this server"
log_info ""
log_info "Useful commands:"
log_info "  pm2 status          - Check app status"
log_info "  pm2 logs            - View logs"
log_info "  pm2 restart all     - Restart app"
log_info "========================================="
