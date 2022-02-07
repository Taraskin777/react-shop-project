import React from 'react'
import { Container } from '@mui/material'
import { ProductList } from 'components/products/ProductsList'

export const Main = () => {
    return (
        <>
            <Container>
                <ProductList />
            </Container>
        </>
    )
}
