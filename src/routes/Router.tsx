import App from 'routes/Screen/App'
import { loader } from 'libs/common/loader'
import { createRoutesFromElements, Route, Routes } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Main from './Screen/Main'
import OAuth from './Screen/OAuth'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="" element={<App />}>
			<Route path="main" element={<Main />} />
			<Route path="testtt" element={<Main />} />
			<Route path="oauth" element={<OAuth />} />
		</Route>
	)
)

export default router
