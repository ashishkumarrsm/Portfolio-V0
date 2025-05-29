import Link from "next/link"
import { ArrowLeft, Award, BookOpen, Briefcase, GraduationCap, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
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
            <Link href="/projects" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground"
            >
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get to know more about my background, experience, and what drives me
              </p>
            </div>
            <div className="grid gap-12 py-12 lg:grid-cols-[1fr_300px]">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">My Story</h2>
                  <div className="space-y-4 text-gray-500 dark:text-gray-400">
                    <p>
                      I'm Alex Chen, a passionate full-stack developer with over 5 years of experience building web and
                      mobile applications. My journey in tech began during my computer science studies, where I
                      discovered my love for creating digital experiences that solve real problems.
                    </p>
                    <p>
                      After graduating, I worked at several tech startups where I honed my skills across the entire
                      development stack. I've had the opportunity to work on diverse projects ranging from e-commerce
                      platforms to complex data visualization tools.
                    </p>
                    <p>
                      What excites me most about development is the perfect blend of logical problem-solving and
                      creative expression. I'm constantly learning new technologies and approaches to stay at the
                      forefront of this ever-evolving field.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Experience</h2>
                  <div className="grid gap-6">
                    {experience.map((item, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-semibold">{item.role}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <Briefcase className="h-4 w-4" />
                                <span>{item.company}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <MapPin className="h-4 w-4" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{item.period}</div>
                          </div>
                          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">{item.description}</div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Education</h2>
                  <div className="grid gap-6">
                    {education.map((item, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-semibold">{item.degree}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <GraduationCap className="h-4 w-4" />
                                <span>{item.institution}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <MapPin className="h-4 w-4" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{item.period}</div>
                          </div>
                          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">{item.description}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Personal Info</h3>
                      <div className="grid gap-3">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span>San Francisco, CA</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <BookOpen className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span>Computer Science, Stanford University</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Award className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span>5+ Years Experience</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((interest) => (
                          <Badge key={interest} variant="outline" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Languages</h3>
                      <div className="grid gap-3">
                        <div className="flex items-center justify-between text-sm">
                          <span>English</span>
                          <span className="text-gray-500 dark:text-gray-400">Native</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Spanish</span>
                          <span className="text-gray-500 dark:text-gray-400">Fluent</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Mandarin</span>
                          <span className="text-gray-500 dark:text-gray-400">Intermediate</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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

const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "TechNova Solutions",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description:
      "Lead developer for multiple client projects, architecting scalable solutions and mentoring junior developers. Implemented CI/CD pipelines and improved application performance by 40%.",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Dynamics",
    location: "San Francisco, CA",
    period: "2019 - 2021",
    description:
      "Developed responsive web applications with modern JavaScript frameworks. Collaborated with UX designers to implement pixel-perfect interfaces and optimize user experiences.",
    technologies: ["React", "Vue.js", "JavaScript", "SCSS", "Webpack"],
  },
  {
    role: "Web Developer Intern",
    company: "StartUp Innovations",
    location: "Palo Alto, CA",
    period: "2018 - 2019",
    description:
      "Assisted in developing web applications and implementing new features. Participated in code reviews and agile development processes.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
]

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2016 - 2018",
    description:
      "Specialized in Human-Computer Interaction and Web Technologies. Thesis on 'Improving User Experience in Progressive Web Applications'.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2012 - 2016",
    description:
      "Graduated with honors. Coursework included Data Structures, Algorithms, Database Systems, and Web Development.",
  },
]

const interests = [
  "Web Development",
  "UI/UX Design",
  "Mobile App Development",
  "Machine Learning",
  "Open Source",
  "Hiking",
  "Photography",
  "Travel",
]
