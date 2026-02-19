import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Network, CheckCircle2, Shield, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LocationSection from '@/components/LocationSection';

const senalesTEA = [
  { edad: '12-24 meses', senales: 'No señala con el dedo, no imita, pérdida de palabras que ya usaba, poco contacto visual' },
  { edad: '2-3 años', senales: 'No habla en frases de 2 palabras, juego repetitivo, no juega "como si" (juego simbólico), angustia ante cambios de rutina' },
  { edad: '3-6 años', senales: 'Dificultad para relacionarse con otros niños, sensibilidad extrema a sonidos o texturas, ecolalia, intereses muy restringidos' },
  { edad: '6+ años', senales: 'Dificultad para interpretar emociones ajenas, conversaciones centradas en un solo tema, rigidez ante cambios, problemas de integración sensorial' },
];

const instrumentos = [
  { nombre: 'ADOS-2', uso: 'Autism Diagnostic Observation Schedule. Observación estructurada de comunicación social y juego. Gold standard del diagnóstico TEA.' },
  { nombre: 'M-CHAT-R/F', uso: 'Cuestionario de detección temprana para niños de 16 a 30 meses. Identifica señales de alerta de Autismo.' },
  { nombre: 'ADI-R', uso: 'Entrevista diagnóstica de Autismo para padres/tutores. Evalúa desarrollo temprano y síntomas actuales.' },
  { nombre: 'Vineland-3', uso: 'Escala de conducta adaptativa: habilidades de la vida diaria, comunicación y socialización.' },
];

const queIncluye = [
  'Diagnóstico clínico con código CIE-10/DSM-5',
  'Perfil de fortalezas y áreas de apoyo del niño',
  'Nivel de apoyo requerido (1, 2 o 3)',
  'Recomendaciones de intervención temprana',
  'Orientación para adecuaciones escolares',
  'Informe con cédula federal 11009616',
  'Validez ante SEP, IMSS, DIF e instituciones',
  'Sesión de devolución con orientación a padres',
];

const faqTEA = [
  {
    q: '¿A partir de qué edad se puede diagnosticar el Autismo?',
    a: 'Con instrumentos específicos como el M-CHAT-R/F se puede hacer detección temprana desde los 16 meses. El diagnóstico formal con ADOS-2 es confiable a partir de los 18-24 meses. Un diagnóstico temprano maximiza el impacto de la intervención en el desarrollo del niño.',
  },
  {
    q: '¿Cuánto tiempo dura el proceso de diagnóstico de Autismo?',
    a: 'El proceso completo de diagnóstico TEA dura entre 3 y 4 semanas, repartidas en varias sesiones: entrevista con padres (ADI-R), observación directa del niño (ADOS-2), análisis de resultados y sesión de devolución con el informe completo.',
  },
  {
    q: '¿El diagnóstico de TEA cambia si el niño es "muy funcional"?',
    a: 'El DSM-5 ya no distingue entre Asperger y Autismo: todos forman parte del Trastorno del Espectro Autista. Lo que sí determina la valoración es el nivel de apoyo necesario (Nivel 1, 2 o 3), que define el tipo de intervención y los recursos que el niño puede recibir en escuelas e instituciones.',
  },
  {
    q: '¿El diagnóstico de Autismo da acceso a apoyos institucionales?',
    a: 'Sí. Con el informe clínico respaldado por cédula federal 11009616 puedes solicitar: apoyos escolares ante la SEP, evaluación del IMSS para programas de rehabilitación, acceso a servicios del DIF y consideraciones en trámites legales o laborales. El informe especifica el nivel de apoyo requerido.',
  },
];

export default function AutismoCancun() {
  useEffect(() => {
    document.title = 'Diagnóstico Autismo (TEA) en Cancún | Niños desde 2 años | Psic. Karen Trujillo';
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-autismo';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
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
        name: 'Diagnóstico TEA con ADOS-2',
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
    });
    document.head.appendChild(script);
    return () => { const s = document.getElementById('schema-autismo'); if (s) s.remove(); };
  }, []);

  return (
    <div className="antialiased selection:bg-accent-blue selection:text-primary pb-24 lg:pb-0">
      <Navbar />
      <main>
        {/* Hero */}
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
                Diagnóstico de Autismo<br />
                <span className="gradient-text font-normal italic">(TEA) en Cancún</span>
              </h1>
              <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto mb-4">
                Evaluación con ADOS-2 y ADI-R — los instrumentos gold standard del diagnóstico TEA. Informe clínico con cédula federal 11009616 válido ante SEP, IMSS y DIF.
              </p>
              <p className="text-muted-foreground text-base font-light mb-8">
                Un diagnóstico temprano puede marcar la diferencia en el desarrollo de tu hijo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/529983211547?text=Hola%20Karen,%20me%20interesa%20el%20diagnóstico%20de%20Autismo%20para%20mi%20hijo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-primary hover:opacity-90 text-primary-foreground py-4 px-10 rounded-lg font-bold text-xs shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest"
                >
                  Agendar diagnóstico TEA <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/"
                  className="bg-card text-primary border-2 border-primary py-4 px-8 rounded-lg font-bold text-xs hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest shadow-sm flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Volver al inicio
                </Link>
              </div>
            </motion.header>
          </div>
        </section>

        {/* Señales por edad */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Señales de Autismo por rango de edad
              </h2>
              <p className="text-muted-foreground font-light mb-10 max-w-3xl">
                El Autismo se manifiesta diferente según la edad y el perfil del niño. Estas son las señales que justifican solicitar una evaluación formal:
              </p>
              <div className="space-y-4 mb-10">
                {senalesTEA.map((item) => (
                  <article key={item.edad} className="flex gap-4 p-6 bg-secondary rounded-xl border border-border">
                    <span className="shrink-0 px-3 py-1 bg-accent-pink/20 text-primary text-xs font-bold rounded-full h-fit">{item.edad}</span>
                    <p className="text-sm text-foreground">{item.senales}</p>
                  </article>
                ))}
              </div>
              <div className="p-6 bg-accent-pink/10 border-l-4 border-accent-pink rounded-lg">
                <p className="text-sm leading-relaxed text-foreground">
                  <strong>Importante:</strong> La presencia de algunas de estas señales no confirma el diagnóstico. El TEA tiene un espectro amplio y cada niño lo expresa de manera diferente. Solo una evaluación clínica formal con instrumentos estandarizados puede establecer un diagnóstico preciso.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Por qué el ADOS-2 importa */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                ¿Por qué importa el instrumento que usa el evaluador?
              </h2>
              <p className="text-muted-foreground font-light mb-10 max-w-3xl">
                No todos los diagnósticos de Autismo son equivalentes. La calidad del diagnóstico depende directamente de los instrumentos utilizados y de la formación del evaluador.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {instrumentos.map((inst) => (
                  <article key={inst.nombre} className="bg-card p-6 rounded-xl border border-border hover:border-accent-pink transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Network className="w-5 h-5 text-accent-pink" />
                      <h3 className="font-bold text-primary">{inst.nombre}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-light">{inst.uso}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* El informe TEA */}
        <section className="py-24 px-6 bg-gradient-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-center mb-10">
                <Shield className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-4">
                  ¿Qué obtienes con el diagnóstico?
                </h2>
                <p className="text-primary-foreground/80 font-light">Un diagnóstico de TEA con cédula federal abre puertas reales a apoyos institucionales.</p>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-lg hover:opacity-90 transition-all shadow-lg"
                >
                  Agendar diagnóstico TEA <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ TEA */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">Preguntas frecuentes sobre el diagnóstico de Autismo</h2>
            <div className="space-y-4">
              {faqTEA.map((faq, i) => (
                <details key={i} className="group bg-secondary border-2 border-border hover:border-accent-pink rounded-lg transition-all open:border-primary open:shadow-lg">
                  <summary className="p-6 font-bold text-primary cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="px-6 pb-6 text-muted-foreground text-sm font-light leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <LocationSection />

        {/* Links */}
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
