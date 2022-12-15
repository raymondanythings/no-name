import axios from 'axios'
import { useGoogle } from 'hooks/useGoogle'
import { useRef } from 'react'

axios.defaults.headers['access-control-allow-origin'] = 'https://www.googleapis.com/'
axios.defaults.withCredentials = true

const Main = () => {
	const googleRef = useRef(null)
	const { openGoogleLogin } = useGoogle(googleRef)

	return (
		<>
			Main
			<div ref={googleRef} id="test_id"></div>
			<button onClick={() => openGoogleLogin()}>google</button>
		</>
	)
}

export default Main
