import React from 'react'
import { keys } from 'lodash'

export const CartTotal = ({ productsObject, productsInCart }) => {
    return (
        <>
            <div>
                Total:
                {keys(productsInCart).reduce((total, productId) => {
                    return (
                        total +
                        productsObject[productId].price *
                            productsInCart[productId]
                    )
                }, 0)}
                $
            </div>
        </>
    )
}
