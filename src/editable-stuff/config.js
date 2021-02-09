// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Otávio",
  middleName: "",
  lastName: "Parraga",
  message: " Ciência de Dados | Machine Learning | Deep Learning | Processamento de Linguagem Natural",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Otavio-Parraga",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/otavio.parraga",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/otavioparraga/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ot%C3%A1vio-parraga-435813181/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "Sobre mim",
  imageLink: require("../editable-stuff/eu.jpg"),
  imageSize: 360,
  message:
    "Meu nome é Otávio Parraga, Mestrando em Ciência da Computação pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS) e bacharel em Sistemas de Informação pela PUCRS. Fascinado pelas áreas de Machine Learning e Inteligência Artificial, tendo bastante familiaridade com a aplicação de Deep Learning em problemas de Processamento de Linguagem Natural. Pesquisando atualmente sobre Bias em Modelos de Linguagem. Multi-instrumentista e filósofo nas horas vagas",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projetos Recentes",
  gitHubUsername: "Otavio-Parraga", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["n-gram", "NIB-language-model", "CharRNN", "titanic_kaggle"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/eu.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/eu.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "Deep Learning", value: 80 },
    { name: "Machine Learning", value: 90 },
    { name: "Processamento de Linguagem Nnatural", value: 90 },
    { name: "Visão Computacional", value: 75},
    { name: "Java", value: 50 },
  ],
  softSkills: [
    { name: "Colaboração", value: 90 },
    { name: "Adaptabilidade", value: 80 },
    { name: "Resolução de problemas", value: 80 },
    { name: "Oraganização", value: 85 },
    { name: "Criatividade", value: 90 },
    { name: "Trabalho em Equipe", value: 85},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Entre em contato!",
  message:
    "Para quaisquer oportunidades ou dúvidas acerca de Machine Learning ou tópicos relacionados, só entrar em contato pelo email :D",
  email: "otavio.parraga@edu.pucrs.br",
  telefone: "(51) 99585-9819"
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
