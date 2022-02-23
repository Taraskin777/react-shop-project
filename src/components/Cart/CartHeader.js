import React, { useState } from 'react'
import { keys } from 'lodash'
import { productsArray } from 'components/products/productsArray'

export const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={(productId)}>
                    {productsArray[productId-1].name} : {productsInCart[productId]}
                    
                  
                </div>
            ))}
        </div>
    )
}
