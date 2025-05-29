"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

interface SkillCardProps {
  name: string;
  level: number;
  index: number;
}

export function SkillCard({ name, level, index }: SkillCardProps) {
  return (
    <motion.div 
      className="space-y-2 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-gray-900 dark:text-gray-100">{name}</span>
        <span className="text-purple-600 dark:text-purple-400 font-medium">{level}%</span>
      </div>
      <Progress 
        value={level} 
        className="h-2 bg-gray-200 dark:bg-gray-800"
        indicatorClassName="bg-gradient-to-r from-purple-600 to-rose-500"
      />
    </motion.div>
  )
} 