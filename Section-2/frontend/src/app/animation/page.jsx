'use client'
import React from 'react'
import { motion } from "motion/react"

const Animation = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <motion.div
                initial={{ rotate: 0, scale: 0 }}
                animate={{ scale: 2 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 9, ease: "easeInOut", type: "spring" }}
                className='size-40 bg-amber-500 rounded-xl'
            >
            </motion.div>
        </div>
    )
}

export default Animation;