import { defer } from 'react-router-dom'

const loader = async (req: any) => {
	const data = new Promise((resolve) => {
		setTimeout(() => resolve([1, 2333, 3]), 2000)
	})
	return defer({
		a: data,
		b: [5, 6, 7]
	})
}

export { loader }
