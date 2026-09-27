# ✈️ Travel Planner

> **O mundo que eu quero viver.**

Um atlas pessoal de viagens desenvolvido em **React**, criado para transformar uma simples lista de destinos em uma experiência visual e interativa.

O projeto reúne **países, cidades, lugares específicos, experiências que quero viver, referências cinematográficas e destinos adicionados pelo usuário**, tudo organizado através de um mapa-múndi interativo.

A ideia central é simples: uma viagem não começa apenas quando você compra uma passagem. Ela também começa quando um lugar passa a fazer parte do seu imaginário.

---

## 🌍 Sobre o projeto

O Travel Planner nasceu como um projeto de desenvolvimento front-end, mas foi pensado como um produto pessoal.

Em vez de criar apenas uma lista tradicional de cidades ou um dashboard com cards, a proposta foi construir um **atlas pessoal**, onde cada país funciona como uma porta de entrada para uma coleção de lugares e experiências.

Por exemplo:

* 🇫🇷 **França**

  * Paris
  * arte e arquitetura
  * gastronomia
  * referências cinematográficas

* 🇨🇭 **Suíça**

  * Zermatt
  * St. Moritz
  * Alpes
  * neve e esportes de inverno

* 🇮🇹 **Itália**

  * Roma
  * Sicília
  * Costa Amalfitana
  * gastronomia e arquitetura

A intenção é que cada destino tenha **um significado próprio**, e não seja apenas mais um nome em uma lista.

---

## 🎯 Conceito

O projeto foi construído em torno de quatro ideias principais:

### 01 — O mapa como protagonista

O mapa é o principal ponto de navegação da aplicação.

Em vez de apresentar primeiro uma grade de cards, o usuário encontra um mapa-múndi com os países presentes no atlas.

Cada país possui um único marcador.

Ao selecionar um país, é possível descobrir os lugares associados a ele.

---

### 02 — País → Lugar → Experiência

A organização principal do projeto segue uma hierarquia:

```text
País
 ├── Lugar
 │    ├── Experiência
 │    ├── Experiência
 │    └── Experiência
 │
 └── Referências
      └── Filmes
```

Isso permite representar diferentes tipos de destino:

* cidades
* vilas
* regiões
* montanhas
* pontos turísticos
* locais específicos

A estrutura não fica limitada a "uma cidade por país".

---

### 03 — "Quero viver isso"

Cada lugar pode possuir experiências específicas.

Não é apenas:

> "Quero conhecer Paris."

A proposta é responder:

> **O que exatamente eu quero viver quando estiver lá?**

Por isso, os lugares podem possuir experiências como:

* visitar determinado monumento;
* experimentar uma comida específica;
* conhecer um café;
* esquiar em uma determinada região;
* caminhar por uma cidade;
* conhecer uma paisagem;
* visitar um local relacionado a um filme.

Essa decisão transforma o projeto de uma lista de destinos em um registro de experiências futuras.

---

### 04 — Cinema como parte da viagem

Filmes também fazem parte do atlas.

Alguns lugares ganham significado por causa de filmes, cenas ou histórias associadas a eles.

Por isso, o projeto possui uma seção de **referências cinematográficas**, permitindo relacionar um filme diretamente a um destino.

Exemplos incluem referências como:

* *Casablanca* → Casablanca
* *Cidade de Deus* → Rio de Janeiro
* *District 9* → África do Sul
* *The Hunt* → Dinamarca
* *Crazy Rich Asians* → Singapura

A referência não funciona apenas como decoração: ela representa uma das formas pelas quais aquele lugar entrou no imaginário pessoal do usuário.

---

# 🗺️ Funcionalidades

## 🌎 Mapa-múndi interativo

O projeto utiliza **React Leaflet** para renderizar um mapa interativo.

É possível:

* navegar pelo mapa;
* aplicar zoom;
* selecionar países;
* visualizar os países presentes no atlas;
* abrir popups;
* acessar os detalhes de cada país;
* visualizar destinos adicionados pelo usuário.

Cada país possui **um único marcador**, evitando transformar o mapa em uma grande quantidade de pins.

---

## 🏳️ Marcadores por país

Os marcadores utilizam a bandeira correspondente ao código ISO do país.

Exemplo:

```text
CH → 🇨🇭 Suíça
FR → 🇫🇷 França
IT → 🇮🇹 Itália
MA → 🇲🇦 Marrocos
BR → 🇧🇷 Brasil
```

As coordenadas dos países são utilizadas para posicionar os marcadores em seus respectivos territórios.

---

## 📍 Painel de país

Ao selecionar um país no mapa, a aplicação apresenta um painel com os lugares relacionados àquele país.

Isso permite navegar pela estrutura:

```text
Mapa
 ↓
País
 ↓
Lugar
 ↓
Experiências
```

---

## ✈️ Destinos personalizados

Além dos destinos previamente cadastrados, o usuário pode adicionar seus próprios destinos.

O formulário permite registrar informações como:

* país;
* cidade;
* descrição;
* experiência;
* imagem;
* filme relacionado.

Esses dados são armazenados localmente no navegador.

---

## 🎬 Busca de filmes

A aplicação possui integração com a **TMDB API** para pesquisar filmes.

Ao adicionar uma referência cinematográfica, o usuário pode pesquisar pelo:

* título;
* ano.

A aplicação retorna informações como:

* título;
* ano;
* pôster;
* sinopse;
* identificador do filme.

Essas informações são utilizadas para criar a referência cinematográfica dentro do destino.

---

## 🖼️ Imagens

O projeto trabalha com duas estratégias diferentes para imagens.

### Imagens curatoriais

Os destinos principais possuem imagens selecionadas especificamente para representar cada lugar ou experiência.

Essas imagens ficam dentro da pasta:

```text
public/
```

e são referenciadas diretamente pela aplicação.

Exemplo:

```js
imagem: "/zermatt.jpg"
```

### Imagens para destinos adicionados

Para destinos adicionados pelo usuário, o projeto utiliza a **Pexels API** para buscar imagens automaticamente.

A busca utiliza combinações relacionadas à cidade e ao país, tentando encontrar imagens de:

* skyline;
* cityscape;
* aerial view;
* panorama;
* landmarks.

---

## 🎞️ Referências cinematográficas

Cada referência pode apresentar:

* título;
* ano;
* pôster;
* sinopse;
* motivo da relação com o destino.

Isso permite que o usuário registre não apenas **qual filme está relacionado ao lugar**, mas também **por que aquele filme faz parte da viagem imaginada**.

---

## 💾 Persistência com LocalStorage

Os destinos adicionados pelo usuário são armazenados utilizando:

```js
localStorage
```

A chave utilizada pela aplicação é:

```text
travel-planner-destinos
```

Isso permite que os destinos continuem disponíveis depois que o navegador for atualizado.

O projeto não possui backend ou banco de dados nesta versão.

---

# 🎨 Design e identidade visual

Uma das principais decisões do projeto foi evitar a aparência tradicional de aplicações de planejamento de viagem.

A interface foi pensada como um **atlas editorial e cinematográfico**, em vez de um dashboard.

### Direção visual

A identidade utiliza:

* azul claro;
* tons de azul profundo;
* tons creme;
* fundo semelhante a papel;
* tipografia editorial;
* bastante espaço negativo;
* imagens grandes;
* composição assimétrica;
* elementos minimalistas.

A combinação tipográfica utiliza:

* **Cormorant Garamond** para títulos e elementos editoriais;
* **DM Sans** para textos e elementos funcionais.

---

## 🎞️ Inspirações

A estética do projeto foi influenciada pela ideia de:

* atlas de viagem;
* revistas editoriais;
* fotografia cinematográfica;
* pôsteres de filmes;
* mapas antigos reinterpretados de forma contemporânea;
* diários pessoais de viagem.

A intenção foi criar uma interface que parecesse menos um "aplicativo de turismo" e mais um **arquivo pessoal de lugares que ainda quero conhecer**.

---

# 🧠 Principais decisões de produto

## Por que país em vez de cidade?

Uma decisão importante foi abandonar uma estrutura baseada apenas em cidades.

Em vez de:

```text
Paris
Roma
Tóquio
Nova York
```

o projeto trabalha com:

```text
França
 ├── Paris
 └── ...

Itália
 ├── Roma
 ├── Sicília
 └── ...

Japão
 ├── Tóquio
 ├── Kyoto
 └── ...
```

Isso permite representar países com múltiplos destinos e diferentes tipos de lugares.

---

## Por que um marcador por país?

Uma grande quantidade de pins deixaria o mapa visualmente poluído.

Por isso, o mapa representa **um país por vez**.

O usuário primeiro escolhe o país e depois explora os lugares daquele território.

Essa decisão mantém o mapa limpo e reforça a hierarquia de navegação.

---

## Por que filmes?

Viagens também são construídas através de referências culturais.

Um filme pode ser o motivo pelo qual uma cidade chama atenção, uma música pode definir a atmosfera de uma viagem e uma história pode transformar um lugar desconhecido em algo familiar.

Por isso, referências culturais fazem parte da estrutura do destino.

---

# 🛠️ Tecnologias

## Front-end

* **React**
* **JavaScript**
* **Vite**
* **React Router**
* **React Leaflet**
* **Leaflet**
* **CSS**
* **Tailwind CSS**

## APIs e serviços

### 🗺️ OpenStreetMap

Utilizado como fonte dos tiles do mapa através do Leaflet.

### 🎬 TMDB API

Utilizada para pesquisar filmes e obter:

* título;
* ano;
* pôster;
* sinopse;
* ID do filme.

### 📸 Pexels API

Utilizada para buscar imagens automaticamente para destinos adicionados pelo usuário.

### 🌤️ Open-Meteo Geocoding API

Utilizada para buscar informações geográficas de cidades.

### 🌎 countries-list

Biblioteca utilizada para trabalhar com informações de países e continentes.

### 🚫 Foursquare

O projeto chegou a utilizar uma integração com Foursquare durante seu desenvolvimento, mas essa solução foi removida posteriormente.

A versão final não depende do Foursquare.

---

# 🧩 Arquitetura

A estrutura foi organizada separando páginas, componentes, serviços e dados.

```text
src/
│
├── components/
│   ├── Header.jsx
│   └── WorldMap.jsx
│
├── data/
│   └── paises.js
│
├── pages/
│   ├── Home.jsx
│   ├── Destinos.jsx
│   ├── DestinoDetalhes.jsx
│   └── AdicionarDestino.jsx
│
├── services/
│   ├── countries.js
│   ├── destinos.js
│   ├── geocoding.js
│   ├── images.js
│   └── movies.js
│
├── App.jsx
└── main.jsx
```

A separação de responsabilidades permite que integrações externas não fiquem misturadas diretamente com a interface.

Por exemplo:

```text
services/movies.js
        ↓
TMDB API
        ↓
AdicionarDestino.jsx
        ↓
Destino salvo
```

---

# 🔌 Integrações externas

## TMDB

A busca de filmes é isolada em:

```text
src/services/movies.js
```

Isso permite que a página de criação de destino trabalhe com uma função simples:

```js
buscarFilme(titulo, ano)
```

sem precisar conhecer diretamente os detalhes da requisição HTTP.

---

## Pexels

A integração de imagens segue a mesma ideia:

```text
src/services/images.js
```

A página solicita uma imagem para uma cidade e recebe os resultados da API.

Isso mantém a lógica da API separada da apresentação.

---

# 🔐 Variáveis de ambiente

As chaves das APIs não devem ser colocadas diretamente no código.

O projeto utiliza variáveis de ambiente através do Vite.

Exemplo:

```env
VITE_TMDB_API_KEY=sua_chave
VITE_PEXELS_API_KEY=sua_chave
```

O arquivo `.env` deve permanecer fora do controle de versão quando contiver chaves reais.

---

# 🚀 Como executar

## 1. Clone o projeto

```bash
git clone <URL_DO_REPOSITORIO>
```

## 2. Entre na pasta

```bash
cd travel-planner
```

## 3. Instale as dependências

```bash
npm install
```

## 4. Configure as variáveis de ambiente

Crie um arquivo:

```text
.env
```

e adicione:

```env
VITE_TMDB_API_KEY=sua_chave_tmdb
VITE_PEXELS_API_KEY=sua_chave_pexels
```

## 5. Execute o projeto

```bash
npm run dev
```

O Vite disponibilizará a aplicação localmente.

---

# 📦 Build

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build:

```bash
npm run preview
```

---

# ☁️ Deploy

O projeto foi estruturado para funcionar como uma aplicação front-end estática e pode ser publicado em serviços como:

* Vercel

A aplicação não depende de um servidor próprio nesta versão.

---

# 📱 Responsividade

A interface foi pensada para diferentes tamanhos de tela.

O layout possui ajustes específicos para:

* desktop;
* notebooks;
* tablets;
* dispositivos móveis.

O mapa, navegação, galerias e conteúdo editorial se reorganizam conforme a largura disponível.

---

# 🗂️ Dados curatoriais

Os destinos principais são armazenados em:

```text
src/data/paises.js
```

Essa estrutura permite cadastrar países, lugares, experiências e referências de maneira declarativa.

Exemplo simplificado:

```js
{
  id: 31,
  nome: "Marrocos",
  codigo: "MA",
  continente: "África",

  lugares: [
    {
      nome: "Casablanca",

      experiencias: [
        {
          titulo: "Visitar a Mesquita Hassan II",
          texto: "...",
          imagem: "/casablanca.jpg",
        },
        {
          titulo: "Conhecer o Rick's Café",
          texto: "...",
          imagem: "/casablanca.jpg",
        },
      ],
    },
  ],

  referencias: [
    {
      titulo: "Casablanca",
      tipo: "Filme · Referência cinematográfica",
      imagem: "/casablanca.jpg",
    },
  ],
}
```

A estrutura foi pensada para que novos países e lugares possam ser adicionados sem precisar alterar a lógica principal das páginas.

---

# 🧭 Fluxo principal da aplicação

```text
                    HOME
                      │
                      ▼
               MAPA-MÚNDI
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
      PAÍS CURADO          DESTINO DO USUÁRIO
          │                       │
          ▼                       ▼
       LUGARES                 CIDADE
          │                       │
          ▼                       ▼
    EXPERIÊNCIAS             EXPERIÊNCIA
          │                       │
          └───────────┬───────────┘
                      ▼
              REFERÊNCIAS
                      │
                      ▼
                 FILMES
```

---

# 📚 O que este projeto demonstra

Além da interface, o projeto foi desenvolvido para praticar conceitos importantes de desenvolvimento web:

* componentização em React;
* gerenciamento de estado;
* hooks;
* React Router;
* renderização condicional;
* listas e objetos;
* organização de dados;
* consumo de APIs REST;
* requisições HTTP com `fetch`;
* manipulação de JSON;
* variáveis de ambiente;
* integração com APIs externas;
* persistência com LocalStorage;
* mapas interativos;
* geolocalização;
* organização de serviços;
* responsividade;
* Git e commits semânticos;
* arquitetura básica de aplicações front-end.

---

# 🔮 Possíveis evoluções

A versão atual é propositalmente focada em front-end e experiência de usuário.

Algumas evoluções possíveis:

* autenticação de usuários;
* backend próprio;
* banco de dados;
* sincronização entre dispositivos;
* contas pessoais;
* edição e exclusão de destinos;
* favoritos;
* filtros por continente;
* filtros por tipo de experiência;
* pr
