'use client'
import { motion } from 'framer-motion'
import { ComponentProps } from 'react'
type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string 
}
export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <motion.span className="text-red-400 bg-red-900/80 text-sm py-1 px-3 rounded-lg">
      {name}
    </motion.span>
  )
}
