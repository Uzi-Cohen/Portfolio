# Uzi Cohen - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** CSS animations & transitions
- **Deployment:** AWS EC2 with Nginx & PM2

## Features

- Responsive design for all devices
- Modern UI with gradient accents
- Smooth scroll navigation
- Animated sections
- Dark mode support (via system preference)
- SEO optimized
- Production-ready AWS deployment configuration

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Skills.tsx       # Skills grid
│   │   ├── Education.tsx    # Education & certifications
│   │   ├── Contact.tsx      # Contact section
│   │   └── Footer.tsx       # Footer
│   └── lib/
│       └── data.ts          # Portfolio data (resume info)
├── nginx/
│   └── portfolio.conf       # Nginx configuration
├── scripts/
│   ├── deploy.sh           # Main deployment script
│   └── setup-ssl.sh        # SSL certificate setup
├── ecosystem.config.js      # PM2 configuration
└── public/
    └── robots.txt          # SEO robots file
```

## AWS EC2 Deployment

### Prerequisites

- AWS EC2 instance (Ubuntu 22.04 LTS recommended)
- Domain name pointing to your EC2 instance
- SSH access to the instance

### Quick Deploy

1. **SSH into your EC2 instance:**
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-ip
   ```

2. **Clone and run deployment:**
   ```bash
   git clone https://github.com/Uzi-Cohen/Portfolio.git
   cd Portfolio
   sudo chmod +x scripts/deploy.sh
   sudo ./scripts/deploy.sh
   ```

3. **Setup SSL (after configuring DNS):**
   ```bash
   sudo chmod +x scripts/setup-ssl.sh
   sudo ./scripts/setup-ssl.sh yourdomain.com
   ```

### Manual Deployment Steps

1. **Update system & install Node.js:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

2. **Install PM2 & Nginx:**
   ```bash
   sudo npm install -g pm2
   sudo apt install -y nginx
   ```

3. **Clone & build:**
   ```bash
   sudo mkdir -p /var/www/portfolio
   cd /var/www/portfolio
   sudo git clone https://github.com/Uzi-Cohen/Portfolio.git .
   sudo npm ci
   sudo npm run build
   ```

4. **Start with PM2:**
   ```bash
   sudo pm2 start ecosystem.config.js --env production
   sudo pm2 save
   sudo pm2 startup
   ```

5. **Configure Nginx:**
   ```bash
   sudo cp nginx/portfolio.conf /etc/nginx/sites-available/portfolio
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo rm /etc/nginx/sites-enabled/default
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### Useful Commands

```bash
# View application status
pm2 status

# View logs
pm2 logs uzi-portfolio

# Restart application
pm2 restart uzi-portfolio

# Nginx status
sudo systemctl status nginx

# Test nginx config
sudo nginx -t
```

### EC2 Security Group Settings

Ensure your EC2 security group allows:
- **Port 22:** SSH
- **Port 80:** HTTP
- **Port 443:** HTTPS

## Customization

To update portfolio content, edit `src/lib/data.ts`:

- `personalInfo` - Contact information & social links
- `summary` - Professional summary
- `experiences` - Work experience
- `education` - Educational background
- `certifications` - Professional certifications
- `skillCategories` - Technical skills

## License

MIT License - Feel free to use this template for your own portfolio!

---

Built with Next.js by Uzi Cohen
