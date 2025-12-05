import React from 'react';
import Visualizer from './Visualizer';

interface Props {
  keys: string[];
  name: string;
  description: string;
  vizType?: string;
}

const ShortcutKey: React.FC<Props> = ({ keys, name, description, vizType }) => {
  return (
    <div className="flex flex-col bg-[#181818] rounded-xl shadow-lg border border-white/5 overflow-hidden hover:border-ae-cyan/40 hover:-translate-y-1 transition-all duration-300 group h-full">
      <div className="h-24 border-b border-white/5 bg-[#0a0a0a] group-hover:bg-[#0f0f0f] transition-colors relative">
         <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity">
            <Visualizer type={vizType} />
         </div>
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h4 className="font-bold text-gray-200 text-sm mb-4 text-center truncate group-hover:text-ae-cyan transition-colors" title={name}>{name}</h4>
        
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
          {keys.map((k, idx) => (
             <kbd key={idx} className="bg-[#2a2a2a] border-b-2 border-b-black border border-t-white/10 rounded-md px-2.5 py-1.5 font-mono text-xs text-gray-200 min-w-[28px] text-center shadow-md">
               {k}
             </kbd>
          ))}
        </div>
        
        <p className="text-xs text-gray-500 text-center leading-relaxed mt-auto line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ShortcutKey;