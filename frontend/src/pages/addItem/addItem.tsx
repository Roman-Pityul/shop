import React from 'react'

import style from './addItem.module.scss'
import { useAddItem } from './useAddItem'

const AddItem: React.FC = () => {
	const fileInput = React.useRef<HTMLInputElement>(null)

	const { categories, uploadImage, register, errors, handleSubmit, onSubmit } =
		useAddItem()

	const handleClick = () => {
		fileInput.current?.click()
	}

	return (
		<div className={style.root}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>Добавление товара</h2>

				<div>
					<label>Название:</label>
					<input
						{...register('name', {
							required: 'Обязательное поле!',
						})}
						type="text"
						name="name"
						placeholder="Введите название"
					/>
				</div>

				{errors.name && (
					<div style={{ color: 'red' }}>{errors.name.message}</div>
				)}

				<div>
					<label>Категория:</label>
					<select {...register('category')} name="category">
						{categories && categories.map((cat) => <option>{cat.name}</option>)}
					</select>
				</div>

				<div>
					<label>Цена:</label>
					<input
						{...register('price', {
							required: 'Обязательное поле!',
						})}
						type="text"
						name="price"
						placeholder="Введине цену"
					/>
				</div>

				{errors.price && (
					<div style={{ color: 'red' }}>{errors.price.message}</div>
				)}

				<div>
					<label>Скидка:</label>
					<input
						{...register('sale', {
							required: 'Обязательное поле!',
						})}
						type="text"
						name="sale"
						placeholder="Укажите скидку в %"
					/>
				</div>

				{errors.sale && (
					<div style={{ color: 'red' }}>{errors.sale.message}</div>
				)}

				<div>
					<label>Изображение:</label>
					<div className={style.uploadButton} onClick={handleClick}>
						Загрузить файл
					</div>

					<input
						type="file"
						name="img"
						ref={fileInput}
					/>

				</div>
				<button type="submit">Добавить товар</button>
			</form>
		</div>
	)
}

export default AddItem
