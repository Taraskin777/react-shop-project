import React from 'react'
import { Container } from '@mui/material'
import { ProductList } from 'components/products/ProductsList'

export const Main = ({ addProductToCart }) => {
    return (
        <>
            <Container>
                <ProductList addProductToCart={addProductToCart} />
            </Container>
        </>
    )
}
