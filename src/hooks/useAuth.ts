import { MutableRefObject } from 'react'
import { oauthService } from 'types'


const useAuth = () => {
  const openNaverLogin = async () => {
    if(!window.naver_id_login){
      return false
    }
		const naver_id_login = new window.naver_id_login(process.env.REACT_APP_NAVER_CLIENT_ID, process.env.REACT_APP_NAVER_REDIRECT_URI) || null
		const state = naver_id_login.getUniqState()
		naver_id_login.setButton('white', 0, 40)
		naver_id_login.setDomain('http://localhost:3000')
		naver_id_login.setState(state)
		naver_id_login.response_type = 'code'
		window.location.assign(`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=CgJJKyt5o_NoOPtl51jX&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth%3Ftype%3Dnaver&state=${state}`)
		
	}
	const openKakaoLogin = () => {
		window.Kakao.init(process.env.REACT_APP_KAKAO_CLIENT_ID)
		window.Kakao.Auth.authorize({ redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI })
	}
	const openGoogleLogin = () => {
		const urlSearchParam = new URLSearchParams()
		urlSearchParam.append('client_id', process.env.REACT_APP_GOOGLE_CLIENT_ID)
		urlSearchParam.append('response_type', process.env.REACT_APP_GOOGLE_RESPONSE_TYPE)
		urlSearchParam.append('redirect_uri', process.env.REACT_APP_GOOGLE_REDIRECT_URI)
		urlSearchParam.append('scope', process.env.REACT_APP_GOOGLE_SCORE)
		window.location.assign(`https://accounts.google.com/o/oauth2/v2/auth?${urlSearchParam.toString()}`)
	}

	const authLogin = (type:oauthService ) => {
		if (type === 'google') {
			openGoogleLogin()
		}
		if (type === 'kakao') {
			openKakaoLogin()
		}
		if (type === 'naver') {
			openNaverLogin()
		}
	}

	return { authLogin }
}


export default useAuth