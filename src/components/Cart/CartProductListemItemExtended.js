import React from 'react'
import { Button, Card, CardContent, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Delete } from '@mui/icons-material'
import { Quantity } from 'components/Quantity/Quantity'

const useStyles = makeStyles({
    media: {
        width: 150,
        height: 'auto',
    },
    cardWrap: {
        display: 'flex',
        padding: 15,
    },
})

export const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
}) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.cardWrap}>
                <div>
                    <img src={product.image} className={classes.media}></img>
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <div>Price for one items: {product.price}</div>
                    <div>Count: {productCount}</div>
                    <Quantity count={productCount} />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <Delete />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
