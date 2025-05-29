import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center">
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
          <nav className="ml-auto flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground"
            >
              Projects
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="/resume" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Resume
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <Link href="/">
                <Button variant="ghost" className="gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                A collection of my work across various domains and technologies
              </p>
            </div>
            <div className="mt-8">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="web">Web Development</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
                  <TabsTrigger value="design">UI/UX Design</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {allProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="web" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {allProjects
                      .filter((project) => project.category === "web")
                      .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="mobile" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {allProjects
                      .filter((project) => project.category === "mobile")
                      .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="design" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {allProjects
                      .filter((project) => project.category === "design")
                      .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="mailto:alex@example.com">
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-video w-full bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
          <div className="flex h-full items-center justify-center text-neutral-500 dark:text-neutral-400">
            {project.title}
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

const allProjects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart functionality, and secure checkout.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "web",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and team collaboration.",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    category: "web",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "web",
  },
  {
    id: "4",
    title: "Fitness Tracker App",
    description: "A mobile application for tracking workouts, nutrition, and fitness progress.",
    technologies: ["React Native", "Redux", "Firebase"],
    category: "mobile",
  },
  {
    id: "5",
    title: "Weather Dashboard",
    description: "A weather application providing real-time forecasts and weather data visualization.",
    technologies: ["React", "Chart.js", "Weather API"],
    category: "web",
  },
  {
    id: "6",
    title: "Social Media App",
    description: "A social networking platform with user profiles, posts, and real-time messaging.",
    technologies: ["React Native", "Firebase", "Socket.io"],
    category: "mobile",
  },
  {
    id: "7",
    title: "Admin Dashboard UI",
    description: "A comprehensive admin interface design for managing users, content, and analytics.",
    technologies: ["Figma", "Adobe XD", "UI/UX"],
    category: "design",
  },
  {
    id: "8",
    title: "Recipe Sharing Platform",
    description: "A community-driven platform for sharing and discovering recipes.",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    category: "web",
  },
  {
    id: "9",
    title: "Mobile Banking App Design",
    description: "A clean and intuitive mobile banking application interface design.",
    technologies: ["Figma", "Sketch", "UI/UX"],
    category: "design",
  },
]
