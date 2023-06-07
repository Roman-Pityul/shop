import React from 'react'

import avatar from '../../img/head/avatar.png'

import styles from './userMenu.module.scss'

const UserMenu: React.FC = () => {
	return <div className={styles.root}>
		<img src={avatar} alt='user_avatar' />
		<div className={styles.menu}>
			<span>Профиль пользователя</span>
			<span>Избранное</span>
			<span>Выход</span>
		</div>
	</div>
}

export default UserMenu
