
# Debbie's Crunchy – Gourmet Handcrafted Snacks

## Overview

Debbie's Crunchy is a modern web application for a gourmet snack brand, offering handcrafted snacks made with exotic spices and fresh ingredients. The site provides a seamless shopping experience, product highlights, testimonials, and easy ordering.

**URL**: https://debbies-crunchy.vercel.app/

## Features

- Responsive, mobile-friendly design
- Product showcase with images and descriptions
- Customer testimonials
- Order modal for quick purchases
- Modern UI components (shadcn-ui)
- Fast performance with Vite

## Tech Stack

- **React** (TypeScript)
- **Vite**
- **Tailwind CSS**
- **shadcn-ui**

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or bun

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd debbies-crunchy

# Install dependencies
npm install
# or
bun install
```

### Running the Development Server

```sh
npm run dev
# or
bun run dev
```
Visit `http://localhost:5173` in your browser.

### Building for Production

```sh
npm run build
# or
bun run build
```

### Preview Production Build

```sh
npm run preview
# or
bun run preview
```

## Project Structure

```
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and media
│   ├── components/        # React components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   └── App.tsx            # Main app component
├── index.html             # HTML entry point
├── package.json           # Project metadata and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
└── vite.config.ts         # Vite configuration
```

## Scripts

- `dev` – Start development server
- `build` – Build for production
- `preview` – Preview production build

## Deployment

You can deploy the production build to any static hosting provider (e.g., Vercel, Netlify, GitHub Pages). Upload the contents of the `dist/` directory after running the build command.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the project maintainer.
