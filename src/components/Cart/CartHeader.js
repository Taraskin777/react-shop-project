import React, { useState } from 'react'
import { keys } from 'lodash'
import {
    productsArray,
    getProductsObject,
} from 'components/products/productsArray'



export const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[productId].name} :
                    {productsInCart[productId]}
                </div>
            ))}
            <div>
                {keys(productsInCart).reduce((total, productId) => {
                    return (
                        total +
                        productsObject[productId].price *
                            productsInCart[productId]
                    )
                }, 0)}
                $
            </div>
        </div>
    )
}
