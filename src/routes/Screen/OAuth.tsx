import withAuth from 'layout/withAuth'
import { FC } from 'react'

interface OAuthProps {
	type: 'google' | 'naver' | 'kakao'
	token: string
}

const OAuth: FC<OAuthProps> = ({ token, type }) => {
	return null
}

export default withAuth(OAuth)
