const ItemDetail = ({product}) => {
  return (
    <div width="150" className='product'>
        <img alt={product.title } src={product.image} width="150"/>
        <h2>{product.title }</h2>
        <h3>{product.category }</h3>
        <h3>{product.description }</h3>

    </div>
  )
}

export default ItemDetail
