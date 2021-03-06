import React from 'react'

import{ Grid} from '@material-ui/core'
import Product from './Product/Product';

import useStyles from './styles'


// const products = [
//     {id: 1, name: 'T-shirt', description: 'light weight shirt, steel grey', price: "$ 14.99", image: 'https://content.asos-media.com/-/media/images/articles/men/2018/03/07-weds/top-10-t-shirts/asos-mw-dd-article-top-10-tshirts-02.jpg?h=641&w=426&la=en-GB&hash=1D0EEDCDE6DC580C4E6D9C23FD41DCA4'},
//     {id: 2, name: 'T-shirt', description: 'light weight shirt, red' , price: "$ 14.99", image: "https://images.asos-media.com/products/reclaimed-vintage-inspired-oversized-overdye-t-shirt-in-blue/20598384-1-navy?$n_640w$&wid=513&fit=constrain" },
//     {id: 3, name: 'T-shirt', description: 'light weight shirt black', price: "$ 14.99", image: 'https://i.pinimg.com/originals/80/69/41/8069414836de2e0daaf3b49200166bf0.jpg'}

// ];

const Products = ({ products, onAddToCart }) => {

    const classes = useStyles();
    return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>{
                return (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
                )
            })}
          

        </Grid>
     </main>
    )
    
}

export default Products
