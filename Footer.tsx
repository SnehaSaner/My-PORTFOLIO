
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 border-t border-neon-cyan/20 text-center text-gray-500">
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} Sneha Saner. All rights reserved.</p>
        <p className="text-sm mt-1">Designed with a futuristic vision.</p>
      </div>
    </footer>
  );
};
