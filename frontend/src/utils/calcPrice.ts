
export const caclPriceWithSale = (price: string, sale: string | undefined) => {
  return (Number(price) - (Number(price) / 100 * Number(sale))).toFixed(2)
}