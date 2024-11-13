import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  cta: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, link, cta }) => {
  return (
    <a
      href={link}
      className="group block p-8 bg-white rounded-2xl hover-lift"
    >
      <div className="hexagon mb-8">
        <div className="hexagon-inner group-hover:bg-black group-hover:text-white">
          <div className="transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">{title}</h3>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
      <div className="text-center">
        <button className="btn-primary text-sm inline-flex items-center gap-2">
          {cta}
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </a>
  );
};

export default FeatureCard;