import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../slicePage/Cartslice';

const ProductPage = () => {

  const Products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 1999,
      img: "https://images.unsplash.com/photo-1516570161787-2fd917215a3d"
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 2999,
      img: "https://images.unsplash.com/photo-1516570161787-2fd917215a3d"
    },
    {
      id: 3,
      title: "Gaming Laptop",
      price: 75999,
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 4,
      title: "Running Shoes",
      price: 2499,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 5,
      title: "DSLR Camera",
      price: 45999,
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      price: 1499,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }
  ]

  const dispatch = useDispatch();

  function Addcart(product){
    dispatch(addtoCart(product))
  }

  return (
    <div className='container mt-4'>
      <div className='row'>
        {Products.map((product) => (
          <div className='col-12 col-md-6 col-3 mb-4' key={product.id}>
            <div className='card h-100'>
              <img 
                src={product.img} 
                alt={product.title} 
                height="250"
                className='card-img-top'
              />
              <div className='card-body'>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-text'>₹{product.price}</p>
                <button onClick={() => Addcart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductPage
