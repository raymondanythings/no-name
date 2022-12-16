import NavigationBar from 'layout/NavigationBar'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
	const navigationRef = useRef<HTMLElement>(null)
	return (
		<main className="max-w-screen-default mx-auto min-h-screen text-white relative" ref={navigationRef}>
			<NavigationBar navigationRef={navigationRef} />
			<Outlet />
		</main>
	)
}
export default App
