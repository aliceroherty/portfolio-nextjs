'use client'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { CircularProgress } from '@mui/material'
import { slideInLeft } from '../utils/motion'
import { Element } from 'react-scroll'
import ProjectCard from './ProjectCard'
import Project from '../models/project'

const Projects = () => {
	const [projects, setProjects] = useState(new Array<Project>())
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	const fetchProjects = async () => {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/projects`
			)

			if (res.status == 200) {
				const results = await res.json()
				setProjects(results)
			} else {
				setError(true)
				console.error('Failed to fetch projects')
			}
		} catch (error: unknown) {
			setError(true)
			console.error((error as Error)?.message)
		}

		setLoading(false)
	}

	const renderProjects = () => {
		if (loading) {
			return <CircularProgress />
		} else if (error) {
			return <p>Something went wrong retrieving the projects...</p>
		} else {
			return (
				<div className='w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8'>
					{projects.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			)
		}
	}

	useEffect(() => {
		fetchProjects()
	}, [])

	return (
		<Element name='projects' className='w-full'>
			<motion.div
				variants={slideInLeft}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				className='w-full pb-16 text-left'
				id='projects'
			>
				<h4 className='lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left'>
					Projects
				</h4>
				{renderProjects()}
			</motion.div>
		</Element>
	)
}

export default Projects
