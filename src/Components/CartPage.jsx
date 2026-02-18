import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefromCart } from '../slicePage/Cartslice';

const CartPage = () => {

   const {cartItems} =  useSelector((state) => state.cart)
   const dispatch = useDispatch();


  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                {cartItems.length === 0 ? (<p>Your Cart is Empty</p>) : (
                    
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                cartItems.map( (product, index) => {
                                        return(
                                            <tr key={index}>
                                                <td>
                                                    <img
                                                     src = {product.img} 
                                                     alt = {product.title}
                                                      style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        objectFit: "cover",
                                                        borderRadius: "8px"
                                                    }}
                                                     />
                                                </td>

                                                <td>
                                                    {product.title}
                                                </td>

                                                <td>
                                                    {product.price}
                                                </td>

                                                <td>
                                                    {product.quantity}
                                                </td>
                                                <td>
                                                    ₹{product.price * product.quantity}
                                                </td>

                                                <td>
                                                    {
                                                        <button onClick={() => dispatch( removefromCart(product.id) )}>Remove</button>
                                                    }
                                                </td>
                                                
                                            </tr>
                                        )
                                })
                            }
                        </tbody>
                    </table>
                )
                }
            </div>
        </div>
    </div>
  )
}

export default CartPage