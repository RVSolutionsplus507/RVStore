import React from 'react';
import Navbar from '@/views/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/views/Home'; 
import Services from '@/views/Services';
import SingleService from '@/views/SingleService';
import NotFound  from '@/views/NotFound';



export default function App() {
    return (
        <>
            <main>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/services/:category" element={<Services />} />
                        <Route path="/service/:category/:id?" element={<SingleService />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    );
}
