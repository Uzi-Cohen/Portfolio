module.exports = {
  apps: [
    {
      name: 'uzi-portfolio',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/var/www/portfolio',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/var/log/pm2/portfolio-error.log',
      out_file: '/var/log/pm2/portfolio-out.log',
      log_file: '/var/log/pm2/portfolio-combined.log',
      time: true,
    },
  ],
}
