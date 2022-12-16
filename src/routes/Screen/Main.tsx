import axios from 'axios'
import useAuth from 'hooks/useAuth'
import withNavigation from 'layout/withNavigation'

axios.defaults.headers['access-control-allow-origin'] = 'https://www.googleapis.com/'
axios.defaults.withCredentials = true

const Main = () => {
	const { authLogin } = useAuth()

	return (
		<>
			Main
			<button onClick={() => authLogin('google')}>google</button>
			<button onClick={() => authLogin('kakao')}>kakao</button>
			<div id="naver_id_login"></div>
			<button onClick={() => authLogin('naver')}>naver</button>
		</>
	)
}

export default withNavigation(Main)
