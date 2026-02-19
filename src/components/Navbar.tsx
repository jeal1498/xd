import { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#faq', label: 'FAQ' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300">
      <nav className={`glass max-w-6xl mx-auto rounded-2xl px-6 py-4 flex justify-between items-center transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-soft'}`}>
        <a 
          href="#" 
          className="flex items-center gap-3 group"
          onClick={(e) => scrollToSection(e, '#')}
        >
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground font-serif font-bold italic text-lg transition-transform group-hover:scale-110 group-hover:rotate-6">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-primary text-sm uppercase tracking-widest leading-none">Karen Trujillo</span>
            <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-[0.2em] mt-1">Psicología Clínica</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary/70 hover:text-primary hover:bg-secondary rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a 
            href="tel:529983211547" 
            className="px-4 py-2 text-xs font-bold text-primary hover:bg-secondary rounded-lg transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Llamar
          </a>
          <a 
            href="#contacto" 
            onClick={(e) => scrollToSection(e, '#contacto')}
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground text-[11px] font-bold px-6 py-3 rounded-lg transition-all uppercase tracking-widest shadow-lg shadow-primary/20 transform hover:-translate-y-0.5"
          >
            Agendar Sesión
          </a>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 bg-card rounded-2xl p-6 flex flex-col gap-3 shadow-2xl border border-border origin-top"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-center p-3 rounded-lg hover:bg-secondary text-sm font-bold uppercase tracking-widest text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-border my-2" />
            <a 
              href="tel:529983211547" 
              className="flex items-center justify-center gap-2 p-3 rounded-lg bg-secondary text-primary font-bold uppercase tracking-widest text-xs"
            >
              <Phone className="w-4 h-4" />
              Llamar
            </a>
            <a 
              href="#contacto" 
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="bg-gradient-primary text-primary-foreground text-center py-4 rounded-lg font-bold uppercase tracking-widest shadow-lg shadow-primary/20"
            >
              Agendar Cita
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
