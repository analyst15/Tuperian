import React, { useRef, useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronsRight, 
  PieChart, 
  ShoppingBag, 
  Settings, 
  Layout, 
  Server, 
  ShieldCheck, 
  BarChart3,
  Smartphone
} from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { ServiceDetail } from '../types';

interface ServicesShowcaseProps {
  onSelectService: (service: ServiceDetail) => void;
  onBookService: (serviceTitle: string) => void;
  onOpenAIAdvisor?: () => void;
}

// Icon mapper with fallback
const iconMap: Record<string, React.ElementType> = {
  'Data Guard Sentinel': PieChart,
  'Woo Commerce': ShoppingBag,
  'CRM Solutions': Settings,
  'Web Design': Layout,
  'IT Consultancy': Server,
  'Cyber Security': ShieldCheck,
  'App Development': Smartphone,
  'Data Analytics': BarChart3
};

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onSelectService,
  onBookService
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 15;
      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 360, behavior: 'smooth' });
      }
    }
  };

  // Auto-scroll loop every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 15;
        if (isAtEnd) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 360, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Enhance service items with inspo display titles if desired
  const displayServices = [
    {
      ...SERVICES[1] || SERVICES[0], // Cyber security
      displayTitle: 'Data Guard Sentinel',
      displayDescription: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
      IconComponent: PieChart
    },
    {
      ...SERVICES[3] || SERVICES[0], // Web dev / E-commerce
      displayTitle: 'Woo Commerce',
      displayDescription: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
      IconComponent: ShoppingBag
    },
    {
      ...SERVICES[0], // IT Consultancy / CRM
      displayTitle: 'CRM Solutions',
      displayDescription: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
      IconComponent: Settings
    },
    {
      ...SERVICES[3] || SERVICES[0], // Web Design
      displayTitle: 'Web Design',
      displayDescription: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
      IconComponent: Layout
    },
    {
      ...SERVICES[0], // Managed IT
      displayTitle: 'Managed IT Operations',
      displayDescription: 'Strategic technology roadmaps, cloud infrastructure, and IT cost optimization tailored for growth.',
      IconComponent: Server
    },
    {
      ...SERVICES[1], // Cyber security
      displayTitle: 'Cyber Security Shield',
      displayDescription: 'Airtight ransomware defense, zero-trust security audits, endpoint protection, and compliance.',
      IconComponent: ShieldCheck
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Header Section (Matching attached Inspo) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          {/* Left Title Block */}
          <div className="space-y-3 max-w-2xl">
            
            {/* Eyebrow: ← OUR SERVICES → */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#3b52f6] uppercase tracking-wider">
              <span className="text-[#3b52f6]">←</span>
              <span>OUR SERVICES</span>
              <span className="text-[#3b52f6]">→</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-sans">
              Elevating Businesses With IT Ingenuity
            </h2>
          </div>

          {/* Right Navigation Arrow Buttons */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <button
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full border border-slate-700/80 bg-slate-900/90 text-slate-200 flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer shadow-md"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full bg-[#3b52f6] hover:bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 transition-all transform hover:scale-105 cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Scrollable Services Cards Carousel Container */}
        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-4 pt-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayServices.map((service, index) => {
            const IconComp = service.IconComponent || PieChart;

            return (
              <div
                key={`${service.id}-${index}`}
                className="snap-start shrink-0 w-[290px] sm:w-[320px] lg:w-[300px] rounded-[28px] bg-slate-900/90 border border-slate-800/90 p-7 flex flex-col justify-between hover:border-[#3b52f6]/60 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 group"
              >
                <div>
                  {/* Top Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#3b52f6] flex items-center justify-center mb-6 group-hover:bg-[#3b52f6] group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 font-sans group-hover:text-blue-400 transition-colors">
                    {service.displayTitle}
                  </h3>

                  {/* Service Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-8">
                    {service.displayDescription}
                  </p>
                </div>

                {/* Read More Pill Button */}
                <div>
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700/80 bg-slate-950/60 text-xs font-bold text-slate-200 hover:bg-[#3b52f6] hover:border-[#3b52f6] hover:text-white transition-all cursor-pointer group/btn shadow-sm"
                  >
                    <span>Read more</span>
                    <ChevronsRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
