# IELTS Course Application

This is a Next.js application designed to provide an interactive platform for IELTS course content. It leverages Next.js's server and client components for optimized performance and user experience.

## Features

- **Dynamic Content Display**: Utilizes Next.js server components for initial page rendering and client components for interactive elements.
- **Conditional Banners**: Displays banners based on URL parameters, with a dismissible option.
- **Responsive Design**: Optimized for various screen sizes, including desktop and mobile.
- **Image Handling**: Configured to correctly display local images in development and production environments, including GitHub Pages deployments.
- **API Integration**: Integrates with a course API for fetching and displaying course-related data.

## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/ielts-course-app.git
    cd ielts-course-app
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Usage

### Development Server

To run the application in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
```

This command creates an optimized production build in the `.next` directory.

### Running Production Build

To start the production server:

```bash
npm run start
```

## Deployment

This application is configured for static export, making it suitable for deployment on platforms like GitHub Pages.

### GitHub Pages Deployment

1.  Ensure `next.config.js` has `output: 'export'`, `trailingSlash: true`, and `basePath` configured for your repository name (e.g., `/ielts-course-app`).
2.  The `publicRuntimeConfig` in `next.config.js` exposes `basePath` to client-side components.
3.  Images are referenced with the `basePath` prepended to their `src` attributes in components like `ConditionalBanner.tsx`, `Header.tsx`, and `HeroSection.tsx`.
4.  The `ConditionalBanner`'s close button navigation uses `usePathname()` to correctly handle the `basePath`.

## Project Structure

-   `src/app`: Next.js App Router entry points.
-   `src/components`: Reusable UI components, including `ui` for generic elements and `sections` for page sections.
-   `src/contexts`: React Context API for global state management (e.g., `LanguageContext`).
-   `src/store`: Redux Toolkit store for state management and API integration.
-   `src/utils`: Utility functions and type definitions.
-   `public`: Static assets like images and fonts.

## Recent Fixes and Improvements

During recent development, the following key issues were addressed:

-   **Next.js Build Error (`useSearchParams`)**: Resolved a build error related to `useSearchParams()` not being wrapped in a Suspense boundary. The `ConditionalBanner` component, which uses this hook, was wrapped in a `Suspense` boundary within `src/components/IELTSCoursePageServer.tsx`.
-   **Local Images Not Displaying on GitHub Pages**: Fixed by:
    -   Configuring `next.config.js` to expose `basePath` via `publicRuntimeConfig`.
    -   Updating `src/components/ui/ConditionalBanner.tsx`, `src/components/sections/Header.tsx`, and `src/components/sections/HeroSection.tsx` to prepend the `basePath` to image `src` attributes.
-   **Conditional Banner 404 on Close Button**: Addressed a 404 error occurring when the conditional banner's close button was clicked on GitHub Pages. This was resolved by changing the URL construction in `src/components/ui/ConditionalBanner.tsx` to use `usePathname()` instead of `window.location.pathname` for correct `basePath` handling during navigation.

These changes ensure the application builds successfully and functions correctly when deployed to GitHub Pages, with all images and navigation working as expected.
