import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Promises from './pages/Promises';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Stories from './pages/Stories';
import Support from './pages/Support';

export default function App() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Header />
      <div className="min-h-screen py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/promises" element={<Promises />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
} 