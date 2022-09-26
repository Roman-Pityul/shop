import React from 'react'
import { useDispatch } from 'react-redux'

import { clearActiveIcon, setActiveIcon } from '../../redux/head/headReducer'

import styles from './orders.module.scss'

const Orders = () => {

   const dispatch = useDispatch()

   //@ts-ignore
   React.useEffect(() => {
      dispatch(setActiveIcon('odrers'))
      return () => dispatch(clearActiveIcon())
   }, [])

   return (
      <div>Orders</div>
   )
}

export default Orders