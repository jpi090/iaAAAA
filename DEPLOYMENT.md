# Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live in minutes at `your-project.vercel.app`

### Custom Domain
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

## Deploy to Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: None required for basic setup

## Deploy to Your Own Server

### Requirements:
- Node.js 18+ installed
- PM2 or similar process manager

### Steps:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "iaaaacame" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx (Optional)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

Currently, no environment variables are required. If you add features like:
- Email service
- Database
- Analytics

Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=your_api_url
EMAIL_SERVICE_KEY=your_key
```

## Performance Optimization

### Before Deployment:

1. **Optimize Images**
   - All images are already optimized with Next.js Image component
   - Consider using WebP format for better compression

2. **Enable Caching**
   - Vercel handles this automatically
   - For custom servers, configure proper cache headers

3. **Monitor Performance**
   - Use Vercel Analytics (free)
   - Or Google Analytics / Plausible

## Post-Deployment Checklist

- [ ] Test all pages on mobile and desktop
- [ ] Verify contact form works
- [ ] Check all images load correctly
- [ ] Test navigation and links
- [ ] Verify SEO meta tags
- [ ] Set up analytics
- [ ] Configure custom domain
- [ ] Set up SSL certificate (automatic on Vercel)
- [ ] Test page load speed
- [ ] Submit sitemap to Google Search Console

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Image Loading Issues
- Ensure all images are in `public/scr/` directory
- Check image paths start with `/scr/`

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

## Continuous Deployment

With Vercel or Netlify:
- Every push to `main` branch auto-deploys
- Pull requests get preview deployments
- Rollback to previous versions anytime

## Support

For deployment issues:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Contact: info@iaaaacame.org
