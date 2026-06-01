export default function AboutSection() {
  return (
    <section
      id="sobre"
      style={{
        background: '#FAFAF8',
        padding: '100px 24px',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'center',
        }}
        className="about-grid"
      >
        {/* Photo column */}
        <div style={{ position: 'relative' }}>
          {/* Decorative offset frame */}
          <div style={{
            position: 'absolute',
            top: 24, left: -24,
            right: 24, bottom: -24,
            border: '1px solid #1C2B3A14',
            pointerEvents: 'none',
            zIndex: 0,
          }} />
          <img
            src="/exclusividade-bossa-nova/images/corretor.jpg"
            alt="Rodolfo Andrade"
            style={{
              position: 'relative', zIndex: 1,
              width: '100%',
              display: 'block',
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />
          {/* Badge */}
          <div style={{
            position: 'absolute', zIndex: 2,
            bottom: -16, right: -16,
            background: '#1C2B3A',
            color: '#FAFAF8',
            padding: '14px 22px',
            fontFamily: "'Inter', sans-serif",
            fontSize: 9, fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}>
            Sotheby's International Realty
          </div>
        </div>

        {/* Text column */}
        <div style={{ paddingTop: 8 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 9, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.3em',
            color: '#B8965A', marginBottom: 20,
          }}>
            Sobre o Corretor
          </p>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5.5vw, 68px)',
            fontWeight: 600, lineHeight: 1.0,
            color: '#1C2B3A',
            letterSpacing: '-0.01em',
            marginBottom: 8,
          }}>
            Rodolfo
          </h2>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5.5vw, 68px)',
            fontWeight: 300, lineHeight: 1.0,
            color: '#1C2B3A',
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
            marginBottom: 36,
          }}>
            Andrade
          </h2>

          <div style={{ width: 48, height: 1, background: '#1C2B3A', marginBottom: 36, opacity: 0.15 }} />

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 21, lineHeight: 1.65,
            color: '#1C2B3A',
            marginBottom: 18,
            opacity: 0.8,
          }}>
            Com anos de experiência no mercado imobiliário de alto padrão, Rodolfo Andrade une expertise técnica a um atendimento personalizado e discreto.
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 19, lineHeight: 1.65,
            color: '#1C2B3A',
            marginBottom: 44,
            opacity: 0.5,
          }}>
            Associado à Bossa Nova Sotheby's International Realty, oferece acesso a um portfólio exclusivo e uma rede global de compradores qualificados.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 44 }}>
            {[
              { label: 'Telefone', value: '(73) 99905-0295', href: 'tel:+5573999050295' },
              { label: 'E-mail', value: 'randrade@bossanovasir.com.br', href: 'mailto:randrade@bossanovasir.com.br' },
              { label: 'Site', value: 'bnsir.com.br', href: 'https://bnsir.com.br' },
            ].map(({ label, value, href }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'baseline', gap: 12, borderBottom: '1px solid #1C2B3A0C', paddingBottom: 14 }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 8, fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.2em',
                  color: '#1C2B3A', opacity: 0.3,
                  minWidth: 56,
                }}>
                  {label}
                </span>
                <a href={href} style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13, color: '#1C2B3A',
                  textDecoration: 'none', opacity: 0.7,
                  transition: 'opacity 200ms',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: "'Inter', sans-serif",
              fontSize: 10, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.2em',
              color: '#FAFAF8',
              background: '#1C2B3A',
              padding: '16px 28px',
              textDecoration: 'none',
              transition: 'background 200ms',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#2a3f54'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#1C2B3A'}
          >
            Agendar Visita →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 64px !important; }
        }
      `}</style>
    </section>
  );
}
