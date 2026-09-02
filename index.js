const express = require('express');
const app = express();

const editais = [
  {
    id: 1,
    orgao: "SEAP/MA",
    cargo: "Especialista à Assistência Penitenciária - Especialidade: Direito",
    nivel: "Superior",
    materias: [
      {
        nome: "Língua Portuguesa",
        assuntos: [
          "Compreensão e interpretação de textos de gêneros variados", 
          "Reconhecimento de tipos e gêneros textuais", 
          "Domínio da ortografia oficial", 
          "Domínio dos mecanismos de coesão textual", 
          "Emprego de tempos e modos verbais", 
          "Domínio da estrutura morfossintática do período", 
          "Emprego das classes de palavras", 
          "Emprego dos sinais de pontuação", 
          "Concordância verbal e nominal", 
          "Regência verbal e nominal", 
          "Emprego do sinal indicativo de crase", 
          "Colocação dos pronomes átonos", 
          "Reescrita de frases e parágrafos do texto"
        ]
      },
      {
        nome: "Noções de Informática",
        assuntos: [
          "Sistema operacional e software", 
          "Internet: navegação na Internet, conceitos de URL, links, sites, busca e impressão de páginas", 
          "Editor de texto (Microsoft Word)", 
          "Planilha eletrônica (Microsoft Excel)", 
          "Programas antivírus e firewall", 
          "Teclas de atalho"
        ]
      },
      {
        nome: "Ética, Cidadania e Direitos Humanos",
        assuntos: [
          "Ética e moral", 
          "Ética, princípios e valores", 
          "Ética e democracia: exercício da cidadania", 
          "Ética e função pública", 
          "Ética no setor público", 
          "Direitos humanos e responsabilidade do Estado", 
          "Direitos humanos na Constituição Federal", 
          "Política Nacional de Direitos Humanos e políticas de segurança pública voltadas para grupos vulneráveis", 
          "Constituição brasileira e tratados internacionais de direitos humanos (Regras de Nelson Mandela, Pacto de San José da Costa Rica, Regras de Bangkok)"
        ]
      },
      {
        nome: "História do Maranhão",
        assuntos: [
          "França equinocial: expedição de Daniel de La Touche", 
          "Fundação de São Luís e Batalha de Guaxenduba", 
          "Capitães-mores do Maranhão", 
          "Invasão holandesa e Expulsão dos holandeses", 
          "Estado do Maranhão e Grão-Pará: Revolta de Bequimão", 
          "Período do Império: adesão do Maranhão", 
          "Independência do Brasil no contexto do Maranhão e Batalha do Jenipapo", 
          "Balaiada: caracterização e causas do movimento", 
          "Período republicano e Revolução de 1930 no Maranhão", 
          "Principais fatos políticos, econômicos e sociais na segunda metade do século XX e início do século XXI"
        ]
      },
      {
        nome: "Geografia do Maranhão",
        assuntos: [
          "Localização do estado do Maranhão, limites, áreas de proteção ambiental e Parques nacionais", 
          "Climas do Maranhão: pluviosidade e temperatura", 
          "Geomorfologia: planaltos, planícies e baixadas", 
          "Bacias dos rios limítrofes e genuinamente maranhenses", 
          "Principais formações vegetais: floresta, cerrado e cocais", 
          "Geografia da população", 
          "Agricultura maranhense e caracterização da pecuária", 
          "Extrativismo: vegetal, animal e mineral", 
          "Parque industrial e Setor terciário", 
          "Malha viária, Portos e aeroportos", 
          "Cultura maranhense"
        ]
      },
      {
        nome: "Atualidades",
        assuntos: [
          "Tópicos relevantes e atuais de segurança, transportes, política, economia, sociedade, educação, saúde, cultura, tecnologia, energia, relações internacionais, desenvolvimento sustentável e ecologia"
        ]
      },
      {
        nome: "Direito Administrativo",
        assuntos: [
          "Estado, governo e administração pública", 
          "Direito administrativo: conceito, objeto e fontes", 
          "Ato administrativo", 
          "Agentes públicos", 
          "Poderes da administração pública", 
          "Regime jurídico administrativo", 
          "Responsabilidade civil do Estado", 
          "Serviços públicos", 
          "Organização administrativa", 
          "Controle da administração pública", 
          "Lei nº 9.784/1999 e suas alterações (processo administrativo)", 
          "Lei nº 14.133/2021 e suas alterações (licitações e contratos administrativos)"
        ]
      },
      {
        nome: "Direito Constitucional",
        assuntos: [
          "Aplicabilidade das normas constitucionais", 
          "Constituição da República Federativa do Brasil de 1988: Princípios fundamentais", 
          "Direitos e garantias fundamentais", 
          "Organização político-administrativa do Estado", 
          "Poder Legislativo", 
          "Poder Executivo", 
          "Poder Judiciário", 
          "Funções essenciais à justiça"
        ]
      },
      {
        nome: "Direito Civil",
        assuntos: [
          "Lei de introdução às normas do direito brasileiro", 
          "Pessoas naturais", 
          "Pessoas jurídicas", 
          "Bens", 
          "Fato jurídico", 
          "Negócio jurídico", 
          "Atos jurídicos lícitos e ilícitos", 
          "Prescrição e decadência", 
          "Prova do fato jurídico", 
          "Contratos"
        ]
      },
      {
        nome: "Direito Penal",
        assuntos: [
          "Princípios aplicáveis ao direito penal", 
          "Aplicação da lei penal", 
          "Ilicitude", 
          "Culpabilidade", 
          "Concurso de pessoas", 
          "Penas", 
          "Ação penal", 
          "Punibilidade e causas de extinção", 
          "Prescrição", 
          "Crimes contra a fé pública", 
          "Crimes contra a administração pública", 
          "Lei de abuso de autoridade, lavagem de dinheiro, licitações e responsabilidade fiscal"
        ]
      },
      {
        nome: "Direito Processual Penal",
        assuntos: [
          "Processo penal brasileiro e constitucional", 
          "Sistemas e princípios fundamentais", 
          "Aplicação da lei processual", 
          "Fase pré-processual e inquérito policial", 
          "Processo, procedimento e relação jurídica processual", 
          "Ação penal e Ação civil ex delicto", 
          "Jurisdição e competência", 
          "Prova", 
          "Juiz, Ministério Público, acusado, defensor, assistentes e auxiliares da justiça", 
          "Prisão, medidas cautelares e liberdade provisória", 
          "Citações, intimações e atos processuais", 
          "Processo comum e Procedimentos especiais", 
          "Prazos, Nulidades e Recursos em geral", 
          "Habeas corpus e normas processuais da Lei de Execução Penal"
        ]
      },
      {
        nome: "Legislação Extravagante",
        assuntos: [
          "Lei Antitortura (Lei nº 9.455/1997)", 
          "Estatuto do Desarmamento (Lei nº 10.826/2003)", 
          "Lei Anticorrupção (Lei nº 12.846/2013)", 
          "Organizações criminosas (Lei nº 12.850/2013)", 
          "Pacote Anticrime (Lei nº 13.964/2019)", 
          "Lei de Execução Penal (Lei nº 7.210/1984)", 
          "Crimes hediondos (Lei nº 8.072/1990)", 
          "Prisão temporária (Lei nº 7.960/1989)", 
          "Tráfico ilícito de drogas (Lei nº 11.343/2006)", 
          "Lei de Improbidade Administrativa (Lei nº 8.429/1992)", 
          "Crime de racismo (Lei nº 7.716/1989)", 
          "Estatuto da Pessoa Idosa (Lei nº 10.741/2003)", 
          "Lei Maria da Penha (Lei nº 11.340/2006)", 
          "Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015)", 
          "Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018)", 
          "Sistema Único de Segurança Pública e Política Nacional de Segurança Pública"
        ]
      }
    ]
  },
  {
    id: 2,
    orgao: "Polícia Militar do Espírito Santo (PMES)",
    cargo: "Soldado Combatente (QPMP-C)",
    nivel: "Médio",
    materias: [
      {
        nome: "Língua Portuguesa",
        assuntos: ["Compreensão, interpretação e inferências de textos", "Tipologia e Gêneros textuais", "Norma ortográfica"]
      },
      {
        nome: "Raciocínio Lógico e Matemático",
        assuntos: ["Proposições Lógicas", "Tabelas Verdade", "Argumentação Lógica", "Sequências Lógicas"]
      }
    ]
  },
  {
    id: 3,
    orgao: "Polícia Civil do Maranhão (PCMA)",
    cargo: "Delegado de Polícia Civil - 3ª Classe",
    nivel: "Superior",
    materias: [
      {
        nome: "Direito Penal",
        assuntos: ["Princípios e garantias penais fundamentais", "Evolução epistemológica do direito penal", "Teoria geral do crime"]
      },
      {
        nome: "Direito Processual Penal",
        assuntos: ["Sistemas de processo penal", "Inquérito policial", "Ação penal", "Prisão, medidas cautelares e liberdade provisória"]
      }
    ]
  },
  {
    id: 4,
    orgao: "Prefeitura de Aracaju (GMA)",
    cargo: "Guarda Municipal de Aracaju",
    nivel: "Médio",
    materias: [
      {
        nome: "Noções de Direito Constitucional e Direitos Humanos",
        assuntos: ["Princípios fundamentais da Constituição Federal de 1988", "Direitos e garantias fundamentais", "Uso legal, necessário, proporcional e progressivo da força"]
      },
      {
        nome: "Noções de Direito Penal e Processo Penal",
        assuntos: ["Aplicação da lei penal", "Crime: conceito e elementos", "Prisão em flagrante", "Direitos do preso"]
      }
    ]
  },
  {
    id: 5,
    orgao: "PROCON/AL",
    cargo: "Fiscal de Defesa do Consumidor",
    nivel: "Superior",
    materias: [
      {
        nome: "Direito do Consumidor",
        assuntos: ["Natureza e fonte de suas regras", "Política Nacional de Relações de Consumo", "Direitos básicos do consumidor", "Práticas comerciais"]
      },
      {
        nome: "Educação para o Consumo",
        assuntos: ["Consumo sustentável", "Prevenção e tratamento do superendividamento", "Cidadania e consumo"]
      }
    ]
  }
];

app.get('/', (req, res) => {
  res.send('API do Bizzu Concursos está online!');
});

app.get('/materias', (req, res) => {
  const nomesDasMaterias = new Set([
    "Matemática",
    "Inglês",
    "Estatística"
  ]);
  
  editais.forEach(edital => {
    edital.materias.forEach(materia => {
      nomesDasMaterias.add(materia.nome);
    });
  });

  const listaOrganizada = Array.from(nomesDasMaterias).sort();
  res.json(listaOrganizada);
});

app.get('/editais', (req, res) => {
  res.json(editais);
});

app.get('/editais/:id', (req, res) => {
  const idDoConcurso = parseInt(req.params.id);
  const editalEncontrado = editais.find(edital => edital.id === idDoConcurso);
  if (editalEncontrado) {
    res.json(editalEncontrado); 
  } else {
    res.status(404).json({ erro: 'Concurso não encontrado' });
  }
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}