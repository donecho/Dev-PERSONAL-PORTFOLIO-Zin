import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern, fully responsive fashion ecommerce web application built with Next.js + React, showcasing a dynamic product catalog, interactive UI, and seamless shopping experience. This project demonstrates my ability to design and implement real-world features such as product browsing, category filtering, shopping cart, checkout flows, and user-friendly UI — while prioritizing performance, responsiveness, and usability across devices.",
    image: "/public/projects/image/fashion.png",
    tags: ["React/Next.js", "Thaiwind", "Lucide-React", "Vercel"],
    link: "https://ecommerce-fashion-5id2xlys2-done-chos-projects.vercel.app/",
    github: "https://github.com/donecho/Ecommerce-Fashion-X",
  },
   {
    title: "Library-System",
    description:
      " Library Collections is a modern web-based library management system that allows users to browse and manage book collections efficiently. The application provides a clean and responsive user interface with role-based access control for administrative management. This project demonstrates full CRUD functionality, structured component architecture, and secure authentication handling.Key: User Feature: View Book Collection,Search Books, Download PDF, Fully Responsive Design | Admin Panel: CRUD books and Manage overall library data like user data, Notes: admin@gmail.com and Admin1234 can check admin panel",
    image: "/public/projects/image/lib.png",
    tags: ["React","TailwindCSS, Reacter Router DOM","State Management - Context API, Zustand", 
      "Backend - Nodje.js,Express, MognoDB",
      "Deploy with vercel"
    ],
    link: "https://library-collections.vercel.app/",
    github: "https://github.com/donecho/library-collections",
  },

  {
    title: "Saas Dashboard",
    description:
      "A modern SaaS Admin Dashboard web application built with modern frontend technologies, designed to provide a responsive, data-driven interface for managing users, analytics, reports, and system controls. The dashboard emphasizes clean UI design, scalable structure, and reusable components — ideal for real-world admin or SaaS applications supporting business operations.",
    image: "/public/projects/image/sass.png",
    tags: ["Frontend - Vue.js / React / Next.js","Icons & UI -Lucide, Heroicons or similar", "State Management - Redux / Context API / Vue Composition API"],
    link: "https://sass-admin-dashboard-pali.vercel.app/",
    github: "https://github.com/donecho/sass-admin-dashboard",
  },
  {
    title: "Persoanl Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React, TVite, and Tailwind CSS. Features smooth animations and project showcase. Key - Responsive Design, Contact Form Intergration",
    image: "/projects/project4.png",
    tags: ["React","Vite","Tailwind"],
    link: "https://your-weather-app.netlify.app/",
    github: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Real-Time Weather",
    description:
      "A weather application that provides real-time weather data using OpenWeatherMap API. Features location-based weather, 5-day forecast, and responsive design. Key Features: Real-Time weather data nd Location-based forecasts",
    image: "/projects/project4.png",
    tags: ["React","OpenWeatherMap API","CSS3","Chart.js"],
    link: "https://your-weather-app.netlify.app/",
    github: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Food Ordering Web",
    description:
      "A full-stack food ordering web application that enables users to browse menus, select food items, add them to a cart, and complete orders seamlessly. Built with modern frontend and backend technologies, it showcases real-world capabilities such as responsive UI, dynamic data interaction, and user-centric design.",
    image: "/projects/project4.png",
    tags: ["React/Vue/Next.js/Thaiwind CSS/Vite","Node.js,Express","MongoDB","JWT","Vercel"],
    link: "https://food-ordering-system.onrender.com/",
    github: "https://github.com/yourusername/food-ordering-system/",
  },
];

export const Projects = () => {
  return (
    
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line break-words">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          {/* <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton> */}
        </div>
      </div>
    </section>
  );
};