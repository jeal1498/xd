import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Brain, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LocationSection from '@/components/LocationSection';
import SymptomChecker from '@/components/SymptomChecker';
import { applySeo, injectSchema } from '@/lib/seo';

const instrumentos = [
  { nombre: 'CONNERS-3', uso: 'Escala de síntomas TDAH con formas para padres, maestros y el propio niño/adolescente. Mide inatención, hiperactividad e impulsividad.' },
  { nombre: 'WISC-V', uso: 'Evaluación de inteligencia y perfil cognitivo: atención, memoria de trabajo y velocidad de procesamiento.' },
  { nombre: 'BRIEF-2', uso: 'Inventario de funciones ejecutivas en contexto cotidiano (casa y escuela).' },
  { nombre: 'CPT-3', uso: 'Prueba computarizada de atención sostenida e impulsividad con datos objetivos y cuantificables.' },
];

const proceso = [
  { n: '01', titulo: 'Entrevista inicial con padres', desc: 'Anamnesis clínica, historial de desarrollo, contexto escolar y familiar. Duración: 60-90 minutos.' },
  { n: '02', titulo: 'Aplicación de pruebas al niño', desc: 'Sesiones estructuradas con los instrumentos estandarizados. 2-3 sesiones de 60 minutos.' },
  { n: '03', titulo: 'Cuestionarios a maestros', desc: 'Escalas de conducta y atención completadas por docentes para capturar el comportamiento escolar.' },
  { n: '04', titulo: 'Análisis e informe clínico', desc: 'Integración de todos los datos en informe con diagnóstico diferencial y perfil neuropsicológico completo.' },
  { n: '05', titulo: 'Sesión de devolución', desc: 'Explicación del diagnóstico, recomendaciones terapéuticas y adecuaciones escolares para los padres.' },
];

const faqItems = [
  {
    q: '¿A qué edad se puede diagnosticar el TDAH en un niño?',
    a: 'El TDAH puede diagnosticarse con rigor clínico a partir de los 5 años. Antes de esa edad los síntomas son difíciles de diferenciar del desarrollo típico. La valoración es especialmente importante en la transición a primaria, cuando las demandas de atención y autorregulación aumentan significativamente.',
  },
  {
    q: '¿Cuánto tiempo dura la valoración de TDAH infantil?',
    a: 'La valoración completa toma entre 2 y 3 semanas, repartidas en 4-5 citas. Incluye entrevista con padres, aplicación de pruebas al niño, cuestionarios a maestros, análisis de resultados y sesión de devolución con el informe.',
  },
  {
    q: '¿El TDAH desaparece cuando el niño crece?',
    a: 'El TDAH no desaparece, pero cambia su expresión. En la adolescencia la hiperactividad motora tiende a reducirse, pero la inatención puede persistir. Un diagnóstico temprano y un plan de intervención adecuado marcan una diferencia significativa en el desarrollo académico y social.',
  },
  {
    q: '¿El informe tiene validez oficial ante la escuela?',
    a: 'Sí. El informe clínico está respaldado por cédula profesional federal 11009616 y tiene validez ante instituciones educativas, SEP e IMSS. Incluye recomendaciones específicas de adecuaciones curriculares (tiempo extra, apoyos visuales, reducción de distractores).',
  },
];

const symptoms = [
  'No termina las tareas aunque sabe hacerlas',
  'Se distrae con cualquier estímulo externo',
  'Pierde útiles, ropa o juguetes con frecuencia',
  'Interrumpe constantemente a adultos o compañeros',
  'Dificultad para seguir instrucciones de varios pasos',
  'En clase parece "estar en las nubes"',
  'Reacciona de forma exagerada ante frustraciones',
  'Le cuesta esperar su turno en juegos o actividades',
  'Sus calificaciones no reflejan su inteligencia real',
  'Los maestros lo describen como "distraído" o "impulsivo"',
];

export default function TDAHNinos() {
  useEffect(() => {
    const cleanSeo = applySeo({
      title: 'Valoración TDAH Infantil en Cancún | Niños 5-17 años | Psic. Karen Trujillo',
      description: 'Evaluación neuropsicológica de TDAH en niños y adolescentes (5-17 años) en Cancún. CONNERS-3, WISC-V, BRIEF-2. Informe con cédula 11009616 válido ante SEP e IMSS.',
      canonical: 'https://psicologakarentrujillo.com.mx/evaluacion-tdah-ninos',
      ogTitle: 'Valoración TDAH Infantil en Cancún | Psic. Karen Trujillo',
      ogDescription: 'Diagnóstico de TDAH en niños 5-17 años. CONNERS-3, WISC-V, BRIEF-2. Informe oficial cédula 11009616. Válido ante SEP e IMSS en Cancún.',
    });

    const cleanSchema = injectSchema('schema-tdah-ninos', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'MedicalWebPage',
          name: 'Valoración Neuropsicológica de TDAH Infantil en Cancún',
          url: 'https://psicologakarentrujillo.com.mx/evaluacion-tdah-ninos',
          about: { '@type': 'MedicalCondition', name: 'TDAH en niños', code: { '@type': 'MedicalCode', code: 'F90', codingSystem: 'ICD-10' } },
          reviewedBy: { '@type': 'Physician', name: 'Karen Trujillo', hasCredential: { '@type': 'EducationalOccupationalCredential', credentialId: '11009616' } },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://psicologakarentrujillo.com.mx' },
              { '@type': 'ListItem', position: 2, name: 'Valoración TDAH Infantil', item: 'https://psicologakarentrujillo.com.mx/evaluacion-tdah-ninos' },
            ],
          },
        },
        {
          '@type': 'HowTo',
          name: 'Proceso de valoración neuropsicológica de TDAH infantil en Cancún',
          description: 'Protocolo clínico de 5 fases para el diagnóstico de TDAH en niños y adolescentes realizado por la Psic. Karen Trujillo en Cancún.',
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                <li>/</li>
                <li className="text-primary font-medium">Valoración TDAH Infantil</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-blue" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Niños de 5 a 17 años · Cancún</span>
            </div>
            <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.1] mb-6">
                Valoración TDAH Infantil en Cancún
                <br /><span className="gradient-text font-normal italic text-4xl lg:text-5xl">Niños y Adolescentes 5–17 años</span>
              </h1>
              <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto mb-2">
                La <strong className="text-primary">Psic. Karen Trujillo</strong> realiza diagnóstico neuropsicológico de TDAH con CONNERS-3, WISC-V y BRIEF-2.
                Informe clínico con <strong className="text-primary">cédula federal 11009616</strong>, válido ante escuelas, SEP e IMSS.
              </p>
              <p className="text-muted-foreground text-sm font-light mb-8">Un diagnóstico correcto es el primer paso del tratamiento correcto.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/529983211547?text=Hola%20Karen,%20me%20interesa%20la%20valoración%20TDAH%20infantil"
                  target="_blank" rel="noopener noreferrer"
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground py-4 px-10 rounded-lg font-bold text-xs shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  Agendar Valoración <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/" className="bg-card text-primary border-2 border-primary py-4 px-8 rounded-lg font-bold text-xs hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest shadow-sm flex items-center justify-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Volver al inicio
                </Link>
              </div>
            </motion.header>
          </div>
        </section>

        {/* ── SymptomChecker ── */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                ¿Cuáles son las señales de TDAH en niños?
              </h2>
              <p className="text-muted-foreground font-light mb-4 max-w-3xl leading-relaxed">
                El TDAH infantil no es falta de voluntad ni problema de crianza — es una condición neurobiológica que afecta los circuitos de control ejecutivo del cerebro. Las señales más frecuentes incluyen dificultad para mantener la atención, impulsividad excesiva y, en algunos casos, hiperactividad motora. Muchos niños con TDAH tienen inteligencia normal o superior, pero sus calificaciones no lo reflejan.
              </p>
              <p className="text-muted-foreground font-light mb-10 max-w-3xl leading-relaxed">
                Selecciona las conductas que observas en tu hijo de forma frecuente y consistente (no solo en momentos puntuales de cansancio o estrés):
              </p>
              <SymptomChecker
                title="¿Tu hijo podría tener TDAH?"
                subtitle="Marca todo lo que reconozcas. Las señales persistentes en más de un contexto (casa y escuela) son las más relevantes clínicamente."
                symptoms={symptoms}
                waMessage="Hola%20Karen,%20hice%20el%20test%20de%20señales%20de%20TDAH%20infantil%20y%20me%20gustaría%20hablar%20sobre%20los%20resultados"
              />
              <div className="mt-6 p-5 bg-accent-blue/5 border border-accent-blue/20 rounded-xl">
                <p className="text-sm text-foreground leading-relaxed">
                  <strong>Importante:</strong> Esta herramienta es orientativa. Solo una valoración neuropsicológica formal con instrumentos estandarizados puede establecer si se trata de TDAH u otro trastorno del neurodesarrollo. La <strong>Psic. Karen Trujillo</strong> atiende en Cancún con cédula federal 11009616.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Instrumentos ── */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Pruebas estandarizadas utilizadas en la valoración</h2>
              <p className="text-muted-foreground font-light mb-10 max-w-3xl">
                Todos los instrumentos utilizados por la Psic. Karen Trujillo están validados internacionalmente y estandarizados para población hispanohablante. Esto garantiza que los resultados sean comparables con normas clínicas actualizadas.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {instrumentos.map((inst) => (
                  <article key={inst.nombre} className="bg-card p-6 rounded-xl border border-border hover:border-accent-blue transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Brain className="w-5 h-5 text-accent-blue shrink-0" />
                      <h3 className="font-bold text-primary">{inst.nombre}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{inst.uso}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Proceso HowTo ── */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">¿Cómo es el proceso de valoración TDAH en Cancún?</h2>
              <p className="text-muted-foreground font-light mb-10">
                La valoración sigue un protocolo clínico de 5 fases. Duración total estimada: <strong className="text-primary">2 a 3 semanas</strong>, repartidas en 4-5 citas con la Psic. Karen Trujillo en Cancún.
              </p>
              <ol className="space-y-4">
                {proceso.map((p) => (
                  <li key={p.n} className="flex gap-6 p-6 bg-secondary rounded-xl border border-border">
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

        {/* ── El informe ── */}
        <section className="py-24 px-6 bg-gradient-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <FileText className="w-12 h-12 text-accent-blue mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-6">¿Qué incluye el informe de valoración TDAH?</h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
                {[
                  'Diagnóstico diferencial con respaldo clínico',
                  'Perfil neuropsicológico completo del niño',
                  'Recomendaciones terapéuticas específicas',
                  'Adecuaciones curriculares para la escuela',
                  'Plan de intervención a corto y mediano plazo',
                  'Validez oficial: cédula federal 11009616',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/529983211547?text=Hola%20Karen,%20quiero%20agendar%20valoración%20TDAH%20infantil"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-lg hover:opacity-90 transition-all shadow-lg"
              >
                Agendar ahora <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-10 text-center">
                Preguntas frecuentes sobre la valoración TDAH infantil
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, i) => (
                  <details key={i} className="group bg-card border-2 border-border hover:border-accent-blue rounded-xl transition-all open:border-primary open:shadow-lg">
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

        <section className="py-16 px-6 bg-card">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-primary mb-8">Otras valoraciones disponibles</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/evaluacion-tdah-adultos" className="flex items-center gap-2 px-6 py-4 bg-secondary border border-border rounded-lg hover:border-primary transition-colors text-sm font-bold text-primary">
                Valoración TDAH Adultos <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/evaluacion-autismo-cancun" className="flex items-center gap-2 px-6 py-4 bg-secondary border border-border rounded-lg hover:border-primary transition-colors text-sm font-bold text-primary">
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
