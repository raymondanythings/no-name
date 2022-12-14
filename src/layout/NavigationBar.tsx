import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useAnimationControls, useMotionValue, Variants } from 'framer-motion'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

interface NavigationBarProps {
	navigationRef: MutableRefObject<HTMLElement | null>
}
const NavigationBar = ({ navigationRef }: NavigationBarProps) => {
	const navigate = useNavigate()
	const navBarRef = useRef<HTMLElement | null>(null)
	const [open, setOpen] = useState(false)

	const onMoveRoute = (route: string) => {
		navigate(route)
	}
	const controls = useAnimationControls()
	useEffect(() => {
		controls.start('exit')
	}, [])

	return (
		<>
			<motion.nav
				initial={false}
				ref={navBarRef}
				drag="y"
				dragConstraints={navigationRef}
				dragElastic={0}
				animate={controls}
				variants={{
					start: {
						maxWidth: 200
					},
					exit: {
						maxWidth: 30
					}
				}}
				dragMomentum={false}
				className="py-4 flex justify-between absolute h-11 bg-gray-400 right-0 overflow-hidden min-w-[14px] rounded-l-lg"
			>
				<div
					className="px-2"
					onClick={() => {
						if (open) {
							controls.start('exit').then(() => {
								setOpen((prev) => !prev)
							})
						} else {
							setOpen((prev) => !prev)
							controls.start('start')
						}
					}}
				>
					<svg className="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
					</svg>
				</div>
				<AnimatePresence>
					{open && (
						<motion.div key="modal" className="flex justify-around">
							<button className="px-4" onClick={() => onMoveRoute('/')}>
								1
							</button>
							<button className="px-4" onClick={() => onMoveRoute('/main')}>
								2
							</button>
							<button className="px-4" onClick={() => onMoveRoute('/testtt')}>
								3
							</button>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	)
}

export default NavigationBar
