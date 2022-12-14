import { useNavigate } from 'react-router-dom'

const NavigationBar = () => {
	const navigate = useNavigate()
	const onMoveRoute = (route: string) => {
		navigate(route)
	}
	return (
		<nav className="sticky top-0 w-full py-4 flex justify-between">
			<button onClick={() => onMoveRoute('/')}>1</button>
			<button onClick={() => onMoveRoute('/main')}>2</button>
			<button onClick={() => onMoveRoute('/testtt')}>3</button>
		</nav>
	)
}

export default NavigationBar
