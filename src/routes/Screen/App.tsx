import NavigationBar from 'layout/NavigationBar'
import { Suspense } from 'react'
import { Await, Outlet, useLoaderData } from 'react-router-dom'

function App() {
	const a: any = useLoaderData()
	console.log('main init')
	return (
		<Suspense fallback={<>LOADING.....</>}>
			<Await
				errorElement={<>Error</>}
				resolve={a}
				children={(data) => {
					console.log(data)
					return (
						<>
							<NavigationBar />
							<Outlet />
							{/* {b.map((item: string) => (
									<>{item}</>
								))} */}
						</>
					)
				}}
			/>
		</Suspense>
	)
}
export default App
