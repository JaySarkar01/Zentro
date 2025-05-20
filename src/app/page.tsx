"use client";
import React from 'react';
import stripe from 'stripe';


export default function Home() {

  // const products = await stripe.products.list({
  //   expand:["data.default_price"],
  //   limit: 5
  // });

  // console.log(products);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
