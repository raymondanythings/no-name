import { MutableRefObject } from 'react'

export const useGoogle = (ref: MutableRefObject<HTMLElement | null>) => {
	const openGoogleLogin = () => {
		const urlSearchParam = new URLSearchParams()
		urlSearchParam.append('client_id', process.env.REACT_APP_GOOGLE_CLIENT_ID)
		urlSearchParam.append('response_type', process.env.REACT_APP_GOOGLE_RESPONSE_TYPE)
		urlSearchParam.append('redirect_uri', process.env.REACT_APP_GOOGLE_REDIRECT_URI)
		urlSearchParam.append('scope', process.env.REACT_APP_GOOGLE_SCORE)
		window.location.assign(`https://accounts.google.com/o/oauth2/v2/auth?${urlSearchParam.toString()}`)
	}

	return { openGoogleLogin }
}
