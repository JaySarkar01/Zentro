"use client";
import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav>
            <div>
                <Link href="/"><span>zen</span><span>Tro</span></Link>
            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/checkout">Checkout</Link>
                <Link href="/contact">Contact</Link>
                </div>
        </nav>
    )
};