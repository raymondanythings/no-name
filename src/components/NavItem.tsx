import { FC } from 'react'
import { motion, Variants } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Home } from 'assets/icons/home.svg'
import { ReactComponent as Mark } from 'assets/icons/mark.svg'
import { ReactComponent as Load } from 'assets/icons/load.svg'
import { NavItemProps } from 'mock/navItem'

const navItemVariants: Variants = {
	initial: {
		originX: 'right',
		transform: 'translateX(10%)',
		opacity: 0,
		transition: {
			duration: 0.1
		}
	},
	start: {
		originX: 'right',
		transform: 'translateX(0%)',
		opacity: 1,
		transition: {
			// duration: 0.1
		}
	},
	exit: {
		originX: 'right',
		transform: 'translateX(10%)',
		opacity: 0,
		transition: {
			duration: 0.1
		}
	}
}

const NavItem: FC<NavItemProps> = ({ icon, title, path }) => {
	const navigate = useNavigate()
	const onMoveRoute = (route: string) => {
		navigate(route)
	}
	return (
		<motion.button className="will-change-auto w-10" variants={navItemVariants} onClick={() => onMoveRoute(path)}>
			{icon === 'home' ? (
				<Home className="w-4 mx-auto" />
			) : icon === 'load' ? (
				<Load className="w-4 mx-auto" />
			) : (
				<Mark className="w-4 mx-auto" />
			)}
		</motion.button>
	)
}

export default NavItem
