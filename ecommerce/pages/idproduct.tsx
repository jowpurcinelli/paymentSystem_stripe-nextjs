import React from 'react';
import Stripe from 'stripe';
import { GetStaticPaths, GetStaticProps } from 'next';

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
    
    const skus = await stripe.skus.list( );
    
    const paths = skus.data.map((sku) => ({
        params: {
            skuId: sku.id,


        },
    }));

    console.log(paths);


    return {
        paths, //array type
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ( { params } ) => {
    const stripe = new Stripe( stripeConfig.secretKey, {
        apiVersion: '2020-03-02',
    });
    

    
    const sku = await stripe.skus.retrieve(params.skuId as string);
    
    return {
        props: {
            sku: sku,
         },
    };
};


//passes sku properties as string just for crazy solutions later... 



export default Product;
