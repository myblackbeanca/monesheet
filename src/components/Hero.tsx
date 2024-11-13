import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onAccessClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAccessClick }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2070"
          alt="Digital Vinyl Technology"
          className="w-full h-full object-cover parallax"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Direct-to-Fan Monetization
          <br />
          & Optimization
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Turn your music into exclusive experiences, create collectible moments, and engage fans 
          in ways traditional music distribution can't.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://drop.minyvinyl.com"
            className="btn-secondary inline-flex items-center gap-2 text-lg"
          >
            Plan Your MINY Drop
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;