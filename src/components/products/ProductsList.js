import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { Grid } from '@mui/material'
import { ProductsListItem } from './ProductsListItem'
import { productsArray } from './productsArray'

const useStyles = makeStyles({
    title: {
        margin: '30px 0',
        textTransform: 'uppercase',
    },
})

export const ProductList = () => {
    const classes = useStyles()
    return (
        <>
            <Typography
                align="center"
                component="h1"
                variant="h4"
                className={classes.title}
            >
                ProductList
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={3}
            >
                {productsArray.map(({
                    id,
                    name,
                    description,
                    capacity,
                    type,
                    price,
             }) => (
                <Grid item xs={12} sm={6} md={4} key={id}>
                   <ProductsListItem
                      name={name}
                      description={description}
                      capacity={capacity}
                      type={type}
                      price={price}
                   />
                   </Grid>
              ))}
            </Grid>
        </>
    )
}
