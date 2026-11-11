import React from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, MapPin, Clock3, ArrowUpRight, Mountain, ShoppingBasket, Coffee, Sparkles, CheckCircle2, Utensils } from 'lucide-react';
import './styles.css';
import bebidasImage from './assets/bebidas-card.jpg';
import comidaImage from './assets/comida-card.jpg';

const CONFIG = {
  endereco: '(Área Rural), Major Vieira - SC, CEP 89480-000',
  horario: 'Horário comercial'
};

const produtos = [
  { icon: ShoppingBasket, title: 'Mercearia', desc: 'Bebidas para todos os momentos.', itens: ['Cerveja em garrafa e lata', 'Refrigerantes', 'Água mineral com e sem gás', 'Sucos de caixinha e naturais', 'Cachaça'] },
  { icon: Utensils, title: 'Comida', desc: 'Produtos e sabores para o dia a dia.', itens: ['Carnes de produtores locais', 'Milho e ovos de produtores da região', 'Salgadinhos e bolachas', 'Café e leite em pó', 'Arroz e pão de forma'], extra: 'E muito mais opções esperando por você!' },
];

function ContactButton({ children, href, secondary = false }) {
  return <a className={`button ${secondary ? 'button-outline' : ''}`} href={href || '#contato'} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}<ArrowUpRight size={17}/></a>;
}

function App() {
  return (
    <>
      <header className="header">
        <a href="#inicio" className="brand" aria-label="Pé da Serra - início">
          <span className="brand-mark"><Mountain size={31}/></span>
          <span><strong>PÉ DA SERRA</strong><small>BAR E MERCEARIA</small></span>
        </a>
        <nav className="nav">
          <a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#produtos">Produtos</a><a href="#localizacao">Localização</a>
        </nav>
        <a className="mobile-menu" href="#localizacao" aria-label="Ir para localização"><Menu/></a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-shape shape-one"></div><div className="hero-shape shape-two"></div>
          <div className="hero-content">
            <span className="eyebrow"><Sparkles size={15}/> SEJA BEM-VINDO</span>
            <h1>Tradição e<br/><em>acolhimento</em><br/>perto de você.</h1>
            <p>Conheça o Bar e Mercearia Pé da Serra, um ponto de encontro em Major Vieira.</p>
            <div className="hero-actions"><ContactButton href="#sobre">Conheça o Pé da Serra</ContactButton></div>
            <div className="hero-note"><span className="note-dot"></span> Bar e mercearia • Major Vieira, SC</div>
          </div>
          <div className="hero-art" aria-label="Ilustração decorativa de montanhas">
            <div className="sun"></div><div className="mountain mountain-back"></div><div className="mountain mountain-front"></div>
            <div className="art-label"><Mountain size={23}/><span>Um lugar para se sentir bem</span></div>
          </div>
          <div className="hero-bottom"><span>DESCUBRA O PÉ DA SERRA</span><span className="line"></span><span>01 / 05</span></div>
        </section>

        <section className="intro section" id="sobre">
          <div className="section-kicker">UM POUCO SOBRE NÓS</div>
          <div className="intro-grid">
            <h2>Mais do que um lugar.<br/><em>Um ponto de encontro.</em></h2>
            <div><p>Há mais de 25 anos, o <strong>Bar e Mercearia Pé da Serra</strong> faz parte do dia a dia da comunidade de Major Vieira – SC. Mais do que um estabelecimento, é um lugar de encontro, convivência e proximidade com as pessoas da região.</p><p>Seja bem-vindo ao Pé da Serra!</p></div>
          </div>
        </section>

        <section className="products section" id="produtos">
          <div className="section-heading"><div><div className="section-kicker">O QUE VOCÊ ENCONTRA</div><h2>Conheça nossas <em>opções</em></h2></div></div>
          <div className="product-grid">{produtos.map(({icon: Icon, title, desc, itens, extra}, i) => <article className="product-card" key={title}><img className="product-card-image" src={i === 0 ? bebidasImage : comidaImage} alt={i === 0 ? 'Cervejas e bebidas variadas' : 'Carnes e produtos alimentícios'} /><div className="product-card-content"><div className="product-card-head"><div className={`product-icon icon-${i}`}><Icon size={27}/></div><span className="card-number">0{i+1}</span><div><h3>{title}</h3><p>{desc}</p></div></div><ul className="product-items">{itens.map(item => <li key={item}><CheckCircle2 size={16}/><span>{item}</span></li>)}</ul>{extra && <p className="product-extra">{extra}</p>}<a href="#localizacao" className="text-link">Saiba mais <ArrowUpRight size={16}/></a></div></article>)}</div>
        </section>

        <section className="location section" id="localizacao">
          <div className="section-heading"><div><div className="section-kicker">VENHA NOS VISITAR</div><h2>Estamos por <em>aqui.</em></h2></div><p>Confira as informações de localização e funcionamento.</p></div>
          <div className="location-grid">
            <article className="info-card"><span className="info-icon"><MapPin/></span><div><h3>Localização</h3><p>{CONFIG.endereco}</p></div></article>
            <article className="info-card"><span className="info-icon"><Clock3/></span><div><h3>Horário de funcionamento</h3><p>{CONFIG.horario}</p></div></article>
            <div className="map-embed-wrap">
              <iframe
                className="map-embed"
                title="Localização do Recanto Pé da Serra (Bar da Tereza)"
                src="https://www.google.com/maps?output=embed&q=place_id:ChIJieFfrdw155QRvH2XTYv6gpY"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a className="map-open-link" href="https://www.google.com/maps/search/?api=1&query=Recanto%20P%C3%A9%20da%20Serra%20(Bar%20da%20Tereza)%2C%20Major%20Vieira%20SC&query_place_id=ChIJieFfrdw155QRvH2XTYv6gpY" target="_blank" rel="noreferrer">Abrir rota no Google Maps <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><a href="#inicio" className="brand footer-brand"><span className="brand-mark"><Mountain size={28}/></span><span><strong>PÉ DA SERRA</strong><small>BAR E MERCEARIA</small></span></a><p>Presença digital feita para aproximar.</p><span className="copyright">© 2026 Pé da Serra</span></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);