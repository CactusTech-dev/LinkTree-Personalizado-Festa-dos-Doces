import { Instagram, MapPin, MessageCircle, ShoppingBag, Star } from 'lucide-react';
import { SocialLink } from './types';

export const BUSINESS_INFO = {
  name: "Festa dos Doces",
  tagline: "A alegria tem sabor de açúcar!",
  description: "Bolos festivos, doces criativos e explosão de sabores para o seu dia.",
  whatsapp: "5585987645184", // Número atualizado
  address: "R. Urbâno Pinheiro Pímentel, 1413 - Centro, Pacatuba - CE, 61801-270",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'menu',
    label: 'Ver Cardápio Completo',
    url: 'https://instadelivery.com.br/festadosdoces',
    icon: ShoppingBag,
    highlight: true,
  },
  {
    id: 'whatsapp',
    label: 'Encomendar pelo WhatsApp',
    url: `https://wa.me/${BUSINESS_INFO.whatsapp}`,
    icon: MessageCircle,
  },
  {
    id: 'instagram',
    label: 'Siga no Instagram',
    url: 'https://www.instagram.com/festa_dos.doces?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: Instagram,
  },
  {
    id: 'google-profile',
    label: 'Nosso Perfil no Google',
    url: 'https://share.google/dWVScjl8zwAKWHbTI',
    icon: Star,
  },
  {
    id: 'location',
    label: 'R. Urbâno Pinheiro Pímentel, 1413 - Pacatuba/CE',
    url: 'https://www.google.com/maps/search/?api=1&query=R.+Urbâno+Pinheiro+Pímentel,+1413+-+Centro,+Pacatuba+-+CE,+61801-270',
    icon: MapPin,
  },
];
