import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Contact ()
{
 
    const cartItems = useSelector( ( state ) => state.cart?.cartItems || [] );
    console.log( "Cart Items:", cartItems );
    
    const handleRemoveItem = ( index ) =>
    { 

    }
    return (
        <>
            <div className="small-container cart-page">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>SubTotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        { cartItems.length === 0 ? (
                            <tr>
                                <td colSpan="3" style={ { textAlign: "center" } }>
                                    Your cart is empty.
                                </td>
                            </tr>
                        ) : (
                            cartItems.map( ( item, index ) => (
                                <tr key={ index }>
                                    <td>
                                        <div className="cart-info">
                                            <img src={ item.image } alt={ item.name } />
                                            <div>
                                                <p>{ item.name }</p>
                                                <small>Price: { item.price }đ</small>
                                                <br />
                                                <button className="btn-remove" onClick={ () => handleRemoveItem( index ) }>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <input type="number" value={ item.quantity || 1 } readOnly />
                                    </td>
                                    <td>{ ( item.price * ( item.quantity || 1 ) ).toLocaleString() }đ</td>
                                </tr>
                            ) )
                        ) }
                    </tbody>
                </table>

                <div className="total-price">
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>đ</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>0.00đ</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>đ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="small-container">
                <div className="row row-2">
                    <h2>Related Products</h2>
                    <p>View More</p>
                </div>
            </div>
        </>
    );
}

export default Contact;
