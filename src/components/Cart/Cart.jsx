import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem';



const Cart = ({ cart }) => {
    console.log(cart)




    const classes = useStyles();

    const EmptyCart = () =>(
        <Typography variant="subtitle1"> you have no items in your shopping Cart, <Link to="/" className={classes.link}>start adding Some!</Link></Typography>
    )

    const FilledCart = () =>(
        <>
        <Grid container spacing={3}>
          {cart.line_items.map((item)=>(
              <Grid item xs={12} sm={4} key={item.id}>
                  <CartItem  item={item}/>
              </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">empty cart</Button>
                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
        </div>

        </>
    );

    if(!cart.line_items) return 'Loading...';
    return (

        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>
                Your Shopping Cart
                {!cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
            </Typography>
        </Container>
    )
}

export default Cart;
