import { useState, useEffect } from 'react';
import { Menu, Phone, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showValoraciones, setShowValoraciones] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  const sectionLinks = [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#faq', label: 'FAQ' },
  ];

  const valoraciones = [
    { to: '/evaluacion-tdah-ninos', label: 'TDAH Infantil', sub: 'Niños 5-17 años' },
    { to: '/evaluacion-tdah-adultos', label: 'TDAH Adultos', sub: 'Desde 18 años' },
    { to: '/evaluacion-autismo-cancun', label: 'Autismo (TEA)', sub: 'Desde 2 años' },
  ];

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
    // If not home, let the browser handle /#section natively
  };

  const sectionHref = (hash: string) => isHome ? hash : `/${hash}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300">
      <nav className={`glass max-w-6xl mx-auto rounded-2xl px-6 py-4 flex justify-between items-center transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-soft'}`}>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground font-serif font-bold italic text-lg transition-transform group-hover:scale-110 group-hover:rotate-6">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-primary text-sm uppercase tracking-widest leading-none">Karen Trujillo</span>
            <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-[0.2em] mt-1">Neuropsicología · TDAH · Autismo</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {/* Valoraciones dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowValoraciones(true)}
            onMouseLeave={() => setShowValoraciones(false)}
          >
            <button
              className="flex items-center gap-1 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary/70 hover:text-primary hover:bg-secondary rounded-lg transition-all"
              aria-haspopup="true"
              aria-expanded={showValoraciones}
            >
              Valoraciones <ChevronDown className={`w-3 h-3 transition-transform ${showValoraciones ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {showValoraciones && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 pt-2 w-56"
                >
                  <div className="bg-card rounded-xl shadow-2xl border border-border p-2">
                    {valoraciones.map((v) => (
                      <Link
                        key={v.to}
                        to={v.to}
                        className="flex flex-col px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <span className="text-xs font-bold text-primary">{v.label}</span>
                        <span className="text-[10px] text-muted-foreground">{v.sub}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={sectionHref(link.href)}
              onClick={(e) => handleSectionClick(e, link.href)}
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
            href="https://wa.me/529983211547?text=Hola%20Karen,%20me%20interesa%20agendar%20una%20valoración"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground text-[11px] font-bold px-6 py-3 rounded-lg transition-all uppercase tracking-widest shadow-lg shadow-primary/20 transform hover:-translate-y-0.5"
          >
            Agendar Valoración
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 bg-card rounded-2xl p-6 flex flex-col gap-2 shadow-2xl border border-border origin-top"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-3 mb-1">Valoraciones</p>
            {valoraciones.map((v) => (
              <Link
                key={v.to}
                to={v.to}
                className="flex justify-between items-center p-3 rounded-lg hover:bg-secondary text-sm font-bold text-primary transition-colors"
              >
                <span>{v.label}</span>
                <span className="text-[10px] text-muted-foreground font-normal">{v.sub}</span>
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={sectionHref(link.href)}
                onClick={(e) => handleSectionClick(e, link.href)}
                className="text-center p-3 rounded-lg hover:bg-secondary text-sm font-bold uppercase tracking-widest text-primary transition-colors"
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
              href="https://wa.me/529983211547?text=Hola%20Karen,%20quiero%20agendar%20una%20valoración"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary text-primary-foreground text-center py-4 rounded-lg font-bold uppercase tracking-widest shadow-lg shadow-primary/20 text-xs"
            >
              Agendar Valoración
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
