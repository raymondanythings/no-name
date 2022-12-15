import { MutableRefObject } from 'react'

export const useNaver = (ref: MutableRefObject<HTMLElement | null>) => {
	let naver_id_login: {
		new (arg0: string | undefined, arg1: string | undefined): any
		getUniqState: () => any
		setButton: (arg0: string, arg1: number, arg2: number) => void
		setDomain: (arg0: string) => void
		setState: (arg0: any) => void
		setPopup: () => void
		init_naver_id_login: () => void
	}
	const openNaverLogin = () => {
		console.log('dd')
		naver_id_login = new window.naver_id_login(process.env.REACT_APP_NAVER_CLIENT_ID, process.env.REACT_APP_NAVER_REDIRECT_URI)
		var state = naver_id_login.getUniqState()
		naver_id_login.setButton('white', 2, 40)
		naver_id_login.setDomain('http://localhost:3000')
		naver_id_login.setState(state)
		// naver_id_login.setPopup()
		naver_id_login.init_naver_id_login()
		// window.location.assign
		// console.log('urlSearchParam: ', urlSearchParam)
		// urlSearchParam.append('client_id', process.env.REACT_APP_KAKAO_CLIENT_ID)
		// urlSearchParam.append('response_type', process.env.REACT_APP_GOOGLE_RESPONSE_TYPE)
		// urlSearchParam.append('redirect_uri', process.env.REACT_APP_GOOGLE_REDIRECT_URI)
		// urlSearchParam.append('scope', process.env.REACT_APP_GOOGLE_SCORE)
		// window.location.assign(`https://accounts.google.com/o/oauth2/v2/auth?${urlSearchParam.toString()}`)
	}

	return { openNaverLogin }
}
