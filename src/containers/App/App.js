import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'

export const App = () => {

    const [cardData, setCardData] = useState ({
        totalCount: 0,
        totalPrice: 0,
    })
    return (
        <>
            <CssBaseline />
            <Header cardData={cardData} />
            <Main />
            <Footer />
        </>
    )
}
