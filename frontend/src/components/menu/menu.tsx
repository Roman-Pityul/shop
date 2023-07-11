import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'

import { setMenuVisible } from '../../redux/head/headReducer'
import { selectMenuVisible } from '../../redux/head/selectors'

import './menu.scss'

type MenuType = {
	items: ItemType[]
}

type ItemType = {
	path: string
	name: string
}

const Menu: React.FC<MenuType> = ({ items }) => {
	const dispatch = useDispatch()
	const nemuVisible = useSelector(selectMenuVisible)

	const handleOffVisible = () => {
		dispatch(setMenuVisible(false))
	}

	return (
		<div className={cn('menu', { menu__active: nemuVisible })}>
			<div className="menu__container">
				{items.map((item, index: number) => (
					<div onClick={handleOffVisible} key={index} className="menu__item">
						<Link to={`items/${item.path}`}>{item.name}</Link>
					</div>
				))}
			</div>
			<div onClick={handleOffVisible} className="menu__content"></div>
		</div>
	)
}

export default Menu
