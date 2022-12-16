import { motion, Variants } from 'framer-motion'
import { FC, useCallback, useId, useState } from 'react'

interface RotateIconProps {
	src: string
	uid: string
}
interface CustomState {
	start: number | string
	y: number
	destination: number | string
	duration: number | string
	circleDuration: number
	width: number
}

const ImageVariants: Variants = {
	initial: ({ start, y }: CustomState) => ({
		y: y,
		x: start
	}),
	animate: ({ width, destination, duration, circleDuration }: CustomState) => ({
		rotateZ: width > 1.5 ? 360 : -360,

		transition: {
			duration: duration,
			type: 'tween',
			ease: 'linear',
			repeat: Infinity,
			rotateZ: {
				type: 'tween',
				ease: 'linear',
				duration: 1.5,
				repeat: Infinity
			}
		}
	})
}

const widthList = ['w-12', 'w-16', 'w-24']

const RotateIcon: FC<RotateIconProps> = ({ src, uid }) => {
	const [inAction, setInAction] = useState(true)
	const id = useId()
	const [custom, setCustom] = useState<CustomState>({
		start: Math.random() * window.innerWidth,
		y: Math.random() * window.innerHeight,
		destination: Math.random() * window.innerWidth,
		duration: Math.random() * 2 + 4,
		circleDuration: Math.random() * 2 + 1,
		width: Math.floor(Math.random() * 3)
	})

	const getNewCustomValue = () => {
		setCustom({
			start: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			destination: Math.random() * window.innerWidth,
			duration: Math.random() * 2 + 4,
			circleDuration: Math.random() * 2 + 1,
			width: Math.floor(Math.random() * 3)
		})
	}
	return inAction ? (
		<motion.img
			initial="initial"
			animate="animate"
			onAnimationComplete={(event) => {
				getNewCustomValue()
			}}
			custom={custom}
			variants={ImageVariants}
			className={`fixed ${widthList[custom.width]}`}
			src={src}
			key={id}
		/>
	) : null
}

export default RotateIcon
