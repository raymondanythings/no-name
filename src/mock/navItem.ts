export interface NavItemProps {
	path: string
	title: string
	icon: 'home' | 'mark'
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
		path: '/',
		title: 'HOME',
		icon: 'home'
	},
	{
		path: '/main',
		title: 'MARK',
		icon: 'mark'
	}
]
