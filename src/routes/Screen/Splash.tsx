import { useState } from 'react'
import Logo from 'assets/icons/logo.png'
import { motion } from 'framer-motion'
import AnimatedText from 'components/animation/AnimatedText'

const container = {
	visible: {
		transition: {
			staggerChildren: 0.1,
			when: 'afterChild'
		}
	}
}
const Splash = () => {
	const [title, setTitle] = useState(false)
	return (
		<div className="relative h-screen">
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 items-center">
				<motion.img
					initial={{ scale: 0, rotateZ: 320 }}
					animate={{ scale: 1, rotateZ: 360 }}
					transition={{
						duration: 0.2,
						type: 'spring',
						damping: 11
					}}
					onAnimationComplete={() => {
						setTitle(true)
					}}
					src={Logo}
				/>

				<motion.div className="App" initial="hidden" animate={title ? 'visible' : 'hidden'} variants={container}>
					<AnimatedText text="서비스 이름" />
				</motion.div>
			</div>
		</div>
	)
}

export default Splash
