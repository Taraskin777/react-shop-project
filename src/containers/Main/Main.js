import React from 'react'
import { Container } from '@mui/material'
import { ProductList } from 'components/products/ProductsList'

export const Main = ({adProductToCart}) => {
    return (
        <>
            <Container>
                <ProductList adProductToCart={adProductToCart} />
            </Container>
        </>
    )
}

