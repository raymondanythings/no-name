import NavigationBar from 'layout/NavigationBar'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import store from 'store'

function App() {
	const navigationRef = useRef(document.querySelector('main'))
	const { showNav } = store()
	return (
		<main className="max-w-screen-default mx-auto min-h-screen text-white relative" ref={navigationRef}>
			{showNav && <NavigationBar navigationRef={navigationRef} />}
			<Outlet />
		</main>
	)
}
export default App
