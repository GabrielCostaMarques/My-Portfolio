
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
    'Arquitetura em camadas', 'API REST', 'Minimal API', 'XUnit, Node.js', 'Express', 'JWT'
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
    title: 'StorageProject',
    description: 'Sistema de gerenciamento de estoque para controle de produtos e movimentações. Possui autenticação e autorização de usuários com diferentes níveis de acesso utilizando JWT funcionando de um micro serviço para usuários.',
    technologies: ['.NET Core', 'Entity Framework', 'JWT', 'Arquitetura em Camadas', 'Repository Pattern', 'UnitOfWork','Swagger', 'C#', 'SQL Server', 'FluentValidation', 'XUnit', 'Moq', 'Result Pattern'],
    imageUrl: 'Storage-project.jpg',
    githubUrl: 'https://github.com/orgs/StorageAppOfWizard/repositories',
    liveUrl: null,
  },
  {
    id: 2,
    title: 'SalesWebMvc',
    description: 'Aplicação web de vendas construída com ASP.NET Core MVC e Entity Framework.',
    technologies: ['ASP.NET Core MVC', 'Entity Framework', 'MySQL', 'C#'],
    imageUrl: 'SalesWebMvc.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/SalesWebMvc',
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
    title: 'Estoque Simples com Node.js',
    description: 'Um sistema básico para controlar produtos, permitindo cadastrar, listar, atualizar e remover itens. O sistema possuí autenticação simples para proteger o acesso.',
    technologies: ['React', 'Navigation', 'Axios', 'JSX', 'JavaScript', 'Vite JS', 'Mongoose', 'Node.js', 'Express', 'JWT', 'MongoDB'],
    imageUrl: 'comunikime-project.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/Comunikime.git',
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
