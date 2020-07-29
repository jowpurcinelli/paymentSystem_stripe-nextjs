import React from 'react';
import Stripe from 'stripe';
import { getStaticPaths, GetStaticPaths } from 'next';

//this will call the stripe api and return it's paths
// you can find the api details  in the config folder
const  getStaticPats: GetStaticPaths = async ( ) => {
    const stripe = new Stripe( )
    
    
    return {
        paths: [ ], //array type
        fallback: false,
    }
}