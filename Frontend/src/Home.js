import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const EventCard = ({ imgSrc, imgAlt, title, description }) => (
  <div className="home__event">
    <img src={imgSrc} alt={imgAlt} className="home__event-image" />
    <div className="home__event-details">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Testimonial = ({ text, author }) => (
  <div className="home__testimonial">
    <p>"{text}"</p>
    <h4>- {author}</h4>
  </div>
);

const Home = () => {
  return (
    <div className="home__container">
      <header className="home__header">
        <h1>Bem Vindo ao Gerenciador de Eventos</h1>
      </header>

      <section className="home__recent-events" role="region" aria-labelledby="recent-events-heading">
        <h2 id="recent-events-heading">Eventos Recentes</h2>
        <div className="home__events-grid">
          <EventCard
            imgSrc="/img/natal.jpg"
            imgAlt="Imagem de um evento de Natal"
            title="Natal"
            description="A magia do natal é uma das coisas mais lindas que existe."
          />
          <EventCard
            imgSrc="/img/anonovo.jpg"
            imgAlt="Imagem de um evento de Ano Novo"
            title="Ano Novo"
            description="Ano novo é tempo de renovação de vidas."
          />
          <EventCard
            imgSrc="/img/carnaval.jpg"
            imgAlt="Imagem de um evento de Carnaval"
            title="Carnaval"
            description="Carnaval é o que faz de nós brasileiros."
          />
        </div>
      </section>

      <section className="home__testimonials" role="region" aria-labelledby="testimonials-heading">
        <img src="/img/evento.jpg" alt="Imagem de um evento" className="home__event-image" />
        <h2 id="testimonials-heading">O que dizem sobre nós</h2>
        <Testimonial
          text="O Gerenciador de Eventos facilitou muito a organização dos nossos eventos anuais. Recomendo!"
          author="Nathalia Silva"
        />
        <Testimonial
          text="Uma plataforma indispensável para quem precisa gerenciar múltiplos eventos."
          author="Joao Gomes"
        />
      </section>

      <section className="home__cta" role="region" aria-labelledby="cta-heading">
        <h2 id="cta-heading">Pronto para gerenciar seus eventos?</h2>
        <p>Junte-se a nós e comece a organizar seus eventos hoje mesmo!</p>
        <Link to="/register" aria-label="Cadastre-se agora">
          <button className="home__cta-button">Cadastre-se Agora</button>
        </Link>
      </section>

      
    </div>
  );
}

export default Home;

