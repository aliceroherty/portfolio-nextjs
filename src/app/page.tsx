import 'animate.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ThemeProviderWrapper from './components/utils/ThemeProviderWrapper'

const Page = () => {
	return (
		<ThemeProviderWrapper>
			<Nav />
			<div className='select-none px-5 md:px-24'>
				<Home />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</ThemeProviderWrapper>
	)
}

export default Page
