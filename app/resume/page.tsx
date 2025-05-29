import Link from "next/link"
import { ArrowLeft, Briefcase, Download, GraduationCap, Mail, MapPin, Phone, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function ResumePage() {
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
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link
              href="/resume"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground"
            >
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
              <div className="flex items-center justify-between w-full">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resume</h1>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </div>
            <div className="mt-12 max-w-4xl mx-auto bg-white dark:bg-gray-950 border rounded-lg shadow-sm p-8 print:shadow-none print:border-none">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold">Alex Chen</h2>
                      <p className="text-gray-500 dark:text-gray-400">Full Stack Developer</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span>alex@example.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span>(123) 456-7890</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h3 className="font-semibold">Professional Summary</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Experienced Full Stack Developer with 5+ years of expertise in building responsive web
                      applications and mobile solutions. Proficient in modern JavaScript frameworks, server-side
                      technologies, and database systems. Passionate about creating intuitive user experiences and
                      writing clean, maintainable code.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">Work Experience</h3>
                  </div>
                  <div className="grid gap-6">
                    {workExperience.map((job, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <div>
                            <h4 className="font-semibold">{job.role}</h4>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{job.company}</div>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {job.location} | {job.period}
                          </div>
                        </div>
                        <ul className="text-sm text-gray-500 dark:text-gray-400 list-disc pl-5 space-y-1">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">Education</h3>
                  </div>
                  <div className="grid gap-6">
                    {educationHistory.map((edu, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <div>
                            <h4 className="font-semibold">{edu.degree}</h4>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{edu.institution}</div>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {edu.location} | {edu.period}
                          </div>
                        </div>
                        {edu.details && <p className="text-sm text-gray-500 dark:text-gray-400">{edu.details}</p>}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">Skills</h3>
                  </div>
                  <div className="grid gap-6">
                    <div className="grid gap-4">
                      <h4 className="font-semibold">Technical Skills</h4>
                      <div className="grid gap-3">
                        {technicalSkills.map((skill, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span>{skill.name}</span>
                              <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-4">
                      <h4 className="font-semibold">Other Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {otherSkills.map((skill, index) => (
                          <Badge key={index} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">Certifications</h3>
                  </div>
                  <div className="grid gap-2">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div className="font-medium">{cert.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {cert.issuer} | {cert.year}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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

const workExperience = [
  {
    role: "Senior Full Stack Developer",
    company: "TechNova Solutions",
    location: "San Francisco, CA",
    period: "2021 - Present",
    responsibilities: [
      "Lead development of enterprise web applications using React, Node.js, and AWS",
      "Architected and implemented microservices-based backend systems",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines resulting in 40% faster deployment cycles",
      "Optimized application performance and reduced load times by 35%",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Digital Dynamics",
    location: "San Francisco, CA",
    period: "2019 - 2021",
    responsibilities: [
      "Developed responsive web applications using React and Vue.js",
      "Collaborated with UX designers to implement pixel-perfect interfaces",
      "Optimized frontend performance and accessibility",
      "Integrated RESTful APIs and GraphQL endpoints",
      "Participated in agile development processes and sprint planning",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "StartUp Innovations",
    location: "Palo Alto, CA",
    period: "2018 - 2019",
    responsibilities: [
      "Assisted in developing web applications using HTML, CSS, JavaScript, and PHP",
      "Implemented new features and fixed bugs in existing applications",
      "Participated in code reviews and agile development processes",
      "Created and maintained documentation for codebase",
    ],
  },
]

const educationHistory = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2016 - 2018",
    details: "Specialized in Human-Computer Interaction and Web Technologies. GPA: 3.9/4.0",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2012 - 2016",
    details:
      "Graduated with honors. Coursework included Data Structures, Algorithms, Database Systems, and Web Development.",
  },
]

const technicalSkills = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React/Next.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "HTML/CSS", level: 90 },
  { name: "SQL/NoSQL Databases", level: 80 },
  { name: "AWS/Cloud Services", level: 75 },
]

const otherSkills = [
  "Git",
  "CI/CD",
  "Agile/Scrum",
  "UI/UX Design",
  "RESTful APIs",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "Testing (Jest, Cypress)",
  "Performance Optimization",
]

const certifications = [
  { name: "AWS Certified Developer - Associate", issuer: "Amazon Web Services", year: "2022" },
  { name: "Professional Scrum Master I (PSM I)", issuer: "Scrum.org", year: "2021" },
  { name: "MongoDB Certified Developer", issuer: "MongoDB University", year: "2020" },
]
