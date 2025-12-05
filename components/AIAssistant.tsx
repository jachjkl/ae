import React, { useState, useEffect, useRef } from 'react';
import { askGeminiAboutAE } from '../services/geminiService';
import { GoogleGenAI } from "@google/genai"; // Import purely for type reference if needed, but primarily using service

interface Props {
  initialQuery?: string;
  onClose?: () => void;
}

const AIAssistant: React.FC<Props> = ({ initialQuery, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialQuery) {
      handleSend(initialQuery);
    }
  }, [initialQuery]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (query: string = input) => {
    if (!query.trim()) return;

    const userMsg = { role: 'user' as const, text: query };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const responseText = await askGeminiAboutAE(query);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to AI." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 border-l border-gray-700">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-800">
        <h2 className="text-ae-blue font-bold flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          AE 智能助手
        </h2>
        {onClose && (
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && !loading && (
          <div className="text-center text-gray-500 mt-10">
            <p>我是你的 After Effects 专属 AI 导师。</p>
            <p className="text-sm mt-2">你可以问我关于效果、表达式代码或任何操作问题。</p>
          </div>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-lg p-3 text-sm ${
              msg.role === 'user' 
                ? 'bg-ae-accent text-white' 
                : 'bg-gray-700 text-gray-200'
            }`}>
              <pre className="whitespace-pre-wrap font-sans">{msg.text}</pre>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-700 rounded-lg p-3 text-sm text-gray-400 animate-pulse">
              正在思考...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="询问 AE 相关问题..."
            className="flex-1 bg-gray-900 border border-gray-600 text-white rounded px-3 py-2 focus:outline-none focus:border-ae-accent"
          />
          <button 
            onClick={() => handleSend()}
            disabled={loading}
            className="bg-ae-accent hover:bg-blue-600 text-white px-4 py-2 rounded font-medium disabled:opacity-50"
          >
            发送
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;