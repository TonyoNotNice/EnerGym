# ENERGYM - Modern Gym Website

A sleek, responsive gym website built with Next.js, TypeScript, and Tailwind CSS. Features modern design, smooth animations, and comprehensive sections for gym services.

## 🚀 Features

- **Responsive Design**: Optimized for all devices
- **Modern UI**: Built with Tailwind CSS and Radix UI components
- **Smooth Animations**: Scroll-triggered animations for enhanced UX
- **SEO Optimized**: Server-side rendering with Next.js
- **Fast Performance**: Optimized images and lazy loading
- **Accessibility**: WCAG compliant components

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Analytics**: Vercel Analytics

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gym-website-design
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── membership/        # Membership page
│   ├── programs/          # Programs page
│   ├── trainers/          # Trainers page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── hero.tsx          # Hero section
│   ├── testimonials.tsx  # Testimonials section
│   ├── pricing.tsx       # Pricing section
│   └── ...
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── styles/               # Additional styles
```

## 🎨 Components

### Core Components
- **Hero**: Full-screen hero with background image and CTA
- **Testimonials**: Customer reviews with star ratings
- **Pricing**: Membership plans and pricing
- **Programs**: Gym programs (Strength, HIIT, Personal Training, Group Classes)
- **Trainers**: Trainer profiles with specializations
- **Contact**: Contact form and location

### UI Components
- Button, Card, Dialog, Form, Input, etc. (Radix UI based)

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
Build the project:
```bash
npm run build
```

The built files will be in the `.next` folder.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Scroll Animations
Components use a custom `useScrollAnimate` hook for smooth entrance animations when elements come into view.

### Image Optimization
All images are optimized using Next.js Image component with proper sizing and lazy loading.

### Responsive Design
Mobile-first approach with Tailwind CSS breakpoints for optimal display on all devices.

### Form Handling
Contact forms use React Hook Form with Zod validation for robust form handling.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For questions or support, please contact us through the website's contact form.</content>
<parameter name="filePath">c:\Users\HP\Downloads\gym-website-design (1)\README.md