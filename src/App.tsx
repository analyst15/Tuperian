import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesShowcase } from './components/ServicesShowcase';
import { AboutUs } from './components/AboutUs';
import { TeamSection } from './components/TeamSection';
import { CtaBanner } from './components/CtaBanner';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ClientDashboardModal } from './components/ClientDashboardModal';
import { Footer } from './components/Footer';

import { ServiceDetail, AIStrategyRoadmap, ConsultationBooking } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('services');

  // Modals state
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceDetail | null>(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState<boolean>(false);
  const [dashboardModalOpen, setDashboardModalOpen] = useState<boolean>(false);

  // Prefilled modal data
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [prefilledRoadmap, setPrefilledRoadmap] = useState<{ roadmap: AIStrategyRoadmap; industry: string } | null>(null);
  const [prefilledQuote, setPrefilledQuote] = useState<{ setup: number; monthly: number; items: string[] } | null>(null);

  // Local saved bookings
  const [savedBookings, setSavedBookings] = useState<ConsultationBooking[]>([]);

  useEffect(() => {
    // Load initial sample or saved bookings from localStorage
    const stored = localStorage.getItem('tuperian_bookings');
    if (stored) {
      try {
        setSavedBookings(JSON.parse(stored));
      } catch (e) {
        console.error('Failed parsing stored bookings', e);
      }
    }
  }, []);

  const handleBookingSuccess = (newBooking: ConsultationBooking) => {
    const updated = [newBooking, ...savedBookings];
    setSavedBookings(updated);
    localStorage.setItem('tuperian_bookings', JSON.stringify(updated));
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    setPrefilledService(serviceTitle);
    setPrefilledRoadmap(null);
    setPrefilledQuote(null);
    setConsultationModalOpen(true);
  };

  const handleAttachRoadmapToConsultation = (roadmap: AIStrategyRoadmap, industry: string) => {
    setPrefilledService(undefined);
    setPrefilledRoadmap({ roadmap, industry });
    setPrefilledQuote(null);
    setConsultationModalOpen(true);
  };

  const handleAttachQuoteToConsultation = (setup: number, monthly: number, items: string[]) => {
    setPrefilledService(undefined);
    setPrefilledRoadmap(null);
    setPrefilledQuote({ setup, monthly, items });
    setConsultationModalOpen(true);
  };

  const handleBookSecurityAudit = (score: number, riskyAreas: string[]) => {
    setPrefilledService('Cyber Security');
    setPrefilledRoadmap(null);
    setPrefilledQuote(null);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConsultation={handleOpenConsultation}
        onOpenDashboard={() => setDashboardModalOpen(true)}
        savedBookingsCount={savedBookings.length}
      />

      {/* Hero Section */}
      <Hero
        onOpenAIAdvisor={() => {
          setActiveTab('ai-advisor');
          const el = document.getElementById('ai-advisor');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenSecurity={() => {
          setActiveTab('security');
          const el = document.getElementById('security');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Core Practice Areas Showcase */}
      <ServicesShowcase
        onSelectService={(srv) => setSelectedServiceModal(srv)}
        onBookService={(srvTitle) => handleOpenConsultation(srvTitle)}
        onOpenAIAdvisor={() => {
          setActiveTab('ai-advisor');
          const el = document.getElementById('ai-advisor');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* About Us Company Overview Section */}
      <AboutUs
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Our Skilled Expert Team Section */}
      <TeamSection />

      {/* CTA Banner Section */}
      <CtaBanner
        onTalkToSpecialist={() => handleOpenConsultation()}
      />

      {/* Footer */}
      <Footer
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          const el = document.getElementById(tab);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onBookService={(srvTitle) => handleOpenConsultation(srvTitle)}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        prefilledService={prefilledService}
        prefilledRoadmap={prefilledRoadmap}
        prefilledQuote={prefilledQuote}
        onSuccessBooking={handleBookingSuccess}
      />

      {/* Client Dashboard Modal */}
      <ClientDashboardModal
        isOpen={dashboardModalOpen}
        onClose={() => setDashboardModalOpen(false)}
        savedBookings={savedBookings}
        onNewBooking={() => handleOpenConsultation()}
      />

    </div>
  );
}
