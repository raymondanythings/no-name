import { ComponentType } from 'react'
import { Navigate } from 'react-router-dom'


const withAuth = (Component: ComponentType<any>) => {
	const params = new URLSearchParams(window.location.search)
	const type = params.get('type')
	const token = params.get('code')

	function WithAuthComponent() {
		return <Component token={token} type={type} />
	}

	function Redirect() {
		return <Navigate to="login" />
	}

	if (!type || !token) {
		return Redirect
	}
	return WithAuthComponent
}

export default withAuth
