import React, { useEffect } from 'react';
import { setup } from '../lib/pipeline';

export function HeroSection() {
  useEffect(() => {
    setup();
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="content--canvas absolute inset-0">
        <div className="absolute inset-0" style={{ position: 'absolute', clipPath: 'inset(0)' }}></div>
      </div>
      
      {/* Content with metallic text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center w-full max-w-9xl mx-auto px-6 py-16">
          <div className="inline-block bg-black/70 rounded-lg px-1 py-1 shadow-xl">
            <h1 className="text-5xl md:text-9xl mb-0 tracking-tight font-semibold"
                style={{
                  background: 'linear-gradient(to bottom, #f0f0f0 0%, #c0c0c0 40%, #a9a9a9 50%, #c0c0c0 60%, #f0f0f0 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0px 2px 3px rgba(0,0,0,0.4)',
                  filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.5))',
                }}
            >
              Welcome to <span className="font-medium">AILENS</span>
            </h1>
          </div>
          <p className="text-lg md:text-2xl font-medium max-w-6xl mx-auto mb-12 leading-relaxed text-white/90 bg-black/10 p-4 rounded-lg shadow-xl mt-8">
            Transforming businesses through innovative AI solutions and
            cutting-edge technology
          </p>
        </div>
      </div>
    </div>
  );
} 