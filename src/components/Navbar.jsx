import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const wppLink = "https://wa.me/5531997289558?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20consultoria%20gratuita!";

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Oficial */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="#">
              <img 
                src="/logo-cas4.webp" 
                alt="Logo Cas4 Pisos & Ambientes" 
                className="h-16 w-auto object-contain" 
              />
            </a>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#solucoes" className="text-sm font-semibold text-slate-700 hover:text-[#B28D42] transition-colors">Soluções</a>
            <a href="#diferenciais" className="text-sm font-semibold text-slate-700 hover:text-[#B28D42] transition-colors">Diferenciais</a>
            <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-[#B28D42] transition-colors">Dúvidas</a>
            <a href={wppLink} target="_blank" rel="noreferrer" className="px-6 py-2 border-2 border-[#0A2F5C] text-[#0A2F5C] font-bold rounded-lg hover:bg-[#0A2F5C] hover:text-white transition-all">
              Fale Conosco
            </a>
          </nav>

          {/* Botão Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#0A2F5C] focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <a href="#solucoes" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50">Soluções</a>
            <a href="#diferenciais" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50">Diferenciais</a>
            <a href={wppLink} target="_blank" rel="noreferrer" className="mt-4 w-full text-center block px-4 py-3 bg-[#B28D42] text-white font-bold rounded-lg shadow-md">
              Agendar Medição
            </a>
          </div>
        </div>
      )}
    </header>
  );
}