# Customization Guide

Easy guide to customize your IAAAACAME website.

## 🎨 Changing Colors

### Method 1: Tailwind Config (Recommended)
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#004080",  // Main blue color
    dark: "#003366",     // Darker blue
    light: "#0066cc",    // Lighter blue
  },
  accent: {
    DEFAULT: "#dc2626",  // Main red color
    dark: "#b91c1c",     // Darker red
  },
}
```

### Method 2: Global CSS
Edit `app/globals.css`:

```css
:root {
  --primary: 0 64 128;      /* RGB values */
  --primary-dark: 0 51 102;
  --primary-light: 0 102 204;
}
```

## 📝 Updating Content

### Home Page
Edit `app/page.tsx` - This imports all components

### Hero Carousel
Edit `components/Hero.tsx`:

```typescript
const slides = [
  {
    image: "/scr/your-image.jpg",
    title: "Your Title",
    subtitle: "Your subtitle",
    cta: "Button Text",
    link: "#section",
  },
  // Add more slides...
];
```

### Welcome Section
Edit `components/WelcomeSection.tsx`:

```typescript
<h2>Your Heading</h2>
<p>Your welcome message...</p>
```

### Projects
Edit `components/Projects.tsx`:

```typescript
const projects = [
  {
    image: "/scr/project-image.jpg",
    title: "Project Name",
    description: "Project description...",
  },
  // Add more projects...
];
```

### Impact Counter
Edit `components/ImpactCounter.tsx`:

```typescript
const stats = [
  {
    icon: "🎓",
    number: 5000,
    label: "Your Label",
    description: "Your description",
  },
  // Add more stats...
];
```

## 🖼️ Adding/Changing Images

### Step 1: Add Image
Place your image in `public/scr/` folder

### Step 2: Reference Image
Use the path `/scr/your-image.jpg` in components

### Example:
```typescript
<Image
  src="/scr/your-new-image.jpg"
  alt="Description"
  fill
  className="object-cover"
/>
```

## 📧 Contact Information

### Email & Phone
Edit `components/Footer.tsx` and `app/contact/page.tsx`:

```typescript
<li>📧 your-email@domain.com</li>
<li>📞 +1 (XXX) XXX-XXXX</li>
```

### Office Addresses
Edit `app/contact/page.tsx`:

```typescript
<p>
  Your Office Name<br />
  Street Address<br />
  City, State, Country
</p>
```

## 🔗 Navigation Links

### Adding New Page
1. Create folder in `app/`: `app/new-page/`
2. Create `page.tsx` inside it
3. Add link to `components/Navbar.tsx`:

```typescript
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/new-page", label: "New Page" }, // Add this
  { href: "/contact", label: "Contact" },
];
```

## 🎭 Fonts

### Change Font Family
Edit `app/layout.tsx`:

```typescript
import { Roboto } from "next/font/google";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
});
```

## 📱 Social Media Links

Edit `components/Footer.tsx`:

```typescript
<a href="https://facebook.com/your-page">
  <FaFacebook size={24} />
</a>
<a href="https://twitter.com/your-handle">
  <FaTwitter size={24} />
</a>
```

## 🎨 Styling Components

### Using Tailwind Classes
```typescript
<div className="bg-primary text-white p-8 rounded-lg">
  Your content
</div>
```

### Common Classes:
- **Spacing**: `p-4` (padding), `m-4` (margin)
- **Colors**: `bg-primary`, `text-white`
- **Sizing**: `w-full`, `h-64`
- **Flex**: `flex`, `items-center`, `justify-center`
- **Grid**: `grid`, `grid-cols-3`, `gap-4`
- **Rounded**: `rounded-lg`, `rounded-full`
- **Shadow**: `shadow-lg`, `shadow-2xl`

## 📊 Meta Tags & SEO

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your description",
  keywords: ["keyword1", "keyword2"],
};
```

### Page-Specific Meta
Add to individual page files:

```typescript
export const metadata = {
  title: "About - Your Site",
  description: "About page description",
};
```

## 🎬 Animations

### Tailwind Animations
```typescript
<div className="animate-fade-in-up">
  Content with fade-in animation
</div>
```

### Custom Animations
Edit `tailwind.config.ts`:

```typescript
animation: {
  "your-animation": "yourKeyframe 1s ease-out",
},
keyframes: {
  yourKeyframe: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
}
```

## 🔘 Buttons

### Primary Button
```typescript
<button className="btn-primary">
  Click Me
</button>
```

### Secondary Button
```typescript
<button className="btn-secondary">
  Click Me
</button>
```

### Custom Button
```typescript
<button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-all">
  Custom Button
</button>
```

## 📋 Forms

### Adding Form Fields
```typescript
<div>
  <label htmlFor="field" className="block text-gray-700 font-medium mb-2">
    Field Label
  </label>
  <input
    type="text"
    id="field"
    name="field"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
  />
</div>
```

## 🌐 Domain & URLs

### Update Base URL
Edit `app/robots.ts` and `app/sitemap.ts`:

```typescript
const baseUrl = 'https://your-domain.com'
```

## 📦 Adding New Dependencies

```bash
# Install package
npm install package-name

# Install dev dependency
npm install -D package-name
```

### Common Packages:
```bash
# Form validation
npm install react-hook-form

# Date handling
npm install date-fns

# API calls
npm install axios

# State management
npm install zustand
```

## 🎯 Quick Customization Checklist

- [ ] Update colors in `tailwind.config.ts`
- [ ] Replace logo in `public/scr/IAACAAME.jpg`
- [ ] Update hero carousel images and text
- [ ] Modify welcome section content
- [ ] Update founder profile and image
- [ ] Add/modify project cards
- [ ] Update impact counter statistics
- [ ] Change contact information
- [ ] Update footer links and social media
- [ ] Modify meta tags for SEO
- [ ] Update domain in robots.ts and sitemap.ts

## 💡 Tips

1. **Test Changes**: Always check on mobile and desktop
2. **Use TypeScript**: It helps catch errors early
3. **Keep Backups**: Commit changes to Git regularly
4. **Optimize Images**: Use WebP format when possible
5. **Check Accessibility**: Test with keyboard navigation
6. **Performance**: Run `npm run build` to check bundle size

## 🆘 Common Issues

### Image Not Showing
- Check path starts with `/scr/`
- Verify image exists in `public/scr/`
- Check file name spelling

### Styling Not Applied
- Restart dev server: `npm run dev`
- Check Tailwind class names
- Clear browser cache

### TypeScript Errors
- Check import paths
- Verify prop types
- Run `npm run lint`

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [React Icons](https://react-icons.github.io/react-icons/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

Need more help? Check the other documentation files or contact support!
