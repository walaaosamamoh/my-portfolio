import nexaLearnImage from "../assets/projects/nexalearn-vqud.vercel.app_.png";
import kokiStoreImage from "../assets/projects/koki-store-gamma.vercel.app_.png";
import rayoCarsImage from "../assets/projects/raio-cars.vercel.app_.png";
import instaImage from "../assets/projects/insta.png";

export interface Project {
  slug: string;
  title: string;
  category: "React" | "Vue";
  description: string;
  longDescription: string[];
  image: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    slug: "nexalearn",
    title: "NexaLearn",
    category: "React",
    description:
      "An e-learning platform for exploring courses and accessing course details through a modern, responsive interface.",
    longDescription: [
      "NexaLearn is an e-learning platform built with React and TypeScript that allows users to explore courses, view detailed course information, and access a personalized learning dashboard.",
      "The platform includes a user dashboard where learners can view their enrolled courses, track their learning progress, and receive certificates upon completing courses. The frontend integrates with a GraphQL API powered by Apollo Server, while React Router handles navigation. Login and registration forms use TanStack Form and Zod for form management and validation.",
      "A key part of this project was integrating the React frontend with a GraphQL backend and deploying both the application and API. The project strengthened my experience with API integration, form validation, frontend architecture, and full-stack application deployment.",
    ],
    image: nexaLearnImage,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "GraphQL",
      "Apollo Server",
      "TanStack Form",
      "Zod",
    ],
    features: [
      "Browse available courses",
      "View detailed course information",
      "User dashboard for enrolled courses",
      "Track course completion progress",
      "Receive certificates upon course completion",
      "Login and registration forms with validation",
      "GraphQL API integration",
      "Responsive design",
    ],
    challenges: [
      "Integrating a React frontend with a GraphQL API",
      "Managing form validation and authentication flows",
      "Deploying the frontend and backend",
    ],
    githubUrl: "https://github.com/walaaosamamoh/nexalearn",
    liveUrl: "https://nexalearn-vqud.vercel.app/",
  },
  {
    slug: "koki-store",
    title: "Koki Store",
    category: "React",
    description:
      "An e-commerce application featuring product browsing, shopping cart functionality, checkout, and an admin dashboard.",
    longDescription: [
      "Koki Store is an e-commerce application with two sides: a customer-facing store and an admin dashboard. Customers can browse products by category, open product details, manage a shopping cart, and go through a checkout interface.",
      "On the admin side, the dashboard supports product and category management, and access is controlled with authentication and protected routes. Zustand handles shared state such as the cart, TanStack Query manages data fetching, and Zod provides schema validation for forms.",
    ],
    image: kokiStoreImage,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Router",
      "TanStack Query",
      "Zod",
    ],
    features: [
      "Browse products and categories",
      "View product details",
      "Manage shopping cart and checkout interface",
      "Admin dashboard with product and category management",
      "Authentication and protected routes",
      "Responsive design",
    ],
    challenges: [
      "Managing shared state across shopping cart and application views",
      "Organizing protected routes and admin functionality",
      "Building reusable components for multiple pages",
    ],
    githubUrl: "https://github.com/walaaosamamoh/Koki-Store",
    liveUrl: "https://koki-store-gamma.vercel.app/",
  },
  {
    slug: "rayo-cars",
    title: "Rayo Cars",
    category: "Vue",
    description:
      "A car dealership frontend project built with Vue, featuring a responsive interface and API-driven functionality for browsing and managing car listings.",

    longDescription: [
      "Rayo Cars is a car dealership web application I developed for a client. I independently handled the frontend development using Vue.js, JavaScript, Tailwind CSS, and Vite, with Pinia for state management and Axios for API integration.",

      "The customer-facing interface allows users to browse available cars, search by make or model, filter listings, and contact sellers directly through WhatsApp or phone calls. I also developed a seller dashboard where users can view, add, edit, and delete their car advertisements.",

      "The application supports both English and Arabic, providing a multilingual experience, and includes light and dark themes to accommodate different user preferences.",

      "The live demo uses sample data because the original backend is no longer available.",
    ],

    image: rayoCarsImage,
    technologies: [
      "Vue.js",
      "JavaScript",
      "Tailwind CSS",
      "Pinia",
      "Axios",
      "REST APIs",
      "Internationalization (i18n)",
      "Vite",
    ],

    features: [
      "Responsive car browsing interface",
      "Search cars by make or model",
      "Filter and explore car listings",
      "Direct seller contact through WhatsApp and phone calls",
      "Seller dashboard for managing car advertisements",
      "Add, view, edit, and delete car listings",
      "English and Arabic language support",
      "Light and dark theme switching",
      "Pinia state management and Axios REST API integration",
      "Demo data in the publicly accessible version",
    ],

    challenges: [
      "Developing customer-facing pages and a seller dashboard independently",
      "Implementing car search, filtering, and advertisement management workflows",
      "Supporting English and Arabic interfaces",
      "Implementing light and dark themes",
      "Integrating REST APIs and managing application state with Pinia",
    ],

    githubUrl: "https://github.com/walaaosamamoh/raio-cars",
    liveUrl: "https://raio-cars.vercel.app/",
  },
  {
    slug: "insta",
    title: "Insta",
    category: "Vue",
    description:
      "An Instagram-inspired social media interface built with Vue, featuring a feed, profiles, and interactive UI elements.",
    longDescription: [
      "Insta is an Instagram-inspired social media interface built with Vue. It includes a feed, profile pages, and interactive UI elements, with a responsive layout that works across screen sizes.",
      "The project uses Pinia for client-side state and Vue Router for page navigation, with Tailwind CSS for styling. It runs on local data with a demo authentication flow instead of a production backend, which kept the focus on frontend architecture and user experience.",
    ],
    image: instaImage,
    technologies: [
      "Vue.js",
      "JavaScript",
      "Pinia",
      "Vue Router",
      "Tailwind CSS",
    ],
    features: [
      "Social media feed interface",
      "Profile pages",
      "Client-side state management",
      "Demo authentication",
      "Responsive interface",
    ],
    challenges: [
      "Managing shared application state with Pinia",
      "Organizing pages and navigation with Vue Router",
      "Building interactive features using local data",
    ],
    githubUrl: "https://github.com/walaaosamamoh/Insta",
    liveUrl: "https://insta-phi-jet.vercel.app/",
  },
];
