// / import { googleInitializeParam } from 'types/google'
/// <reference types="react-scripts" />

interface googleInitializeParam {
	client_id: string
	auto_select?: boolean
	callback?: (data: any) => any | void
	login_url: string
	context?: 'signin' | 'signup' | 'use'
}

interface GsiButtonConfiguration {
	type: 'standard' | 'icon'
	theme: 'outline' | 'filled_blue' | 'filled_black'
	size: 'large' | 'medium' | 'small'
	text: 'signin_with' | 'signup_with' | 'continue_with' | 'signin'
	shape: 'rectangular' | 'pill' | 'circle' | 'square'
	logo_alignment: 'left' | 'center'
	width: string
	locale: string
	click_listener: (params?: any) => void | any
}

interface Window {
	google?: {
		accounts: {
			id: {
				initialize: (params: googleInitializeParam) => void
				renderButton: (el: HTMLElement | null, options: Partial<GsiButtonConfiguration>) => void
				prompt: () => void
			}
			oauth2: {
				initTokenClient: (param: any) => void
			}
		}
	}
}

declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production' | 'test'
		PUBLIC_URL: string
		REACT_APP_GOOGLE_CLIENT_ID: string
		REACT_APP_GOOGLE_RESPONSE_TYPE: string
		REACT_APP_GOOGLE_REDIRECT_URI: string
		REACT_APP_GOOGLE_SCORE: string
	}
}
