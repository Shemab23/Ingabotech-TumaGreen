"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const route = useRouter();
  return (
    <div onClick={()=> route.push('/')}>
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Leaf className="w-7 h-7 text-green-600" />
            <span style={{fontFamily: 'Orbitron'}} className="font-orbitron text-xl font-bold text-green-700">TumaGreen</span>
          </motion.div>
    </div>
  )
}

export default Logo
