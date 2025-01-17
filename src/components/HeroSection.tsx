import { useEffect } from 'react';
import { setup } from '@/lib/pipeline';

export function HeroSection() {
  useEffect(() => {
    setup();
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="content--canvas absolute inset-0">
        <div className="absolute inset-0" style={{ position: 'absolute', clipPath: 'inset(0)' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center w-full max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold tracking-tight mb-6 text-white">
            Welcome to <span className="text-primary">AILENS</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Transforming businesses through innovative AI solutions and
            cutting-edge technology
          </p>
        </div>
      </div>
    </div>
  );
} 