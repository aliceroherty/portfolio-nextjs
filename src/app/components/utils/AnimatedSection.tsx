"use client"
import React from 'react'
import { HTMLMotionProps, motion } from 'motion/react';
import { slideInLeft } from '@/app/utils/motion'

type AnimatedSectionProps = {
	id?: string
	className?: string
	motionProps?: HTMLMotionProps<'div'>
	children: React.ReactNode
}

const AnimatedSection = ({ id, className, motionProps, children }: AnimatedSectionProps) => {
	return (
		<motion.div
			variants={motionProps?.variants || slideInLeft}
			initial={motionProps?.initial || 'hidden'}
            whileInView={motionProps?.whileInView || 'visible'}
            viewport={motionProps?.viewport || { once: true }}
			className={className ?? 'w-full text-left mt-1 mb-24'}
			id={id}
		>
			{children}
		</motion.div>
	)
}

export default AnimatedSection