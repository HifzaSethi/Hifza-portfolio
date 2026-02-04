import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Globe,
  Menu,
  X,
} from "lucide-react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans">
      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            HS
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <a
              href="#about"
              className="text-sm hover:text-indigo-600 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-indigo-600 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-sm hover:text-indigo-600 transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm hover:text-indigo-600 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm hover:text-indigo-600 transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm hover:text-indigo-600 transition-colors duration-200"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-60"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
          <div
            className="absolute top-40 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-30 max-w-4xl w-full flex flex-col items-center">
          <div className="inline-block mb-6 px-3 sm:px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-medium shadow-sm">
            Available for Full-Time Opportunities
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-700 bg-clip-text text-transparent leading-tight">
            Hifza Sethi
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-700 mb-6 font-light">
            Full Stack Developer
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Final year Computer Science student specializing in building
            scalable, modern web applications with the{" "}
            <span className="font-semibold text-indigo-600">MERN stack</span>.
            Passionate about clean code, intuitive UX, and solving complex
            problems.
          </p>

          {/* Buttons Container */}
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap mb-16 relative z-40">
            {/* GitHub */}
            <a
              href="https://github.com/HifzaSethi"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base font-medium hover:scale-105 transform"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-black font-medium">GitHub</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/hifza-sethi-5aaa48357"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base font-medium hover:scale-105 transform"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-white font-medium">LinkedIn</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>

            {/* Contact Me */}
            <a
              href="mailto:hifzasethi@gmail.com"
              className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-gray transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base font-medium hover:scale-105 transform"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200" />
              <span className="font-medium transition-colors duration-200">
                Contact Me
              </span>
            </a>
          </div>

          {/* Downward Arrow - Now properly positioned below buttons */}
          <a
            href="#about"
            className="animate-bounce cursor-pointer hover:text-indigo-600 transition-colors duration-200 relative z-40"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-8 h-8 text-slate-400 hover:text-indigo-600 transition-colors duration-200" />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">
                About Me
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                I'm a passionate full-stack developer pursuing my BS in Computer
                Science at Islamia College Peshawar with a{" "}
                <span className="font-semibold text-indigo-600">3.9 CGPA</span>.
                I thrive on turning complex problems into elegant, user-friendly
                solutions.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                With hands-on experience in modern web technologies and a strong
                foundation in computer science fundamentals, I'm ready to
                contribute to innovative projects and continue growing as a
                software engineer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <StatCard icon={Code2} label="Projects Built" value="15+" />
              <StatCard icon={Terminal} label="Technologies" value="12+" />
              <StatCard icon={Globe} label="Internships" value="2" />
              <StatCard icon={Database} label="CGPA" value="3.9" />
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-slate-900">
            Tech Stack
          </h2>
          <p className="text-slate-600 text-center mb-12 text-sm sm:text-base max-w-2xl mx-auto">
            Technologies I work with daily to build modern, scalable
            applications
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            <SkillCard
              name="React"
              icon={<ReactIcon />}
              color="from-cyan-400 to-blue-500"
            />
            <SkillCard
              name="Next.js"
              icon={<NextIcon />}
              color="from-slate-700 to-slate-900"
            />
            <SkillCard
              name="JavaScript"
              icon={<JsIcon />}
              color="from-yellow-400 to-yellow-500"
            />
            <SkillCard
              name="TypeScript"
              icon={<TsIcon />}
              color="from-blue-500 to-blue-600"
            />
            <SkillCard
              name="Tailwind"
              icon={<TailwindIcon />}
              color="from-cyan-400 to-blue-400"
            />
            <SkillCard
              name="Node.js"
              icon={<NodeIcon />}
              color="from-green-500 to-green-600"
            />
            <SkillCard
              name="Express"
              icon={<Server className="w-5 h-5 sm:w-6 sm:h-6" />}
              color="from-slate-600 to-slate-700"
            />
            <SkillCard
              name="MongoDB"
              icon={<MongoIcon />}
              color="from-green-600 to-green-700"
            />
            <SkillCard
              name="Git"
              icon={<GitIcon />}
              color="from-orange-500 to-red-500"
            />
            <SkillCard
              name="Python"
              icon={<PythonIcon />}
              color="from-blue-400 to-yellow-400"
            />
            <SkillCard
              name="Flask"
              icon={<Code2 className="w-5 h-5 sm:w-6 sm:h-6" />}
              color="from-slate-700 to-slate-800"
            />
            <SkillCard
              name="REST API"
              icon={<Globe className="w-5 h-5 sm:w-6 sm:h-6" />}
              color="from-indigo-500 to-purple-600"
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-center mb-8 sm:mb-12 text-sm sm:text-base">
            A selection of my recent work
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              desc="Full-stack e-commerce solution with user authentication, shopping cart, order management, and admin dashboard. Features include product filtering, payment integration, and real-time inventory tracking."
              tech={["React", "Node.js", "Express", "MongoDB"]}
              links={[
                {
                  label: "Frontend",
                  url: "https://github.com/HifzaSethi/Multi-Product-Ecommerce-Platform-Frontend-",
                },
                {
                  label: "Backend",
                  url: "https://github.com/HifzaSethi/Multi-Product-Ecommerce-Platform-Backend",
                },
              ]}
              gradient="from-pink-500 to-rose-500"
            />

            <ProjectCard
              title="AI Mental Health Detection"
              desc="Emotion detection system using Convolutional Neural Networks for real-time facial expression analysis. Provides AI-powered feedback and mental health insights with 85% accuracy."
              tech={["Python", "OpenCV", "TensorFlow", "Flask"]}
              links={[
                {
                  label: "GitHub",
                  url: "https://github.com/HifzaSethi/Mind-Haven",
                },
              ]}
              gradient="from-purple-500 to-indigo-500"
            />

            <ProjectCard
              title="Modern Music Player"
              desc="Sleek music player with playlist management, audio visualization, and responsive design. Built with modern web technologies for optimal performance and user experience."
              tech={["Next.js", "TypeScript", "Tailwind CSS"]}
              links={[
                {
                  label: "GitHub",
                  url: "https://github.com/HifzaSethi/rhombixtechnologies_tasks/tree/main/MusicPlayer",
                },
              ]}
              gradient="from-cyan-500 to-blue-500"
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Experience
          </h2>

          <div className="relative border-l-2 border-indigo-200 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
            <ExperienceCard
              role="Web Development Intern"
              company="Rhombix Technologies"
              period="2025"
              color="bg-green-500"
              achievements={[
                "Developed responsive web applications using modern frameworks and best practices",
                "Collaborated with cross-functional teams using Git for version control",
                "Implemented UI components and integrated RESTful APIs",
                "Gained hands-on experience with real-world client projects",
              ]}
            />

            <ExperienceCard
              role="Frontend Development Intern"
              company="Nexora"
              period="2024"
              color="bg-blue-500"
              achievements={[
                "Built responsive user interfaces with React and Tailwind CSS",
                "Developed reusable component libraries to improve development efficiency",
                "Integrated third-party APIs and managed application state",
                "Participated in code reviews and agile development processes",
              ]}
            />
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
            Education
          </h2>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-indigo-100">
            <div className="inline-block p-3 sm:p-4 bg-white rounded-full mb-3 sm:mb-4 shadow-md">
              <Layout className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              BS Computer Science
            </h3>
            <p className="text-slate-600 mb-3 text-sm sm:text-base">
              Islamia College Peshawar
            </p>
            <div className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-full font-semibold text-sm sm:text-base">
              CGPA: 3.9 / 4.0
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-indigo-100 mb-6 sm:mb-8 text-base sm:text-lg px-4">
            I'm currently seeking full-time opportunities where I can
            contribute, learn, and grow. Let's connect!
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap mb-6 sm:mb-8 px-4">
            <a
              href="mailto:hifzasethi@gmail.com"
              className="group px-4 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 rounded-lg hover:bg-slate-50 transition flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">hifzasethi@gmail.com</span>
              <span className="sm:hidden">Email Me</span>
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/HifzaSethi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-200 transition"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/hifza-sethi-5aaa48357"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-200 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-slate-900 text-slate-400 text-center text-xs sm:text-sm">
        <p>© 2025 Hifza Sethi. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

// COMPONENTS
function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 rounded-xl border border-indigo-100 hover:shadow-lg transition">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mb-2 sm:mb-3" />
      <p className="text-2xl sm:text-3xl font-bold text-slate-900">{value}</p>
      <p className="text-xs sm:text-sm text-slate-600">{label}</p>
    </div>
  );
}

function SkillCard({ name, icon, color }) {
  return (
    <div className="group bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm hover:shadow-lg transition-all border border-slate-200 hover:border-transparent">
      <div
        className={`bg-gradient-to-r ${color} p-2 sm:p-2.5 rounded-md sm:rounded-lg inline-block mb-2 text-white group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
        {name}
      </h3>
    </div>
  );
}

function ProjectCard({ title, desc, tech, links, gradient }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-slate-100 flex flex-col">
      <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${gradient}`}></div>
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-900">
          {title}
        </h3>
        <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed flex-1 text-sm sm:text-base">
          {desc}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2 sm:gap-3 flex-wrap">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-xs sm:text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {link.label}
              <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ role, company, period, color, achievements }) {
  return (
    <div className="relative">
      <div
        className={`absolute -left-[1.65rem] sm:-left-[2.4rem] w-4 h-4 sm:w-5 sm:h-5 ${color} rounded-full border-3 sm:border-4 border-white`}
      ></div>
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition border border-slate-200">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">{role}</h3>
        <p className="text-indigo-600 font-medium mb-1 text-sm sm:text-base">
          {company}
        </p>
        <p className="text-slate-500 text-xs sm:text-sm mb-3 sm:mb-4">
          {period}
        </p>
        <ul className="space-y-1.5 sm:space-y-2">
          {achievements.map((achievement, idx) => (
            <li
              key={idx}
              className="text-slate-600 text-xs sm:text-sm flex items-start gap-2"
            >
              <span className="text-indigo-600 mt-0.5 sm:mt-1">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// SVG ICONS - Optimized sizes
function ReactIcon() {
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="2" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(-60 12 12)"
      />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11.5 0C5.15 0 0 5.15 0 11.5S5.15 23 11.5 23 23 17.85 23 11.5 17.85 0 11.5 0zm6.4 16.6l-4.5-6.3v6.3h-1.6V6.4h1.6l4.5 6.3V6.4h1.6v10.2h-1.6z" />
    </svg>
  );
}

function JsIcon() {
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  );
}

function TsIcon() {
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.934 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.244-.651-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.993.012-.016 1.913-.024 4.217-.02l4.195.012z" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11.998 0c-.35 0-.701.1-.998.297L2.637 5.533c-.595.394-.998 1.093-.998 1.808v9.318c0 .715.403 1.414.998 1.808l8.363 5.236c.297.197.648.297.998.297s.701-.1.998-.297l8.363-5.236c.595-.394.998-1.093.998-1.808V7.34c0-.715-.403-1.414-.998-1.808L12.996.297C12.699.1 12.348 0 11.998 0zm0 2.001c.134 0 .269.038.38.115l7.244 4.532-3.238 2.023-4.386-2.741-4.386 2.741-3.238-2.023 7.244-4.532c.111-.077.246-.115.38-.115zm-7.624 7.164l3.628 2.268v4.536l-3.628-2.268V9.165zm6.628 2.268l3.628 2.268v4.536l-3.628-2.268v-4.536z" />
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.814-3.567 4.48-9.685-.002-.027-.013-.052-.016-.078-.024-.15-.03-.3-.03-.45-.007-.21-.018-.42-.05-.63z" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
    </svg>
  );
}
