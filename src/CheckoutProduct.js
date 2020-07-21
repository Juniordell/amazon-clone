import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

// import { Container } from './styles';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [ {basket}, dispatch ] = useStateValue()

    function removeFromBasket() {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct__image' src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            // eslint-disable-next-line jsx-a11y/accessible-emoji
                            <p>⭐</p>
                        ))
                    }
                </div>

                <button onClick={removeFromBasket}>Remove to basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;