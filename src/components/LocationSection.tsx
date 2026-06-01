const PONTOS = [
  { label: 'MetrÃ´ Consolação',   dist: '400m',  icon: 'ð' },
  { label: 'Avenida Paulista',    dist: '500m',  icon: 'ð' },
  { label: 'Parque Trianon',      dist: '600m',  icon: 'ð¿' },
  { label: 'Shopping Paulista',   dist: '700m',  icon: 'ð' },
  { label: 'MASP',               dist: '800m',  icon: 'ð¨' },
  { label: 'Aeroporto Congonhas', dist: '8 km',  icon: 'âï¸' },
];

export default function LocationSection() {
  return (
    <section
      id="localizacao"
      style={{ background: '#F2F1EF', padding: '100px 24px', position: 'relative' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 9, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.3em',
            color: '#B8965A', marginBottom: 16,
          }}>
            Localização
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 5vw, 58px)',
            fontWeight: 600, lineHeight: 1.0,
            color: '#1C2B3A', margin: '0 0 6px',
          }}>
            Cerqueira César,
          </h2>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 5vw, 58px)',
            fontWeight: 300, fontStyle: 'italic', lineHeight: 1.0,
            color: '#1C2B3A', margin: '0 0 20px',
          }}>
            o melhor endereço de São Paulo
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, color: '#1C2B3A55',
            letterSpacing: '0.08em',
          }}>
            Jardim América Â· São Paulo, SP Â· Próximo Ã  Av. Paulista
          </p>
        </div>

        {/* Grid: mapa + pontos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: 3,
          alignItems: 'stretch',
        }} className="loc-grid">

          {/* Google Maps embed */}
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: 460,
            background: '#1C2B3A',
          }}>
            {/* HUD overlay corners */}
            {[
              { top: 12, left: 12,    borderTop: '1.5px solid rgba(184,150,90,0.5)', borderLeft: '1.5px solid rgba(184,150,90,0.5)' },
              { top: 12, right: 12,   borderTop: '1.5px solid rgba(184,150,90,0.5)', borderRight: '1.5px solid rgba(184,150,90,0.5)' },
              { bottom: 12, left: 12, borderBottom: '1.5px solid rgba(184,150,90,0.5)', borderLeft: '1.5px solid rgba(184,150,90,0.5)' },
              { bottom: 12, right: 12,borderBottom: '1.5px solid rgba(184,150,90,0.5)', borderRight: '1.5px solid rgba(184,150,90,0.5)' },
            ].map((s, i) => (
              <div key={i} style={{ position: 'absolute', width: 16, height: 16, zIndex: 4, ...s }} />
            ))}

            {/* Label chip */}
            <div style={{
              position: 'absolute', top: 20, left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 4,
              background: 'rgba(28,43,58,0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(184,150,90,0.3)',
              padding: '7px 16px',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#B8965A' }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 9, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.8)',
              }}>
                Cerqueira César Â· Jardim América
              </span>
            </div>

            <iframe
              title="Localização do imóvel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6588!3d-23.5616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sCerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: 'block',
                filter: 'grayscale(30%) contrast(1.05) brightness(0.92)',
                minHeight: 460,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Pontos de interesse */}
          <div style={{
            background: '#1C2B3A',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 8, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.28em',
              color: 'rgba(255,255,255,0.35)', marginBottom: 28,
            }}>
              Pontos de Interesse
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
              {PONTOS.map(({ label, dist, icon }, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 16, lineHeight: 1 }}>{icon}</span>
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12, color: 'rgba(255,255,255,0.65)',
                    }}>
                      {label}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 18, fontWeight: 600,
                    color: '#B8965A',
                  }}>
                    {dist}
                  </span>
                </div>
              ))}
            </div>

            {/* Bairro blurb */}
            <div style={{
              marginTop: 28,
              paddingTop: 24,
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 17, lineHeight: 1.65,
                color: 'rgba(255,255,255,0.45)',
                fontStyle: 'italic',
              }}>
                "Cerqueira César é o coração cultural e financeiro de São Paulo â um endereço que combina sofisticação, conveniÃªncia e qualidade de vida incomparáveis."
              </p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .loc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
