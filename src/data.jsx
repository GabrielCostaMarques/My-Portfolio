
export const navLinks = [
  { id: 'hero', title: 'Início' },
  { id: 'about', title: 'Sobre Mim' },
  { id: 'skills', title: 'Habilidades' },
  { id: 'projects', title: 'Projetos' },
  { id: 'contact', title: 'Contato' },
];

export const hardSkills = {
  backend: [
    '.NET Core', 'ASP.NET Core', 'Entity Framework', 'Dapper', 'RabbitMQ', 'MassTransit', 'Arquitetura MVC','UnitOfWork', 'Redis', 'Repository Pattern',
    'API REST', 'Minimal API', 'XUnit', 'Node.js', 'Express', 'JWT', 'OpenTelemetry', 'Serilog', 'FluentValidation',
    ],
  frontend: [
    'React', 'Vite JS', 'HTML', 'CSS', 'JavaScript'
  ],
  database: [
    'MySQL', 'SQLite', 'SQL Server', 'PostgreSQL', 'MongoDB'
  ],
  cmsLowCode: [
    'Wordpress', 'Elementor', 'JetEngine'
  ],
  tools: [
    'Git', 'Azure Devops', 'EPPLUS', 'Swagger', 'Postman', 'Visual Studio', 'Visual Studio Code','Figma',
  ],
  nuvem:[
    'GitHub Actions', 'Docker', 'Kubernetes', 'Azure', 'AWS', 'Firebase',
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
    technologies: ['.NET Core', 'Entity Framework', 'JWT', 'RabbitMQ', 'Masstransit', 'UnitOfWork','Swagger', 'C#', 'PostgreSQL', 'FluentValidation', 'XUnit', 'Moq', 'Result Pattern','Docker','Serilog','OpenTelemetry'],
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
    title: 'ETL Azamara',
    description: 'Pipeline ETL que coleta dados de cruzeiros do servidor da Azamara Cruises, normaliza e expõe via API REST com suporte a consultas complexas. O projeto substituiu um serviço terceirizado contratado pela R11 Travel, gerandoredução direta de custos operacionais - está em aprovação. Front-end em React.js em produção (Todas as chaves estão revogadas e o projeto é apenas para fins de portfólio, sem uso comercial.)',
    technologies: ['ASP.NET Core MVC', 'Dapper', 'PostgreSQL', 'C#', 'Docker', 'Docker Compose', 'Api REST'],
    imageUrl: 'etl_azamara.png',
    githubUrl: 'https://github.com/R11-Travel/Azamara-Web-Infra',
    liveUrl: 'https://azamaracruises.com.br/',
  },

  {
    id: 4,
    title: 'OfertasCSV',
    description: 'Sistema consome dados de um flatfile CSV e gera ofertas em um arquivo json que é enviado para o banco de dados do site Wordpress.',
    technologies: ['.NET Core', 'Expressão Lambda', 'HelperCSV', 'Consumo de API', 'Renderização', 'Lazy Loading'],
    imageUrl: 'capa-ofertas-csv.png',
    githubUrl: 'https://github.com/GabrielCostaMarques/OfertasCsv',
    liveUrl: 'https://manualdoagente.com.br/saidas-azamara/',
  },

  {
    id: 5,
    title: 'ExcelOffers',
    description: 'Ferramenta para processar e gerenciar ofertas a partir de arquivos Excel.',
    technologies: ['.NET Framework', 'Windows Forms', 'Manipulação de Excel', 'C#'],
    imageUrl: 'project_exceloffers.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/ExcelOffers',
    liveUrl: null,
  },
  {
    id: 6,
    title: 'TesteThoth',
    description: 'Projeto de teste para a Thoth, explorando funcionalidades do Windows Forms e CRUD.',
    technologies: ['ASP.NET Core', 'API REST', 'C#', 'Windows Forms', 'Entity Framework'],
    imageUrl: 'teste-thoth.png',
    githubUrl: 'https://github.com/GabrielCostaMarques/TesteThoth',
    liveUrl: null,
  },
  {
    id: 7,
    title: 'TechLibrary',
    description: 'Biblioteca digital para gerenciamento de recursos técnicos e livros, com API e frontend.',
    technologies: ['.NET Core', 'React', 'API REST', 'SQLite', 'C#', 'JavaScript'],
    imageUrl: 'project_techlibrary.jpg',
    githubUrl: 'https://github.com/GabrielCostaMarques/TechLibrary',
    liveUrl: null,
  },
  {
    id: 8,
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
