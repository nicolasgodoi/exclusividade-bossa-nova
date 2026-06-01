import { useState } from 'react';

const ROOMS = [
  { src: '/exclusividade-bossa-nova/images/IMG_0254.jpg', label: 'Sala de Estar',    desc: 'Ampla e luminosa com pé direito elevado',        tag: '01' },
  { src: '/exclusividade-bossa-nova/images/IMG_0267.jpg', label: 'Living Integrado', desc: 'Integração perfeita com área de jantar e vista',  tag: '02' },
  { src: '/exclusividade-bossa-nova/images/IMG_0232.jpg', label: 'Cozinha Gourmet',  desc: 'Eletrodomésticos de última geração integrados',   tag: '03' },
  { src: '/exclusividade-bossa-nova/images/IMG_0325.jpg', label: 'Suíte Master',     desc: 'Revestimentos nobres e iluminação arquitetônica', tag: '04' },
];

const STATS = [
  { val: '4',        label: 'Suítes' },
  { val: '380 m²',   label: 'Área Útil' },
  { val: '4',        label: 'Vagas' },
  { val: 'Premium',  label: 'Acabamento' },
];

export default function PropertiesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="imovel"
      style={{ background: '#F2F1EF', padding: '100px 24px', position: 'relative' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: 56,
          flexWrap: 'wrap', gap: 20,
        }}>
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 9, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.3em',
              color: '#B8965A', marginBottom: 14,
            }}>
              O Imóvel
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(34px, 5vw, 60px)',
              fontWeight: 600, lineHeight: 1.0,
              color: '#1C2B3A', letterSpacing: '-0.01em',
              margin: 0,
            }}>
              Cada Ambiente,<br />
              <span style={{ fontWeight: 300, fontStyle: 'italic' }}>uma experiência</span>
            </h2>
          </div>
          <a href="#contato" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 9, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.22em',
            color: '#1C2B3A', textDecoration: 'none',
            borderBottom: '1px solid #1C2B3A',
            paddingBottom: 3,
            opacity: 0.5,
            transition: 'opacity 200ms',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.5'}
          >
            Solicitar informações →
          </a>
        </div>

        {/* Photo grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 3,
        }} className="props-grid">
          {ROOMS.map((room, idx) => (
            <div
              key={room.src}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative', overflow: 'hidden',
                aspectRatio: '3/4', cursor: 'pointer',
                background: '#1C2B3A',
              }}
            >
              <img
                src={room.src}
                alt={room.label}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center',
                  display: 'block',
                  transition: 'transform 600ms cubic-bezier(0.4,0,0.2,1), opacity 400ms',
                  transform: hovered === idx ? 'scale(1.05)' : 'scale(1)',
                  opacity: hovered === idx ? 0.7 : 0.9,
                }}
              />

              {/* Always-visible overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(transparent 45%, rgba(28,43,58,0.92) 100%)',
              }} />

              {/* Tag */}
              <div style={{
                position: 'absolute', top: 16, left: 16,
                fontFamily: "'Inter', sans-serif",
                fontSize: 9, fontWeight: 700,
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.16em',
              }}>
                {room.tag}
              </div>

              {/* Label */}
              <div style={{
                position: 'absolute', bottom: 20, left: 18, right: 18,
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22, fontWeight: 600,
                  color: 'white', lineHeight: 1.15, marginBottom: 6,
                }}>
                  {room.label}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10, color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.5,
                  opacity: hovered === idx ? 1 : 0,
                  transform: hovered === idx ? 'translateY(0)' : 'translateY(5px)',
                  transition: 'opacity 280ms, transform 280ms',
                }}>
                  {room.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid #1C2B3A12',
          marginTop: 48,
        }} className="stats-grid">
          {STATS.map(({ val, label }, i) => (
            <div key={label} style={{
              padding: '32px 24px',
              borderRight: i < STATS.length - 1 ? '1px solid #1C2B3A12' : 'none',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 40, fontWeight: 600,
                color: '#1C2B3A', lineHeight: 1,
                marginBottom: 8,
              }}>
                {val}
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
      </div>

      <style>{`
        @media (max-width: 768px) {
          .props-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .props-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
