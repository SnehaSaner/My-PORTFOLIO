import React from 'react';
import { Award } from 'lucide-react';

interface CertificationItemProps {
  title: string;
  detail: string;
}

export const CertificationItem: React.FC<CertificationItemProps> = ({ title, detail }) => {
  return (
    <div className="flex items-start p-4 bg-gray-900/40 border border-gray-700 rounded-lg transition-colors duration-300 hover:border-neon-cyan/50">
      <div className="flex-shrink-0 mr-4">
        <Award className="w-8 h-8 text-neon-cyan" />
      </div>
      <div>
        <h4 className="font-bold text-lg text-white">{title}</h4>
        <p className="text-gray-400">{detail}</p>
      </div>
    </div>
  );
};