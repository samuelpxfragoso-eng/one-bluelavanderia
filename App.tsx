
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  MapPin, 
  Instagram, 
  Phone, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  Info, 
  Tv, 
  Clock, 
  Truck, 
  Eye,
  ExternalLink,
  MessageSquareQuote,
  Volume2,
  VolumeX,
  Play
} from 'lucide-react';
import { 
  COLORS, 
  LOGO_URL,
  VIDEO_INTRO_URL,
  VIDEO_SHOWCASE_URL, 
  VIDEO_DELIVERY_URL, 
  FEATURES, 
  PRICING, 
  FABRIC_TIPS, 
  FAQ, 
  TESTIMONIALS, 
  STRUCTURE_IMAGES,
  GOOGLE_PROFILES,
  INSTAGRAM_MEDIA
} from './constants';
import { Feature, PricePlan, FAQItem } from './types';

// --- Components ---

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A192F] py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-white p-1 rounded overflow-hidden h-12 flex items-center justify-center">
             <img src={LOGO_URL} alt="One! Blue Logo" className="h-full object-contain" />
          </div>
        </div>
        
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#sobre" className="hover:text-[#00B2E2] transition-colors">A Lavanderia</a>
          <a href="#delivery" className="hover:text-[#00B2E2] transition-colors">Delivery</a>
          <a href="#estrutura" className="hover:text-[#00B2E2] transition-colors">Estrutura</a>
          <a href="#precos" className="hover:text-[#00B2E2] transition-colors">Preços</a>
          <a href="#faq" className="hover:text-[#00B2E2] transition-colors">Dúvidas</a>
        </nav>

        <a 
          href="https://wa.link/7mzm9x" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#00B2E2] text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-[#1D9BF0] transition-all hover:scale-105"
        >
          <MessageCircle size={18} />
          Fale Conosco
        </a>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden pb-40 bg-gradient-to-br from-[#0A192F] via-[#00B2E2] to-[#1D9BF0]">
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Camada sutil para textura no gradiente */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
          Lavanderia Self-Service 24h:<br />
          <span className="bg-gradient-to-b from-white via-white to-[#BEEFFF] bg-clip-text text-transparent">Lava, Seca e Dobra.</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto font-medium tracking-wide drop-shadow-md text-white/95">
          Simplificando sua rotina com tecnologia, conforto e insumos premium já inclusos. <span className="text-[#00B2E2] font-bold">Sai prontinho!</span>
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 smoky-transition z-20" />
    </section>
  );
};

const IntroVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="introducao" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#00B2E2] font-bold tracking-widest uppercase text-sm">Conheça a One! Blue</span>
          <h2 className="text-4xl font-black text-[#0A192F] mt-2">Tecnologia e Cuidado</h2>
        </div>
        <div className="max-w-4xl mx-auto relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover aspect-video"
          >
            <source src={VIDEO_INTRO_URL} type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
          
          <button 
            onClick={toggleMute}
            className="absolute bottom-8 right-8 bg-[#00B2E2] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#1D9BF0] transition-all flex items-center gap-2 z-10"
          >
            {isMuted ? (
              <>
                <VolumeX size={24} />
                <span className="font-bold text-sm">Ouvir com Som</span>
              </>
            ) : (
              <>
                <Volume2 size={24} />
                <span className="font-bold text-sm">Mudar para Mudo</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

const DeliverySection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="delivery" className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
             <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[9/16] max-w-[320px] mx-auto relative group">
               <video 
                 ref={videoRef}
                 autoPlay 
                 muted 
                 loop 
                 playsInline
                 className="w-full h-full object-cover"
               >
                 <source src={VIDEO_DELIVERY_URL} type="video/mp4" />
               </video>
               
               <button 
                 onClick={toggleMute}
                 className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-all z-20"
               >
                 {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
               </button>
             </div>
             <div className="absolute top-1/2 -right-4 lg:-right-8 transform -translate-y-1/2 bg-[#00B2E2] p-6 rounded-2xl text-white hidden md:block shadow-xl">
               <Truck size={32} className="mb-2" />
               <p className="font-bold">Nós vamos<br/>até você!</p>
             </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="text-[#00B2E2] font-bold tracking-widest uppercase text-sm">Delivery One! Blue</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A192F] mt-4 mb-6 leading-tight">
              Mais tempo para você, conforto que bate à sua porta.
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Não tem tempo de vir até a nossa unidade? Sem problemas! <br className="hidden md:block"/>
              Com o Delivery One! Blue, nós buscamos suas roupas no conforto da sua casa e entregamos lavadas, secas, dobradas e com aquele cheirinho inconfundível.
            </p>
            <a 
              href="https://wa.link/7mzm9x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00B2E2] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#1D9BF0] transition-all hover:scale-105 shadow-xl"
            >
              <MessageCircle size={24} />
              Pedir Delivery no WhatsApp
            </a>
            <div className="mt-8 grid grid-cols-3 gap-4">
               <div className="text-center">
                  <p className="text-[#0A192F] font-bold text-xl">1. Coleta</p>
                  <p className="text-gray-400 text-sm italic">Agendada</p>
               </div>
               <div className="text-center">
                  <p className="text-[#0A192F] font-bold text-xl">2. Cuidado</p>
                  <p className="text-gray-400 text-sm italic">Premium</p>
               </div>
               <div className="text-center">
                  <p className="text-[#0A192F] font-bold text-xl">3. Entrega</p>
                  <p className="text-gray-400 text-sm italic">Expressa</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QualityBanner = () => (
  <div className="bg-[#00B2E2] py-8 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-white font-bold text-center">
        <div className="flex items-center gap-2"><CheckCircle2 /> Insumos Premium Inclusos</div>
        <div className="flex items-center gap-2"><CheckCircle2 /> Ambiente Climatizado</div>
        <div className="flex items-center gap-2"><CheckCircle2 /> Wi-Fi Grátis</div>
        <div className="flex items-center gap-2"><CheckCircle2 /> Segurança 24h</div>
      </div>
    </div>
  </div>
);

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
    <div className="text-[#00B2E2] mb-4 group-hover:scale-110 transition-transform">
      {feature.icon}
    </div>
    <h3 className="text-xl font-bold text-[#0A192F] mb-2">{feature.title}</h3>
    <p className="text-gray-500 leading-relaxed">{feature.description}</p>
  </div>
);

const PricingCard: React.FC<{ plan: PricePlan }> = ({ plan }) => (
  <div className={`bg-white p-8 rounded-3xl shadow-xl border-2 flex flex-col h-full ${plan.id === 1 ? 'border-[#00B2E2]' : 'border-transparent'}`}>
    <h3 className="text-2xl font-bold text-[#0A192F] mb-1">{plan.title}</h3>
    <p className="text-gray-400 mb-6">{plan.description}</p>
    <div className="text-4xl font-black text-[#00B2E2] mb-8">
      {plan.price}<span className="text-lg font-normal text-gray-400">/cesto</span>
    </div>
    <ul className="space-y-4 mb-10 flex-grow">
      {plan.features.map((f: string, i: number) => (
        <li key={i} className="flex items-center gap-3 text-gray-600">
          <CheckCircle2 size={18} className="text-[#00B2E2]" /> {f}
        </li>
      ))}
    </ul>
    <a 
      href="https://wa.link/7mzm9x"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-4 rounded-xl bg-[#00B2E2] text-white font-bold hover:bg-[#1D9BF0] transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
    >
      <MessageCircle size={20} />
      Chamar no WhatsApp
    </a>
  </div>
);

const FAQAccordion: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-[#0A192F]">{item.question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-500 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen text-slate-800">
      <Header />
      
      <Hero />

      {/* Pricing Table */}
      <section id="precos" className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-[#0A192F] mb-4">Preços e Planos</h2>
             <p className="text-gray-500">Transparência e economia para o seu bolso.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PRICING.map(p => <PricingCard key={p.id} plan={p} />)}
          </div>
          <div className="mt-12 text-center text-gray-400 flex items-center justify-center gap-2">
            <div className="bg-gray-100 p-2 rounded-full"><Info size={16} /></div>
            Aceitamos Cartões de Crédito, Débito e PIX no Totem.
          </div>
        </div>
      </section>

      {/* New Introduction Video Section */}
      <IntroVideo />

      {/* Showcase Section */}
      <section id="sobre" className="py-24 bg-white border-t border-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-[#00B2E2] font-bold tracking-widest uppercase text-sm">Conforto Total</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0A192F] mt-4 mb-6 leading-tight">
                Um ambiente pensado para o seu conforto enquanto cuidamos do pesado.
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Nossa unidade na Vila dos Cabanos oferece poltronas confortáveis, ar-condicionado, 
                TV e Wi-Fi de alta velocidade. Transforme o tempo de lavanderia em um momento de produtividade ou relaxamento.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8F9FA] p-3 rounded-lg text-[#00B2E2]"><Tv size={24} /></div>
                  <span className="font-bold">TV a Cabo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8F9FA] p-3 rounded-lg text-[#00B2E2]"><Info size={24} /></div>
                  <span className="font-bold">Ar Geladinho</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[9/16] max-w-[320px] mx-auto">
                 <video 
                   autoPlay 
                   muted 
                   loop 
                   playsInline
                   className="w-full h-full object-cover"
                 >
                   <source src={VIDEO_SHOWCASE_URL} type="video/mp4" />
                 </video>
               </div>
               <div className="absolute -bottom-10 -left-10 bg-[#00B2E2] p-8 rounded-3xl text-white hidden md:block z-10">
                 <p className="text-3xl font-black">24h</p>
                 <p className="text-sm font-bold uppercase tracking-wider">Sempre Atento</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Service Section */}
      <DeliverySection />

      {/* Structure Gallery Section (Marquee) */}
      <section id="estrutura" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
           <span className="text-[#00B2E2] font-bold tracking-widest uppercase text-sm">Nossa Estrutura</span>
           <h2 className="text-4xl font-black text-[#0A192F] mt-2 mb-4">Um tour pela sua nova lavanderia favorita</h2>
           <p className="text-gray-500">Tecnologia de ponta e conforto em cada detalhe.</p>
        </div>
        
        <div className="marquee-container flex">
          <div className="marquee-track flex animate-scroll">
             {[...STRUCTURE_IMAGES, ...STRUCTURE_IMAGES].map((url, idx) => (
               <div key={idx} className="w-[300px] h-[400px] p-3 flex-shrink-0">
                 <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 group relative bg-gray-100">
                    <img 
                        src={url} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        alt={`Estrutura One Blue ${idx}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                       <div className="text-white flex items-center gap-2">
                          <Eye size={20} className="text-[#00B2E2]" />
                          <span className="font-bold text-sm">Ver Detalhes</span>
                       </div>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Google Business Profiles Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#00B2E2] font-bold tracking-widest uppercase text-sm">Nossa Presença</span>
            <h2 className="text-4xl font-black text-[#0A192F] mt-2 mb-4">Unidades no Google</h2>
            <p className="text-gray-500">Confira nossa reputação e deixe sua avaliação.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GOOGLE_PROFILES.map((profile) => (
              <div key={profile.id} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="bg-[#4285F4] p-3 rounded-full text-white mb-6">
                  <MapPin size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0A192F] mb-2">{profile.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                   <div className="flex text-yellow-400">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} size={20} fill={i < Math.floor(profile.stars) ? "currentColor" : "none"} />
                     ))}
                   </div>
                   <span className="font-black text-xl text-[#0A192F]">{profile.stars.toFixed(1)}</span>
                </div>
                <p className="text-gray-500 mb-2">{profile.reviewsCount} avaliações</p>
                <div className="bg-[#E8F0FE] text-[#1967D2] px-4 py-1 rounded-full text-sm font-bold mb-8">
                  Destaque: {profile.focus}
                </div>
                <div className="mt-auto w-full">
                  <a 
                    href={profile.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#00B2E2] text-white py-4 rounded-xl font-bold hover:bg-[#1D9BF0] transition-all hover:scale-[1.02] shadow-md"
                  >
                    <ExternalLink size={18} />
                    Deixar Avaliação
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Marquee Section */}
      <section className="py-24 bg-[#0A192F] overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-[#00B2E2] font-bold mb-4 uppercase tracking-tighter">
            <MessageSquareQuote size={24} />
            <span>Voz do Cliente</span>
          </div>
          <h2 className="text-4xl font-black text-white">O que dizem sobre nós</h2>
          <p className="text-gray-400 mt-2">10 avaliações reais de quem já simplificou a rotina com a One! Blue.</p>
        </div>

        <div className="marquee-container flex">
          <div className="marquee-track flex animate-scroll hover:[animation-play-state:paused]">
             {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
               <div key={i} className="w-[350px] p-4 flex-shrink-0">
                 <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 h-full flex flex-col shadow-2xl">
                    <div className="flex gap-1 mb-4 text-yellow-400">
                      {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-white text-lg mb-8 italic leading-relaxed">"{t.text}"</p>
                    <div className="mt-auto flex items-center gap-4">
                       <div className="w-12 h-12 bg-[#00B2E2] rounded-full flex items-center justify-center text-white font-black">
                         {t.name.charAt(0)}
                       </div>
                       <div>
                         <p className="font-bold text-white">{t.name}</p>
                         <p className="text-[#00B2E2] text-xs uppercase font-bold tracking-widest">Cliente Verificado</p>
                       </div>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Instagram Media Section */}
      <section id="instagram" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#00B2E2] font-bold tracking-widest uppercase text-sm">One! Blue no Instagram</span>
            <h2 className="text-4xl font-black text-[#0A192F] mt-2 mb-4">Acompanhe nossa rotina</h2>
            <p className="text-gray-500">Siga-nos para dicas de cuidado com as roupas e novidades.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {INSTAGRAM_MEDIA.map((item, idx) => (
              <div key={idx} className="aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 group">
                {item.type === 'video' ? (
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={item.url} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={item.url} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={`Instagram Post ${idx}`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/one_blue.lavanderia_dom_eliseu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00B2E2] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#1D9BF0] transition-all hover:scale-105 shadow-2xl text-center"
            >
              <Instagram size={28} />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </section>

      <QualityBanner />

      {/* Features Grid */}
      <section id="como-funciona" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0A192F] mb-4">Diferenciais que encantam</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Tudo o que você precisa para lavar e secar suas roupas com a melhor experiênca tecnológica.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map(f => <FeatureCard key={f.id} feature={f} />)}
          </div>
        </div>
      </section>

      {/* Fabric Care Guide */}
      <section id="dicas" className="py-24 bg-[#0A192F] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-black mb-6">Dicas da One! Blue</h2>
              <p className="text-gray-400 leading-relaxed">
                Cuide das suas roupas como elas merecem. Siga nosso guia rápido para obter os melhores resultados em cada ciclo.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {FABRIC_TIPS.map(tip => (
                <div key={tip.id} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-[#00B2E2] mb-4">{tip.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{tip.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-black text-[#0A192F] text-center mb-16">Dúvidas Frequentes</h2>
          <div className="space-y-2">
            {FAQ.map(item => <FAQAccordion key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-[#0A192F] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row text-white">
             <div className="lg:w-1/2 p-12 lg:p-20">
                <h2 className="text-4xl font-black mb-10">Onde estamos</h2>
                <div className="space-y-8">
                   <div className="flex items-start gap-4">
                      <MapPin className="text-[#00B2E2] mt-1" />
                      <div>
                        <p className="font-bold text-xl">Barcarena - Vila dos Cabanos</p>
                        <p className="text-gray-400">Av. Francisco Vinagre, Vila dos Cabanos - Barcarena/PA</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <Clock className="text-[#00B2E2] mt-1" />
                      <div>
                        <p className="font-bold text-xl">Horário de Funcionamento</p>
                        <p className="text-gray-400">Aberto 24 horas por dia, 7 dias por semana.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <Phone className="text-[#00B2E2] mt-1" />
                      <div>
                        <p className="font-bold text-xl">Atendimento Digital</p>
                        <p className="text-gray-400">Suporte 24h via WhatsApp</p>
                      </div>
                   </div>
                </div>
                <div className="mt-12 flex gap-4">
                  <a 
                    href="https://www.instagram.com/one_blue.lavanderia_dom_eliseu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white/10 rounded-full hover:bg-[#00B2E2] transition-colors"
                  >
                    <Instagram />
                  </a>
                  <a 
                    href="https://wa.link/7mzm9x" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white/10 rounded-full hover:bg-[#00B2E2] transition-colors"
                  >
                    <MessageCircle />
                  </a>
                </div>
             </div>
             <div className="lg:w-1/2 h-96 lg:h-auto min-h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.423456789!2d-48.723456789!3d-1.503456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTAnMTIuNCJTIDQ4wrA0MydJMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A192F] py-16 border-t border-white/5">
        <div className="container mx-auto px-6 text-center text-gray-400">
           <div className="bg-white p-2 rounded inline-block mb-8 h-12">
             <img src={LOGO_URL} alt="One! Blue Logo" className="h-full object-contain" />
           </div>
           <div className="flex justify-center gap-8 mb-8 text-sm uppercase tracking-widest font-bold">
             <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
             <a href="#precos" className="hover:text-white transition-colors">Preços</a>
             <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
             <a href="#" className="hover:text-white transition-colors">Política</a>
           </div>
           <p className="text-sm">
             © 2024 One! Blue Lavanderia Self-Service. Todos os direitos reservados.<br />
             CNPJ: 00.000.000/0001-00 | Av. Francisco Vinagre, Vila dos Cabanos - Barcarena/PA
           </p>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a 
        href="https://wa.link/7mzm9x" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#00B2E2] text-white p-4 rounded-full shadow-2xl z-50 animate-bounce hover:bg-[#1D9BF0] transition-all hover:scale-110"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default App;
