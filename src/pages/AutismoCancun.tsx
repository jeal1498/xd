import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Network, CheckCircle2, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LocationSection from '@/components/LocationSection';
import SymptomChecker from '@/components/SymptomChecker';
import { applySeo, injectSchema } from '@/lib/seo';

const instrumentos = [
  { nombre: 'ADOS-2', uso: 'Autism Diagnostic Observation Schedule — gold standard mundial del diagnóstico TEA. Observación estructurada de comunicación social, juego e interacción en contexto clínico.' },
  { nombre: 'M-CHAT-R/F', uso: 'Cuestionario de detección temprana para niños de 16 a 30 meses. Identifica señales de alerta de Autismo en etapa de desarrollo crítica.' },
  { nombre: 'ADI-R', uso: 'Entrevista diagnóstica de Autismo para padres/tutores. Evalúa desarrollo temprano, lenguaje, habilidades sociales y conductas repetitivas.' },
  { nombre: 'Vineland-3', uso: 'Escala de conducta adaptativa: habilidades de la vida diaria, comunicación funcional y socialización en contexto real.' },
];

const proceso = [
  { n: '01', titulo: 'Entrevista inicial con padres (ADI-R)', desc: 'Anamnesis completa, historial de desarrollo temprano, lenguaje y conducta. 90-120 minutos.' },
  { n: '02', titulo: 'Observación directa del niño (ADOS-2)', desc: 'Sesión estructurada de observación de comunicación social, juego e interacción. 60-90 minutos.' },
  { n: '03', titulo: 'Evaluación adaptativa (Vineland-3)', desc: 'Valoración de habilidades de la vida diaria y autonomía funcional del niño.' },
  { n: '04', titulo: 'Análisis e informe clínico', desc: 'Integración de todos los datos con diagnóstico diferencial, nivel de apoyo y perfil de fortalezas.' },
  { n: '05', titulo: 'Sesión de devolución a padres', desc: 'Explicación del diagnóstico, orientación sobre intervención temprana y recursos disponibles en Cancún.' },
];

const queIncluye = [
  'Diagnóstico clínico con código CIE-10/DSM-5',
  'Nivel de apoyo requerido (Nivel 1, 2 o 3)',
  'Perfil de fortalezas y áreas de apoyo',
  'Recomendaciones de intervención temprana',
  'Adecuaciones curriculares para la escuela',
  'Validez ante SEP, IMSS, DIF e instituciones',
  'Informe con cédula federal 11009616',
  'Sesión de devolución con orientación a padres',
];

const faqItems = [
  {
    q: '¿A partir de qué edad se puede diagnosticar el Autismo?',
    a: 'Con el M-CHAT-R/F se puede hacer detección temprana desde los 16 meses. El diagnóstico formal con ADOS-2 es confiable a partir de los 18-24 meses. Cuanto antes se diagnostica, antes puede comenzar la intervención temprana, que tiene el mayor impacto en el desarrollo del niño.',
  },
  {
    q: '¿Cuánto tiempo dura el diagnóstico de Autismo en Cancún?',
    a: 'El proceso completo de diagnóstico TEA con la Psic. Karen Trujillo en Cancún dura entre 3 y 4 semanas, repartidas en 4-5 citas. Incluye entrevista con padres (ADI-R), observación directa del niño (ADOS-2), evaluación adaptativa, análisis de resultados y sesión de devolución con informe.',
  },
  {
    q: '¿El diagnóstico de Autismo da acceso a apoyos institucionales?',
    a: 'Sí. El informe clínico con cédula federal 11009616 tiene validez ante la SEP para solicitar adecuaciones escolares, ante el IMSS para programas de rehabilitación, ante el DIF para apoyos sociales, y ante cualquier institución educativa o gubernamental. El informe especifica el nivel de apoyo requerido.',
  },
  {
    q: '¿Qué diferencia hay entre Asperger y Autismo?',
    a: 'El DSM-5 ya no distingue entre Síndrome de Asperger y Autismo: ambos forman parte del Trastorno del Espectro Autista (TEA). Lo que sí determina la valoración es el nivel de apoyo necesario (Nivel 1, 2 o 3), que define el tipo de intervención y los recursos institucionales a los que el niño puede acceder.',
  },
];

const symptoms = [
  'Poco o nulo contacto visual al interactuar',
  'No señala con el dedo para mostrar cosas (antes de los 18 meses)',
  'Perdió palabras o habilidades que ya había adquirido',
  'No responde a su nombre de forma consistente',
  'Juego repetitivo o fijación en partes de objetos (ruedas, luces)',
  'Dificultad para jugar con otros niños o hacer juego simbólico',
  'Reacciones extremas ante sonidos, texturas o cambios de rutina',
  'Repite frases de videos o canciones fuera de contexto (ecolalia)',
  'Muy poco interés en compartir experiencias o emociones',
  'Intereses muy intensos y restringidos a uno o pocos temas',
];

const teaThresholds = {
  low: {
    max: 2,
    label: 'Pocas señales identificadas',
    description: 'Marcaste pocas señales. Algunos de estos comportamientos son parte del desarrollo típico en ciertas etapas. Si persisten o te generan dudas, una consulta con la Psic. Karen Trujillo puede darte tranquilidad.',
    color: 'border-success bg-success/5',
  },
  mid: {
    max: 5,
    label: 'Hay señales que merecen atención',
    description: 'Varias señales presentes de forma consistente pueden indicar que vale la pena hacer una valoración formal. La detección temprana marca una diferencia enorme en el desarrollo del niño.',
    color: 'border-accent-blue bg-accent-blue/5',
  },
  high: {
    label: 'Se recomienda una evaluación formal',
    description: 'Muchas señales presentes de forma persistente son motivo suficiente para solicitar una valoración neuropsicológica. Cuanto antes se evalúa, antes puede comenzar la intervención adecuada.',
    color: 'border-primary bg-primary/5',
  },
};

export default function AutismoCancun() {
  useEffect(() => {
    const cleanSeo = applySeo({
      title: 'Diagnóstico Autismo (TEA) en Cancún | Niños desde 2 años | Psic. Karen Trujillo',
      description: 'Diagnóstico de Autismo (TEA) en Cancún con ADOS-2, ADI-R y M-CHAT. Desde los 2 años. Informe con cédula 11009616 válido ante SEP, IMSS y DIF. Psic. Karen Trujillo.',
      canonical: 'https://psicologakarentrujillo.com.mx/evaluacion-autismo-cancun',
      ogTitle: 'Diagnóstico Autismo (TEA) en Cancún | ADOS-2 | Psic. Karen Trujillo',
      ogDescription: 'Evaluación TEA con ADOS-2 y ADI-R en Cancún. Desde 2 años. Informe con validez ante SEP, IMSS y DIF. Cédula federal 11009616.',
    });

    const cleanSchema = injectSchema('schema-autismo', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'MedicalWebPage',
          name: 'Diagnóstico de Autismo (TEA) en Cancún',
          url: 'https://psicologakarentrujillo.com.mx/evaluacion-autismo-cancun',
          about: {
            '@type': 'MedicalCondition',
            name: 'Trastorno del Espectro Autista (TEA)',
            code: { '@type': 'MedicalCode', code: 'F84.0', codingSystem: 'ICD-10' },
          },
          reviewedBy: {
            '@type': 'Physician',
            name: 'Karen Trujillo',
            hasCredential: { '@type': 'EducationalOccupationalCredential', credentialId: '11009616' },
          },
          offers: {
            '@type': 'Offer',
            name: 'Diagnóstico TEA con ADOS-2 en Cancún',
            areaServed: { '@type': 'City', name: 'Cancún' },
            priceCurrency: 'MXN',
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://psicologakarentrujillo.com.mx' },
              { '@type': 'ListItem', position: 2, name: 'Diagnóstico Autismo TEA', item: 'https://psicologakarentrujillo.com.mx/evaluacion-autismo-cancun' },
            ],
          },
        },
        {
          '@type': 'HowTo',
          name: 'Proceso de diagnóstico de Autismo (TEA) en Cancún',
          description: 'Protocolo clínico de 5 fases para el diagnóstico de TEA en niños realizado por la Psic. Karen Trujillo en Cancún con ADOS-2 y ADI-R.',
          totalTime: 'P4W',
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-pink/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                <li>/</li>
                <li className="text-primary font-medium">Diagnóstico Autismo (TEA)</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm mb-6">
              <Network className="w-3 h-3 text-primary" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Niños desde 2 años · Cancún &amp; Online (parcial)</span>
            </div>
            <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.1] mb-6">
                Diagnóstico Autismo (TEA) en Cancún
                <br /><span className="gradient-text font-normal italic text-4xl lg:text-5xl">ADOS-2 · ADI-R · Desde 2 años</span>
              </h1>
              <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto mb-2">
                La <strong className="text-primary">Psic. Karen Trujillo</strong> realiza diagnóstico de Trastorno del Espectro Autista en Cancún con los instrumentos gold standard: ADOS-2 y ADI-R. Informe clínico con <strong className="text-primary">cédula federal 11009616</strong>, válido ante SEP, IMSS y DIF.
              </p>
              <p className="text-muted-foreground text-sm font-light mb-8">Un diagnóstico temprano maximiza el impacto de la intervención.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/529983211547?text=Hola%20Karen,%20me%20interesa%20el%20diagnóstico%20de%20Autismo%20para%20mi%20hijo"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-primary hover:opacity-90 text-primary-foreground py-4 px-10 rounded-lg font-bold text-xs shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest"
                >
                  Agendar diagnóstico TEA <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/" className="bg-card text-primary border-2 border-primary py-4 px-8 rounded-lg font-bold text-xs hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest shadow-sm flex items-center justify-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Volver al inicio
                </Link>
              </div>
            </motion.header>
          </div>
        </section>

        {/* ── ¿A partir de qué edad? — H2 que faltaba ── */}
        <section className="py-16 px-6 bg-card border-b border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
              {[
                { edad: 'Desde 16 meses', desc: 'Detección temprana con M-CHAT-R/F. Identificación de señales de alerta antes de los 2 años.', color: 'bg-accent-pink/10 border-accent-pink/30' },
                { edad: 'Desde 2 años', desc: 'Diagnóstico formal con ADOS-2. El gold standard internacional desde los 18-24 meses.', color: 'bg-accent-blue/10 border-accent-blue/30' },
                { edad: 'Niños mayores', desc: 'Diagnóstico diferencial con TDAH, ansiedad u otras condiciones del neurodesarrollo.', color: 'bg-accent-sand/40 border-accent-sand' },
              ].map((item) => (
                <div key={item.edad} className={`p-6 rounded-xl border-2 ${item.color}`}>
                  <p className="font-bold text-primary text-lg mb-2">{item.edad}</p>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SymptomChecker ── */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                ¿Cuáles son las señales de Autismo en niños?
              </h2>
              <p className="text-muted-foreground font-light mb-4 max-w-3xl leading-relaxed">
                El Autismo (TEA) tiene un espectro amplio — cada niño lo expresa de manera diferente y con distinta intensidad. Las señales más frecuentes incluyen dificultades en la comunicación social (contacto visual, señalar, compartir emociones), patrones de conducta repetitivos, e hipersensibilidad o hiposensibilidad sensorial. Algunos niños tienen un desarrollo aparentemente normal y luego pierden habilidades entre los 15 y 24 meses.
              </p>
              <p className="text-muted-foreground font-light mb-10 max-w-3xl">
                Selecciona las conductas que observas en tu hijo de forma frecuente y consistente:
              </p>
              <SymptomChecker
                title="¿Tu hijo podría tener Autismo (TEA)?"
                subtitle="Marca las conductas que observas de forma frecuente — no solo en momentos de cansancio o estrés puntual."
                symptoms={symptoms}
                waMessage="Hola%20Karen,%20hice%20el%20test%20de%20señales%20de%20Autismo%20y%20me%20gustaría%20hablar%20sobre%20los%20resultados"
                thresholds={teaThresholds}
              />
              <div className="mt-6 p-5 bg-accent-pink/5 border border-accent-pink/20 rounded-xl">
                <p className="text-sm text-foreground leading-relaxed">
                  <strong>Importante:</strong> La presencia de estas señales no confirma el diagnóstico. El TEA tiene un espectro amplio y solo una evaluación clínica formal con ADOS-2 y ADI-R puede establecer un diagnóstico preciso. La <strong>Psic. Karen Trujillo</strong> atiende en Cancún con cédula federal 11009616.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── ¿Por qué importa el instrumento? ── */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                ¿Por qué importa el instrumento que usa el evaluador?
              </h2>
              <p className="text-muted-foreground font-light mb-4 max-w-3xl leading-relaxed">
                No todos los diagnósticos de Autismo son equivalentes. El <strong className="text-primary">ADOS-2</strong> (Autism Diagnostic Observation Schedule, 2ª edición) es el instrumento gold standard a nivel mundial — una observación estructurada y codificada que permite cuantificar la comunicación social y los patrones conductuales con criterios clínicos estandarizados. Un diagnóstico sin ADOS-2 puede ser subjetivo e impugnable ante instituciones.
              </p>
              <p className="text-muted-foreground font-light mb-10 max-w-3xl">La Psic. Karen Trujillo utiliza en Cancún los 4 instrumentos reconocidos internacionalmente para el diagnóstico TEA:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {instrumentos.map((inst) => (
                  <article key={inst.nombre} className="bg-secondary p-6 rounded-xl border border-border hover:border-accent-pink transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Network className="w-5 h-5 text-accent-pink shrink-0" />
                      <h3 className="font-bold text-primary">{inst.nombre}</h3>
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                ¿Cómo es el proceso de diagnóstico de Autismo en Cancún?
              </h2>
              <p className="text-muted-foreground font-light mb-10">Duración total: <strong className="text-primary">3 a 4 semanas</strong> con la Psic. Karen Trujillo en Cancún.</p>
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

        {/* ── El informe ── */}
        <section className="py-24 px-6 bg-gradient-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-center mb-10">
                <Shield className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-4">
                  ¿Qué incluye el informe de diagnóstico TEA?
                </h2>
                <p className="text-primary-foreground/80 font-light">Un diagnóstico TEA con cédula federal abre puertas reales a apoyos institucionales en Cancún y todo México.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {queIncluye.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a
                  href="https://wa.me/529983211547?text=Hola%20Karen,%20quiero%20agendar%20el%20diagnóstico%20de%20Autismo%20para%20mi%20hijo"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-lg hover:opacity-90 transition-all shadow-lg"
                >
                  Agendar diagnóstico TEA <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-10 text-center">
                Preguntas frecuentes sobre el diagnóstico de Autismo
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, i) => (
                  <details key={i} className="group bg-secondary border-2 border-border hover:border-accent-pink rounded-xl transition-all open:border-primary open:shadow-lg">
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
                Valoración TDAH Infantil <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/evaluacion-tdah-adultos" className="flex items-center gap-2 px-6 py-4 bg-card border border-border rounded-lg hover:border-primary transition-colors text-sm font-bold text-primary">
                Valoración TDAH Adultos <ArrowRight className="w-4 h-4" />
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
