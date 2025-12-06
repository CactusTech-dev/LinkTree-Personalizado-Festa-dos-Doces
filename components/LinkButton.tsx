import React from 'react';
import { SocialLink } from '../types';
import { ChevronRight } from 'lucide-react';

interface LinkButtonProps {
  link: SocialLink;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  const Icon = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group flex items-center w-full p-4 mb-3 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl
        ${link.highlight 
          ? 'bg-gradient-to-r from-brand-500 to-brand-400 text-white shadow-brand-200 shadow-lg border-2 border-brand-300' 
          : 'bg-white text-chocolate-900 hover:bg-brand-50 shadow-md border border-brand-100'}
      `}
    >
      <div className={`
        p-2 rounded-full mr-4 transition-colors
        ${link.highlight ? 'bg-white/20' : 'bg-brand-100 group-hover:bg-brand-200'}
      `}>
        <Icon size={20} className={link.highlight ? 'text-white' : 'text-brand-600'} />
      </div>
      
      <span className="flex-grow font-sans font-medium text-lg">
        {link.label}
      </span>
      
      <ChevronRight 
        size={20} 
        className={`opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${link.highlight ? 'text-white' : 'text-brand-400'}`} 
      />
    </a>
  );
};
