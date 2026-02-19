import { Link } from 'react-router-dom';
import { ArrowRight, Home, Brain, Network, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const links = [
  { to: '/evaluacion-tdah-ninos', icon: Zap, label: 'Valoración TDAH Infantil', sub: 'Niños de 5 a 17 años' },
  { to: '/evaluacion-tdah-adultos', icon: Brain, label: 'Valoración TDAH Adultos', sub: 'Desde 18 años' },
  { to: '/evaluacion-autismo-cancun', icon: Network, label: 'Diagnóstico Autismo (TEA)', sub: 'Desde 2 años' },
];

const NotFound = () => {
  return (
    <div className="antialiased selection:bg-accent-blue selection:text-primary pb-24 lg:pb-0">
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 bg-soft-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-pink/20 rounded-full blur-[80px] translate-y-1/3 pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* 404 number */}
          <p className="text-[8rem] font-serif font-bold leading-none text-primary/10 select-none mb-0">404</p>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 -mt-4">
            Esta página no existe
          </h1>
          <p className="text-muted-foreground font-light mb-10 text-lg">
            Puede que la URL esté mal escrita o que la página haya sido movida. Te llevamos a donde necesitas ir.
          </p>

          {/* Service shortcuts */}
          <div className="grid gap-3 mb-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-card transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <l.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-primary text-sm">{l.label}</p>
                    <p className="text-xs text-muted-foreground">{l.sub}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-bold text-xs uppercase tracking-widest rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            <Home className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default NotFound;
