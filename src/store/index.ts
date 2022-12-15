import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface IStore {
	user: null | object
	isLogin: boolean
	setUser: (user: any) => void
}

const store = create(
	devtools<IStore>((set) => ({
		user: null,
		isLogin: false,
		setUser: (user) => set({ user: user })
	}))
)
store.subscribe((state) => console.log(state.user))

export default store
