const FEATURES = [
  { val: '250',        unit: 'm²',  label: 'Área Útil' },
  { val: '3',          unit: '',    label: 'Suítes' },
  { val: '2',          unit: '',    label: 'Vagas' },
  { val: 'R$ 20.400',  unit: '/m²', label: 'Valor por m²' },
];

const DIFERENCIAIS = [
  'Edifício modernista icônico',
  'Área social ampla e iluminada',
  'Varanda integrada',
  'Cozinha gourmet com ilha integrada',
  'Ar-condicionado em todos os ambientes',
  'Piso em taco de madeira nobre',
  'Closet e lavanderia',
  'Hall privativo exclusivo',
  'Elevador',
  'Janelões com vistas diferenciadas',
  'Planta inteligente',
  'Próximo ao metrô',
];

export default function PropertyDetails() {
  return (
    <section
      id="detalhes"
      style={{ background: '#FAFAF8', padding: '100px 24px', position: 'relative' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 9, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.3em',
            color: '#B8965A', marginBottom: 16,
          }}>
            Ficha do Imóvel · Código 28778
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 5vw, 60px)',
            fontWeight: 600, lineHeight: 1.0,
            color: '#1C2B3A', letterSpacing: '-0.01em',
            margin: '0 0 6px',
          }}>
            Apartamento em Edifício
          </h2>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 5vw, 60px)',
            fontWeight: 300, fontStyle: 'italic', lineHeight: 1.0,
            color: '#1C2B3A', letterSpacing: '-0.01em',
            margin: '0 0 24px',
          }}>
            Modernista Icônico
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, color: '#1C2B3A66',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Cerqueira César · Jardim América · São Paulo, SP
          </p>
        </div>

        {/* Preço destaque */}
        <div style={{
          background: '#1C2B3A',
          padding: '36px 40px',
          marginBottom: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 24,
        }}>
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 8, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.28em',
              color: 'rgba(255,255,255,0.4)', marginBottom: 8,
            }}>
              Valor à Vista
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 600, color: 'white', lineHeight: 1,
              letterSpacing: '-0.01em',
            }}>
              R$ 5.100.000
            </p>
          </div>
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {[
              { label: 'Condomínio', val: 'R$ 3.200/mês' },
              { label: 'IPTU',       val: 'R$ 450/mês' },
            ].map(({ label, val }) => (
              <div key={label}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 8, fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.24em',
                  color: 'rgba(255,255,255,0.3)', marginBottom: 6,
                }}>
                  {label}
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22, color: '#B8965A', fontWeight: 600,
                }}>
                  {val}
                </p>
              </div>
            ))}
          </div>
          <a href="#contato" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 9, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.2em',
            color: '#1C2B3A', background: '#B8965A',
            padding: '14px 24px', textDecoration: 'none',
            transition: 'background 200ms',
            whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#d4a96e'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#B8965A'}
          >
            Solicitar Proposta →
          </a>
        </div>

        {/* Números */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid #1C2B3A10',
          borderLeft: '1px solid #1C2B3A10',
          marginBottom: 64,
        }} className="feat-grid">
          {FEATURES.map(({ val, unit, label }) => (
            <div key={label} style={{
              padding: '36px 28px',
              borderBottom: '1px solid #1C2B3A10',
              borderRight: '1px solid #1C2B3A10',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 44, fontWeight: 600,
                color: '#1C2B3A', lineHeight: 1, marginBottom: 4,
              }}>
                {val}<span style={{ fontSize: 22, fontWeight: 300, opacity: 0.5 }}>{unit}</span>
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 9, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.22em',
                color: '#1C2B3A', opacity: 0.35,
              }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Descrição + diferenciais */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
        }} className="desc-grid">

          {/* Descrição */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 9, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.28em',
              color: '#B8965A', marginBottom: 20,
            }}>
              Sobre o Apartamento
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20, lineHeight: 1.7,
              color: '#1C2B3A', opacity: 0.75,
              marginBottom: 20,
            }}>
              Localizado próximo à Avenida Paulista, este apartamento está inserido em um dos edifícios modernistas mais icônicos de São Paulo, no bairro Cerqueira César.
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20, lineHeight: 1.7,
              color: '#1C2B3A', opacity: 0.6,
              marginBottom: 20,
            }}>
              Com área social ampla e iluminada e varanda integrada, o apartamento oferece uma cozinha gourmet com ilha que favorece a convivência, três suítes espaçosas, closet e lavanderia.
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20, lineHeight: 1.7,
              color: '#1C2B3A', opacity: 0.5,
            }}>
              Ar-condicionado em todos os ambientes, piso em taco de madeira nobre e janelões com vistas diferenciadas completam este imóvel de alto padrão com hall privativo e elevador.
            </p>
          </div>

          {/* Diferenciais */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 9, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.28em',
              color: '#B8965A', marginBottom: 20,
            }}>
              Diferenciais
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {DIFERENCIAIS.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '12px 0',
                  borderBottom: '1px solid #1C2B3A08',
                }}>
                  <div style={{
                    width: 4, height: 4, borderRadius: '50%',
                    background: '#B8965A', flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13, color: '#1C2B3A', opacity: 0.65,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CRECI badge */}
            <div style={{
              marginTop: 28,
              padding: '16px 20px',
              background: '#F2F1EF',
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{
                width: 36, height: 36,
                background: '#1C2B3A',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 11, color: 'white' }}>RA</span>
              </div>
              <div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12, fontWeight: 600, color: '#1C2B3A',
                  marginBottom: 2,
                }}>
                  Rodolfo Andrade
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 9, color: '#1C2B3A55',
                  textTransform: 'uppercase', letterSpacing: '0.16em',
                }}>
                  CRECI 270168 · Bossa Nova Sotheby's
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .feat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .desc-grid  { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
