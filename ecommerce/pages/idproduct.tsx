import React from 'react';
import Stripe from 'stripe';
import { GetStaticPaths } from 'next';

import stripeConfig from '../config/stripe';
//this will call the stripe api and return it's paths
// you can find the api details  in the config folder



const Product : React.FC = ( ) => {
    return <h1>Products</h1>
}



//need to be exported so the server can recognize it, I think    ':)
export const  getStaticPaths: GetStaticPaths = async ( ) => {
    const stripe = new Stripe( stripeConfig.secretKey, {
        apiVersion: '2020-03-02',
    });
    
    const products = await stripe.products.list( );
    
    console.log(products.data);


    return {
        paths: [ ], //array type
        fallback: false,
    };
};



export default Product;