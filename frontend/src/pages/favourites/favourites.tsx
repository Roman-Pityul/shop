import React from 'react'
import { useDispatch } from 'react-redux'

import { clearActiveIcon, setActiveIcon } from '../../redux/head/headReducer'

const Favourites: React.FC = () => {

   const dispatch = useDispatch()

   //@ts-ignore
   React.useEffect(() => {
      dispatch(setActiveIcon('favourites'))
      return () => dispatch(clearActiveIcon())
   }, [])

   return (
      <div>Favourites</div>
   )
};

export default Favourites;