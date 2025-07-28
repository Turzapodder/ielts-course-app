# IELTS Course App

A modern, responsive web application for IELTS course management built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎯 Dynamic course content management
- 📱 Responsive design for all devices
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time data fetching with Redux Toolkit Query
- 📊 Interactive components and carousels
- 🎓 Course enrollment and CTA sections

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ielts-course-app.git
cd ielts-course-app
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

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured with GitHub Actions for automatic deployment:

1. **Update the repository URL** in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/ielts-course-app"
   ```

2. **Update the basePath** in `next.config.js` if your repository name is different:
   ```javascript
   basePath: '/your-repo-name',
   assetPrefix: '/your-repo-name/',
   ```

3. **Push to main branch** - GitHub Actions will automatically build and deploy

4. **Enable GitHub Pages** in your repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### Manual Deployment

Alternatively, you can deploy manually:

```bash
# Build and deploy
npm run deploy
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── sections/        # Page sections
│   └── ui/             # Reusable UI components
├── store/              # Redux store and API
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Redux Toolkit Query** - Data fetching
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
