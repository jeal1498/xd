import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Brain, CheckCircle2, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LocationSection from '@/components/LocationSection';

const senalesAdulto = [
  'Empiezas proyectos y no los terminas',
  'Procrastinación crónica incluso en cosas que importan',
  'Cambias de trabajo o proyectos con frecuencia',
  'Olvidas citas, fechas o compromisos importantes',
  'Dificultad para leer textos largos o concentrarte en reuniones',
  'Sensación de que tu cerebro "no para" aunque quieras descansar',
  'Impulsividad en decisiones económicas o relacionales',
  'Diagnóstico de ansiedad o depresión que no mejora del todo',
];

const mitos = [
  { mito: 'El TDAH es solo de niños', realidad: 'Entre el 50 y 65% de los niños con TDAH continúan con síntomas en la adultez. Muchos adultos no fueron diagnosticados en la infancia.' },
  { mito: 'Si trabajas mucho no puedes tener TDAH', realidad: 'Muchos adultos con TDAH compensan con hiperfoco en áreas de interés y esfuerzo extra, lo que enmascara el diagnóstico.' },
  { mito: 'Es solo falta de disciplina o carácter', realidad: 'El TDAH tiene base neurobiológica con diferencias en los circuitos dopaminérgicos y noradrenérgicos del cerebro, no es un problema de voluntad.' },
];

const instrumentos = [
  { nombre: 'CAARS (Conners Adult ADHD Rating Scales)', uso: 'Escala de síntomas TDAH validada para población adulta con autoinforme e informe de observador' },
  { nombre: 'DIVA 2.0', uso: 'Entrevista diagnóstica estructurada de TDAH en adultos, evalúa síntomas en infancia y adultez' },
  { nombre: 'CPT-3', uso: 'Prueba computarizada de atención sostenida, impulsividad y tiempo de reacción' },
  { nombre: 'BRIEF-A', uso: 'Inventario de funciones ejecutivas en adultos en contexto laboral y cotidiano' },
];

export default function TDAHAdultos() {
  useEffect(() => {
    document.title = 'Valoración TDAH en Adultos en Cancún | Diagnóstico Neuropsicológico | Psic. Karen Trujillo';
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-tdah-adultos';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Valoración de TDAH en Adultos en Cancún',
      url: 'https://psicologakarentrujillo.com.mx/evaluacion-tdah-adultos',
      about: {
        '@type': 'MedicalCondition',
        name: 'Trastorno por Déficit de Atención e Hiperactividad en adultos',
        code: { '@type': 'MedicalCode', code: 'F90', codingSystem: 'ICD-10' },
      },
      reviewedBy: {
        '@type': 'Physician',
        name: 'Karen Trujillo',
        hasCredential: { '@type': 'EducationalOccupationalCredential', credentialId: '11009616' },
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://psicologakarentrujillo.com.mx' },
          { '@type': 'ListItem', position: 2, name: 'Valoración TDAH Adultos', item: 'https://psicologakarentrujillo.com.mx/evaluacion-tdah-adultos' },
        ],
      },
    });
    document.head.appendChild(script);
    return () => { const s = document.getElementById('schema-tdah-adultos'); if (s) s.remove(); };
  }, []);

  return (
    <div className="antialiased selection:bg-accent-blue selection:text-primary pb-24 lg:pb-0">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-40 pb-20 px-6 overflow-hidden bg-soft-gradient">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-sand/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                <li>/</li>
                <li className="text-primary font-medium">Valoración TDAH Adultos</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm mb-6">
              <User className="w-3 h-3 text-primary" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Adultos desde 18 años · Cancún &amp; Online</span>
            </div>

            <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.1] mb-6">
                ¿Crees que tienes TDAH<br />
                <span className="gradient-text font-normal italic">y nunca te lo diagnosticaron?</span>
              </h1>
              <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
                El TDAH adulto está subdiagnosticado. Muchos adultos llevan décadas creyendo que el problema es su carácter o voluntad. La valoración neuropsicológica da respuestas concretas.
              </p>
              <a
                href="https://wa.me/529983211547?text=Hola%20Karen,%20me%20interesa%20la%20valoración%20de%20TDAH%20en%20adultos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-primary hover:opacity-90 text-primary-foreground py-4 px-10 rounded-lg font-bold text-xs shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest"
              >
                Agendar Valoración <ArrowRight className="w-4 h-4" />
              </a>
            </motion.header>
          </div>
        </section>

        {/* Señales en adultos */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Señales de TDAH en adultos que no siempre se reconocen
              </h2>
              <p className="text-muted-foreground font-light mb-10 max-w-3xl">
                El TDAH adulto rara vez se parece al niño que no puede quedarse sentado. En adultos, los síntomas son más internos y contextuales:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {senalesAdulto.map((s) => (
                  <div key={s} className="flex items-start gap-3 p-4 bg-secondary rounded-lg border border-border">
                    <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{s}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-accent-sand/30 border-l-4 border-accent-sand rounded-lg">
                <p className="text-sm leading-relaxed text-foreground">
                  <strong>Nota clínica:</strong> El TDAH en adultos frecuentemente coexiste con ansiedad, depresión y trastornos del sueño. Una valoración neuropsicológica permite identificar qué es primario (el TDAH) y qué es consecuencia de él, lo que define el tratamiento correcto.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mitos */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-10">
                Mitos sobre el TDAH en adultos
              </h2>
              <div className="space-y-4">
                {mitos.map((m) => (
                  <article key={m.mito} className="bg-card p-6 rounded-xl border border-border grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-destructive shrink-0 mt-1">Mito</span>
                      <p className="text-sm text-muted-foreground">{m.mito}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-success shrink-0 mt-1">Realidad</span>
                      <p className="text-sm text-foreground">{m.realidad}</p>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Instrumentos */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Instrumentos de evaluación para adultos
              </h2>
              <p className="text-muted-foreground font-light mb-10">La valoración de adultos usa pruebas diferentes a las infantiles para capturar la presentación específica del TDAH adulto.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {instrumentos.map((inst) => (
                  <article key={inst.nombre} className="bg-secondary p-6 rounded-xl border border-border hover:border-accent-blue transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Brain className="w-5 h-5 text-accent-blue" />
                      <h3 className="font-bold text-primary text-sm">{inst.nombre}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-light">{inst.uso}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-24 px-6 bg-gradient-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-6">
                Un diagnóstico correcto cambia la narrativa
              </h2>
              <p className="text-primary-foreground/80 font-light mb-8 text-lg">
                Saber que tienes TDAH no es una excusa. Es entender cómo funciona tu cerebro y tener acceso a las herramientas correctas para que funcione a tu favor.
              </p>
              <a
                href="https://wa.me/529983211547?text=Hola%20Karen,%20me%20interesa%20la%20valoración%20de%20TDAH%20adultos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-lg hover:opacity-90 transition-all shadow-lg"
              >
                Agendar mi valoración <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        <LocationSection />

        {/* Links */}
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-primary mb-8">Otras valoraciones disponibles</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/evaluacion-tdah-ninos" className="flex items-center gap-2 px-6 py-4 bg-card border border-border rounded-lg hover:border-primary transition-colors text-sm font-bold text-primary">
                <ArrowLeft className="w-4 h-4" /> Valoración TDAH Infantil
              </Link>
              <Link to="/evaluacion-autismo-cancun" className="flex items-center gap-2 px-6 py-4 bg-card border border-border rounded-lg hover:border-primary transition-colors text-sm font-bold text-primary">
                Diagnóstico Autismo (TEA) <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
