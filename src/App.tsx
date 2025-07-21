import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import VerificationPage from './pages/VerificationPage';
import ProfilePage from './pages/ProfilePage';
import MatchingPage from './pages/MatchingPage';
import ChatPage from './pages/ChatPage';
import ReviewsPage from './pages/ReviewsPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import LegalPage from './pages/LegalPage';
import CommunityPage from './pages/CommunityPage';
import SupportPage from './pages/SupportPage';
export function App() {
  return <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/verificacao" element={<VerificationPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/matching" element={<MatchingPage />} />
            <Route path="/chat/:id" element={<ChatPage />} />
            <Route path="/avaliacoes" element={<ReviewsPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/comunidade" element={<CommunityPage />} />
            <Route path="/suporte" element={<SupportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}