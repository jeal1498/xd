import { Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#faq', label: 'Preguntas' },
  ];

  return (
    <footer id="contacto" className="bg-gradient-primary text-primary-foreground pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <motion.div 
        className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 relative z-10 border-b border-primary-foreground/10 pb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="w-12 h-12 bg-primary-foreground rounded-lg flex items-center justify-center text-primary font-serif font-bold italic text-2xl mb-6">K</div>
          <p className="text-xs text-primary-foreground/70 leading-relaxed mb-6">
            Psicología clínica y neuropsicología especializada en Cancún. Comprometida con la salud mental basada en evidencia científica y calidez humana. Cédula Federal: 11009616.
          </p>
          <div className="flex gap-3">
            <a 
              href="https://www.facebook.com/share/1Bs93MjeKt/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent-blue rounded-lg flex items-center justify-center transition-all hover:scale-110" 
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/psicologakarentrujillo" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent-pink/60 rounded-lg flex items-center justify-center transition-all hover:scale-110" 
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@psic.karentrujillo" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent-blue rounded-lg flex items-center justify-center transition-all hover:scale-110" 
              title="TikTok"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-1">
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-accent-blue">Navegación</h4>
          <ul className="space-y-3 text-xs font-medium text-primary-foreground/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="hover:text-primary-foreground hover:translate-x-1 transition-all inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-accent-blue">Contacto Directo</h4>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <a 
              href="tel:529983211547" 
              className="flex items-center gap-4 p-4 rounded-lg bg-primary-foreground/5 hover:bg-accent-blue/20 transition-all group border border-primary-foreground/10"
            >
              <div className="bg-primary-foreground/10 group-hover:bg-primary-foreground/20 p-3 rounded-lg text-accent-blue group-hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest opacity-50">Llamar</span>
                <span className="text-sm font-bold">+52 998 321 1547</span>
              </div>
            </a>
            <a 
              href="mailto:karentrujillopsic@gmail.com" 
              className="flex items-center gap-4 p-4 rounded-lg bg-primary-foreground/5 hover:bg-accent-blue/20 transition-all group border border-primary-foreground/10"
            >
              <div className="bg-primary-foreground/10 group-hover:bg-primary-foreground/20 p-3 rounded-lg text-accent-blue group-hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest opacity-50">Email</span>
                <span className="text-sm font-bold truncate">karentrujillopsic@gmail.com</span>
              </div>
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs text-primary-foreground/50 bg-primary-foreground/5 p-4 rounded-lg border border-primary-foreground/10">
            <Clock className="w-4 h-4" />
            <div>
              <p><strong>Lun - Vie:</strong> 9:00 AM - 8:00 PM</p>
              <p><strong>Sábado:</strong> 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-primary-foreground/40 uppercase tracking-widest font-bold">
        <p>© 2025 Karen Trujillo | Neuropsicología & Psicología Clínica. Todos los derechos reservados.</p>
        <p>Cédula Federal: 11009616 | Cancún, Quintana Roo</p>
      </div>
    </footer>
  );
};

export default Footer;
