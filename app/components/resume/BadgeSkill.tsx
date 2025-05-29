"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface BadgeSkillProps {
  skill: string;
  index: number;
}

export function BadgeSkill({ skill, index }: BadgeSkillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Badge 
        variant="outline" 
        className="px-3 py-1 text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300 border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md"
      >
        {skill}
      </Badge>
    </motion.div>
  )
} 