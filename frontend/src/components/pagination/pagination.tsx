import classNames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux'

import styles from './pagination.module.scss'

type PaginationProps = {
  totalItems: number
  itemsPerPage: number
  paginate: (number: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, paginate }) => {

  const { activeItem } = useSelector((store: RootState) => store.items)
  const pageNumber = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <div className={styles.root}>
      <ul>
        {pageNumber.map(number => (
          <li className={classNames({ [styles.active]: number == activeItem })} onClick={() => paginate(number)}>{number}</li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination