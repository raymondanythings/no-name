import NavigationBar from 'layout/NavigationBar'
import { Suspense, useRef } from 'react'
import { Await, Outlet, useLoaderData } from 'react-router-dom'

function App() {
	const a: any = useLoaderData()
	console.log('main init')
	const navigationRef = useRef<HTMLElement>(null)
	return (
		<Suspense fallback={<>LOADING.....</>}>
			<Await
				errorElement={<>Error</>}
				resolve={a}
				children={(data) => {
					console.log(data)
					return (
						<main className="max-w-screen-default mx-auto min-h-screen bg-main text-white relative" ref={navigationRef}>
							<NavigationBar navigationRef={navigationRef} />
							<Outlet />
							{/* {b.map((item: string) => (
									<>{item}</>
								))} */}
						</main>
					)
				}}
			/>
		</Suspense>
	)
}
export default App
