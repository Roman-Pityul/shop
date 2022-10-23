import React from 'react'

import Item from '../item/item'
import { Items } from '../../redux/items/types'

type ItemContainerProps = {
  items: Items[]
}

const ItemsContainer: React.FC<ItemContainerProps> = ({ items }) => {
  return (
    <>
      {
        items.map(item => (
          <Item
            key={item._id}
            img={item.img}
            price={item.price}
            sale={item.sale}
            description={item.description}
            _id={item._id}
          />
        ))
      }
    </>
  )
}

export default ItemsContainer