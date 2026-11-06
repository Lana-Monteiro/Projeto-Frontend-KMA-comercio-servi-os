import React, { useState } from 'react';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const itemsList = [
    {
      id: 1,
      name: 'Instalação de Câmeras de Segurança (Kit 4 Câmeras)',
      category: 'Segurança',
      price: 850.00,
      images: [
        '/cam1.jpeg',
        '/cam2.jpeg',
        '/cam3.jpeg',
        '/cam4.jpeg'
      ],
      description: 'Kit completo com 4 câmeras HD, DVR de 4 canais, instalação profissional inclusa e acesso via aplicativo no celular.'
    },
    {
      id: 2,
      name: 'Manutenção de Ar Condicionado Split',
      category: 'Climatização',
      price: 150.00,
      images: [
        '/Ar1.jpeg',
        '/Ar2.jpeg'
      ],
      description: 'Limpeza preventiva completa, higienização de filtros, verificação de gás e teste de desempenho.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#111827', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', width: '100%', overflowX: 'hidden', margin: 0, padding: 0 }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#1f2937', borderBottom: '1px solid #374151', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', position: 'sticky', top: 0, zIndex: 100, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src="/logo.png" 
            alt="Logo KMA" 
            style={{ height: '36px', objectFit: 'contain' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#60a5fa' }}>
            KMA Comércio e Serviços
          </span>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Início</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Produtos</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Sobre</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>Contato</a>
          <div style={{ backgroundColor: '#2563eb', padding: '0.4rem 0.9rem', borderRadius: '0.5rem', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' }}>
            Carrinho ({cartCount})
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '4rem 1.5rem', backgroundColor: '#1f2937', width: '100%', borderBottom: '1px solid #374151', boxSizing: 'border-box' }}>
        <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
          <span style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)', color: '#60a5fa', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: '600' }}>
            Solução Corporativa • PDV
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: '800', margin: '1.2rem 0', lineHeight: '1.3', color: '#ffffff' }}>
            Soluções Completas em Tecnologia, Climatização e Reformas
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '850px', margin: '0 auto 2rem auto' }}>
            Segurança eletrônica, manutenção especializada, reformas e registros fotográficos para você e sua empresa.
          </p>
          <button style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '0.8rem 1.8rem', border: 'none', borderRadius: '0.5rem', fontWeight: '600', fontSize: '1rem', cursor: 'pointer' }}>
            Ver Catálogo de Serviços &rarr;
          </button>
        </div>
      </section>

      {/* Catálogo de Serviços */}
      <main style={{ width: '100%', padding: '3rem 2rem', boxSizing: 'border-box' }}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem', borderBottom: '1px solid #374151', paddingBottom: '0.75rem', textAlign: 'left' }}>
            Nossos Principais Serviços em Destaque
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%' }}>
            {itemsList.map((item) => (
              <div key={item.id} style={{ backgroundColor: '#1f2937', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid #374151', display: 'flex', flexDirection: 'column' }}>
                
                {/* Grelha de fotos com objectFit: contain para mostrar a imagem inteira sem cortes */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem', backgroundColor: '#030712', padding: '0.25rem' }}>
                  {item.images.map((imgSrc, index) => (
                    <div key={index} style={{ height: '180px', backgroundColor: '#090d16', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '0.25rem' }}>
                      <img 
                        src={imgSrc} 
                        alt={`${item.name} ${index + 1}`} 
                        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  ))}
                </div>

                {/* Informações do Cartão */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, textAlign: 'left' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#60a5fa', fontWeight: '600', marginBottom: '0.5rem' }}>
                    {item.category}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', marginTop: 0 }}>{item.name}</h3>
                  <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.5' }}>{item.description}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #374151', flexWrap: 'wrap', gap: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#4ade80' }}>
                      R$ {item.price.toFixed(2)}
                    </span>
                    <button 
                      onClick={() => setCartCount(cartCount + 1)}
                      style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '0.6rem 1.2rem', border: 'none', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer' }}
                    >
                      Contratar / Comprar
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1f2937', borderTop: '1px solid #374151', padding: '1.5rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.85rem', width: '100%', boxSizing: 'border-box' }}>
        <p>&copy; 2026 KMA Comércio e Serviços - Todos os direitos reservados.</p>
        <p style={{ marginTop: '0.25rem' }}>Sobral, Ceará</p>
      </footer>

    </div>
  );
}