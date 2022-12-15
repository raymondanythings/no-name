import axios from 'axios'
import { useGoogle } from 'hooks/useGoogle'
import { useKakao } from 'hooks/useKakao'
import { useNaver } from 'hooks/useNaver'

import { useRef } from 'react'

axios.defaults.headers['access-control-allow-origin'] = 'https://www.googleapis.com/'
axios.defaults.withCredentials = true

const Main = () => {
	const googleRef = useRef(null)
	console.log('googleRef: ', googleRef)
	const { openGoogleLogin } = useGoogle(googleRef)
	const kakaoRef = useRef(null)
	const { openKakaoLogin } = useKakao(kakaoRef)
	const naverRef = useRef(null)
	const { openNaverLogin } = useNaver(kakaoRef)

	return (
		<>
			Main
			<div ref={googleRef} id="test_id"></div>
			<button onClick={() => openGoogleLogin()}>google</button>
			<div ref={kakaoRef} id="test_id"></div>
			<button onClick={() => openKakaoLogin()}>kakao</button>
			<div ref={naverRef} id="naver_id_login"></div>
			<button onClick={() => openNaverLogin()}>naver</button>
		</>
	)
}

export default Main
