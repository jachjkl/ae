import React from 'react';
import { ExpressionFunction } from '../types';
import Visualizer from './Visualizer';

interface Props {
  data: ExpressionFunction;
  onAskAI: (topic: string) => void;
}

const ExpressionBlock: React.FC<Props> = ({ data, onAskAI }) => {
  return (
    <div className="bg-[#181818] border border-white/5 rounded-xl shadow-lg overflow-hidden flex flex-col hover:border-ae-cyan/40 hover:-translate-y-1 transition-all duration-300 group h-full">
      <div className="h-24 bg-[#0a0a0a] border-b border-white/5 relative group-hover:bg-[#0f0f0f] transition-colors">
         <Visualizer type={data.vizType} />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-ae-cyan text-base tracking-tight">{data.name}</h3>
          <button 
            onClick={() => onAskAI(`详细解释 AE 表达式函数: ${data.name}`)}
            className="text-[10px] uppercase tracking-wide bg-white/5 hover:bg-ae-accent text-gray-500 hover:text-white px-2 py-1 rounded transition-colors"
          >
            Explain
          </button>
        </div>

        <p className="text-gray-400 text-sm mb-5 leading-relaxed flex-grow">{data.description}</p>
        
        <div className="mt-auto space-y-3">
            <div className="bg-[#050505] p-2.5 rounded border border-white/10 group-hover:border-ae-cyan/20 transition-colors">
                <code className="text-green-400 font-mono text-xs break-all block">{data.syntax}</code>
            </div>
            {data.exampleCode && (
                <div className="relative pl-3 border-l-2 border-ae-accent/30">
                    <pre className="text-gray-500 font-mono text-[10px] overflow-x-auto whitespace-pre-wrap scrollbar-thin scrollbar-thumb-gray-800">
                        {data.exampleCode}
                    </pre>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ExpressionBlock;