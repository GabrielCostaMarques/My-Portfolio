
export const navLinks = [
  { id: 'hero', title: 'Início' },
  { id: 'about', title: 'Sobre Mim' },
  { id: 'skills', title: 'Habilidades' },
  { id: 'projects', title: 'Projetos' },
  { id: 'contact', title: 'Contato' },
];

export const hardSkills = {
  backend: [
    '.NET Core', 'ASP.NET Core', 'Entity Framework', 'MVC', 'Repository Pattern',
    'Arquitetura em camadas', 'API REST', 'Minimal API', 'XUnit'
  ],
  frontend: [
    'React', 'Vite JS', 'HTML', 'CSS', 'JavaScript'
  ],
  database: [
    'MySQL', 'SQLite', 'SQL Server', 'PostgreSQL', 'MongoDB'
  ],
  cmsLowCode: [
    'Wordpress', 'Elementor'
  ],
  tools: [
    'Git', 'EPPLUS', 'Swagger', 'Postman', 'Visual Studio', 'Visual Studio Code','Figma',
  ],
  nuvem:[
    'GitHub Actions', 'Docker', 'Firebase',
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
    imageUrl: 'SalesWebMvc.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/SalesWebMvc',
    liveUrl: null,
  },
  {
    id: 2,
    title: 'StorageProject',
    description: 'Sistema de gerenciamento de estoque para controle de produtos e movimentações.',
    technologies: ['.NET Core', 'Entity Framework', 'Arquitetura em Camadas', 'Repository Pattern', 'UnitOfWork','Swagger', 'C#', 'MySQL', 'FluentValidation'],
    imageUrl: 'capa-storage-project.png',
    githubUrl: 'https://github.com/GabrielCostaMarques/StorageProject.git',
    liveUrl: null,
  },
  {
    id: 3,
    title: 'OfertasCSV',
    description: 'Sistema consome dados de um flatfile CSV e gera ofertas em um arquivo json que é enviado para o banco de dados do site Wordpress.',
    technologies: ['.NET Core', 'Expressão Lambda', 'HelperCSV', 'Consumo de API', 'Renderização', 'Lazy Loading'],
    imageUrl: 'capa-ofertas-csv.png',
    githubUrl: 'https://github.com/GabrielCostaMarques/OfertasCsv',
    liveUrl: 'https://manualdoagente.com.br/saidas-azamara/',
  },

  {
    id: 4,
    title: 'ExcelOffers',
    description: 'Ferramenta para processar e gerenciar ofertas a partir de arquivos Excel.',
    technologies: ['.NET Framework', 'Windows Forms', 'Manipulação de Excel', 'C#'],
    imageUrl: 'project_exceloffers.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/ExcelOffers',
    liveUrl: null,
  },
  {
    id: 5,
    title: 'TesteThoth',
    description: 'Projeto de teste para a Thoth, explorando funcionalidades do Windows Forms e CRUD.',
    technologies: ['ASP.NET Core', 'API REST', 'C#', 'Windows Forms', 'Entity Framework'],
    imageUrl: 'teste-thoth.png',
    githubUrl: 'https://github.com/GabrielCostaMarques/TesteThoth',
    liveUrl: null,
  },
  {
    id: 6,
    title: 'TechLibrary',
    description: 'Biblioteca digital para gerenciamento de recursos técnicos e livros, com API e frontend.',
    technologies: ['.NET Core', 'React', 'API REST', 'SQLite', 'C#', 'JavaScript'],
    imageUrl: 'project_techlibrary.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/TechLibrary',
    liveUrl: null,
  },
  {
    id: 7,
    title: 'ProjectAurora',
    description: 'Projeto Aurora, é um e-commerce que explora React, Navigation e consumo de APIs estou fazendo esse projeto para aprender mais sobre React e suas funcionalidades.',
    technologies: ['React', 'Navigation', 'Axios', 'JSX', 'JavaScript', 'HTML', 'CSS', 'Vite JS', 'Firebase'],
    imageUrl: 'capa-aurora.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/ProjectAurora',
    liveUrl: null,
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
