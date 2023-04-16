import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { ItemsContainer, ItemSkeleton, Pagination } from "../../components"
import { fetchCategory } from '../../redux/items/asyncActions'
import { RootState } from '../../redux'
import { deleteItemsFromState, setActiveItem } from "../../redux/items/itemsReducer"

import "./items.scss"

const Items: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, items } = useSelector((store: RootState) => store.items)

  const [currentPage, setCurrentPage] = React.useState<number>(1)
  const [itemsPerPage, setItemsRerPage] = React.useState<number>(8)

  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentItem = items.slice(firstItemIndex, lastItemIndex)

  const { cat } = useParams();

  //@ts-ignore
  React.useEffect(() => {
    //@ts-ignore
    dispatch(fetchCategory(cat));
    return () => dispatch(deleteItemsFromState());
  }, [dispatch, cat]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    dispatch(setActiveItem(pageNumber))
  }

  if (isLoading) {
    return (
      <div className="items">
        {[...new Array(8)].map((_, index) => <ItemSkeleton key={index} />)}
      </div>
    );
  }

  return (
    <div className="items_container">
      <div className="items">
        <ItemsContainer items={currentItem} />
      </div>
      {
        items.length > 8 &&
        <div>
          <Pagination
            totalItems={items.length}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
          />
        </div>
      }
    </div>
  )
};

export default Items;
