import React from 'react'

import style from './addItem.module.scss'
import { useAddItem } from './useAddItem'

const AddItem: React.FC = () => {

const {categories} = useAddItem()

return (
  <div className={style.root}>
    <h2>Добавление товара</h2>
    <div>
      <label>Название:</label>
      <input type='text' />
    </div>
    <div>
      <label>Категория:</label>
      <select>
        {categories && categories.map(cat => (
          <option>{cat.name}</option>
        ))}
      </select>
    </div>
    <div>
      <label>Цена:</label>
      <input type='text' />
    </div>
    <div>
      <label>Скидка:</label>
      <input type='text' />
    </div>
    <div>
      <label>Изображение:</label>
      <input type='file' />
    </div>
    <button>Добавить товар</button>
  </div>
 )
}

export default AddItem
