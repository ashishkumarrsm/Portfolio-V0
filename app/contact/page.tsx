import Link from "next/link"
import { ArrowLeft, Github, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
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
            <Link href="/resume" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Resume
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground"
            >
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a project in mind or want to chat? Get in touch with me.
              </p>
            </div>
            <div className="grid gap-8 py-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Get in Touch</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fill out the form below or reach out to me directly using the contact information.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email address" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[150px] resize-y" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Contact Information</h3>
                      <div className="grid gap-4">
                        <div className="flex items-start gap-4">
                          <Mail className="w-5 h-5 mt-0.5 text-gray-500 dark:text-gray-400" />
                          <div>
                            <div className="font-medium">Email</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">alex@example.com</div>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex items-start gap-4">
                          <Phone className="w-5 h-5 mt-0.5 text-gray-500 dark:text-gray-400" />
                          <div>
                            <div className="font-medium">Phone</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">(123) 456-7890</div>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex items-start gap-4">
                          <MapPin className="w-5 h-5 mt-0.5 text-gray-500 dark:text-gray-400" />
                          <div>
                            <div className="font-medium">Location</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">San Francisco, CA</div>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex items-start gap-4">
                          <Github className="w-5 h-5 mt-0.5 text-gray-500 dark:text-gray-400" />
                          <div>
                            <div className="font-medium">GitHub</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">github.com/alexchen</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Availability</h3>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Monday - Friday</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">9:00 AM - 5:00 PM PST</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Response Time</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Within 24 hours</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-2">
                  <h3 className="font-semibold">Connect with me</h3>
                  <div className="flex gap-4">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="mailto:alex@example.com">
                      <Button variant="outline" size="icon">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </Link>
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
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
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
                  <path d="M22 4s-.7 9-18 9 18-6.92 18-4z" />
                  <path d="M22 4c0 2.21-2.36 3-5 2 0-1-2-1-3-1 0 1.21-1.33 2-3 2s-3-1-5-1c0 2.21-2.36 3-5 2 0-1-2-1-3-1 0 1.21-1.33 2-3 2s-3-1-5-1c0 2.21-2.36 3-5 2" />
                </svg>
              </Button>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Button>
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
