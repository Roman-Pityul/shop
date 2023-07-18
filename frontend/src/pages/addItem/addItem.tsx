import React from 'react'

import { useAddItem } from './useAddItem'

import style from './addItem.module.scss'

const AddItem: React.FC = () => {
	const { categories, register, errors, handleSubmit, onSubmit } = useAddItem()

	return (
		<div className={style.root}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>Добавление товара</h2>

				<div>
					<label>Название:</label>
					<input
						{...register('description', {
							required: 'Обязательное поле!',
						})}
						type="text"
						name="description"
						placeholder="Введите название"
					/>
				</div>

				{errors.description && (
					<div style={{ color: 'red' }}>{errors.description.message}</div>
				)}

				<div>
					<label>Категория:</label>
					<select
						{...register('category', {
							required: 'Обязательное поле!',
						})}
						name="category"
					>
						{categories &&
							categories.map((cat) => (
								<option selected={cat.name === 'Хлеб'}>{cat.name}</option>
							))}
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
						{...register('sale')}
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
					<input
						{...register('file', {
							required: 'Обязательное поле!',
						})}
						type="file"
						name="file"
					/>
				</div>

				<div>
					<label>Папка:</label>
					<select
						{...register('folder', {
							required: 'Обязательное поле!',
						})}
						name="folder"
					><option>default</option>
						{categories &&
							categories.map((cat) => (
								<option>{cat.path}</option>
							))}
					</select>
				</div>

				<button type="submit">Добавить товар</button>
			</form>
		</div>
	)
}

export default AddItem
