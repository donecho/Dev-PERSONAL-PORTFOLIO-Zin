import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  Facebook,
  Instagram,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub Actions",
];

const frontend = [
"React",
"Vue.js",
"Next.js (Learning)",
"JavaScript",
"TypeScript (Learning)",
"Tailwind Css",
"Bootstrap"
]

const backend = [
  "Node.js",
  "Express.js",
  "Laravel",
  "Python",
  "Flask",
  "PHP",
  ""
]

const Tools =[
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "Docker",
  "AWS"
]

const Languages = [
  "Java",
  "C++"
]
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        {/* <img
          src="/hero-bg.png"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => {
          const size = 4 + Math.random() * 6; // random size
          const duration = 10 + Math.random() * 20;

          return (
            <div
              key={i}
              className="firefly"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `
                  firefly-float ${duration}s ease-in-out infinite,
                  firefly-blink ${2 + Math.random() * 3}s ease-in-out infinite
                `,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>


      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {" "}
                <span className="text-primary glow-text">Junior Software Engineer</span>
                <br />
                experiences
                <br />
                <span className="font-serif italic font-normal text-white">
                  
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                With  passionate Software Engineering student at Edinburgh Napier University with expertise in modern web development, machine learning, and cutting-edge technologies.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a href="/ZinPhyoThant_Resume.pdf">

                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                    Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Follow me:
              </span>

              {[
                { icon: Github, href: "https://github.com/donecho" },
                { icon: Instagram, href: "https://www.instagram.com/zin_phyo_thant_060?igsh=MWpjeDdtMnRjd2V5NA==" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/projects/image/profile-photo.jpg"
                  alt="Zin Phyo Thant"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Available Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="text-2xl font-bold text-primary">
                    3+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* Frontend */}
        <div className="mt-20">
          <p className=" text-sm text-muted-foreground mb-6 text-center">
            Frontend
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee">
              {[...frontend, ...frontend].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            
          </div>
        </div>  


        {/* Backend */}
        <div className="mt-20">
          <p className=" text-sm text-muted-foreground mb-6 text-center">
            Backend
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee">
              {[...backend, ...backend].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            
          </div>
        </div>       

         {/* Tools */}
        <div className="mt-20">
          <p className=" text-sm text-muted-foreground mb-6 text-center">
            Tools
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee">
              {[...Tools, ...Tools].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            
          </div>
        </div>     

      </div>
  
      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
