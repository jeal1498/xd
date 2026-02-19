import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LocationSection from '@/components/LocationSection';
import SymptomChecker from '@/components/SymptomChecker';
import { applySeo, injectSchema } from '@/lib/seo';

const mitos = [
  { mito: 'El TDAH es solo de niños', realidad: 'Entre el 50-65% de los niños con TDAH continúan con síntomas en la adultez. Muchos adultos no fueron diagnosticados en la infancia porque sus síntomas pasaron inadvertidos.' },
  { mito: 'Si trabajas mucho no puedes tener TDAH', realidad: 'Muchos adultos con TDAH compensan con hiperfoco en áreas de interés y esfuerzo extra, lo que enmascara el diagnóstico durante décadas.' },
  { mito: 'Es falta de disciplina o carácter', realidad: 'El TDAH tiene base neurobiológica con diferencias en los circuitos dopaminérgicos del cerebro. No es un problema de voluntad ni de personalidad.' },
];

const instrumentos = [
  { nombre: 'CAARS (Conners Adult ADHD Rating Scales)', uso: 'Escala de síntomas TDAH validada para adultos con autoinforme e informe de observador. Estándar internacional para el diagnóstico adulto.' },
  { nombre: 'DIVA 2.0', uso: 'Entrevista diagnóstica estructurada de TDAH en adultos: evalúa síntomas en infancia y etapa actual según criterios DSM-5.' },
  { nombre: 'CPT-3', uso: 'Prueba computarizada de atención sostenida, impulsividad y tiempo de reacción con datos objetivos y cuantificables.' },
  { nombre: 'BRIEF-A', uso: 'Inventario de funciones ejecutivas en adultos en contexto laboral y cotidiano: planificación, inhibición, memoria de trabajo.' },
];

const proceso = [
  { n: '01', titulo: 'Entrevista clínica estructurada', desc: 'Anamnesis completa, historial de síntomas en infancia y adultez, impacto laboral y relacional. 60-90 minutos.' },
  { n: '02', titulo: 'Aplicación de pruebas estandarizadas', desc: 'CAARS, DIVA 2.0, CPT-3 y BRIEF-A. 2 sesiones de 60 minutos.' },
  { n: '03', titulo: 'Análisis e integración clínica', desc: 'Cruce de datos entre autoinforme, pruebas objetivas y entrevista para diagnóstico diferencial.' },
  { n: '04', titulo: 'Sesión de devolución e informe', desc: 'Explicación detallada del diagnóstico, informe escrito con cédula 11009616 y plan de acción personalizado.' },
];

const faqItems = [
  {
    q: '¿Puede un adulto tener TDAH sin haber sido diagnosticado de niño?',
    a: 'Sí. Muchos adultos con TDAH no recibieron diagnóstico en la infancia porque sus síntomas fueron menos evidentes, porque compensaban con esfuerzo extra, o porque en su época el trastorno era poco conocido. El TDAH adulto es una condición real y diagnosticable que afecta entre el 2.5% y 4% de la población adulta.',
  },
  {
    q: '¿Cuánto dura la valoración de TDAH adulto en Cancún?',
    a: 'La valoración de TDAH adulto en Cancún toma entre 2 y 3 semanas, repartidas en 3-4 citas con la Psic. Karen Trujillo. Incluye entrevista inicial, aplicación de pruebas estandarizadas (CAARS, DIVA 2.0, CPT-3), análisis y sesión de devolución con informe clínico.',
  },
  {
    q: '¿Para qué sirve el diagnóstico de TDAH en adultos?',
    a: 'El diagnóstico formal abre acceso a tratamiento especializado (farmacológico y/o psicológico), permite solicitar ajustes razonables en el trabajo, elimina años de autoculpa al entender cómo funciona el cerebro, y orienta estrategias concretas de organización, gestión del tiempo y autorregulación emocional.',
  },
  {
    q: '¿El diagnóstico de TDAH adulto tiene validez oficial?',
    a: 'Sí. El informe emitido por la Psic. Karen Trujillo está respaldado por cédula profesional federal 11009616 y tiene validez ante empleadores, instituciones de salud, IMSS y organismos gubernamentales.',
  },
];

const symptoms = [
  'Empiezas proyectos y rara vez los terminas',
  'Procrastinación crónica, incluso en cosas que te importan',
  'Cambias de trabajo o proyectos con frecuencia',
  'Olvidas citas, fechas o compromisos importantes',
  'Dificultad para concentrarte en reuniones o textos largos',
  'Tu cerebro "no para" aunque quieras descansar',
  'Impulsividad en decisiones económicas o relacionales',
  'Llevas años con diagnóstico de ansiedad que no mejora del todo',
  'Sientes que trabajas el doble para conseguir lo mismo que otros',
  'De niño te decían que "no te concentrabas" o eras "despistado"',
];

const adultThresholds = {
  low: {
    max: 2,
    label: 'Pocas señales por ahora',
    description: 'Marcaste pocas señales. Puede ser estrés situacional o algo puntual. Si persisten o aumentan, considera consultar con la Psic. Karen Trujillo en Cancún.',
    color: 'border-success bg-success/5',
  },
  mid: {
    max: 5,
    label: 'Vale la pena explorar',
    description: 'Varias de estas experiencias presentes de forma consistente pueden indicar que una valoración formal aportaría mucha claridad sobre cómo funciona tu cerebro.',
    color: 'border-accent-blue bg-accent-blue/5',
  },
  high: {
    label: 'Una valoración es muy recomendable',
    description: 'Muchos adultos con TDAH llevan décadas creyendo que el problema es su carácter o fuerza de voluntad. Un diagnóstico correcto cambia esa narrativa por completo.',
    color: 'border-primary bg-primary/5',
  },
};

export default function TDAHAdultos() {
  useEffect(() => {
    const cleanSeo = applySeo({
      title: 'Valoración TDAH en Adultos en Cancún | Diagnóstico Neuropsicológico | Psic. Karen Trujillo',
      description: 'Diagnóstico neuropsicológico de TDAH en adultos en Cancún. CAARS, DIVA 2.0, CPT-3. Muchos adultos llevan años sin diagnóstico. Informe con cédula 11009616.',
      canonical: 'https://psicologakarentrujillo.com.mx/evaluacion-tdah-adultos',
      ogTitle: '¿Tienes TDAH sin diagnosticar? Valoración en Cancún | Psic. Karen Trujillo',
      ogDescription: 'Diagnóstico de TDAH adulto en Cancún. El TDAH adulto está subdiagnosticado. Instrumentos: CAARS, DIVA 2.0, CPT-3. Cédula 11009616.',
    });

    const cleanSchema = injectSchema('schema-tdah-adultos', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'MedicalWebPage',
          name: 'Valoración de TDAH en Adultos en Cancún',
          url: 'https://psicologakarentrujillo.com.mx/evaluacion-tdah-adultos',
          about: { '@type': 'MedicalCondition', name: 'TDAH en adultos', code: { '@type': 'MedicalCode', code: 'F90', codingSystem: 'ICD-10' } },
          reviewedBy: { '@type': 'Physician', name: 'Karen Trujillo', hasCredential: { '@type': 'EducationalOccupationalCredential', credentialId: '11009616' } },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://psicologakarentrujillo.com.mx' },
              { '@type': 'ListItem', position: 2, name: 'Valoración TDAH Adultos', item: 'https://psicologakarentrujillo.com.mx/evaluacion-tdah-adultos' },
            ],
          },
        },
        {
          '@type': 'HowTo',
          name: 'Proceso de valoración de TDAH en adultos en Cancún',
          description: 'Protocolo clínico de 4 fases para el diagnóstico de TDAH en adultos realizado por la Psic. Karen Trujillo en Cancún.',
          totalTime: 'P3W',
          step: proceso.map((p) => ({
            '@type': 'HowToStep',
            name: p.titulo,
            text: p.desc,
            position: parseInt(p.n),
          })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqItems.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
        {
          '@type': 'ClaimReview',
          url: 'https://psicologakarentrujillo.com.mx/evaluacion-tdah-adultos',
          claimReviewed: 'El TDAH es solo de niños y desaparece en la adultez',
          reviewRating: { '@type': 'Rating', ratingValue: '1', bestRating: '5', alternateName: 'Falso' },
          author: { '@type': 'Physician', name: 'Karen Trujillo' },
        },
      ],
    });

    return () => { cleanSeo(); cleanSchema(); };
  }, []);

  return (
    <div className="antialiased selection:bg-accent-blue selection:text-primary pb-24 lg:pb-0">
      <Navbar />
      <main>

        {/* ── Hero ── */}
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
              <span className="w-2 h-2 rounded-full bg-accent-sand" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Adultos desde 18 años · Cancún &amp; Online</span>
            </div>
            <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.1] mb-6">
                Valoración TDAH Adultos en Cancún
                <br /><span className="gradient-text font-normal italic text-4xl lg:text-5xl">¿Llevas años sin diagnóstico?</span>
              </h1>
              <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto mb-2">
                La <strong className="text-primary">Psic. Karen Trujillo</strong> realiza diagnóstico neuropsicológico de TDAH en adultos en Cancún. El TDAH adulto está subdiagnosticado — muchas personas llevan décadas creyendo que el problema es su carácter o fuerza de voluntad.
              </p>
              <p className="text-muted-foreground text-sm font-light mb-8">Instrumentos: CAARS · DIVA 2.0 · CPT-3 · Cédula federal 11009616.</p>
              <a
                href="https://wa.me/529983211547?text=Hola%20Karen,%20me%20interesa%20la%20valoración%20de%20TDAH%20en%20adultos"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-primary hover:opacity-90 text-primary-foreground py-4 px-10 rounded-lg font-bold text-xs shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest"
              >
                Agendar Valoración <ArrowRight className="w-4 h-4" />
              </a>
            </motion.header>
          </div>
        </section>

        {/* ── SymptomChecker ── */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                ¿Qué señales tiene el TDAH en adultos?
              </h2>
              <p className="text-muted-foreground font-light mb-4 max-w-3xl leading-relaxed">
                El TDAH adulto rara vez se parece al niño que no puede quedarse sentado. En adultos, los síntomas son más internos y contextuales: dificultad crónica para organizar tareas, procrastinación que genera culpa, cambios frecuentes de trabajo o proyectos, y una sensación constante de que el cerebro "no para". Muchos adultos con TDAH son etiquetados como irresponsables o ansiosos cuando en realidad tienen una condición neurobiológica sin tratar.
              </p>
              <p className="text-muted-foreground font-light mb-10 max-w-3xl">
                Selecciona las experiencias que reconozcas en tu vida diaria de forma frecuente y persistente — no solo en momentos de mucho estrés:
              </p>
              <SymptomChecker
                title="¿Podrías tener TDAH adulto sin diagnosticar?"
                subtitle="Marca todo lo que reconozcas en tu vida cotidiana de forma consistente. Cuantas más señales, más justificada está una valoración formal."
                symptoms={symptoms}
                waMessage="Hola%20Karen,%20hice%20el%20test%20de%20señales%20de%20TDAH%20adultos%20y%20me%20gustaría%20hablar"
                thresholds={adultThresholds}
              />
            </motion.div>
          </div>
        </section>

        {/* ── Mitos ── */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Mitos sobre el TDAH en adultos</h2>
              <p className="text-muted-foreground font-light mb-10 max-w-3xl">Estos mitos retrasan diagnósticos durante décadas. La Psic. Karen Trujillo los clarifica desde la evidencia clínica:</p>
              <div className="space-y-4">
                {mitos.map((m) => (
                  <article key={m.mito} className="bg-card p-6 rounded-xl border border-border grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400 shrink-0 mt-1 border border-red-200 px-2 py-0.5 rounded whitespace-nowrap">Mito</span>
                      <p className="text-sm text-muted-foreground">{m.mito}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-success shrink-0 mt-1 border border-success/30 px-2 py-0.5 rounded whitespace-nowrap">Realidad</span>
                      <p className="text-sm text-foreground leading-relaxed">{m.realidad}</p>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Instrumentos ── */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Instrumentos de evaluación para TDAH adulto</h2>
              <p className="text-muted-foreground font-light mb-10 max-w-3xl">
                La valoración de adultos utiliza pruebas específicas para capturar la presentación del TDAH adulto — distintas a las infantiles, porque el trastorno se expresa diferente según la edad.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {instrumentos.map((inst) => (
                  <article key={inst.nombre} className="bg-secondary p-6 rounded-xl border border-border hover:border-accent-blue transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Brain className="w-5 h-5 text-accent-blue shrink-0" />
                      <h3 className="font-bold text-primary text-sm">{inst.nombre}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{inst.uso}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Proceso ── */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">¿Cómo es el proceso de valoración TDAH adulto?</h2>
              <p className="text-muted-foreground font-light mb-10">Duración total: <strong className="text-primary">2 a 3 semanas</strong> en Cancún con la Psic. Karen Trujillo.</p>
              <ol className="space-y-4">
                {proceso.map((p) => (
                  <li key={p.n} className="flex gap-6 p-6 bg-card rounded-xl border border-border">
                    <span className="text-3xl font-serif font-bold text-primary/20 shrink-0 leading-none">{p.n}</span>
                    <div>
                      <h3 className="font-bold text-primary mb-1">{p.titulo}</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 bg-gradient-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-6">Un diagnóstico correcto cambia la narrativa</h2>
              <p className="text-primary-foreground/80 font-light mb-8 text-lg">
                Saber que tienes TDAH no es una excusa. Es entender cómo funciona tu cerebro y acceder a las herramientas correctas para que funcione a tu favor. La Psic. Karen Trujillo te acompaña en ese proceso en Cancún.
              </p>
              <a
                href="https://wa.me/529983211547?text=Hola%20Karen,%20me%20interesa%20la%20valoración%20de%20TDAH%20adultos"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-lg hover:opacity-90 transition-all shadow-lg"
              >
                Agendar mi valoración <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-10 text-center">
                Preguntas frecuentes sobre el TDAH en adultos
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, i) => (
                  <details key={i} className="group bg-secondary border-2 border-border hover:border-accent-blue rounded-xl transition-all open:border-primary open:shadow-lg">
                    <summary className="p-6 font-bold text-primary cursor-pointer list-none flex justify-between items-center gap-4">
                      <span>{faq.q}</span>
                      <span className="text-muted-foreground shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                    </summary>
                    <p className="px-6 pb-6 text-muted-foreground text-sm font-light leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <LocationSection />

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
