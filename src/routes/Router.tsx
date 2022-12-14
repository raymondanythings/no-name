import App from 'routes/Screen/App'
import { loader } from 'libs/common/loader'
import { createRoutesFromElements, Route, Routes } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Main from './Screen/Main'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="" element={<App />} loader={loader}>
			<Route path="main" element={<Main />} />
			<Route path="testtt" element={<Main />} />
		</Route>
	)
)

export default router
