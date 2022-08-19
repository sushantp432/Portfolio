//import my-pik form "./components/Animation/pik-my.png"
//I Would Highly Recommend You To Customize The Theme According To Your Taste.
//import imgpic from "./components/Animation/pik-my.png"
export const globalStyles = {
  "--grad": "linear-gradient(315deg,#0e8cfb,#53fc96)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#272341",
  "--p_color": "#31aefb",
  "--t_color":"#05d2a2d0",
  "--f_color": "#0ac76f",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "<Sushant>";

// Main Page
export const main = {
  name: "Sushant Pagare",
  doamin: "A MERN Stack Web Developer",
  resume:
    "https://drive.google.com/file/d/1y7vtlGN-_fdz_AOl9sB1zynFhx1q8fxX/view?usp=sharing",
};

// AboutMe
// https://i.ibb.co/48d2ndz/Sushant-Pagare.jpg
export const aboutme = {
  
 imgLink: "https://raw.githubusercontent.com/sushantp432/images/main/Sushant_Pagare.jpg",
  p1: "Hey, My name is Sushant Pagare. I have completed my Bachelor of Engineering from Pune University, Maharashtra.",
  p2: " I'm a passionate coder and an enthusiastic Web Developer capable of applying programming skills to solve complex problems. Seeking a challenging role in the field of software development that will offer an opportunity for further development of my abilities, skills and knowledge in an organization.",
  p3: "Apart from coding I also like travelling and gaming. And I like to explore historical places.",
};

// Skills 
export const whatido = {
  title: "Full Stack Web Development",

  details: [
    "Building responsive website using HTML,CSS,JS,React",
    "Creating backend application in Node, ExpressJS",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
    {
      name: "Postman",
      iconifyClassName: "logos:postman-icon",
      id: "9",
    },
    {
      name: "npm",
      iconifyClassName: "logos:npm-icon",
      id: "10",
    },
    {
      name: "GIT",
      iconifyClassName: "logos:git",
      id: "11",
    },
    {
      name: "Material-UI",
      iconifyClassName: "logos:material-ui",
      id: "13",
    },
    {
      name: "Netlify",
      iconifyClassName: "vscode-icons:file-type-netlify",
      id: "15",
    },
    {
      name: "Vercel",
      iconifyClassName: "logos:vercel-icon",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
  
  {
    id: 1,
    title: "Orbitz.com Clone",
    desc: `Orbitz.com is a travel website that enables consumers to search for and book a broad range of hotels, flights, rentals, cruises, vacation packages and destination activities.`,
    feature: `SignUp/LogIn,
              Hotel search (based on the city),
              Sorting and Filtering,
              Room Booking,
              Payment (through stripe gateway) with coupon functionality.`,
    tech: `Tech Stack: HTML | CSS | JavaScript | ReactJs`,
    img: "https://raw.githubusercontent.com/sushantp432/images/main/Orbitz-clone.JPG",
    github: "https://github.com/sushantp432/Orbitz-clone.git",
    link: "https://orbitz-travel.netlify.app/"
  },
  {
    id: 2,
    title: "Myntra.com-clone",
    desc: `This is a clone of E-commerce website. Myntra is a one stop shop for all your fashion and lifestyle needs. Myntra is India's largest e-commerce store for fashion and lifestyle products`,
    feature: `Home page,
              Sign-in/Sign-up,
              corousel image,
              product page with sorting,
              payment gateway,Dynamic cart page with coupon functionality.`,
    tech: `Tech Stack: HTML | CSS | JavaScript `,
    img: "https://raw.githubusercontent.com/sushantp432/images/main/myntra-clone.JPG",
    link: "https://myntra-new.netlify.app/",
    github: "https://github.com/sushantp432/project-myntra",
    
  },
  {
    id: 6,
    title: "Bluefly.com Clone",
    desc: `Bluefly offers an e-commerce platform that sells designer apparel and accessories, household products and accessories.`,
    feature: `Login/Signup User Account
              Sorting Based on Price & Ratings
              Homepage
              Cart Add/Remove Items
              Address Management
              Coupons are provided for the discount
              Cart page with apply coupon & Shipping Address
              All products page are working
              `,
    tech: `Tech Stack: Javascript | CSS | HTML5`,
    img: "https://raw.githubusercontent.com/sushantp432/images/main/Bluefly-clone.JPG",
    link: "https://stunning-stroopwafel-8b6ace.netlify.app/",
    github: "https://github.com/optimizershivam/Bluefly-webapp.git",
  },
];

// Social Media Links
export const links = [
  
  "https://www.linkedin.com/in/sushant-pagare-72b791182/",
  "https://api.whatsapp.com/send/?phone=918482823428&text&app_absent=0",
  "https://github.com/sushantp432",
];
