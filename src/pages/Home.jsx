import { Link } from "react-router-dom"

const imagensHome = [
  {
    src: "/home1.JPG",
    alt: "Destino de viagem",
  },
  {
    src: "/home2.jpeg",
    alt: "Paisagem de viagem",
  },
  {
    src: "/home3.JPG",
    alt: "Cidade",
  },
  {
    src: "/home4.JPG",
    alt: "Paisagem",
  },
  {
    src: "/home5.JPG",
    alt: "Viagem",
  },
  {
    src: "/home6.JPG",
    alt: "Destino",
  },
  {
    src: "/home7.JPG",
    alt: "Paisagem",
  },
]

function Home() {
  return (
    <main className="home-page">

      <section className="home-hero">

        <div className="home-hero-copy">

          <p className="home-eyebrow">
            Travel Planner · Personal Atlas
          </p>

          <h1>
            O mundo que
            <br />
            eu quero viver.
          </h1>

          <p className="home-intro">
            Um atlas pessoal de lugares, experiências e referências
            que transformam uma viagem em algo maior do que apenas
            chegar a um destino.
          </p>

          <div className="home-actions">

            <Link
              to="/destinos"
              className="home-primary-link"
            >
              Explorar o atlas
              <span>→</span>
            </Link>

            <Link
              to="/adicionar-destino"
              className="home-secondary-link"
            >
              Adicionar um destino
            </Link>

          </div>

        </div>

        <div className="home-hero-gallery">

          <div className="home-gallery-main">
            <img
              src={imagensHome[0].src}
              alt={imagensHome[0].alt}
            />

            <div className="home-gallery-caption">
              <span>01</span>
              <p>O lugar começa<br />antes da viagem.</p>
            </div>
          </div>

          <div className="home-gallery-small home-gallery-small-one">
            <img
              src={imagensHome[1].src}
              alt={imagensHome[1].alt}
            />
          </div>

          <div className="home-gallery-small home-gallery-small-two">
            <img
              src={imagensHome[2].src}
              alt={imagensHome[2].alt}
            />
          </div>

        </div>

      </section>

      <section className="home-introduction">

        <div className="home-introduction-heading">

          <p className="home-eyebrow">
            O conceito
          </p>

          <h2>
            Não é só uma lista
            <br />
            de lugares.
          </h2>

        </div>

        <div className="home-introduction-text">

          <p>
            Cada país guarda lugares específicos, experiências que
            quero viver e referências que fizeram aquele destino
            ganhar algum significado para mim.
          </p>

          <p>
            O mapa é apenas o começo. O verdadeiro objetivo é construir
            uma coleção pessoal de lugares que eu quero conhecer,
            lembrar e, um dia, viver.
          </p>

        </div>

      </section>

      <section className="home-collage">

        <div className="home-collage-image home-collage-large">
          <img
            src={imagensHome[3].src}
            alt={imagensHome[3].alt}
          />
        </div>

        <div className="home-collage-image home-collage-medium">
          <img
            src={imagensHome[4].src}
            alt={imagensHome[4].alt}
          />
        </div>

        <div className="home-collage-image home-collage-small">
          <img
            src={imagensHome[5].src}
            alt={imagensHome[5].alt}
          />
        </div>

        <div className="home-collage-note">
          <span>02</span>

          <p>
            Uma viagem também é feita das pequenas coisas:
            uma rua, um café, uma noite fria, uma paisagem.
          </p>
        </div>

      </section>

      <section className="home-guide">

        <div className="home-guide-heading">

          <p className="home-eyebrow">
            Como funciona
          </p>

          <h2>
            Um atlas para
            <br />
            imaginar o futuro.
          </h2>

        </div>

        <div className="home-guide-grid">

          <article className="home-guide-item">
            <span>01</span>

            <h3>
              Explore o mapa
            </h3>

            <p>
              Os países adicionados aparecem no atlas. Escolha um deles
              para descobrir os lugares que fazem parte daquela viagem.
            </p>
          </article>

          <article className="home-guide-item">
            <span>02</span>

            <h3>
              Descubra a experiência
            </h3>

            <p>
              Cada lugar vai além do nome. Aqui ficam as coisas que
              realmente quero fazer, conhecer e sentir quando estiver lá.
            </p>
          </article>

          <article className="home-guide-item">
            <span>03</span>

            <h3>
              Veja as referências
            </h3>

            <p>
              Filmes, cenas, músicas, histórias e outras referências
              pessoais também fazem parte da maneira como imagino cada destino.
            </p>
          </article>

          <article className="home-guide-item">
            <span>04</span>

            <h3>
              Construa seu atlas
            </h3>

            <p>
              Novos destinos podem ser adicionados ao longo do tempo,
              transformando o mapa em um registro vivo dos lugares que quero conhecer.
            </p>
          </article>

        </div>

      </section>

      <section className="home-final-gallery">

        <div className="home-final-gallery-image">
          <img
            src={imagensHome[6].src}
            alt={imagensHome[6].alt}
          />
        </div>

        <div className="home-final-content">

          <p className="home-eyebrow">
            Comece por onde quiser
          </p>

          <h2>
            Talvez a próxima viagem
            <br />
            comece aqui.
          </h2>

          <Link
            to="/destinos"
            className="home-closing-link"
          >
            Abrir o mapa
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Home