# Quick Start Guide

Get your IAAAACAME website running in 5 minutes!

## Prerequisites

- Node.js 18 or higher ([Download here](https://nodejs.org/))
- A code editor (VS Code recommended)
- Terminal/Command Prompt

## Installation Steps

### 1. Open Terminal
Navigate to the project directory:
```bash
cd path/to/IAAAACAME
```

### 2. Install Dependencies
```bash
npm install
```
This will take 2-3 minutes.

### 3. Start Development Server
```bash
npm run dev
```

### 4. View Your Website
Open your browser and go to:
```
http://localhost:3000
```

## 🎉 That's It!

Your website is now running locally. You should see:
- Home page with hero carousel
- Navigation menu
- All sections loading properly

## Making Changes

### Edit Content
1. Open files in the `components/` folder
2. Make your changes
3. Save the file
4. Browser automatically refreshes!

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#004080",  // Change this
    dark: "#003366",
    light: "#0066cc",
  },
}
```

### Add Images
1. Place images in `public/scr/` folder
2. Reference them as `/scr/your-image.jpg`

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for code issues
npm run lint
```

## Troubleshooting

### Port 3000 Already in Use
```bash
# Windows
npx kill-port 3000

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Build Errors
```bash
# Clear cache
rm -rf .next
npm run build
```

## Next Steps

1. **Customize Content**: Edit component files
2. **Add Your Images**: Replace images in `public/scr/`
3. **Update Contact Info**: Edit `app/contact/page.tsx`
4. **Deploy**: See `DEPLOYMENT.md` for deployment guide

## Need Help?

- Check `README.md` for detailed documentation
- See `FEATURES.md` for feature list
- Read `DEPLOYMENT.md` for deployment options

## File Structure Quick Reference

```
├── app/
│   ├── page.tsx          # Home page
│   ├── about/page.tsx    # About page
│   └── contact/page.tsx  # Contact page
├── components/
│   ├── Navbar.tsx        # Navigation
│   ├── Hero.tsx          # Hero carousel
│   ├── Footer.tsx        # Footer
│   └── ...               # Other components
└── public/scr/           # Your images
```

## Tips

- **Hot Reload**: Changes appear instantly in browser
- **TypeScript**: Get autocomplete and type checking
- **Tailwind**: Use utility classes for styling
- **Components**: Reusable pieces of UI

---

Happy coding! 🚀
