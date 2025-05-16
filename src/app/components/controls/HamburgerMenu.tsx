"use client"
import { useState } from 'react'
import NavItems from '../NavItems'

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
		setOpen(!open)
	}

	return (
		<section className='flex lg:hidden'>
			<button
				onClick={handleClick}
				className='flex flex-col justify-center items-center z-20'
			>
				<span
					className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
						open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
					}`}
				></span>
				<span
					className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
						open ? 'opacity-0' : 'opacity-100'
					}`}
				></span>
				<span
					className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
						open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
					}`}
				></span>
			</button>

			<div
				className={
					open ? 'hamburger-menu-expand' : 'hamburger-menu-collapse'
				}
			>
				<ul className='flex flex-col items-center justify-between min-h-[250px]'>
					<NavItems />
				</ul>
			</div>
		</section>
	)
}

export default HamburgerMenu;