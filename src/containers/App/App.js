import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'
import { productsArray } from 'components/products/productsArray'

export const App = () => {
    const [cardData, setCardData] = useState({
        totalCount: 0,
        totalPrice: 0,
    })

    const adProductToCart = (count, price) =>
        setCardData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + price * count,
        }))

    return (
        <>
            <CssBaseline />
            <Header cardData={cardData} />
            <Main adProductToCart={adProductToCart} />
            <Footer />
        </>
    )
}
