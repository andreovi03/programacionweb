export function Products (props) {
  const { img, desc, price } = props
  return (
    <div id='products'>
      <img src={img} id='productimg' />
      <h3>{desc}</h3>
      <p>{price}</p>
    </div>
  )
}
