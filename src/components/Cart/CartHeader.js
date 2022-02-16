import React, { useState } from 'react'

export const CartHeader = ({
    cardData
}) => {
   

    return (
        <div>
            <div>{cardData.totalCount}</div>
            <div>$ { cardData.totalPrice}</div>
        </div>
    )
}
