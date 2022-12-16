import React, { useState } from 'react'
import Logo from 'assets/icons/logo.png'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
const Splash = () => {
	const [title, setTitle] = useState(false)
	const control = useAnimationControls()
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

				<motion.div animate={control} style={{ opacity: title ? 1 : 0 }}>
					서비스네임
				</motion.div>
			</div>
		</div>
	)
}

export default Splash
