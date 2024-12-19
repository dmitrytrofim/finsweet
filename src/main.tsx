import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.tsx';
import Blog from '@/pages/Blog.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/blog" element={<Blog />} />
   </Routes>
  </BrowserRouter>
 </React.StrictMode>
);
