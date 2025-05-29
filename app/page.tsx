import Link from "next/link"
import { ArrowRight, Code, Github, Mail, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  ">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="font-bold text-xl bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400">
              Home
            </Link>
            <Link href="/projects" className="text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400">
              Projects
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400">
              About
            </Link>
            <Link href="/resume" className="text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400">
              Resume
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400">
              Contact
            </Link>
            <ThemeToggle />
          </nav>
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
                    Full Stack Developer
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
                    Hi, I'm Alex Chen
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I build exceptional digital experiences that are fast, accessible, and visually appealing.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/projects">
                    <Button className="gap-1 bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white">
                      View My Work
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                      Contact Me
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-4 mt-4">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="hover:bg-purple-100 dark:hover:bg-purple-900/30">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="mailto:alex@example.com">
                    <Button variant="ghost" size="icon" className="hover:bg-purple-100 dark:hover:bg-purple-900/30">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-rose-500 rounded-lg animate-gradient"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                    Your Profile Image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent work
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] duration-300">
                    <div className="aspect-video w-full bg-gradient-to-br from-purple-100 to-rose-100 dark:from-purple-900/50 dark:to-rose-900/50">
                      <div className="flex h-full items-center justify-center text-purple-700 dark:text-purple-300">
                        {project.title}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/projects">
                <Button variant="outline" className="gap-1 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Technologies and tools I work with
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <div className="text-center font-medium">{skill.name}</div>
                </div>
              ))}
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
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="mailto:alex@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

const featuredProjects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart functionality, and secure checkout.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and team collaboration.",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
]

const skills = [
  { name: "React", icon: Code },
  { name: "Next.js", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "Node.js", icon: Code },
  { name: "Tailwind CSS", icon: Code },
  { name: "MongoDB", icon: Code },
  { name: "PostgreSQL", icon: Code },
  { name: "Git", icon: Github },
]
