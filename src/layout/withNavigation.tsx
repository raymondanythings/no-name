import { ComponentType, useLayoutEffect } from 'react'
import store from 'store'

const withNavigation = (Component: ComponentType<any>) => {
	return function () {
		const { setNav } = store()
		useLayoutEffect(() => {
			setNav()
			return () => setNav()
		}, [])
		return (
			<>
				<Component />
			</>
		)
	}
}

export default withNavigation
