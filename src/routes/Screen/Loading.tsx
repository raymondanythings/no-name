import RotateIcon from 'components/RotateIcon'
import ReactIcon from 'assets/icons/pie.png'
import ReactBadge from 'assets/icons/pie2.png'
import Redux from 'assets/icons/pie3.png'
import Vue from 'assets/icons/crown.png'
const IMAGE_LIST = [
	{
		uid: 'react',
		src: ReactIcon
	},
	{
		uid: 'badge',
		src: ReactBadge
	},
	{
		uid: 'redux',
		src: Redux
	},
	{
		uid: 'vue',
		src: Vue
	},
	{
		uid: 'react',
		src: ReactIcon
	},
	{
		uid: 'badge',
		src: ReactBadge
	},
	{
		uid: 'redux',
		src: Redux
	},
	{
		uid: 'vue',
		src: Vue
	},
	{
		uid: 'react',
		src: ReactIcon
	},
	{
		uid: 'badge',
		src: ReactBadge
	},
	{
		uid: 'redux',
		src: Redux
	},
	{
		uid: 'vue',
		src: Vue
	}
]

const Loading = () => {
	return (
		<>
			{IMAGE_LIST.map((item) => (
				<RotateIcon {...item} />
			))}
		</>
	)
}

export default Loading
