import './Item.css';

const Item = ({producto}) => {
  return (
    <li  width="150" className='product'>
        <img alt={producto.title } src={producto.image} width="150"/>
        <h2>{producto.title }</h2>
        <h3>{producto.category }</h3>
        <h3>{producto.description }</h3>
    </li>

  )
}

export default Item
