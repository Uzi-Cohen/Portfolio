#!/bin/bash

# SSL Setup Script using Let's Encrypt
# Run this after the main deployment

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}  SSL Certificate Setup${NC}"
echo -e "${GREEN}=========================================${NC}"

# Check if domain is provided
if [ -z "$1" ]; then
    echo -e "${YELLOW}Usage: ./setup-ssl.sh yourdomain.com${NC}"
    exit 1
fi

DOMAIN=$1

# Install certbot
apt-get update
apt-get install -y certbot python3-certbot-nginx

# Update nginx config with actual domain
sed -i "s/yourdomain.com/$DOMAIN/g" /etc/nginx/sites-available/portfolio

# Test nginx config
nginx -t

# Reload nginx
systemctl reload nginx

# Get SSL certificate
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN

# Setup auto-renewal
echo "0 0,12 * * * root certbot renew --quiet" >> /etc/crontab

echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}  SSL Setup Complete!${NC}"
echo -e "${GREEN}=========================================${NC}"
echo -e "Your site is now secured with HTTPS"
echo -e "Certificate will auto-renew every 12 hours"
