/* =========================================================================
   ATELIÊ INTERATIVO — script.js
   Portefólio UI/UX — Cíntia Veiga | CESAE Digital

   Organização (para facilitar a defesa do código na avaliação):
     1. DADOS          -> conteúdo de cada secção, em PT e EN
     2. FUNÇÕES        -> construção e manipulação do DOM
     3. ACESSIBILIDADE -> guia inicial, tamanho de texto, modo escuro, idioma
     4. EVENTOS        -> addEventListener nos objetos e nos controlos
     5. INICIALIZAÇÃO
   ========================================================================= */


/* =========================================================================
   1. DADOS
   Cada campo de texto é um object literal com duas chaves — "pt" e "en" —
   para que a mesma estrutura sirva os dois idiomas sem duplicar a lógica.

   Para adicionar uma secção nova no futuro: acrescenta aqui um objeto com
   "id", "etiqueta" e "titulo" (obrigatórios) e depois "paragrafos", "lista",
   "cartoes" e/ou "links" (conforme o conteúdo que precisares), e cria o
   hotspot correspondente no index.html com o mesmo "data-secao".
   ========================================================================= */
const secoes = [
  {
    id: "quem-sou-eu",
    etiqueta: { pt: "Quem sou eu", en: "About me" },
    titulo: { pt: "Quem sou eu 👋", en: "Who I am 👋" },
    paragrafos: {
      pt: [
        "Olá! Sou Cíntia Veiga, Designer UI/UX com uma base sólida em tecnologia e uma paixão por criar experiências digitais que fazem sentido para as pessoas.",
        "A minha ligação com a tecnologia começou há mais de uma década, quando iniciei a minha carreira na área de suporte e análise de sistemas, participando em projetos de grande dimensão para a Petrobras, através de empresas como Atos Origin, Accenture, Spassu Tecnologia, CPM Braxis Outsourcing e Spread Teleinformática.",
        "Sou licenciada em Ciências da Computação, formação que me proporcionou uma visão estruturada sobre desenvolvimento de software, arquitetura de sistemas, lógica computacional e tecnologia. Esta base permite-me compreender não apenas a vertente visual de uma interface, mas também os processos e limitações técnicas que fazem parte do desenvolvimento de produtos digitais.",
        "Com o objetivo de unir tecnologia, criatividade e design centrado no utilizador, frequento atualmente a formação de UI/UX Design no CESAE Digital, onde aprofundo metodologias como Design Thinking, User Research, Arquitetura da Informação, Wireframing, Prototipagem em Figma, Design Systems, Testes de Usabilidade e Design de Interfaces."
      ],
      en: [
        "Hi! I'm Cíntia Veiga, a UI/UX Designer with a solid foundation in technology and a passion for creating digital experiences that make sense for people.",
        "My relationship with technology began more than a decade ago, when I started my career in systems support and analysis, taking part in large-scale projects for Petrobras through companies such as Atos Origin, Accenture, Spassu Tecnologia, CPM Braxis Outsourcing and Spread Teleinformática.",
        "I hold a degree in Computer Science, which gave me a structured view of software development, systems architecture, computational logic and technology. This foundation lets me understand not just the visual side of an interface, but also the processes and technical constraints behind building digital products.",
        "With the goal of bringing together technology, creativity and user-centred design, I'm currently completing a UI/UX Design programme at CESAE Digital, where I'm deepening my knowledge of methodologies such as Design Thinking, User Research, Information Architecture, Wireframing, Figma Prototyping, Design Systems, Usability Testing and Interface Design."
      ]
    }
  },
  {
    id: "processo",
    etiqueta: { pt: "Processo", en: "Process" },
    titulo: { pt: "Este projeto e a minha formação", en: "This project and my background" },
    paragrafos: {
      pt: [
        "Este portefólio interativo é, em si, um projeto de curso — e também a minha forma preferida de mostrar como trabalho. Cada objeto desta sala foi pensado, desenhado e codificado por mim, do wireframe ao HTML, CSS e JavaScript puro, sem frameworks: investigação, arquitetura da informação, prototipagem e, por fim, desenvolvimento front-end do resultado final.",
        "Nasceu da formação em UI/UX Design que frequento na CESAE Digital, onde tenho vindo a aprofundar metodologias como Design Thinking, User Research, Arquitetura da Informação, Wireframing, Prototipagem em Figma, Design Systems, Testes de Usabilidade e Design de Interfaces.",
        "Antes disso, construí uma base sólida em tecnologia e gestão:"
      ],
      en: [
        "This interactive portfolio is, in itself, a coursework project — and also my favourite way to show how I work. Every object in this room was thought through, designed and coded by me, from wireframe to plain HTML, CSS and JavaScript, no frameworks: research, information architecture, prototyping and, finally, front-end development of the final result.",
        "It grew out of the UI/UX Design programme I'm attending at CESAE Digital, where I've been deepening methodologies such as Design Thinking, User Research, Information Architecture, Wireframing, Figma Prototyping, Design Systems, Usability Testing and Interface Design.",
        "Before that, I built a solid foundation in technology and management:"
      ]
    },
    lista: {
      pt: [
        "Licenciatura em Ciências da Computação",
        "Microsoft Certified Professional",
        "ITIL Foundation",
        "Scrum Fundamentals",
        "Gestão de Projetos (PMP)"
      ],
      en: [
        "Bachelor's Degree in Computer Science",
        "Microsoft Certified Professional",
        "ITIL Foundation",
        "Scrum Fundamentals",
        "Project Management (PMP)"
      ]
    }
  },
  {
    id: "competencias",
    etiqueta: { pt: "Competências", en: "Skills" },
    titulo: { pt: "O que aprendi até aqui", en: "What I've learned so far" },
    cartoes: {
      pt: [
        { titulo: "Figma", texto: "Wireframes, protótipos, Auto Layout, Design Systems" },
        { titulo: "HTML & CSS", texto: "Layouts responsivos, Flexbox, Grid" },
        { titulo: "JavaScript", texto: "DOM, eventos, arrays e objetos" },
        { titulo: "Identidade Visual", texto: "Paletas, tipografia, manuais de marca" },
        { titulo: "Certificações Profissionais", texto: "Microsoft Certified Professional · ITIL Foundation · Scrum Fundamentals · Gestão de Projetos (PMP)" }
      ],
      en: [
        { titulo: "Figma", texto: "Wireframes, prototypes, Auto Layout, Design Systems" },
        { titulo: "HTML & CSS", texto: "Responsive layouts, Flexbox, Grid" },
        { titulo: "JavaScript", texto: "DOM, events, arrays and objects" },
        { titulo: "Visual Identity", texto: "Palettes, typography, brand manuals" },
        { titulo: "Professional Certifications", texto: "Microsoft Certified Professional · ITIL Foundation · Scrum Fundamentals · Project Management (PMP)" }
      ]
    },
    icones: [
      { iniciais: "VS", nome: "VS Code", cor: "#7C8FA6" },
      { iniciais: "Fi", nome: "Figma", cor: "#B97A5D" },
      { iniciais: "Ai", nome: "Illustrator", cor: "#D9A94E" },
      { iniciais: "Wp", nome: "WordPress", cor: "#8FA07E" }
    ]
  },
  {
    id: "curriculum",
    etiqueta: { pt: "Curriculum", en: "Résumé" },
    titulo: { pt: "O meu percurso, em resumo", en: "My path, in summary" },
    paragrafos: {
      pt: ["Em breve, aqui: o resumo do meu currículo. 🌿"],
      en: ["Coming soon: my résumé summary. 🌿"]
    }
  },
  {
    id: "contacto",
    etiqueta: { pt: "Contacto", en: "Contact" },
    titulo: { pt: "Vamos falar", en: "Let's talk" },
    paragrafos: {
      pt: [
        "Toda boa experiência começa com uma conversa. Se acredita que posso contribuir para o seu projeto ou equipa, entre em contacto. Ficarei feliz em conhecer os seus objetivos e explorar novas oportunidades."
      ],
      en: [
        "Every good experience starts with a conversation. If you believe I could contribute to your project or team, get in touch. I'd be glad to hear about your goals and explore new opportunities."
      ]
    },
    links: [
      { texto: "cintiav.pt@gmail.com", url: "mailto:cintiav.pt@gmail.com", icone: "email" },
      { texto: "LinkedIn — /in/cintia-veiga", url: "https://www.linkedin.com/in/cintia-veiga", icone: "linkedin" },
      { texto: "GitHub — /CintiaVeiga", url: "https://github.com/CintiaVeiga", icone: "github" },
      { texto: "WhatsApp — +351 926 408 069", url: "https://wa.me/351926408069", icone: "whatsapp" }
    ]
  }
];

const textosInterface = {
  pt: {
    guiaTitulo: "Olá, que bom ter-te por aqui! 👋",
    guiaTexto: "Obrigada por teres chegado até ao meu ateliê. Este é o meu portefólio interativo: começa pelo portátil para \"Quem sou eu\", depois o caderno para o \"Processo\", os óculos para as \"Competências\" e por fim a caneca para o \"Contacto\". Vai um passarinho a indicar-te o caminho, passo a passo. 🐦",
    guiaBotao: "Entendi, vamos explorar",
    rodape: "Feito à mão (e a código) por Cíntia · Projeto académico CESAE Digital",
    controloTexto: "Texto maior",
    controloTema: "Modo escuro",
    botaoIdioma: "English",
    contactoLabel: "Contacto",
    fecharModal: "Fechar",
    carregamentoTexto: "a preparar o ateliê…",
    rodaTexto: "Vira o telemóvel — melhor experiência em modo horizontal"
  },
  en: {
    guiaTitulo: "Hi, so glad you're here! 👋",
    guiaTexto: "Thank you for stopping by my studio. This is my interactive portfolio: start with the laptop for \"About me\", then the notebook for \"Process\", the glasses for \"Skills\" and finally the mug for \"Contact\". A little bird will guide you along the way, step by step. 🐦",
    guiaBotao: "Got it, let's explore",
    rodape: "Handcrafted (and hand-coded) by Cíntia · CESAE Digital academic project",
    controloTexto: "Larger text",
    controloTema: "Dark mode",
    botaoIdioma: "Português",
    contactoLabel: "Contact",
    fecharModal: "Close",
    carregamentoTexto: "setting up the studio…",
    rodaTexto: "Rotate your phone — best experience in landscape mode"
  }
};

let idiomaAtual = "pt"; // estado atual do idioma; alterado pela função alternarIdioma()

/* ícones (SVG inline) usados nos links de contacto — mesmo estilo dos ícones da barra lateral */
const iconesContacto = {
  email: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2 7.1 6.2a1 1 0 0 0 1 0L19.6 7H4.4Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.98 1.83-2.02 3.77-2.02 4.03 0 4.78 2.55 4.78 5.87V21h-4v-5.98c0-1.42-.03-3.25-2.02-3.25-2.02 0-2.33 1.5-2.33 3.15V21h-4V9Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.47.1 2.73.65.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12.04 2c-5.51 0-9.99 4.48-9.99 9.99 0 1.76.46 3.49 1.34 5.01L2 22l5.13-1.35c1.46.8 3.1 1.22 4.91 1.22 5.51 0 9.99-4.48 9.99-9.99C22.03 6.48 17.55 2 12.04 2zm0 18.29c-1.6 0-3.16-.43-4.52-1.24l-.32-.19-3.36.88.9-3.28-.21-.34a8.26 8.26 0 0 1-1.27-4.4c0-4.58 3.73-8.3 8.31-8.3 2.22 0 4.3.86 5.87 2.43a8.25 8.25 0 0 1 2.43 5.87c0 4.58-3.73 8.3-8.31 8.3zm4.56-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.12-.17.25-.65.81-.8.97-.15.16-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.16 1.75 2.68 4.25 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28z"/></svg>'
};


/* =========================================================================
   2. FUNÇÕES
   ========================================================================= */
function obterSecaoPorId(idProcurado) {
  for (const secao of secoes) {
    if (secao.id === idProcurado) {
      return secao;
    }
  }
  return null;
}

function construirConteudoDaSecao(secao) {
  const container = document.createElement("div");

  const etiqueta = document.createElement("span");
  etiqueta.className = "etiqueta";
  etiqueta.textContent = secao.etiqueta[idiomaAtual];
  container.appendChild(etiqueta);

  const titulo = document.createElement("h2");
  titulo.id = "modal-titulo";
  titulo.textContent = secao.titulo[idiomaAtual];
  container.appendChild(titulo);

  // foto em destaque, centrada, com animação de entrada — reconstruída (e reanimada) sempre que o modal abre
  if (secao.foto) {
    const foto = document.createElement("img");
    foto.className = "modal__foto";
    foto.src = secao.foto.src;
    foto.alt = secao.foto.alt || "";
    container.appendChild(foto);
  }

  if (secao.paragrafos) {
    for (const textoParagrafo of secao.paragrafos[idiomaAtual]) {
      const p = document.createElement("p");
      p.textContent = textoParagrafo;
      container.appendChild(p);
    }
  }

  if (secao.lista) {
    const ul = document.createElement("ul");
    for (const itemTexto of secao.lista[idiomaAtual]) {
      const li = document.createElement("li");
      li.textContent = itemTexto;
      ul.appendChild(li);
    }
    container.appendChild(ul);
  }

  if (secao.cartoes) {
    const grelha = document.createElement("div");
    grelha.className = "grelha-cartoes";
    for (const item of secao.cartoes[idiomaAtual]) {
      const cartao = document.createElement("div");
      cartao.className = "cartao";

      const h3 = document.createElement("h3");
      h3.textContent = item.titulo;

      const p = document.createElement("p");
      p.textContent = item.texto;

      cartao.appendChild(h3);
      cartao.appendChild(p);
      grelha.appendChild(cartao);
    }
    container.appendChild(grelha);
  }

  // badges de ferramentas (VS Code, Figma, Illustrator, WordPress...)
  if (secao.icones) {
    const linha = document.createElement("div");
    linha.className = "linha-icones";
    for (const ferramenta of secao.icones) {
      const badge = document.createElement("div");
      badge.className = "badge-ferramenta";

      const circulo = document.createElement("span");
      circulo.className = "badge-ferramenta__circulo";
      circulo.style.background = ferramenta.cor;
      circulo.textContent = ferramenta.iniciais;

      const nome = document.createElement("span");
      nome.className = "badge-ferramenta__nome";
      nome.textContent = ferramenta.nome;

      badge.appendChild(circulo);
      badge.appendChild(nome);
      linha.appendChild(badge);
    }
    container.appendChild(linha);
  }

  // links de contacto (email, LinkedIn, GitHub...)
  if (secao.links) {
    const lista = document.createElement("ul");
    lista.className = "lista-contactos";
    for (const link of secao.links) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.url;
      if (link.icone && iconesContacto[link.icone]) {
        const icone = document.createElement("span");
        icone.className = "lista-contactos__icone";
        icone.setAttribute("aria-hidden", "true");
        icone.innerHTML = iconesContacto[link.icone];
        a.appendChild(icone);
      }
      const texto = document.createElement("span");
      texto.textContent = link.texto;
      a.appendChild(texto);
      if (link.url.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      li.appendChild(a);
      lista.appendChild(li);
    }
    container.appendChild(lista);
  }

  return container;
}

let secaoAbertaAtual = null;

function abrirModal(idSecao) {
  const secao = obterSecaoPorId(idSecao);
  if (!secao) return;

  secaoAbertaAtual = idSecao;

  const modalConteudo = document.querySelector("#modal-conteudo");
  modalConteudo.innerHTML = "";
  modalConteudo.appendChild(construirConteudoDaSecao(secao));

  document.querySelector("#modal-fundo").classList.add("aberto");
  document.querySelector("#modal-fechar").focus();
}

function fecharModal() {
  document.querySelector("#modal-fundo").classList.remove("aberto");
  secaoAbertaAtual = null;
}

function mostrarLegenda(elementoAlvo, texto) {
  const palco = elementoAlvo.closest(".palco");
  if (!palco) return; // objetos fora da cena do ateliê (ex: a capa) não têm balão de legenda

  const legenda = document.querySelector("#legenda");
  const posicao = elementoAlvo.getBoundingClientRect();
  const posicaoPalco = palco.getBoundingClientRect();

  legenda.textContent = texto;
  legenda.style.left = posicao.left - posicaoPalco.left + posicao.width / 2 + "px";
  legenda.style.top = posicao.top - posicaoPalco.top + "px";
  legenda.classList.add("visivel");
}

function esconderLegenda() {
  document.querySelector("#legenda").classList.remove("visivel");
}

/** Atualiza os aria-label dos hotspots consoante o idioma atual. */
function atualizarAriaLabelsDosObjetos() {
  const objetos = document.querySelectorAll(".objeto");
  for (const objeto of objetos) {
    const secao = obterSecaoPorId(objeto.dataset.secao);
    if (secao) {
      objeto.setAttribute("aria-label", secao.etiqueta[idiomaAtual]);
    }
  }
}


/* =========================================================================
   3. ACESSIBILIDADE
   As preferências ficam guardadas no localStorage do browser.
   ========================================================================= */
function iniciarGuiaInicial() {
  const guia = document.querySelector("#guia");
  const jaViu = localStorage.getItem("atelie-guia-visto");

  if (jaViu === "sim") {
    guia.classList.add("escondido");
  }

  document.querySelector("#guia-fechar").addEventListener("click", function () {
    guia.classList.add("escondido");
    localStorage.setItem("atelie-guia-visto", "sim");
  });
}

/**
 * Ordem sugerida de exploração da cena — usada pelo passarinho-guia para ir
 * indicando, passo a passo, qual o próximo objeto a descobrir.
 */
const ordemGuiaPassaro = ["quem-sou-eu", "processo", "competencias", "contacto"];
let indiceGuiaPassaro = 0;

/** Devolve, em pixels no ecrã, o ponto exato que o pontinho pulsante ocupa dentro de um hotspot. */
function obterPontoDoObjeto(objeto) {
  const estilo = getComputedStyle(objeto);
  const px = parseFloat(estilo.getPropertyValue("--px")) || 50;
  const py = parseFloat(estilo.getPropertyValue("--py")) || 50;
  const retangulo = objeto.getBoundingClientRect();
  return {
    x: retangulo.left + retangulo.width * (px / 100),
    y: retangulo.top + retangulo.height * (py / 100)
  };
}

/** Posiciona e revela o passarinho-guia em cima do objeto indicado. */
function posicionarGuiaPassaro(idSecao) {
  const passaro = document.querySelector("#guia-passaro");
  const cena = document.querySelector(".cena");
  const alvo = document.querySelector('.objeto[data-secao="' + idSecao + '"]');
  if (!passaro || !cena || !alvo) {
    if (passaro) passaro.classList.remove("visivel");
    return;
  }

  const ponto = obterPontoDoObjeto(alvo);
  const retanguloCena = cena.getBoundingClientRect();
  passaro.style.left = ponto.x - retanguloCena.left + "px";
  passaro.style.top = ponto.y - retanguloCena.top + "px";
  passaro.classList.add("visivel");
}

/** Avança o passarinho-guia para o próximo objeto da ordem sugerida (ou esconde-o, se já foram todos). */
function avancarGuiaPassaro() {
  indiceGuiaPassaro += 1;
  sessionStorage.setItem("atelie-guia-passaro-indice", String(indiceGuiaPassaro));

  if (indiceGuiaPassaro >= ordemGuiaPassaro.length) {
    const passaro = document.querySelector("#guia-passaro");
    if (passaro) passaro.classList.remove("visivel");
    return;
  }

  posicionarGuiaPassaro(ordemGuiaPassaro[indiceGuiaPassaro]);
}

/**
 * Inicia o passarinho-guia: mostra-o em cima do primeiro objeto sugerido
 * (o portátil — "Quem sou eu") assim que o guia inicial fechar, e vai
 * saltando de objeto em objeto à medida que o utilizador os vai clicando,
 * pela ordem sugerida. O progresso fica guardado para a sessão do browser.
 */
function iniciarGuiaPassaro() {
  const passaro = document.querySelector("#guia-passaro");
  if (!passaro) return;

  const progressoGuardado = sessionStorage.getItem("atelie-guia-passaro-indice");
  if (progressoGuardado !== null) {
    indiceGuiaPassaro = parseInt(progressoGuardado, 10) || 0;
  }
  if (indiceGuiaPassaro >= ordemGuiaPassaro.length) return;

  function mostrar() {
    posicionarGuiaPassaro(ordemGuiaPassaro[indiceGuiaPassaro]);
  }

  const guia = document.querySelector("#guia");
  if (guia.classList.contains("escondido")) {
    // o guia já tinha sido visto numa visita anterior — mostra o passarinho depois da entrada dos objetos
    setTimeout(mostrar, 1200);
  } else {
    // mostra o passarinho assim que o utilizador fechar o guia inicial
    document.querySelector("#guia-fechar").addEventListener("click", function () {
      setTimeout(mostrar, 500);
    });
  }

  // reposiciona o passarinho se a janela for redimensionada (as posições são em percentagem)
  window.addEventListener("resize", function () {
    if (passaro.classList.contains("visivel") && indiceGuiaPassaro < ordemGuiaPassaro.length) {
      posicionarGuiaPassaro(ordemGuiaPassaro[indiceGuiaPassaro]);
    }
  });
}

/**
 * Ecrã de carregamento / capa: espera que a imagem da capa E a da cena
 * terminem de carregar. Assim que fica pronto, esconde o texto de espera e
 * mostra o botão "Explorar o Portfólio" — só ao clicar é que o ecrã
 * desaparece e revela a cena do ateliê (é aí que a entrada em cascata dos
 * objetos e a dica de clique são despoletadas).
 */
function iniciarCarregamento() {
  const carregamento = document.querySelector("#carregamento");
  const texto = document.querySelector("#carregamento-texto");
  const botao = document.querySelector("#carregamento-entrar");
  const imagens = [
    document.querySelector(".carregamento__imagem"),
    document.querySelector(".cena__imagem")
  ].filter(Boolean);
  if (!carregamento || imagens.length === 0) return;

  document.body.classList.add("a-carregar");
  const inicio = Date.now();
  const tempoMinimo = 700; // ms
  let porCarregar = imagens.length;

  function marcarPronto() {
    const passado = Date.now() - inicio;
    const espera = Math.max(tempoMinimo - passado, 0);
    setTimeout(function () {
      if (texto) texto.hidden = true;
      if (botao) botao.hidden = false;
    }, espera);
  }

  function entrar() {
    carregamento.classList.add("escondido");
    document.body.classList.remove("a-carregar");
    revelarObjetosEmSequencia();
    iniciarGuiaPassaro();
  }

  if (botao) botao.addEventListener("click", entrar, { once: true });

  function contarImagemPronta() {
    porCarregar -= 1;
    if (porCarregar <= 0) marcarPronto();
  }

  for (const imagem of imagens) {
    if (imagem.complete) {
      contarImagemPronta();
    } else {
      imagem.addEventListener("load", contarImagemPronta, { once: true });
      imagem.addEventListener("error", contarImagemPronta, { once: true });
    }
  }
}

/** Adiciona a classe que faz os pontinhos dos objetos aparecerem um a um. */
function revelarObjetosEmSequencia() {
  document.querySelector(".cena").classList.add("cena--pronta");
}

/**
 * Aviso "vira o telemóvel", mostrado (por CSS) apenas em ecrãs pequenos em
 * modo vertical. Pode ser fechado pelo utilizador; a escolha fica guardada
 * para o resto da sessão do browser.
 */
function iniciarSugestaoRodar() {
  const aviso = document.querySelector("#roda-ecra");
  if (!aviso) return;

  if (sessionStorage.getItem("atelie-rodar-visto") === "sim") {
    aviso.classList.add("escondido");
    return;
  }

  document.querySelector("#roda-ecra-fechar").addEventListener("click", function () {
    aviso.classList.add("escondido");
    sessionStorage.setItem("atelie-rodar-visto", "sim");
  });
}

function iniciarControloTexto() {
  const botao = document.querySelector("#btn-texto");
  const preferenciaGuardada = localStorage.getItem("atelie-texto-grande");

  if (preferenciaGuardada === "sim") {
    document.body.classList.add("texto-grande");
    botao.setAttribute("aria-pressed", "true");
  }

  botao.addEventListener("click", function () {
    const ativo = document.body.classList.toggle("texto-grande");
    this.setAttribute("aria-pressed", ativo ? "true" : "false");
    localStorage.setItem("atelie-texto-grande", ativo ? "sim" : "nao");
  });
}

/**
 * O modo escuro é alternado pelo botão ☾ na barra lateral.
 */
function alternarTema() {
  const ativo = document.body.classList.toggle("tema-escuro");
  document.querySelector("#btn-tema").setAttribute("aria-pressed", ativo ? "true" : "false");
  localStorage.setItem("atelie-tema-escuro", ativo ? "sim" : "nao");
}

function iniciarControloTema() {
  const preferenciaGuardada = localStorage.getItem("atelie-tema-escuro");

  if (preferenciaGuardada === "sim") {
    document.body.classList.add("tema-escuro");
    document.querySelector("#btn-tema").setAttribute("aria-pressed", "true");
  }

  document.querySelector("#btn-tema").addEventListener("click", alternarTema);
}

/** Aplica o idioma atual a todos os textos fixos da interface. */
function aplicarIdioma() {
  const t = textosInterface[idiomaAtual];

  document.documentElement.lang = idiomaAtual === "pt" ? "pt-PT" : "en";
  document.querySelector("#guia-titulo").textContent = t.guiaTitulo;
  document.querySelector(".guia__texto").textContent = t.guiaTexto;
  document.querySelector("#guia-fechar").textContent = t.guiaBotao;
  const carregamentoTextoEl = document.querySelector("#carregamento-texto");
  if (carregamentoTextoEl) carregamentoTextoEl.textContent = t.carregamentoTexto;
  document.querySelector("#roda-ecra-texto").textContent = t.rodaTexto;
  document.querySelector("#rodape-texto").textContent = t.rodape;
  document.querySelector("#btn-texto").title = t.controloTexto;
  document.querySelector("#btn-tema").title = t.controloTema;
  document.querySelector("#btn-idioma").title = t.botaoIdioma;
  document.querySelector("#modal-fechar").setAttribute("aria-label", t.fecharModal);
  document.querySelector("#btn-contacto").title = t.contactoLabel;

  atualizarAriaLabelsDosObjetos();

  // se houver um modal aberto, atualiza também o conteúdo para o novo idioma
  if (secaoAbertaAtual) {
    abrirModal(secaoAbertaAtual);
  }
}

function iniciarControloIdioma() {
  const preferenciaGuardada = localStorage.getItem("atelie-idioma");
  idiomaAtual = preferenciaGuardada === "en" ? "en" : "pt";

  document.querySelector("#btn-idioma").addEventListener("click", function () {
    idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";
    localStorage.setItem("atelie-idioma", idiomaAtual);
    aplicarIdioma();
  });
}


/* =========================================================================
   4. EVENTOS
   ========================================================================= */
function aoClicarObjeto(evento) {
  evento.preventDefault();
  const idSecao = this.dataset.secao;
  abrirModal(idSecao);
  if (idSecao === ordemGuiaPassaro[indiceGuiaPassaro]) {
    avancarGuiaPassaro();
  }
}

function aoPassarRatoObjeto(evento) {
  const idSecao = this.dataset.secao;
  const secao = obterSecaoPorId(idSecao);
  mostrarLegenda(this, secao.etiqueta[idiomaAtual]);
}

function iniciarEventosDosObjetos() {
  const objetos = document.querySelectorAll(".objeto");
  for (const objeto of objetos) {
    objeto.addEventListener("click", aoClicarObjeto);
    objeto.addEventListener("mouseenter", aoPassarRatoObjeto);
    objeto.addEventListener("focus", aoPassarRatoObjeto);
    objeto.addEventListener("mouseleave", esconderLegenda);
    objeto.addEventListener("blur", esconderLegenda);
  }
}

function iniciarEventosDoModal() {
  document.querySelector("#modal-fechar").addEventListener("click", fecharModal);

  document.querySelector("#modal-fundo").addEventListener("click", function (evento) {
    if (evento.target === this) {
      fecharModal();
    }
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
      fecharModal();
    }
  });
}


/* =========================================================================
   5. INICIALIZAÇÃO
   ========================================================================= */
document.addEventListener("DOMContentLoaded", function () {
  iniciarControloIdioma();   // define idiomaAtual antes de construir a navegação
  iniciarEventosDosObjetos();
  iniciarEventosDoModal();
  iniciarGuiaInicial();
  iniciarSugestaoRodar();
  iniciarControloTexto();
  iniciarControloTema();
  aplicarIdioma();           // aplica o idioma guardado e constrói a navegação
  iniciarCarregamento();     // por último: esconde o ecrã de carregamento e revela a capa

  document.querySelector("#btn-contacto").addEventListener("click", function () {
    abrirModal("contacto");
  });
});
