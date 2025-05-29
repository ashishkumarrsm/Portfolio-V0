# Modern Portfolio Website

A sleek, responsive portfolio website built with Next.js, featuring a modern design, dark mode support, and smooth animations.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## 🌟 Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Dark Mode**: Built-in dark mode support with system preference detection
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed and performance
- **Accessibility**: Built with accessibility in mind
- **Animations**: Smooth transitions and hover effects
- **SEO Friendly**: Built-in SEO optimization

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Dark Mode**: [next-themes](https://github.com/pacocoursey/next-themes)
- **UI Components**: Custom components with shadcn/ui
- **Animations**: CSS animations and transitions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Theme Colors

The project uses a custom color scheme with purple and rose gradients. You can modify the colors in:

- `app/globals.css`: For global color variables
- `tailwind.config.js`: For Tailwind color configuration

### Content

Update the content in:
- `app/page.tsx`: Main page content
- `components/`: Custom components
- `public/`: Static assets

### Dark Mode

Dark mode is implemented using `next-themes`. The theme toggle is available in the header.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Performance Optimizations

- Image optimization with Next.js
- CSS purging with Tailwind
- Lazy loading of components
- Optimized animations

## 📄 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   └── theme-toggle.tsx
├── public/
│   └── assets/
├── styles/
│   └── animations.css
└── package.json
```

## 🎯 Features in Detail

### Header
- Responsive navigation
- Dark mode toggle
- Mobile menu
- Smooth transitions

### Hero Section
- Gradient text effects
- Animated background
- Call-to-action buttons
- Social media links

### Projects Section
- Grid layout
- Hover animations
- Technology badges
- Project cards

### Skills Section
- Icon-based display
- Hover effects
- Responsive grid
- Category organization

## 🔧 Development

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Commands
```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [shadcn/ui](https://ui.shadcn.com/) 