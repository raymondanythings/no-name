import create, { useStore } from 'zustand'
import { devtools } from 'zustand/middleware'

interface IStore {
	user: null | object
	isLogin: boolean
	setUser: (user: any) => void
	setNav: () => void
	showNav: boolean
}

const store = create(
	devtools<IStore>((set) => ({
		user: null,
		isLogin: false,
		showNav: false,
		setUser: (user) => set({ user: user }),
		setNav: () =>
			set((state) => ({
				showNav: !state.showNav
			}))
	}))
)

export const useCommonStore = store.getState()

export default store
