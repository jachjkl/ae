import React from 'react';

interface Props {
  type?: string;
}

const Visualizer: React.FC<Props> = ({ type }) => {
  if (!type) return <div className="viz-container h-full w-full"><div className="obj"></div></div>;

  const renderContent = () => {
    switch(type) {
      case 'v-counter':
        return <div className="v-counter"></div>;
      case 'v-timeline':
        return <div className="v-timeline"><div className="v-timeline-bar"></div><div className="v-timeline-cursor"></div></div>;
      case 'v-console':
        return <div className="v-console"><div className="v-console-line"></div><div className="v-console-line"></div></div>;
      case 'v-focus':
        return <div className="v-focus"><div className="focus-circle"></div><div className="focus-blur"></div></div>;
      case 'v-loop-cycle':
        return <div className="v-loop-cycle w-full relative h-full"><div className="obj"></div></div>;
      case 'v-text':
        return <div className="v-text">Aa</div>;
      case 'v-wiggle':
        return <div className="v-wiggle"><div className="obj"></div></div>;
      case 'v-graph':
        return <div className="v-graph"><div className="bar"></div><div className="bar"></div><div className="bar"></div></div>;
      case 'v-split-anim':
        return <div className="v-split-anim"></div>;
      case 'v-part':
        return (
          <div className="v-part">
            <div className="dot" style={{ left:'50%', top:'50%', '--tx':'20px', '--ty':'-40px' } as any}></div>
            <div className="dot" style={{ left:'50%', top:'50%', '--tx':'-30px', '--ty':'-20px', animationDelay:'0.2s' } as any}></div>
            <div className="dot" style={{ left:'50%', top:'50%', '--tx':'10px', '--ty':'40px', animationDelay:'0.4s' } as any}></div>
          </div>
        );
      case 'v-nav':
        return <div className="text-4xl opacity-20 select-none">🖱️</div>;
      default:
        return <div className="obj"></div>;
    }
  };

  return (
    <div className="viz-container h-24 bg-[#080808] border-b border-[#222] relative overflow-hidden flex items-center justify-center">
      {renderContent()}
    </div>
  );
};

export default Visualizer;