import ItemCount from "../../components/ItemCount/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";

/*const arreglo=[
    {name:'producto 1', id:'sdfsdfjghsdj '},
    {name:'producto 2', id:'sdfsdfjadsadghsdj '},
    {name:'producto 3', id:'sdfsdfjgxzvhsdj '},
    {name:'producto 4', id:'sdfsdfjsacxghsdj '},
    {name:'producto 5', id:'sdfsdfjjhgjghsdj '},
    {name:'producto 6', id:'sdfsdfbnbjghsdj '},
]*/

const ItemListContainer = ({greeting}) => {
    const [products,setProducs]= useState([]);

    const[singleProduct,setSingleProduct]=useState({});
    const idProducto='5';

   /* const  getProducts= new Promise ((resolve,reject)=>{
        
        setTimeout(()=>{
            resolve(arreglo);
        },2000);   
    });
*/

const getProducts=  fetch('https://fakestoreapi.com/products', {
    method:'GET',
    headers:{
        'content-type': 'json'
    }
});




const addProduct=fetch('https://fakestoreapi.com/products',{
    method:'POST',
    body: JSON.stringify(
        {
            title:'test product',
            price:13.5,
            description:'lorem ipsum set',
            image:'https://i.pravatar.cc',
            category:'electronic'
        }
    ),
});

useEffect(()=> {
    getProducts
    .then((res)=>{
        return res.json();
    } )
    .then((response)=>{
        setProducs(response);
    })
    .catch(error=> console.log(error))
}, [])




useEffect(()=>{
    addProduct
    .then(response=>{
        response.json() 
    })
    .then(productoCreado => {
        alert('el id del producto creado es' + productoCreado.id)
        console.log(productoCreado)
    })
    .catch((error)=>{console.log(error)})
},[])

return (
    <div>
        {greeting}
        <ItemCount/>
        <ItemList productos={products}/>
        <h1>ESTE ES UN PRODUCOT ESPECIFICO</h1>

            <div  width="150" className='product'>
                <img alt={singleProduct.title } src={singleProduct.image} width="150"/>
                <h2>{singleProduct.title }</h2>
                <h3>{singleProduct.category }</h3>
                <h3>{singleProduct.description }</h3>
            </div>

    </div>
    
  )
}

export default ItemListContainer
