import React, { useState } from 'react';
import { 
  Disc3,
  Music2,
  Users,
  Star,
  Lock,
  Sparkles,
  Instagram,
  Facebook
} from 'lucide-react';
import PasswordModal from './components/PasswordModal';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';

function App() {
  const [showModal, setShowModal] = useState(false);

  const features = [
    {
      title: "How MINY holders support your music?",
      description: "Step into the MINY journey from a fan's perspective. Explore previews, collectibles, and a pledge $ feature that makes MINY memorable for your superfans.",
      icon: <Music2 className="w-12 h-12" />,
      link: "https://mpower.minyvinyl.com",
      cta: "Experience a fan Showcase"
    },
    {
      title: "How MINY holders experience your music release",
      description: "With MINY, build excitement through exclusive pre-orders and album launches, offering superfans early access and engagement.",
      icon: <Users className="w-12 h-12" />,
      link: "https://cootab.minyvinyl.com",
      cta: "Experience like a fan"
    },
    {
      title: "Experience a MINY as a Fan",
      description: "Share exclusive previews, new tracks, and direct updates, building a dedicated fan following through your MINY Fan Page.",
      icon: <Disc3 className="w-12 h-12" />,
      link: "https://fanone.minyvinyl.com",
      cta: "Experience Our Showcase"
    },
    {
      title: "Artist Development Events",
      description: "Access workshops and live events tailored to help you optimize your MINY journey, boosting your fan engagement strategy.",
      icon: <Star className="w-12 h-12" />,
      link: "https://showcase.minyvinyl.com",
      cta: "Experience Our Showcase"
    },
    {
      title: "Limited-Edition Drops",
      description: "Create unforgettable experiences through limited-edition releases that transform superfans into lifelong supporters.",
      icon: <Sparkles className="w-12 h-12" />,
      link: "https://exclusives.minyvinyl.com",
      cta: "Experience Our Showcase"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavBar onAccessClick={() => setShowModal(true)} />
      
      <Hero onAccessClick={() => setShowModal(true)} />

      <section id="features" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-4">
            The MINY Blueprint
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Direct-to-Fan Monetization & Optimization: Transform your music distribution
            strategy with digital vinyl technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Ready to Transform Your Music Journey?</h2>
          <button
            onClick={() => setShowModal(true)}
            className="btn-secondary"
          >
            Access Your MINY
          </button>
        </div>
      </section>

      <footer className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://instagram.com/minyvinyl" 
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover-lift"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://facebook.com/minyvinyl" 
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover-lift"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600">© {new Date().getFullYear()} MINY. All rights reserved.</p>
        </div>
      </footer>

      <PasswordModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;