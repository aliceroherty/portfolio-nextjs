"use client"
import { useState } from 'react'
import NavItems from '../NavItems'

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false)

    return (
		<section className='flex lg:hidden'>
			<button
				className='space-y-2 [&>*]:hover:bg-gray-400 cursor-pointer [&>*]:transition-colors [&>*]:ease-in-out [&>*]:duration-300'
				onClick={() => setOpen(prev => !prev)}
			>
				<span className='block h-0.5 w-8 bg-white'></span>
				<span className='block h-0.5 w-8 bg-white'></span>
				<span className='block h-0.5 w-8 bg-white'></span>
			</button>

			<div className={open ? 'showNav' : 'hideNav'}>
				<button
					className='absolute top-0 right-0 px-5 py-5 md:px-24'
					onClick={() => setOpen(false)}
				>
					<svg
						className='h-8 w-8 text-white hover:text-gray-400 transition-colors ease-in-out duration-300 cursor-pointer'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<line x1='18' y1='6' x2='6' y2='18' />
						<line x1='6' y1='6' x2='18' y2='18' />
					</svg>
				</button>
				<ul className='flex flex-col items-center justify-between min-h-[250px]'>
					<NavItems />
				</ul>
			</div>
		</section>
	)
}

export default HamburgerMenu;