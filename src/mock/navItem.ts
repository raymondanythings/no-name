type iconType = 'home' | 'mark' | 'load'
export interface NavItemProps {
	path: string
	title: string
	icon: iconType
}

export const navItems: NavItemProps[] = [
	{
		path: '/',
		title: 'HOME',
		icon: 'home'
	},
	{
		path: '/main',
		title: 'MARK',
		icon: 'mark'
	},
	{
		path: '/loading',
		title: 'LOADING',
		icon: 'load'
	},
	{
		path: '/splash',
		title: 'SPLASH',
		icon: 'load'
	}
]
