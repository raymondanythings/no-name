import withAuth from 'layout/withAuth'
import { FC } from 'react'

interface OAuthProps {
	type: 'google' | 'naver' | 'kakao'
	token: string
}

const OAuth: FC<OAuthProps> = ({ token, type }) => {
	console.log(type)
	if (type === 'kakao') {
		console.log('token: ', token)
		return null
	}
	return null
}

export default withAuth(OAuth)
