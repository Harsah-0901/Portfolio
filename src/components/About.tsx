import React from 'react';
import { Badge } from '@/components/ui/badge';
import Orb from './orb';

const About = () => {
  const handshakeSvg = encodeURIComponent(`
    <svg width="800" height="400" viewBox="0 -8 72 72" xmlns="http://www.w3.org/2000/svg">
      <path d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89a0,0,0,0,1,0,0s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z" 
            fill="none" 
            stroke="rgb(168 85 247)" 
            stroke-width="0.8" 
            opacity="0.12"/>
    </svg>
  `);

  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <section 
        id="about" 
        className="py-20 bg-card/30 relative z-10"
        // style={{
        //   backgroundImage: `url("data:image/svg+xml,${handshakeSvg}")`,
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center',
        //   backgroundSize: 'cover'
        // }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {["About", "Me"].map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && ' '}
                    <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                      {word}
                    </span>
                  </React.Fragment>
                ))}
              </h2>
            </div>
            <div className="space-y-8 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                {[
                  "I'm", "a", "developer", "who", "thrives", "on", "building", "real-world", "solutions", "that", "blend", "AI,", "code,", "and", "curiosity.",
                  "Every", "bug", "is", "a", "challenge,", "every", "project", "an", "opportunity", "to", "grow.",
                  "Whether", "I'm", "decoding", "bank", "statements,", "crafting", "dashboards,", "or", "exploring", "the", "depths", "of", "Gen", "AI,", 
                  "my", "goal", "is", "simple:", "build", "bold,", "build", "smart,", "and", "never", "stop", "learning."
                ].map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && ' '}
                    <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                      {word}
                    </span>
                  </React.Fragment>
                ))}
              </p>
              <p className="leading-relaxed">
                {[
                  "I", "don’t", "just", "solve", "problems—I", "deconstruct", "them,", "map", "what", "matters,", "and", "build", "lean,", "intelligent", "solutions", "that", "scale.",
                  "Every", "line", "of", "code", "teaches", "me", "something,", "and", "every", "project", "is", "a", "chance", "to", "contribute", "to", "something", "bigger", "than", "myself.",
                  "That’s", "how", "I", "grow,", "and", "that’s", "how", "I", "lead."
                ].map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && ' '}
                    <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                      {word}
                    </span>
                  </React.Fragment>
                ))}
              </p>
              <p className="leading-relaxed">
                {[
                  "Every", "second", "I", "spend", "is", "an", "investment", "in", "becoming", "better—faster,", "sharper,", "and", "more", "impactful.",
                  "From", "debugging", "code", "to", "diving", "into", "Gen", "AI", "research,", "I'm", "constantly", "leveling", "up", "through", "focused", "practice", "and", "deliberate", "learning.",
                  "This", "isn't", "just", "growth,", "it's", "precision", "engineering", "of", "my", "craft."
                ].map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && ' '}
                    <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                      {word}
                    </span>
                  </React.Fragment>
                ))}
              </p>
              <p className="leading-relaxed">
                {[
                  "When", "I'm", "not", "coding", "or", "breaking", "down", "tech", "problems,", "I'm", "fueling", "my", "mind", "with", "podcasts,", "leveling", "up", "through", "books,", "mentoring", "those", "on", "a", "similar", "path,", "or", "recharging", "at", "the", "gym", "to", "keep", "my", "edge", "sharp."
                ].map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && ' '}
                    <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                      {word}
                    </span>
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 justify-center items-center">
              <Badge 
                variant="secondary" 
                className="hover:scale-125 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 ease-out cursor-default hover:z-10 relative"
              >
                Problem Solver
              </Badge>
              <Badge 
                variant="secondary" 
                className="hover:scale-125 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 ease-out cursor-default hover:z-10 relative"
              >
                Critical Thinker
              </Badge>
              <Badge 
                variant="secondary" 
                className="hover:scale-125 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 ease-out cursor-default hover:z-10 relative"
              >
                Mentor
              </Badge>
              <Badge 
                variant="secondary" 
                className="hover:scale-125 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 ease-out cursor-default hover:z-10 relative"
              >
                Student of knowledge
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;