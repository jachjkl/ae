import React from 'react';
import { EffectItem } from '../types';
import Visualizer from './Visualizer';

interface Props {
  effect: EffectItem;
  onAskAI: (topic: string) => void;
}

const EffectCard: React.FC<Props> = ({ effect, onAskAI }) => {
  return (
    <div className="bg-[#181818] rounded-xl border border-white/5 overflow-hidden hover:border-ae-cyan/40 hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full shadow-lg">
      {/* Viz Header */}
      <div className="h-32 bg-[#0a0a0a] border-b border-white/5 relative group-hover:bg-[#0f0f0f] transition-colors">
        <Visualizer type={effect.vizType} />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-3 gap-2">
          <h4 className="font-bold text-sm text-gray-200 group-hover:text-ae-cyan transition-colors leading-tight">{effect.name}</h4>
          <span className="text-[9px] bg-white/5 px-2 py-0.5 rounded text-gray-500 border border-white/5 uppercase tracking-wider whitespace-nowrap">{effect.category}</span>
        </div>
        
        <p className="text-xs text-gray-400 mb-5 flex-grow leading-relaxed line-clamp-3">{effect.description}</p>
        
        <button 
          onClick={() => onAskAI(`How to use the '${effect.name}' effect in After Effects? Provide a step-by-step tutorial.`)}
          className="w-full py-2 bg-[#252525] hover:bg-ae-accent hover:text-white text-gray-400 text-[10px] rounded-md transition-all uppercase font-bold tracking-widest border border-white/5 hover:border-transparent flex items-center justify-center gap-2 group/btn"
        >
          <span>Tutorial</span>
          <svg className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default EffectCard;