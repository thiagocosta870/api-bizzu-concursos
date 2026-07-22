const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API do Bizzu Concursos está online!');
});

app.get('/editais', (req, res) => {
  const editais = [
    {
      id: 1,
      orgao: "SEAP/MA",
      cargo: "Especialista à Assistência Penitenciária (Direito)",
      nivel: "Superior",
      materias: [
        {
          nome: "Língua Portuguesa",
          assuntos: ["Compreensão e interpretação de textos de gêneros variados", "Domínio da ortografia oficial", "Emprego de tempos e modos verbais"]
        },
        {
          nome: "Direito Penal",
          assuntos: ["Princípios aplicáveis ao direito penal", "Aplicação da lei penal", "Teoria geral do crime"]
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
  
  res.json(editais);
});

module.exports = app;