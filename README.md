# LensCraft Studio | Professional Photography & Cinematography

A high-end, futuristic portfolio and business website for **LensCraft Studio**, a premium photography and cinematography service based in Jaffna, Sri Lanka. This application features advanced UI/UX, 3D animations, and a fully responsive design.

## 🚀 Key Features

- **3D Interactive Hero Section**: Features a high-fidelity 3D camera model rendered with React Three Fiber, including interactive lighting and floating atmosphere elements.
- **Cinematic UI/UX**: Built with Framer Motion for smooth transitions, staggered animations, and premium glassmorphism aesthetics.
- **Dynamic Portfolio**: Categorized photographic works with a professional lightbox viewer and smooth filtering systems.
- **Service Listings**: Detailed breakdown of studio offerings with localized Sri Lankan pricing (LKR) and localized content.
- **Fully Responsive Architecture**: Meticulously optimized for all screen sizes (Mobile, Tablet, Desktop) with touch-friendly elements and proper viewport handling.
- **Integrated Booking System**: Streamlined contact form and direct WhatsApp integration for client inquiries.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Logic**: [TypeScript](https://www.typescriptlang.org/)
- **3D Engine**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) / [Three.js](https://threejs.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (Custom Variable Design System)

## 💻 Development Workflow

### Prerequisites
- Node.js (v18 or later)
- npm or yarn

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/kanujan21/studio.git
cd studio
npm install
```

### 2. Development Server
Start the development server with HMR:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### 3. Build & Production
To create a production-optimized build:
```bash
npm run build
```
The output will be in the `dist/` folder. You can preview the production build locally using:
```bash
npm run preview
```

## 📂 Project Structure

- `src/components/3d`: High-fidelity 3D models and Canvas components.
- `src/components/atoms`: Small, reusable UI components (Buttons, etc.).
- `src/components/organisms`: Large page sections (Hero, Portfolio, Team, etc.).
- `src/assets`: Static images and global assets.
- `src/index.css`: Global design system, color tokens, and utility classes.

## 📄 License
© 2026 LensCraft Studio. All rights reserved. Created for premium creative businesses.

