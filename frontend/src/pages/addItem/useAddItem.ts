import { useSelector } from "react-redux"
import { selectCategories } from "../../redux/category/selectors"

export const useAddItem = () => {
  const categories = useSelector(selectCategories)

  return {categories}
}