"use client"

import { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface ResumeSectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function ResumeSection({ title, icon: Icon, children }: ResumeSectionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-purple-500" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  )
} 