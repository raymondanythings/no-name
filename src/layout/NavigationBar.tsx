import { AnimatePresence, motion, Variants } from 'framer-motion'
import { MutableRefObject, useRef, useState } from 'react'
import { navItems } from 'mock/navItem'
import NavItem from 'components/NavItem'
interface NavigationBarProps {
	navigationRef: MutableRefObject<HTMLElement | null>
}

const navVariants: Variants = {
	start: {
		maxWidth: 680,
		transition: {
			when: 'afterChild',
			staggerChildren: 0.03
		}
	},
	exit: {
		maxWidth: 0,
		transition: {
			// when: 'afterChild',
			staggerChildren: 0.03
		}
	}
}

const NavigationBar = ({ navigationRef }: NavigationBarProps) => {
	const navBarRef = useRef<HTMLElement | null>(null)
	const [open, setOpen] = useState(false)
	return (
		<>
			<motion.nav
				ref={navBarRef}
				drag="y"
				dragConstraints={navigationRef}
				dragElastic={0.3}
				// dragMomentum={false}
				layout
				className="flex align-center absolute h-11 bg-gray-400 right-0 overflow-hidden rounded-l-lg z-40"
			>
				<svg
					onClick={() => {
						setOpen((prev) => !prev)
					}}
					className="w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
				</svg>

				<AnimatePresence mode="wait">
					{open && (
						<motion.div
							key="modal"
							className="flex justify-around mx-2"
							variants={navVariants}
							layout
							initial="initial"
							animate="start"
							exit="exit"
						>
							{navItems.map((item, index) => (
								<NavItem key={item.title + index} {...item} />
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	)
}

export default NavigationBar
