import { useEffect, useState } from "react";

function Contact ()
{
    const [ cartItems, setCartItems ] = useState( () =>
    {
        const saved = localStorage.getItem( "cartItems" );
        return saved ? JSON.parse( saved ) : [];
    } );

    const handleRemoveItem = ( index ) =>
    {
        const updatedItems = [ ...cartItems ];
        updatedItems.splice( index, 1 );
        setCartItems( updatedItems );
        localStorage.setItem( "cartItems", JSON.stringify( updatedItems ) );
    };

    const subtotal = cartItems.reduce( ( total, item ) =>
    {
        const price = Number( item.price ) || 0;
        const quantity = Number( item.quantity ) || 1;
        return total + price * quantity;
    }, 0 );

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
                                <td>{ subtotal.toLocaleString() }đ</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>0.00đ</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>{ subtotal.toLocaleString() }đ</td>
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
