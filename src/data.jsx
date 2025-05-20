
export const navLinks = [
  { id: 'hero', title: 'Início' },
  { id: 'about', title: 'Sobre Mim' },
  { id: 'skills', title: 'Habilidades' },
  { id: 'projects', title: 'Projetos' },
  { id: 'contact', title: 'Contato' },
];

export const hardSkills = {
  backend: [
    '.NET Core', 'ASP.NET Core', 'Entity Framework', 'MVC', 
    'Arquitetura em camadas', 'API REST', 'Minimal API'
  ],
  frontend: [
    'React', 'Vite JS', 'HTML', 'CSS', 'JavaScript'
  ],
  database: [
    'MySQL', 'SQLite', 'Firebase (Firestore/Realtime DB)'
  ],
  cmsLowCode: [
    'Wordpress', 'Elementor'
  ],
  tools: [
    'Git', 'Docker (Básico)', 'Azure (Básico)'
  ]
};

export const softSkills = [
  { name: 'Comunicação Efetiva', area: 'Colaboração' },
  { name: 'Trabalho em Equipe', area: 'Colaboração' },
  { name: 'Resolução de Problemas', area: 'Analítico' },
  { name: 'Pensamento Crítico', area: 'Analítico' },
  { name: 'Adaptabilidade', area: 'Pessoal' },
  { name: 'Gerenciamento de Tempo', area: 'Organização' },
  { name: 'Metodologias Ágeis (Scrum/Kanban)', area: 'Organização' },
  { name: 'Proatividade', area: 'Pessoal' },
  { name: 'Aprendizado Contínuo', area: 'Pessoal' },
];

export const projectsData = [
  {
    id: 1,
    title: 'SalesWebMvc',
    description: 'Aplicação web de vendas construída com ASP.NET Core MVC e Entity Framework.',
    technologies: ['ASP.NET Core MVC', 'Entity Framework', 'MySQL', 'C#'],
    imageUrl: 'project_saleswebmvc.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/SalesWebMvc',
    liveUrl: null,
  },
  {
    id: 2,
    title: 'StockManagement',
    description: 'Sistema de gerenciamento de estoque para controle de produtos e movimentações.',
    technologies: ['.NET Core', 'Entity Framework', 'Arquitetura em Camadas', 'C#'],
    imageUrl: 'project_stockmanagement.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/StockManagement',
    liveUrl: null,
  },
  {
    id: 3,
    title: 'ExcelOffers',
    description: 'Ferramenta para processar e gerenciar ofertas a partir de arquivos Excel.',
    technologies: ['.NET Framework', 'Windows Forms', 'Manipulação de Excel', 'C#'],
    imageUrl: 'project_exceloffers.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/ExcelOffers',
    liveUrl: null,
  },
  {
    id: 4,
    title: 'TesteThoth',
    description: 'Projeto de teste para a Thoth, explorando funcionalidades específicas de API.',
    technologies: ['ASP.NET Core', 'API REST', 'C#'],
    imageUrl: 'project_testethoth.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/TesteThoth',
    liveUrl: null,
  },
  {
    id: 5,
    title: 'TechLibrary',
    description: 'Biblioteca digital para gerenciamento de recursos técnicos e livros, com API e frontend.',
    technologies: ['.NET Core', 'React', 'API REST', 'SQLite', 'C#', 'JavaScript'],
    imageUrl: 'project_techlibrary.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/TechLibrary',
    liveUrl: null,
  },
  {
    id: 6,
    title: 'ProjectAurora',
    description: 'Projeto Aurora, uma exploração de Minimal APIs e conceitos modernos do .NET.',
    technologies: ['ASP.NET Core', 'Minimal API', 'SQLite', 'C#'],
    imageUrl: 'project_aurora.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/ProjectAurora',
    liveUrl: "https://aurora.portifoliogabrielmarques.com/",
  },
];

export const contactInfo = {
  email: 'gabrielcostamarques2@gmail.com',
  phone: '+55 (11) 96399-9239',
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gabriel-marques-6b4b22208/', icon: 'Linkedin' },
    { name: 'GitHub', url: 'https://github.com/GabrielCostaMarques', icon: 'Github' },
  ]
};
  