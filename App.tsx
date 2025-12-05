import React, { useState, useEffect, useRef } from 'react';
import { Tab, EffectCategory, ShortcutCategory, ExpressionCategory } from './types';
import { shortcutsData, expressionsData, effectsData } from './data/aeData';
import ShortcutKey from './components/ShortcutKey';
import ExpressionBlock from './components/ExpressionBlock';
import EffectCard from './components/EffectCard';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.SHORTCUTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiQuery, setAiQuery] = useState<string | undefined>(undefined);
  const [isAiPanelOpen, setIsAiPanelOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('');

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openAiWithQuery = (query: string) => {
    setAiQuery(query);
    setIsAiPanelOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        // Offset for sticky header
        const y = el.getBoundingClientRect().top + (scrollContainerRef.current?.scrollTop || 0) - 140;
        scrollContainerRef.current?.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Update active category based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
        const categories = getNavItems();
        for (const cat of categories) {
            const el = document.getElementById(cat.id);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < 300) {
                    setActiveCategory(cat.id);
                    break;
                }
            }
        }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const getNavItems = () => {
    // Correctly extract label: "🛠️ 工具 (Tools)" -> "🛠️ 工具"
    const getLabel = (name: string) => name.split('(')[0].trim();

    switch (activeTab) {
        case Tab.SHORTCUTS: return shortcutsData.map((c, i) => ({ id: `cat-${i}`, label: getLabel(c.name), fullLabel: c.name, count: c.items.length }));
        case Tab.EXPRESSIONS: return expressionsData.map((c, i) => ({ id: `exp-${i}`, label: getLabel(c.name), fullLabel: c.name, count: c.items.length }));
        case Tab.EFFECTS: return effectsData.map((c, i) => ({ id: `fx-${i}`, label: getLabel(c.name), fullLabel: c.name, count: c.items.length }));
        default: return [];
    }
  }

  const renderContent = () => {
    const term = searchQuery.toLowerCase();

    // Helper for category header rendering
    const renderHeader = (name: string) => {
        const parts = name.split('(');
        const mainTitle = parts[0].trim();
        const subTitle = parts[1] ? `(${parts[1]}` : '';
        
        return (
             <div className="sticky top-0 z-10 bg-[#0f0f0f]/95 backdrop-blur-md py-4 mb-4 border-b border-white/5 flex items-baseline gap-3">
                <h3 className="text-xl font-bold text-ae-cyan">{mainTitle}</h3>
                <span className="text-sm font-medium text-gray-500">{subTitle}</span>
             </div>
        );
    };

    switch (activeTab) {
      case Tab.SHORTCUTS:
        return (
          <div className="space-y-10 pb-20 animate-fade-in max-w-7xl mx-auto">
             <div className="bg-gradient-to-r from-gray-900 via-[#1a1a1a] to-gray-900 p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 text-[10rem] opacity-[0.03] select-none group-hover:opacity-[0.05] transition-opacity rotate-12">⌨️</div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">Keyboard Shortcuts</h2>
                    <p className="text-ae-cyan/80 font-mono text-sm tracking-wide">MASTER THE KEYBOARD • V9.0 ULTIMATE</p>
                </div>
             </div>
            {shortcutsData.map((category: ShortcutCategory, idx) => {
              const filteredItems = category.items.filter(i => 
                i.name.toLowerCase().includes(term) || i.key.join(' ').toLowerCase().includes(term)
              );
              if (filteredItems.length === 0) return null;
              const id = `cat-${idx}`;

              return (
                <div key={idx} id={id} className="scroll-mt-32">
                  {renderHeader(category.name)}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                    {filteredItems.map((item, i) => (
                      <ShortcutKey 
                        key={i} 
                        keys={item.key} 
                        name={item.name}
                        description={item.description} 
                        vizType={item.vizType}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );

      case Tab.EXPRESSIONS:
        return (
          <div className="space-y-10 pb-20 animate-fade-in max-w-7xl mx-auto">
             <div className="bg-gradient-to-r from-gray-900 via-[#1a1a1a] to-gray-900 p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 text-[10rem] opacity-[0.03] select-none group-hover:opacity-[0.05] transition-opacity rotate-12">ƒ</div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">Expressions Guide</h2>
                    <p className="text-ae-cyan/80 font-mono text-sm tracking-wide">AUTOMATE YOUR WORKFLOW • JS REFERENCE</p>
                </div>
             </div>
            {expressionsData.map((category: ExpressionCategory, idx) => {
              const filteredItems = category.items.filter(e => 
                 e.name.toLowerCase().includes(term) || e.syntax.toLowerCase().includes(term)
              );
              if(filteredItems.length === 0) return null;
              const id = `exp-${idx}`;

              return (
                <div key={idx} id={id} className="scroll-mt-32">
                   {renderHeader(category.name)}
                   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredItems.map((exp, i) => (
                        <ExpressionBlock key={i} data={exp} onAskAI={openAiWithQuery} />
                      ))}
                   </div>
                </div>
              );
            })}
          </div>
        );

      case Tab.EFFECTS:
        return (
          <div className="space-y-10 pb-20 animate-fade-in max-w-7xl mx-auto">
             <div className="bg-gradient-to-r from-gray-900 via-[#1a1a1a] to-gray-900 p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 text-[10rem] opacity-[0.03] select-none group-hover:opacity-[0.05] transition-opacity rotate-12">✨</div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">Effects Dictionary</h2>
                    <p className="text-ae-cyan/80 font-mono text-sm tracking-wide">NATIVE LIBRARY • VISUALIZED</p>
                </div>
             </div>
            {effectsData.map((category: EffectCategory, idx) => {
               const filteredEffects = category.items.filter(e => 
                 e.name.toLowerCase().includes(term) || e.description.toLowerCase().includes(term)
               );
               if (filteredEffects.length === 0) return null;
               const id = `fx-${idx}`;

               return (
                <div key={idx} id={id} className="scroll-mt-32">
                  {renderHeader(category.name)}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {filteredEffects.map((effect, i) => (
                      <EffectCard key={i} effect={effect} onAskAI={openAiWithQuery} />
                    ))}
                  </div>
                </div>
               )
            })}
          </div>
        );
      
      default:
        return null;
    }
  };

  const navItems = getNavItems();

  return (
    <div className="h-screen flex bg-[#0f0f0f] text-gray-200 font-sans selection:bg-ae-cyan selection:text-black overflow-hidden">
      
      {/* Desktop Sidebar */}
      <nav className="w-72 flex-shrink-0 bg-[#121212] border-r border-white/5 hidden md:flex flex-col z-20 shadow-2xl">
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <div className="w-9 h-9 bg-gradient-to-br from-[#002b3d] to-[#001e2b] border border-ae-cyan/50 text-ae-cyan rounded-md flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(88,196,220,0.15)] mr-3">
            V9
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-100 tracking-wider text-base">AE WIKI</span>
            <span className="text-[10px] text-gray-600 font-mono">ULTIMATE EDITION</span>
          </div>
        </div>

        {/* Main Tabs */}
        <div className="p-4 grid grid-cols-3 gap-2">
             <button 
               onClick={() => setActiveTab(Tab.SHORTCUTS)} 
               className={`py-2.5 rounded-lg text-xs font-bold transition-all flex flex-col items-center gap-1 ${activeTab === Tab.SHORTCUTS ? 'bg-ae-cyan text-black shadow-lg shadow-ae-cyan/20' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
             >
               <span className="text-base">⌨️</span>
               KEYS
             </button>
             <button 
               onClick={() => setActiveTab(Tab.EFFECTS)} 
               className={`py-2.5 rounded-lg text-xs font-bold transition-all flex flex-col items-center gap-1 ${activeTab === Tab.EFFECTS ? 'bg-ae-cyan text-black shadow-lg shadow-ae-cyan/20' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
             >
               <span className="text-base">✨</span>
               FX
             </button>
             <button 
               onClick={() => setActiveTab(Tab.EXPRESSIONS)} 
               className={`py-2.5 rounded-lg text-xs font-bold transition-all flex flex-col items-center gap-1 ${activeTab === Tab.EXPRESSIONS ? 'bg-ae-cyan text-black shadow-lg shadow-ae-cyan/20' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
             >
               <span className="text-base">ƒ</span>
               EXP
             </button>
        </div>

        <div className="px-6 py-2">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Categories</h3>
        </div>

        <div className="flex-1 overflow-y-auto px-3 space-y-0.5 custom-scrollbar pb-4">
            {navItems.map((item, idx) => (
                <button 
                    key={idx}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-md text-sm transition-all flex justify-between items-center group ${activeCategory === item.id ? 'bg-white/10 text-ae-cyan font-medium border-l-2 border-ae-cyan' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border-l-2 border-transparent'}`}
                >
                    <span className="truncate mr-2">{item.label}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] min-w-[20px] text-center ${activeCategory === item.id ? 'bg-ae-cyan text-black' : 'bg-[#000] text-gray-600 group-hover:text-gray-400'}`}>{item.count}</span>
                </button>
            ))}
        </div>

        <div className="p-4 border-t border-white/5 bg-[#121212]">
           <button 
            onClick={() => setIsAiPanelOpen(!isAiPanelOpen)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 hover:from-blue-800 hover:to-indigo-800 text-white rounded-lg shadow-lg transition-all border border-blue-500/30 group backdrop-blur-sm"
          >
             <svg className="w-5 h-5 text-ae-cyan group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
             <span className="font-bold text-xs tracking-wide">AI TUTOR</span>
           </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative bg-[#0f0f0f] w-full min-w-0">
        
        {/* Top Header */}
        <header className="h-auto md:h-20 bg-[#121212]/80 backdrop-blur-xl border-b border-white/5 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 z-30 flex-shrink-0 sticky top-0">
           
           {/* Mobile Top Bar */}
           <div className="flex items-center justify-between w-full md:w-auto h-16 md:h-auto gap-4">
               <div className="md:hidden flex items-center gap-2">
                 <div className="w-7 h-7 bg-[#001e2b] border border-ae-cyan text-ae-cyan rounded flex items-center justify-center font-bold text-xs">V9</div>
                 <span className="font-bold">AE WIKI</span>
               </div>

               {/* Mobile Tab Switcher */}
               <div className="flex bg-black/40 rounded-lg p-1 md:hidden">
                  <button onClick={() => setActiveTab(Tab.SHORTCUTS)} className={`p-2 rounded ${activeTab===Tab.SHORTCUTS ? 'bg-ae-cyan text-black' : 'text-gray-500'}`}>⌨️</button>
                  <button onClick={() => setActiveTab(Tab.EFFECTS)} className={`p-2 rounded ${activeTab===Tab.EFFECTS ? 'bg-ae-cyan text-black' : 'text-gray-500'}`}>✨</button>
                  <button onClick={() => setActiveTab(Tab.EXPRESSIONS)} className={`p-2 rounded ${activeTab===Tab.EXPRESSIONS ? 'bg-ae-cyan text-black' : 'text-gray-500'}`}>ƒ</button>
               </div>

               <button 
                onClick={() => setIsAiPanelOpen(!isAiPanelOpen)}
                className="md:hidden p-2 text-ae-cyan bg-blue-900/20 rounded-lg border border-blue-500/20"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               </button>
           </div>

           {/* Search Bar */}
           <div className="relative w-full md:max-w-md my-2 md:my-0 group">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 group-focus-within:text-ae-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
             </div>
             <input 
              type="text" 
              placeholder="Search shortcuts, effects, expressions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-ae-cyan/50 focus:ring-1 focus:ring-ae-cyan/50 transition-all placeholder-gray-600 shadow-inner"
             />
           </div>
        </header>

        {/* Mobile Horizontal Nav */}
        <div className="md:hidden bg-[#121212] border-b border-white/5 py-2 px-4 overflow-x-auto flex gap-2 no-scrollbar flex-shrink-0 sticky top-[64px] z-20 shadow-lg">
            {navItems.map((item, idx) => (
                <button 
                    key={idx}
                    onClick={() => scrollToSection(item.id)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:border-ae-cyan/30 active:scale-95 transition-all"
                >
                    {item.label}
                </button>
            ))}
        </div>

        {/* Scrollable Content */}
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth" id="main-scroll">
           {renderContent()}
        </div>
        
        {/* AI Assistant Overlay */}
        {isAiPanelOpen && (
          <div className="absolute top-0 right-0 h-full w-full md:w-[480px] shadow-2xl z-50 animate-slide-in-right border-l border-white/10 bg-[#121212]">
             <AIAssistant initialQuery={aiQuery} onClose={() => setIsAiPanelOpen(false)} />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;