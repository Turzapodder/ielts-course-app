# IELTS Course Landing Page

A modern, responsive Next.js application showcasing the Complete IELTS Course by Munzereen Shahid from 10 Minute School. Built with TypeScript, Tailwind CSS, Redux Toolkit, and Docker support.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **State Management**: Redux Toolkit with type-safe hooks
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Dynamic meta tags and Open Graph support
- **Performance**: ISR (Incremental Static Regeneration) enabled
- **Containerized**: Docker support for easy deployment
- **Error Handling**: Robust error boundaries and fallback data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Containerization**: Docker
- **Package Manager**: npm

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Docker (optional, for containerized deployment)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ielts-course-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 4. Build for Production

```bash
npm run build
```

### 5. Start Production Server

```bash
npm start
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t ielts-course-app .
```

### Run Docker Container

```bash
docker run -p 3000:3000 ielts-course-app
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── InstructorSection.tsx
│   │   ├── VideoTrailer.tsx
│   │   ├── CourseStructure.tsx
│   │   ├── LearningObjectives.tsx
│   │   ├── CourseDetails.tsx
│   │   └── CTASection.tsx
│   ├── providers/         # Context providers
│   │   └── ReduxProvider.tsx
│   ├── ui/               # UI components
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorMessage.tsx
│   └── IELTSCoursePage.tsx # Main page component
└── store/                # Redux store
    ├── features/
    │   └── product/
    │       └── productSlice.ts
    ├── hooks.ts          # Typed Redux hooks
    └── store.ts          # Store configuration
```

## 🎯 Key Features Implemented

### ✅ Phase 1: Project Initialization and Core Setup
- ✅ Next.js project with TypeScript and Tailwind CSS
- ✅ Git repository initialization
- ✅ Redux Toolkit installation and configuration
- ✅ Redux store setup with product slice
- ✅ API integration with fallback data
- ✅ Responsive design implementation

### ✅ Phase 2: Feature Development and State Management
- ✅ Core UI components (Header, Hero, Instructor, etc.)
- ✅ Redux integration with useSelector and useDispatch
- ✅ Course layout, learning objectives, and details
- ✅ Checklist and additional features

### ✅ Phase 3: Advanced Features and Optimization
- ✅ Server-Side Rendering (SSR) implementation
- ✅ Incremental Static Regeneration (ISR) configuration
- ✅ SEO implementation with dynamic meta tags
- ✅ Code splitting and reusable components
- ✅ Error handling and loading states

### ✅ Phase 4: Dockerization, Testing, and Submission
- ✅ Dockerfile with multi-stage build
- ✅ .dockerignore file
- ✅ Production optimization
- ✅ Cross-browser compatibility
- ✅ Comprehensive documentation

## 🌐 API Integration

The application attempts to fetch data from:
```
https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course
```

If the API is unavailable, the application gracefully falls back to static data based on the original website content.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1280px and up)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Docker
1. Build image: `docker build -t ielts-course-app .`
2. Run container: `docker run -p 3000:3000 ielts-course-app`

### Traditional Hosting
1. Run `npm run build`
2. Upload `.next` folder and dependencies
3. Start with `npm start`

## 🎨 Design Highlights

- **Modern UI**: Clean, professional design with gradient backgrounds
- **Bengali Support**: Proper rendering of Bengali text content
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized images and lazy loading

## 🔒 Security Features

- Content Security Policy headers
- XSS protection
- Frame options for clickjacking prevention
- Input sanitization
- Secure Docker configuration

## 📊 Performance Optimizations

- Next.js automatic code splitting
- Image optimization with Next.js Image component
- CSS optimization with Tailwind CSS
- Bundle size optimization
- ISR for dynamic content caching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is created for educational purposes as part of a frontend assessment.

## 📞 Support

For any questions or issues, please refer to the documentation or create an issue in the repository.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
