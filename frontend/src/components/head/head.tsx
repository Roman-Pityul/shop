import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import logo from '../../img/head/logo.png'
import menu from '../../img/head/menu.png'
import avatar from '../../img/head/avatar.png'
import button from '../../img/head/button.png'
import { Search } from '..'
import { Menu } from '..'
import { addItemFromLS } from '../../redux/cart/cartReducer'
import { setMenuVisible } from '../../redux/head/headReducer'
import { Orders } from '../../img/head/orders'
import { Favourites } from '../../img/head/favourites'
import { Cart } from '../../img/head/cart'
import { getUser } from '../../redux/users/selectors'
import { selectItems } from '../../redux/cart/selectors'
import { selectCategories } from '../../redux/category/selectors'
import { selectActiveIcon, selectMenuVisible } from '../../redux/head/selectors'

import './head.scss'

const Head: React.FC = () => {
	const isMount = React.useRef(false)
	const dispatch = useDispatch()
	const user = useSelector(getUser)
	const items = useSelector(selectItems)
	const activeIcon = useSelector(selectActiveIcon)
	const categories = useSelector(selectCategories)
	const menuVisible = useSelector(selectMenuVisible)

	React.useEffect(() => {
		if (isMount.current) {
			const json = JSON.stringify(items)
			localStorage.setItem('items', json)
		} else {
			const data = localStorage.getItem('items')
			if (data) {
				dispatch(addItemFromLS(JSON.parse(data)))
			}
		}
		isMount.current = true
	}, [items, dispatch])

	return (
		<>
			<div className="head">
				<div className="head__container">
					<Link to="/">
						<img src={logo} alt="Северяночка" className="head__logo" />
					</Link>
					<div
						className="head__catalog"
						onClick={() => dispatch(setMenuVisible(!menuVisible))}
					>
						<img
							className={classNames({ head_reverse: menuVisible })}
							src={menu}
							alt="menu"
						/>
						<span>Каталог</span>
					</div>

					<Search />

					<Link to="favourites" className="head_link">
						<div className="head__buttons">
							<Favourites
								bg={activeIcon === 'favourites' ? '#FF6633' : '#414141'}
							/>
							<span
								className={activeIcon === 'favourites' ? 'active' : 'noactive'}
							>
								Избранное
							</span>
						</div>
					</Link>
					<Link to="orders" className="head_link">
						<div className="head__buttons">
							<Orders bg={activeIcon === 'odrers' ? '#FF6633' : '#414141'} />
							<span className={activeIcon === 'odrers' ? 'active' : 'noactive'}>
								Заказы
							</span>
						</div>
					</Link>
					<Link to="/cart" className="head_link">
						<div className="head__buttons">
							<Cart bg={activeIcon === 'cart' ? '#FF6633' : '#414141'} />
							<span className={activeIcon === 'cart' ? 'active' : 'noactive'}>
								Корзина
							</span>
							{items.length > 0 && (
								<div className="head__count">
									<span>{items.length}</span>
								</div>
							)}
						</div>
					</Link>
					{user && (
						<div className="head__user">
							<img src={avatar} alt="User" />
							<span>Роман</span>
							<img className="head__user-input" src={button} alt="Button" />
						</div>
					)}
				</div>
			</div>
			<Menu items={categories} />
		</>
	)
}

export default Head
