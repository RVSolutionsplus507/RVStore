import React from 'react';
import Navbar from '@/views/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from '@/views/Category';
import SingleService from '@/views/SingleService';
import NotFound  from '@/views/NotFound';
import Services from '@/views/Services';
import Checkout from '@/views/Checkout';
import { CartProvider } from './context/CartContext';



export default function App() {
    return (
        <>
        <CartProvider>
            <main>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route path="/" element={<Services />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/services/:category" element={<Category />} />
                        <Route path="/service/:category/:id" element={<SingleService />} />
                        <Route path="/checkout" element={<Checkout />} />  
                    </Routes>
                </BrowserRouter>
            </main>
        </CartProvider>
        </>
    );
}
