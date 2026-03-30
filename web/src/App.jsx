import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Activity, Zap, Cpu, ScanLine, Waypoints, Focus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ==============================
// Navbar Component
// ==============================
const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: { className: 'nav-scrolled', targets: navRef.current },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        ref={navRef}
        className="flex items-center justify-between w-full max-w-4xl px-6 py-3 transition-all duration-300 border border-transparent rounded-full nav-base bg-transparent [&.nav-scrolled]:bg-background/60 [&.nav-scrolled]:backdrop-blur-xl [&.nav-scrolled]:border-white/10"
      >
        <span className="text-xl font-bold tracking-tight text-white">MindStack</span>
        <div className="hidden gap-8 md:flex">
          <a href="#features" className="text-sm font-medium transition-colors text-slate-300 hover:text-white">Plataforma</a>
          <a href="#philosophy" className="text-sm font-medium transition-colors text-slate-300 hover:text-white">Filosofia</a>
          <a href="#protocol" className="text-sm font-medium transition-colors text-slate-300 hover:text-white">Protocolo</a>
        </div>
        <button className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white transition-all bg-indigo-600 rounded-full hover:scale-[1.03] active:scale-95 magnetic-btn">
          <span>Iniciar</span>
          <ArrowRight size={16} />
        </button>
      </nav>
    </div>
  );
};

// ==============================
// Hero Section
// ==============================
const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative flex flex-col justify-end w-full min-h-[100dvh] pb-24 px-6 md:px-16 overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
          alt="Dark server architecture"
          className="object-cover w-full h-full opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl">
        <h1 className="flex flex-col mb-8 leading-none">
          <span className="hero-element font-bold text-4xl md:text-6xl lg:text-7xl font-sans tracking-tight text-slate-200">
            O fim da sua
          </span>
          <span className="hero-element font-serif italic text-7xl md:text-9xl text-indigo-400 mt-2 -ml-2">
            sobrecarga
          </span>
        </h1>
        <p className="hero-element max-w-xl text-lg md:text-xl text-slate-400 mb-10 font-medium">
          A MindStack é uma plataforma de produtividade que usa Inteligência Artificial para organizar, priorizar e otimizar tudo que você precisa fazer.
        </p>
        <button className="hero-element flex items-center gap-3 px-8 py-4 text-base font-semibold text-white transition-all bg-indigo-600 rounded-full hover:scale-[1.03] hover:bg-indigo-500 magnetic-btn shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]">
          <span>Iniciar Otimização</span>
          <Zap size={18} />
        </button>
      </div>
    </section>
  );
};

// ==============================
// Features Section
// ==============================
const DiagnosticShufflerCard = () => {
  const [items, setItems] = useState([
    { id: 1, label: 'Email do Cliente', type: 'Baixa', color: 'text-slate-400' },
    { id: 2, label: 'Ajuste de Design', type: 'Média', color: 'text-amber-400' },
    { id: 3, label: 'Lançamento V2', type: 'Crítica', color: 'text-rose-400' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-indigo-500/30 transition-colors relative overflow-hidden group">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold font-sans">Triagem Automática</h3>
        <ScanLine className="text-indigo-500" size={24} />
      </div>
      <p className="text-slate-400 text-sm mb-8 flex-1">A IA categoriza e atribui peso semântico a cada nova tarefa antes mesmo de você ver.</p>
      
      <div className="relative h-48 w-full">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="absolute left-0 right-0 bg-slate-950 border border-white/10 rounded-2xl p-4 flex justify-between items-center transition-all duration-[800ms] shadow-xl"
            style={{
              transform: `translateY(${i * 15}px) scale(${1 - i * 0.05})`,
              zIndex: 10 - i,
              opacity: 1 - i * 0.2,
              filter: `blur(${i}px)`,
            }}
          >
            <span className="font-mono text-xs">{item.label}</span>
            <span className={`text-[10px] uppercase font-bold tracking-wider ${item.color}`}>{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TelemetryTypewriterCard = () => {
  const textRaw = "> Analisando 14 tarefas...\n> Padrão detectado: Foco disperso.\n> Otimizando fila...\n> Prioridade: [REUNIÃO EXECUTIVA - 14H]";
  const [text, setText] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(textRaw.slice(0, i));
      i++;
      if (i > textRaw.length) clearInterval(typing);
    }, 50);

    const blink = setInterval(() => setCursor(c => !c), 500);
    return () => { clearInterval(typing); clearInterval(blink); };
  }, []);

  return (
    <div className="flex flex-col h-full bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-indigo-500/30 transition-colors relative overflow-hidden group">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold font-sans">Foco Dinâmico</h3>
        <div className="flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-xs font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
          Live Feed
        </div>
      </div>
      <p className="text-slate-400 text-sm mb-8 flex-1">O sistema lê o contexto do seu dia e reestrutura o que precisa de atenção imediata.</p>
      
      <div className="bg-slate-950 rounded-2xl p-5 border border-white/5 h-48 font-mono text-[11px] leading-relaxed text-slate-300 relative">
        <pre className="whitespace-pre-wrap font-inherit">{text}{cursor ? <span className="text-indigo-500">_</span> : <span className="text-transparent">_</span>}</pre>
      </div>
    </div>
  );
};

const CursorProtocolSchedulerCard = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.set('.sim-cursor', { x: 0, y: 0, scale: 1 })
        .to('.sim-cursor', { x: 70, y: 40, duration: 1, ease: 'power2.inOut' })
        .to('.sim-cursor', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.cell-target', { backgroundColor: '#4f46e5', color: '#fff', duration: 0.2 }, '-=0.1')
        .to('.sim-cursor', { x: 220, y: 140, duration: 1, ease: 'power2.inOut', delay: 0.5 })
        .to('.sim-cursor', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.btn-save', { backgroundColor: '#4f46e5', duration: 0.2 }, '-=0.1')
        .to('.sim-cursor', { opacity: 0, duration: 0.3, delay: 0.5 })
        .to('.cell-target', { backgroundColor: 'transparent', color: '#94a3b8', duration: 0.3 }, '+=0')
        .to('.btn-save', { backgroundColor: 'rgba(255,255,255,0.05)', duration: 0.3 }, '+=0');
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col h-full bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-indigo-500/30 transition-colors relative overflow-hidden group">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold font-sans">Execução Otimizada</h3>
        <Activity className="text-indigo-500" size={24} />
      </div>
      <p className="text-slate-400 text-sm mb-8 flex-1">Aloca blocos de 'Deep Work' baseados no seu ritmo energético natural previsto.</p>
      
      <div className="relative h-48 w-full bg-slate-950 rounded-2xl border border-white/5 p-4 flex flex-col justify-between">
        <div className="grid grid-cols-7 gap-1 text-[10px] font-mono text-center text-slate-500 mb-2">
          {['D','S','T','Q','Q','S','S'].map((d,i)=><div key={i}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 flex-1">
          {Array.from({length: 21}).map((_, i) => (
            <div key={i} className={`rounded-sm border border-white/5 flex items-center justify-center text-[10px] text-slate-400 transition-colors ${i === 10 ? 'cell-target' : ''}`}>
              {i === 10 ? 'DW' : ''}
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <div className="btn-save px-4 py-1.5 rounded bg-white/5 text-xs font-mono text-white transition-colors">Salvar</div>
        </div>
        
        {/* Cursor SVG */}
        <svg className="sim-cursor absolute top-4 left-4 w-6 h-6 drop-shadow-lg z-20 pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 3.2L18.4 11.2C19.7 12 18.9 14.1 17.3 13.9L13.1 13.5C12.7 13.4 12.3 13.6 12.1 14L9.8 19.3C9.2 20.8 7.1 20.5 6.9 18.9L5.4 5.3C5.2 3.8 6.9 2.7 8.2 3.5H5.5Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DiagnosticShufflerCard />
        <TelemetryTypewriterCard />
        <CursorProtocolSchedulerCard />
      </div>
    </section>
  );
};

// ==============================
// Philosophy Section
// ==============================
const PhilosophySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.phil-line', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="relative py-40 px-6 md:px-16 overflow-hidden bg-slate-950 flex items-center min-h-[80vh]">
      <div className="absolute inset-0 z-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070" className="object-cover w-full h-full" alt="circuit" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-12">
        <p className="phil-line text-xl md:text-2xl text-slate-400 font-medium">
          A maioria das ferramentas de produtividade foca em: <span className="text-slate-200">listas intermináveis.</span>
        </p>
        <p className="phil-line text-4xl md:text-7xl">
          <span className="font-sans font-bold text-slate-200">Nós focamos em: </span>
          <span className="font-serif italic text-indigo-500">ação.</span>
        </p>
      </div>
    </section>
  );
};

// ==============================
// Protocol Section (Sticky Cards)
// ==============================
const ProtocolSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // Last card doesn't scale down
        
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          endTrigger: '.protocol-end', // Container end
          end: 'bottom bottom',
        });

        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(20px)',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const protocols = [
    {
      step: '01',
      title: 'Coleta Neural',
      desc: 'Capture todos os fragmentos e ideias. A inteligência semântica fará a triagem inicial sem sua intervenção.',
      visual: (
         <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-indigo-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
               <div className="w-24 h-24 rounded-full border border-indigo-400/50 flex items-center justify-center animate-[spin_8s_linear_infinite_reverse]">
                  <div className="w-16 h-16 rounded-full bg-indigo-500/20 blur-xl"></div>
               </div>
            </div>
         </div>
      )
    },
    {
      step: '02',
      title: 'Síntese Ativa',
      desc: 'Os relacionamentos orgânicos entre os dados são formados, transformando uma lista caótica em uma sequência processável.',
      visual: (
        <div className="w-full h-full relative overflow-hidden flex flex-col justify-center">
           <div className="w-full h-[1px] bg-slate-800 relative">
             <div className="absolute top-0 left-0 w-1/4 h-full bg-indigo-500 shadow-[0_0_20px_2px_rgba(99,102,241,0.8)] animate-[translateX_3s_ease-in-out_infinite_alternate]" style={{ animationName: 'scan' }}></div>
           </div>
           <style>{`@keyframes scan { 0% { transform: translateX(0); } 100% { transform: translateX(300%); } }`}</style>
        </div>
      )
    },
    {
      step: '03',
      title: 'Fluxo Contínuo',
      desc: 'O agendador injeta as tarefas na sua rotina invisivelmente. Sente e deixe o protocolo guiar seu trabalho.',
      visual: (
        <div className="w-full h-full flex items-center justify-center relative">
          <svg viewBox="0 0 100 50" className="w-full stroke-indigo-500 stroke-2 fill-none drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
            <path d="M0 25 L30 25 L40 10 L60 40 L70 25 L100 25" strokeDasharray="200" strokeDashoffset="200" className="animate-[dash_2s_ease-in-out_infinite]">
              <animate attributeName="stroke-dashoffset" values="200;0" dur="2s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="protocol" ref={containerRef} className="relative pb-32">
      {protocols.map((p, i) => (
        <div key={i} className="protocol-card min-h-screen w-full flex items-center justify-center sticky top-0 px-6">
          <div className="max-w-6xl w-full bg-slate-900/90 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden min-h-[60vh] flex flex-col md:flex-row">
            
            <div className="w-full md:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative">
               <span className="font-mono text-indigo-500 text-lg mb-4 block">STEP_{p.step}</span>
               <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6 leading-tight">{p.title}</h2>
               <p className="text-lg text-slate-400 font-medium max-w-md leading-relaxed">{p.desc}</p>
            </div>
            
            <div className="w-full md:w-1/2 p-12 bg-slate-950 flex items-center justify-center">
              {p.visual}
            </div>
            
          </div>
        </div>
      ))}
      <div className="protocol-end h-[1px]"></div>
    </section>
  );
};

// ==============================
// Pricing Section
// ==============================
const PricingSection = () => {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-20 gap-4 flex flex-col">
        <h2 className="font-serif italic text-5xl md:text-6xl text-white">Adquira Capacidade</h2>
        <p className="text-slate-400 text-lg font-mono">Assinaturas de acesso à infraestrutura MindStack</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Plan 1 */}
        <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 h-full flex flex-col hover:border-white/20 transition-all">
          <h3 className="font-sans font-bold text-2xl text-white mb-2">Essencial</h3>
          <p className="text-slate-400 min-h-[3rem]">O motor básico para organização civil.</p>
          <div className="text-4xl font-mono text-white my-6 mb-8">$19<span className="text-base text-slate-500">/mo</span></div>
          <button className="mt-auto w-full py-3 rounded-full border border-white/10 text-white hover:bg-white inset-0 hover:text-slate-950 transition-colors font-medium cursor-pointer">Start Free</button>
        </div>
        
        {/* Plan 2 */}
        <div className="bg-indigo-600 border border-indigo-400/30 shadow-[0_0_50px_-12px_rgba(79,70,229,0.5)] rounded-3xl p-10 h-[105%] flex flex-col transform hover:scale-[1.02] transition-all">
          <div className="bg-white/20 text-white text-xs font-mono px-3 py-1 rounded-full w-fit mb-6">RECOMENDADO</div>
          <h3 className="font-sans font-bold text-3xl text-white mb-2">Performance</h3>
          <p className="text-indigo-200 min-h-[3rem]">Capacidade heurística total para profissionais.</p>
          <div className="text-5xl font-mono text-white my-6 mb-8">$49<span className="text-xl text-indigo-300">/mo</span></div>
          <button className="mt-auto w-full py-4 rounded-full bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10 cursor-pointer">Upgrade to Pro</button>
        </div>

        {/* Plan 3 */}
        <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 h-full flex flex-col hover:border-white/20 transition-all">
          <h3 className="font-sans font-bold text-2xl text-white mb-2">Enterprise</h3>
          <p className="text-slate-400 min-h-[3rem]">Protocolo em nuvem dedicado para corporações.</p>
          <div className="text-4xl font-mono text-white my-6 mb-8">Customizado</div>
          <button className="mt-auto w-full py-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-slate-950 transition-colors font-medium cursor-pointer">Contactar Sales</button>
        </div>
      </div>
    </section>
  );
};

// ==============================
// Footer
// ==============================
const Footer = () => {
  return (
    <footer className="bg-slate-950 rounded-t-[4rem] border-t border-white/5 pt-24 pb-12 px-6 md:px-16 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <span className="text-3xl font-bold tracking-tight text-white mb-4 block">MindStack</span>
          <p className="text-slate-400 font-medium">Reconstruindo a forma como organizamos o tempo e a arquitetura do pensamento diário.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm font-medium">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-slate-500 mb-2 block">SISTEMA</span>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Log de Updates</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Integrações</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">API Pública</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-slate-500 mb-2 block">TERMOS</span>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Segurança</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </div>
          <span className="font-mono text-xs text-slate-400">Sistema Operacional Online</span>
        </div>
        <span className="text-slate-500 text-sm">© {(new Date()).getFullYear()} MindStack Inc.</span>
      </div>
    </footer>
  );
};

// ==============================
// Main App Component
// ==============================
function App() {
  return (
    <div className="relative min-h-screen text-slate-50">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PhilosophySection />
      <ProtocolSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
