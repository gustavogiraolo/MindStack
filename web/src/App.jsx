import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Activity, Zap, ShieldCheck, CreditCard, LayoutGrid, Plus, Check, X, Globe, Banknote, Lock, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ==============================
// Login Popup Modal
// ==============================
const LoginModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.login-backdrop', { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(modalRef.current, 
        { y: 30, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="login-backdrop absolute inset-0 bg-slate-900/30 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      {/* Modal Dialog */}
      <div 
        ref={modalRef} 
        className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 md:p-10 shadow-float"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="mb-8 text-center pt-2">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft border border-slate-100 relative">
             <div className="absolute w-8 h-8 rounded-full bg-emerald-500 animate-pulse opacity-50 blur-sm"></div>
             <div className="w-6 h-6 rounded-full bg-emerald-500 relative z-10 shadow-glow"></div>
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Criar Conta</h2>
          <p className="text-slate-500 font-medium text-sm">Abra sua conta MindStack para otimizar fluxos</p>
        </div>

        <form className="flex flex-col gap-4 mb-6" onSubmit={(e) => e.preventDefault()}>
          <div className="text-left w-full">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Email Workspace</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="email" 
                placeholder="nome@empresa.com" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-bold focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-400 placeholder:font-medium"
              />
            </div>
          </div>
          <button className="w-full mt-4 py-4 rounded-2xl bg-emerald-500 text-white font-bold text-lg hover:bg-emerald-600 active:scale-[0.98] transition-all shadow-glow flex justify-center items-center gap-2">
            Continuar para Foco <ArrowRight size={18} />
          </button>
        </form>
        
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Login Seguro</span>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        <button className="w-full py-4 rounded-2xl border-2 border-slate-900 bg-slate-900 text-white font-bold hover:bg-slate-800 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
          Entrar com conta Coporativa
        </button>
        
        <p className="text-xs text-center text-slate-400 font-semibold mt-8 px-4 leading-relaxed">
          Ao abrir sua conta, você concorda com nossos robustos Protocolos de Privacidade Bank-Grade.
        </p>
      </div>
    </div>
  );
};

// ==============================
// Corporate Popup Modal
// ==============================
const CorporateAccessModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.modal-backdrop', { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(modalRef.current, 
        { y: 30, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="modal-backdrop absolute inset-0 bg-slate-900/30 backdrop-blur-md" onClick={onClose}></div>
      <div ref={modalRef} className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-8 md:p-10 shadow-float">
        <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors">
          <X size={20} />
        </button>
        
        <div className="mb-8 pr-8">
          <div className="w-14 h-14 bg-emerald-100 rounded-[1.2rem] flex items-center justify-center mb-6">
             <Zap size={28} className="text-emerald-500" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Acesso Coporativo</h2>
          <p className="text-slate-500 font-medium text-base leading-relaxed">Como você gostaria de otimizar a produtividade e a economia de tempo da sua operação?</p>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          {[
            'Escalar Foco Individual (C-Level)',
            'Gerenciar Tempo de Múltiplas Equipes',
            'Integração com ERP e Sistemas Legados'
          ].map((opt, i) => (
            <button key={i} className="w-full text-left px-6 py-4 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-glow transition-all group flex items-center justify-between">
              <span className="font-bold text-slate-800 group-hover:text-emerald-700">{opt}</span>
              <ArrowRight size={18} className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
            </button>
          ))}
        </div>
        
        <p className="text-xs text-center text-slate-400 font-semibold">Os dados serão utilizados pela IA para moldar o seu ambiente inicial.</p>
      </div>
    </div>
  );
};

// ==============================
// Navbar Component
// ==============================
const Navbar = ({ onOpenPopup }) => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -20',
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
        className="flex items-center justify-between w-full max-w-5xl px-8 py-3 transition-all duration-300 border border-transparent rounded-[2rem] nav-base bg-white/70 backdrop-blur-md [&.nav-scrolled]:bg-white/90 [&.nav-scrolled]:shadow-soft [&.nav-scrolled]:border-slate-200"
      >
        <span className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-emerald-500"></div>
          MindStack
        </span>
        <div className="hidden gap-8 md:flex">
          <a href="#features" className="text-sm font-semibold transition-colors text-slate-600 hover:text-emerald-600">Soluções</a>
          <a href="#philosophy" className="text-sm font-semibold transition-colors text-slate-600 hover:text-emerald-600">Ecossistema</a>
          <a href="#protocol" className="text-sm font-semibold transition-colors text-slate-600 hover:text-emerald-600">Integração</a>
        </div>
        <button 
          onClick={onOpenPopup}
          className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white transition-all bg-emerald-500 rounded-full hover:bg-emerald-600 active:scale-95 shadow-glow cursor-pointer"
        >
          <span>Acesso Corporativo</span>
          <ArrowRight size={16} />
        </button>
      </nav>
    </div>
  );
};

// ==============================
// Hero Section
// ==============================
const HeroSection = ({ onOpenLogin }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up animation on load
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1
      });

      // Smooth Parallax on scroll
      gsap.to(contentRef.current, {
        y: '20vh',
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
      
      // Particles parallax effect
      gsap.to('.hero-particle', {
        y: (i, el) => -250 * parseFloat(el.getAttribute('data-speed')),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    width: Math.random() * 8 + 4,
    left: Math.random() * 100,
    top: Math.random() * 100,
    speed: Math.random() * 2 + 0.5,
    delay: Math.random() * 3
  }));

  return (
    <section ref={containerRef} className="relative flex flex-col justify-center items-center text-center w-full min-h-[90dvh] pt-32 pb-24 px-6 md:px-16 overflow-hidden bg-slate-50">
      
      {/* Background Graphic with Animation */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-0 flex justify-center items-center">
        <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-emerald-400/20 blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
        <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-blue-300/10 blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/3 animate-blob" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Background Particles that interact with Scroll */}
      <div ref={particlesRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map(p => (
          <div 
            key={p.id} 
            className="hero-particle absolute rounded-full bg-emerald-500/20"
            data-speed={p.speed}
            style={{ 
              width: p.width, 
              height: p.width, 
              left: `${p.left}%`, 
              top: `${p.top}%`, 
              animation: `blob ${4 + p.delay}s infinite alternate ease-in-out` 
            }}
          />
        ))}
      </div>

      <div ref={contentRef} className="relative z-10 max-w-4xl flex flex-col items-center">
        <div className="hero-element inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-8">
          <Zap size={16} className="fill-emerald-500" />
          <span>Gestão de Alta Frequência Atualizada</span>
        </div>
        
        <h1 className="hero-element mb-6 leading-[1.1] text-slate-900 tracking-tight">
          <span className="block text-4xl md:text-7xl font-sans font-black">
            Financiando seu
          </span>
          <span className="block font-serif italic text-5xl md:text-8xl text-emerald-500 mt-2">
            tempo focado.
          </span>
        </h1>
        
        <p className="hero-element max-w-2xl text-base md:text-xl text-slate-500 mb-10 font-medium leading-relaxed">
          Abra "contas" de tempo e gerencie a economia da sua produtividade online. Acesso a fluxos de trabalho internacionais estruturados pela MindStack.
        </p>
        
        <div className="hero-element flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <button 
             onClick={onOpenLogin}
             className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-base font-bold text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 active:scale-95 shadow-xl cursor-pointer"
          >
            <span>Abrir Conta Grátis</span>
          </button>
          <button className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-900 transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 active:scale-95 shadow-sm">
            <span>Falar com Vendas</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// ==============================
// Features Section (FinTech Styled)
// ==============================
const TransactionListCard = () => {
  const transactions = [
    { id: 1, name: 'Reunião Executiva', category: 'High Priority', amount: '- 1.5h', icon: <Activity size={18} className="text-emerald-600"/>, bg: 'bg-emerald-100' },
    { id: 2, name: 'Design Sprint', category: 'Project', amount: '- 3.0h', icon: <LayoutGrid size={18} className="text-blue-600"/>, bg: 'bg-blue-100' },
    { id: 3, name: 'Revisão de Código', category: 'Routine', amount: '- 0.5h', icon: <Check size={18} className="text-slate-600"/>, bg: 'bg-slate-100' },
  ];

  return (
    <div className="flex flex-col h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-float relative overflow-hidden group">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-bold font-sans text-slate-900">Histórico de Foco</h3>
        <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors">
          <Plus size={20} className="text-slate-600" />
        </button>
      </div>
      
      <div className="flex flex-col gap-4">
        {transactions.map((t) => (
          <div key={t.id} className="flex items-center justify-between group/item hover:bg-slate-50 p-2 -mx-2 rounded-2xl transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center`}>
                {t.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900">{t.name}</span>
                <span className="text-xs font-semibold text-slate-400">{t.category}</span>
              </div>
            </div>
            <span className="font-mono font-bold text-slate-900">{t.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const BalanceCard = () => {
  return (
    <div className="flex flex-col h-full bg-emerald-500 rounded-[2.5rem] p-8 shadow-glow relative overflow-hidden group text-white">
      {/* Decorative vectors */}
      <svg className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4 w-64 h-64 opacity-20 pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="20" />
      </svg>
      
      <div className="mb-2 flex items-center justify-between relative z-10">
        <span className="text-emerald-100 font-semibold text-sm uppercase tracking-wider">Saldo de Produtividade</span>
        <CreditCard size={20} className="text-emerald-200" />
      </div>
      
      <div className="relative z-10 mb-8 mt-2">
        <span className="text-5xl font-black font-sans block tracking-tighter">74.5%</span>
        <span className="text-emerald-200 text-sm font-medium">+12% vs. Mês Anterior</span>
      </div>
      
      {/* Sparkline animated */}
      <div className="mt-auto relative z-10 h-24 w-full flex items-end">
        <svg viewBox="0 0 200 60" className="w-full h-full preserve-aspect-none drop-shadow-md" preserveAspectRatio="none" overflow="hidden">
          <g>
            <animateTransform attributeName="transform" type="translate" from="0 0" to="-200 0" begin="0s" dur="4s" repeatCount="indefinite" />
            <path 
              d="M0,40 C15,35 25,45 40,45 C55,45 65,35 80,35 C95,35 105,50 120,50 C135,50 145,20 160,20 C175,20 185,45 200,40 C215,35 225,45 240,45 C255,45 265,35 280,35 C295,35 305,50 320,50 C335,50 345,20 360,20 C375,20 385,45 400,40 L400,60 L0,60 Z" 
              fill="rgba(255,255,255,0.2)" 
            />
            <path 
              d="M0,40 C15,35 25,45 40,45 C55,45 65,35 80,35 C95,35 105,50 120,50 C135,50 145,20 160,20 C175,20 185,45 200,40 C215,35 225,45 240,45 C255,45 265,35 280,35 C295,35 305,50 320,50 C335,50 345,20 360,20 C375,20 385,45 400,40" 
              fill="none" 
              stroke="white" 
              strokeWidth="4" 
              strokeLinecap="round" 
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

const SchedulerWidgetCard = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Bar width animation when scrolling into view
      gsap.fromTo('.limit-bar-fill',
        { width: '0%' },
        { 
          width: (i, el) => el.getAttribute('data-width'), 
          duration: 1.5, 
          ease: 'power3.out', 
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
          }
        }
      );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef} className="flex flex-col h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-float relative overflow-hidden group">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold font-sans text-slate-900">Limites Diários</h3>
          <p className="text-sm font-semibold text-slate-400">Proteção de esgotamento ativa.</p>
        </div>
        <ShieldCheck className="text-emerald-500" size={32} />
      </div>
      
      <div className="flex-1 mt-4">
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex justify-between text-sm font-bold text-slate-900 mb-2">
              <span>Deep Work Limit</span>
              <span>4 / 5 hs</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="limit-bar-fill h-full bg-emerald-500 rounded-full" data-width="80%"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm font-bold text-slate-900 mb-2">
              <span>Reuniões Agendadas</span>
              <span>2 / 3 hs</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="limit-bar-fill h-full bg-blue-500 rounded-full" data-width="66%"></div>
            </div>
          </div>
        </div>
      </div>
      
      <button className="mt-8 w-full py-4 rounded-2xl bg-slate-50 text-slate-900 font-bold hover:bg-slate-100 transition-colors flex justify-center items-center gap-2">
        Ajustar Limites
      </button>
    </div>
  );
};

const FeaturesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    // Desktop Animation: Stacked Cards that Fan Out
    mm.add("(min-width: 1024px)", () => {
      gsap.set('.feature-card-0', { zIndex: 30, rotation: 0, position: 'absolute' });
      gsap.set('.feature-card-1', { zIndex: 20, rotation: -2, position: 'absolute' });
      gsap.set('.feature-card-2', { zIndex: 10, rotation: 2, position: 'absolute' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 15%', 
          end: '+=1200', // Aumentar a distância de scroll para espalhar devagar e suavemente
          scrub: 1,
          pin: true,
        }
      });
      
      // Cards se espalham horizontalmente no Desktop
      tl.to('.feature-card-0', { xPercent: -105, rotation: -3, scale: 0.98, ease: 'power2.inOut' }, 0)
        .to('.feature-card-2', { xPercent: 105, rotation: 3, scale: 0.98, ease: 'power2.inOut' }, 0)
        .to('.feature-card-1', { yPercent: -5, scale: 1.02, rotation: 0, ease: 'power2.inOut' }, 0);
    });

    // Mobile Fix: Remove Stacked Positioning completely.
    mm.add("(max-width: 1023px)", () => {
      gsap.set('.feature-card-0, .feature-card-1, .feature-card-2', { 
        position: 'relative', 
        clearProps: 'all' 
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-12 px-6 w-full z-10 relative lg:min-h-screen flex flex-col items-center justify-center -mt-10 lg:-mt-20 overflow-hidden pointer-events-auto">
      {/* On mobile, it's a grid (flex-col). On desktop, it overlaps (absolute). */}
      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col lg:block items-center justify-center gap-8 lg:gap-0 lg:h-[520px] lg:perspective-1000">
        
        <div className="feature-card-0 w-full lg:w-[340px] xl:w-[400px] lg:absolute lg:inset-y-0 lg:left-0 lg:right-0 lg:mx-auto min-h-[400px] lg:h-full will-change-transform shadow-2xl rounded-[2.5rem] bg-white">
          <BalanceCard />
        </div>
        
        <div className="feature-card-1 w-full lg:w-[340px] xl:w-[400px] lg:absolute lg:inset-y-0 lg:left-0 lg:right-0 lg:mx-auto min-h-[400px] lg:h-full will-change-transform shadow-2xl rounded-[2.5rem] bg-white">
          <TransactionListCard />
        </div>
        
        <div className="feature-card-2 w-full lg:w-[340px] xl:w-[400px] lg:absolute lg:inset-y-0 lg:left-0 lg:right-0 lg:mx-auto min-h-[400px] lg:h-full will-change-transform shadow-2xl rounded-[2.5rem] bg-white">
          <SchedulerWidgetCard />
        </div>
        
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
    <section id="philosophy" ref={containerRef} className="relative py-24 md:py-32 px-6 md:px-16 bg-white flex items-center border-y border-slate-100">
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 md:gap-10">
        <p className="phil-line text-lg md:text-2xl text-slate-500 font-medium">
          Sistemas tradicionais vendem "listas infinitas".
        </p>
        <p className="phil-line text-3xl md:text-6xl text-slate-900 leading-tight">
          <span className="font-sans font-black">Nós vendemos uma </span>
          <span className="font-serif italic text-emerald-500 bg-emerald-50 px-4 rounded-xl mt-2 inline-block">economia de foco.</span>
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
        if (i === cards.length - 1) return;
        
        // CSS 'sticky' takes over preserving document flow, so no pin required here.
        // We only map the scaling and blurring animation to the scrolling overlap.
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.8,
          filter: 'blur(10px)',
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
      title: 'Gerenciamento de Conta Global',
      desc: 'Sua arquitetura pessoal mantida em servidores de alta disponibilidade mental. A IA gerencia suas pendências como ativos financeiros.',
      color: 'text-emerald-500',
      bgVisual: 'bg-emerald-50',
      icon: <Globe size={100} className="text-emerald-500" />
    },
    {
      step: '02',
      title: 'Pagamentos de Tempo Internacionais',
      desc: 'Envie blocos de foco para projetos globais. Converta suas intenções em ações processadas antes da bolsa abrir.',
      color: 'text-blue-500',
      bgVisual: 'bg-blue-50',
      icon: <Banknote size={100} className="text-blue-500" />
    },
    {
      step: '03',
      title: 'Segurança Bank-Grade',
      desc: 'Proteção total contra o déficit de atenção. Barreiras algorítmicas imodificáveis evitam a evasão da sua produtividade.',
      color: 'text-indigo-500',
      bgVisual: 'bg-indigo-50',
      icon: <Lock size={100} className="text-indigo-500" />
    }
  ];

  return (
    <section id="protocol" ref={containerRef} className="relative pb-24 md:pb-32 bg-slate-50 pt-16 md:pt-20">
      <div className="text-center mb-12 md:mb-16 px-6">
        <h2 className="text-3xl font-black text-slate-900">Integração Corporativa</h2>
        <p className="text-slate-500 text-sm md:text-base font-medium mt-2">Veja os padrões de transação estruturados da MindStack.</p>
      </div>
      
      {protocols.map((p, i) => (
        <div key={i} className="protocol-card min-h-[70vh] md:min-h-[90vh] w-full flex items-center justify-center sticky top-16 md:top-20 px-4 md:px-8">
          <div className="max-w-5xl w-full bg-white border border-slate-100 rounded-3xl md:rounded-[3rem] shadow-float overflow-hidden flex flex-col md:flex-row">
            
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
               <span className={`font-black tracking-widest text-xs md:text-sm mb-4 block ${p.color}`}>PROTOCOLO {p.step}</span>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-sans text-slate-900 mb-4 md:mb-6 leading-tight">{p.title}</h2>
               <p className="text-base md:text-lg text-slate-500 font-medium max-w-sm leading-relaxed">{p.desc}</p>
            </div>
            
            <div className={`w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center min-h-[250px] ${p.bgVisual}`}>
              {/* Clean White Graphic with Lucide Icon */}
              <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-lg flex items-center justify-center relative group overflow-hidden">
                <div className="transform group-hover:scale-110 transition-transform duration-500">{p.icon}</div>
              </div>
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
    <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16 gap-4 flex flex-col">
        <h2 className="font-sans font-black text-3xl md:text-5xl text-slate-900">Planos e Limites</h2>
        <p className="text-slate-500 text-sm md:text-lg font-medium">Abra sua conta MindStack e transacione tempo real de alta qualidade.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Plan 1 */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 h-full md:h-[95%] flex flex-col hover:border-slate-300 hover:shadow-lg transition-all">
          <h3 className="font-black text-xl text-slate-900 mb-2">Conta Corrente</h3>
          <p className="text-slate-500 text-sm font-medium mb-6">Funcionalidades bancárias diárias para a pessoa física.</p>
          <div className="text-4xl font-black text-slate-900 mb-8 mt-auto">$0<span className="text-sm font-bold text-slate-400">/mês</span></div>
          <button className="w-full py-4 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors font-bold cursor-pointer">Começar Agora</button>
        </div>
        
        {/* Plan 2 */}
        <div className="bg-slate-900 border border-slate-800 shadow-float rounded-[2.5rem] p-10 h-full flex flex-col transform md:hover:-translate-y-2 transition-transform">
          <div className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit mb-6">Platinum</div>
          <h3 className="font-black text-2xl text-white mb-2">Conta Empresarial</h3>
          <p className="text-slate-400 text-sm font-medium mb-8">Limites estendidos para gestores e integração de equipes.</p>
          <div className="text-5xl font-black text-white mb-8 mt-auto">$12<span className="text-base text-slate-500">/mês</span></div>
          <button className="w-full py-4 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-colors shadow-glow cursor-pointer">Fazer Upgrade</button>
        </div>

        {/* Plan 3 */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 h-full md:h-[95%] flex flex-col hover:border-slate-300 hover:shadow-lg transition-all">
          <h3 className="font-black text-xl text-slate-900 mb-2">Conta Offshore</h3>
          <p className="text-slate-500 text-sm font-medium mb-6">Sistemas completos e servidores de IA dedicados.</p>
          <div className="text-3xl font-black text-slate-900 mb-8 mt-auto">Personalizado</div>
          <button className="w-full py-4 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-50 transition-colors font-bold cursor-pointer">Falar com Consultor</button>
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
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 md:pt-20 pb-12 px-6 md:px-16 mt-10 md:mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <strong className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2 mb-4">
             <div className="w-5 h-5 rounded-full bg-emerald-500"></div>
             MindStack
          </strong>
          <p className="text-slate-500 font-medium text-sm leading-relaxed">Infraestrutura corporativa completa para gerenciar ativos de tempo em escala global.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-16 md:gap-24 text-sm font-bold text-slate-900">
          <div className="flex flex-col gap-5">
            <span className="text-slate-400 text-xs tracking-widest uppercase mb-1">Empresa</span>
            <a href="#" className="hover:text-emerald-500 transition-colors">Sobre Nós</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Carreiras</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Imprensa</a>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-slate-400 text-xs tracking-widest uppercase mb-1">Legal</span>
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 md:mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-slate-200">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-w-2.5 w-2.5 bg-emerald-500"></span>
          </div>
          <span className="font-bold text-xs text-slate-600">Servidores Operacionais</span>
        </div>
        <span className="text-slate-500 text-sm font-semibold">© {(new Date()).getFullYear()} MindStack Platform Inc.</span>
      </div>
    </footer>
  );
};

// ==============================
// Main App Component
// ==============================
function App() {
  const [isCorporatePopupOpen, setIsCorporatePopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <CorporateAccessModal isOpen={isCorporatePopupOpen} onClose={() => setIsCorporatePopupOpen(false)} />
      <LoginModal isOpen={isLoginPopupOpen} onClose={() => setIsLoginPopupOpen(false)} />
      
      <Navbar onOpenPopup={() => setIsCorporatePopupOpen(true)} />
      <HeroSection onOpenLogin={() => setIsLoginPopupOpen(true)} />
      <FeaturesSection />
      <PhilosophySection />
      <ProtocolSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
