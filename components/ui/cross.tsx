'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

//just move open/close state to parent component
export const SideMenuBtn = () => {
  const [crossed, setCrossedState] = useState(false)

  return (
    <button
      aria-expanded={crossed}
      onClick={() => setCrossedState((e) => !e)}
      className={
        'flex aspect-square h-fit select-none flex-col items-center justify-center rounded-full'
      }>
      <motion.div
        style={{
          width: '20px',
          borderTop: '2px solid white',
          transformOrigin: 'center'
        }}
        initial={{ translateY: '-3px' }}
        animate={
          crossed ? { rotate: '45deg', translateY: '1px' } : { translateY: '-3px', rotate: '0deg' }
        }
        transition={{ bounce: 0, duration: 0.1 }}
      />
      <motion.div
        transition={{ bounce: 0, duration: 0.1 }}
        style={{
          width: '20px',
          borderTop: '2px solid white',
          transformOrigin: 'center'
        }}
        initial={{ translateY: '3px' }}
        animate={
          crossed
            ? { rotate: '-45deg', translateY: '-1px' }
            : { translateY: '3px', rotate: '0deg', scaleX: 1 }
        }
      />
    </button>
  )
}
