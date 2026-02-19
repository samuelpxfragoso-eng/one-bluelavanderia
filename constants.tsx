
import React from 'react';
import { 
  Zap, 
  Settings, 
  Clock, 
  Droplets, 
  Tv, 
  Shirt, 
  Waves,
  ShoppingBag,
  CreditCard,
  UserCheck
} from 'lucide-react';
import { Feature, PricePlan, FAQItem, FabricTip } from './types';

export const COLORS = {
  navy: '#0A192F',
  cyan: '#00B2E2',
  sky: '#1D9BF0',
  ice: '#F8F9FA'
};

export const LOGO_URL = "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/WhatsApp%20Image%202026-02-19%20at%202.12.39%20PM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMi0xOSBhdCAyLjEyLjM5IFBNLmpwZWciLCJpYXQiOjE3NzE1MjEyNDQsImV4cCI6MTg2NjEyOTI0NH0.DqWCKZHICN8SVtem2BR7lStlj1NuAn4dg1AQSlta3jg";
export const VIDEO_HERO_URL = ""; 
export const VIDEO_INTRO_URL = "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/snapinsta.com.br.instagram.video.20260218.182540.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvc25hcGluc3RhLmNvbS5ici5pbnN0YWdyYW0udmlkZW8uMjAyNjAyMTguMTgyNTQwLm1wNCIsImlhdCI6MTc3MTQzOTI2NCwiZXhwIjoxODAyOTc1MjY0fQ.jiIz10_RCmYsyeN37BuB9H4zKX5Ei06fKEKOOB58RHY";
export const VIDEO_SHOWCASE_URL = "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/grok-video-1ab12a69-d157-4baa-b59e-1cbf12cb2446.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvZ3Jvay12aWRlby0xYWIxMmE2OS1kMTU3LTRiYWEtYjU5ZS0xY2JmMTJjYjI0NDYubXA0IiwiaWF0IjoxNzcxNDM1MzU1LCJleHAiOjE4MDI5NzEzNTV9.oBF4KdNpBvy4LujV-4s_9SLPjBJBaeWiKVJQpEYs4Gs";
export const VIDEO_DELIVERY_URL = "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/snapinsta.com.br.instagram.video.20260218.184227.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvc25hcGluc3RhLmNvbS5ici5pbnN0YWdyYW0udmlkZW8uMjAyNjAyMTguMTg0MjI3Lm1wNCIsImlhdCI6MTc3MTQ0MDE5NSwiZXhwIjoxODAyOTc2MTk1fQ.VVcyV2pmWuRli7UBueq_IqsugO2XFlWmSW6glFTqcno";

export const INSTAGRAM_MEDIA = [
  { type: 'image', url: "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/WhatsApp%20Image%202026-02-18%20at%209.38.52%20AM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMi0xOCBhdCA5LjM4LjUyIEFNLmpwZWciLCJpYXQiOjE3NzE0MzgzMDEsImV4cCI6MTgwMjk3NDMwMX0.IhXEJXw391KGXawnWLTUR7ZMat2PRdL09iXibfwsmhk" },
  { type: 'video', url: "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/snapinsta.com.br.instagram.video.20260218.180610.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvc25hcGluc3RhLmNvbS5ici5pbnN0YWdyYW0udmlkZW8uMjAyNjAyMTguMTgwNjEwLm1wNCIsImlhdCI6MTc3MTQzODMyNSwiZXhwIjoxODAyOTc0MzI1fQ.TMCm8kO1vcqdhf_LshEf-kBAFx_bKLFTdYh3s1bS-ow" },
  { type: 'video', url: "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/snapinsta.com.br.instagram.video.20260218.180802.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvc25hcGluc3RhLmNvbS5ici5pbnN0YWdyYW0udmlkZW8uMjAyNjAyMTguMTgwODAyLm1wNCIsImlhdCI6MTc3MTQzODM0NSwiZXhwIjoxODAyOTc0MzQ1fQ.dF1R71iwsx1JICpXJw9tKHwXhizM2Y_HJBwQQ1r-pBI" }
];

export const STRUCTURE_IMAGES = [
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/WhatsApp%20Image%202026-02-18%20at%209.38.26%20AM%20(1).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMi0xOCBhdCA5LjM4LjI2IEFNICgxKS5qcGVnIiwiaWF0IjoxNzcxNDM1OTAzLCJleHAiOjE4MDI5NzE5MDN9.2VwDHUPPSIqpm7fhA8KDptQENmW3PYGJqwUMD435JWI",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/WhatsApp%20Image%202026-02-18%20at%209.38.26%20AM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMi0xOCBhdCA5LjM4LjI2IEFNLmpwZWciLCJpYXQiOjE3NzE0MzU5MjQsImV4cCI6MTgwMjk3MTkyNH0.wee7DewgGpg7zUTTxLrIXLWSJMiGW80Bq28WjVRex7Y",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/WhatsApp%20Image%202026-02-18%20at%209.38.50%20AM%20(1).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMi0xOCBhdCA5LjM4LjUwIEFNICgxKS5qcGVnIiwiaWF0IjoxNzcxNDM1OTU2LCJleHAiOjE4MDI5NzE5NTZ9.NCTdGjslGxfuADHc3FqwnNAwxRIrvBpzVMkaVVBlaXE",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/WhatsApp%20Image%202026-02-18%20at%209.38.50%20AM%20(2).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMi0xOCBhdCA5LjM4LjUwIEFNICgyKS5qcGVnIiwiaWF0IjoxNzcxNDM1OTg1LCJleHAiOjE4MDI5NzE5ODV9.y0XZTzHnpk1LtJhIE4BIi3WAG6w5bYgp4f_o_zPqTy8",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/WhatsApp%20Image%202026-02-18%20at%209.38.50%20AM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMi0xOCBhdCA5LjM4LjUwIEFNLmpwZWciLCJpYXQiOjE3NzE0MzYwMDgsImV4cCI6MTgwMjk3MjAwOH0.wijL7121vVTXzOmP5zZlT7gea9r5muji_l-20mqXTd4",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/WhatsApp%20Image%202026-02-18%20at%209.38.51%20AM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMi0xOCBhdCA5LjM4LjUxIEFNLmpwZWciLCJpYXQiOjE3NzE0MzYwMjQsImV4cCI6MTgwMjk3MjAyNH0.ijGYK7c6FzBbTnnAjyAl4dBxMRUs0Ix3ADCVTJzrJ3g"
];

export const GOOGLE_PROFILES = [
  {
    id: 1,
    name: "One! Blue - Vila dos Cabanos",
    stars: 4.8,
    reviewsCount: 15,
    city: "Barcarena - PA",
    focus: "Ambiente e Preço",
    url: "https://g.page/r/CXHwREj1Jd3VEAE/review"
  },
  {
    id: 2,
    name: "One! Blue - Paragominas",
    stars: 5.0,
    reviewsCount: 2,
    city: "Paragominas - PA",
    focus: "Inauguração e Novidade",
    url: "https://g.page/r/CTPPEVXZrVuvEAE/review"
  },
  {
    id: 3,
    name: "One! Blue - Unidade Dom Eliseu",
    stars: 5.0,
    reviewsCount: 6,
    city: "Dom Eliseu - PA",
    focus: "Estrutura e Conforto",
    url: "#"
  }
];

export const TESTIMONIALS = [
  { name: 'Maria Oliveira', text: 'Ambiente impecável e máquinas muito modernas. Adorei!', rating: 5 },
  { name: 'João Pedro', text: 'Preço justo e o cheiro das roupas é maravilhoso.', rating: 5 },
  { name: 'Carla Santos', text: 'Excelente para quem mora em apartamento e não tem espaço para secar.', rating: 5 },
  { name: 'Fernando Lima', text: 'O atendimento pelo WhatsApp foi super rápido quando tive uma dúvida.', rating: 5 },
  { name: 'Beatriz Souza', text: 'Fui de madrugada e me senti muito segura. Bem iluminado.', rating: 5 },
  { name: 'Roberto Rocha', text: 'Máquinas de secar são potentes, saíram prontinhas para guardar.', rating: 5 },
  { name: 'Amanda Melo', text: 'Ótima localização na Vila dos Cabanos. Recomendo!', rating: 5 },
  { name: 'Lucas Silva', text: 'A One! Blue facilitou muito minha rotina corrida.', rating: 5 },
  { name: 'Patrícia Dias', text: 'Espaço confortável, usei o Wi-fi para trabalhar enquanto esperava.', rating: 5 },
  { name: 'Marcos Vinícius', text: 'Os produtos inclusos são de ótima qualidade, não precisa levar nada.', rating: 5 }
];

export const FEATURES: Feature[] = [
  { id: 1, title: 'Agilidade', description: 'Ciclos rápidos de lavagem e secagem para o seu dia render mais.', icon: <Zap className="w-8 h-8" /> },
  { id: 2, title: 'Praticidade', description: 'Tudo automatizado, sem complicação ou burocracia.', icon: <Settings className="w-8 h-8" /> },
  { id: 3, title: 'Economia', description: 'Mais barato que lavanderias tradicionais por quilo.', icon: <CreditCard className="w-8 h-8" /> },
  { id: 4, title: 'Sempre Aberto', description: 'Funcionamento 24 horas por dia, 7 dias por semana.', icon: <Clock className="w-8 h-8" /> },
  { id: 5, title: 'Tudo Incluso', description: 'Dosadores automáticos de sabão e amaciante premium.', icon: <Droplets className="w-8 h-8" /> },
  { id: 6, title: 'Conforto', description: 'TV, ar-condicionado e espaço de espera agradável.', icon: <Tv className="w-8 h-8" /> },
  { id: 7, title: 'Autoatendimento', description: 'Você no controle de todo o processo de cuidado.', icon: <UserCheck className="w-8 h-8" /> }
];

export const PRICING: PricePlan[] = [
  {
    id: 1,
    title: 'Ciclo de Lavagem',
    price: 'R$ 13,99',
    description: 'Cesto padrão (aprox. 10kg)',
    features: ['Sabão Premium Incluso', 'Amaciante Premium Incluso', 'Dosagem Automática', '30 a 45 minutos']
  },
  {
    id: 2,
    title: 'Ciclo de Secagem',
    price: 'R$ 13,99',
    description: 'Cesto padrão (aprox. 10kg)',
    features: ['Roupas prontas para dobrar', 'Temperatura controlada', 'Proteção das fibras', '45 minutos']
  }
];

export const FABRIC_TIPS: FabricTip[] = [
  { id: 1, title: 'Algodão', description: 'Lavar em temperatura ambiente para evitar encolhimento.', icon: <Shirt className="w-8 h-8" /> },
  { id: 2, title: 'Delicadas', description: 'Use ciclos suaves e evite secagem em alta temperatura.', icon: <Waves className="w-8 h-8" /> },
  { id: 3, title: 'Sintéticos', description: 'Secagem rápida e eficiente, ideal para roupas de academia.', icon: <ShoppingBag className="w-8 h-8" /> }
];

export const FAQ: FAQItem[] = [
  { id: 1, question: 'Preciso levar meu próprio sabão?', answer: 'Não! Nossos dosadores automáticos já incluem produtos premium (Omo e Comfort Pro) em cada ciclo de lavagem.' },
  { id: 2, question: 'Quanto tempo demora um ciclo completo?', answer: 'A lavagem leva cerca de 35-40 minutos e a secagem mais 45 minutos. Em menos de 1h30 você sai com tudo pronto.' },
  { id: 3, question: 'Quais as formas de pagamento?', answer: 'Aceitamos cartões de crédito, débito e PIX diretamente no terminal de autoatendimento.' },
  { id: 4, question: 'Tem alguém para me ajudar se eu tiver dúvidas?', answer: 'Nossa unidade é self-service e intuitiva, mas temos suporte via WhatsApp 24h caso precise de auxílio remoto.' },
  { id: 5, question: 'O local é seguro de madrugada?', answer: 'Sim. Contamos com monitoramento por câmeras 24h e iluminação reforçada para sua total tranquilidade.' },
  { id: 6, question: 'Posso lavar edredom e cobertores?', answer: 'Sim! Nossas máquinas industriais comportam edredons de casal e cobertores pesados com facilidade.' },
  { id: 7, question: 'Preciso agendar um horário para lavar?', answer: 'Não é necessário agendamento. Funcionamos por ordem de chegada, 24 horas por dia.' },
  { id: 8, question: 'As máquinas secam as roupas completamente?', answer: 'Sim! Nossas secadoras profissionais deixam as roupas prontas para dobrar e guardar.' },
  { id: 9, question: 'O sabão e amaciante são de boa qualidade?', answer: 'Utilizamos exclusivamente produtos da linha profissional (Omo e Comfort), garantindo limpeza e perfume.' },
  { id: 10, question: 'Onde encontro a One! Blue em Barcarena?', answer: 'Estamos localizados na Av. Francisco Vinagre, Vila dos Cabanos. Venha nos visitar!' }
];
