import { MutableRefObject } from 'react'

export const useKakao = (ref: MutableRefObject<HTMLElement | null>) => {
	const openKakaoLogin = () => {
		window.Kakao.init(process.env.REACT_APP_KAKAO_CLIENT_ID)
		window.Kakao.Auth.authorize({ redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI })
		// window.location.assign
		// console.log('urlSearchParam: ', urlSearchParam)
		// urlSearchParam.append('client_id', process.env.REACT_APP_KAKAO_CLIENT_ID)
		// urlSearchParam.append('response_type', process.env.REACT_APP_GOOGLE_RESPONSE_TYPE)
		// urlSearchParam.append('redirect_uri', process.env.REACT_APP_GOOGLE_REDIRECT_URI)
		// urlSearchParam.append('scope', process.env.REACT_APP_GOOGLE_SCORE)
		// window.location.assign(`https://accounts.google.com/o/oauth2/v2/auth?${urlSearchParam.toString()}`)
	}

	return { openKakaoLogin }
}
