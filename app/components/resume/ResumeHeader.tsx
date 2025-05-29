"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

interface ResumeHeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}

export function ResumeHeader({ name, title, email, phone, location }: ResumeHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent"
          >
            {name}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            {title}
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-3 text-sm"
        >
          <div className="flex items-center gap-2 group">
            <Mail className="h-4 w-4 text-purple-500 group-hover:text-purple-600 transition-colors" />
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
              {email}
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <Phone className="h-4 w-4 text-purple-500 group-hover:text-purple-600 transition-colors" />
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
              {phone}
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <MapPin className="h-4 w-4 text-purple-500 group-hover:text-purple-600 transition-colors" />
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
              {location}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
} 