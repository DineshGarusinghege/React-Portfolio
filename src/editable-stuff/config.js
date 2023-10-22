// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  firstName: "Dinesh",
  middleName: "Madhusanka",
  lastName: "Garusinghege",
  message: " The world continues to evolve with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/DineshGarusinghege",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/DineshGarusinghege",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/dinesh-garusinghage-a06b91271/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Dinesh.jpg"),
  imageSize: 375,
  message:
    "I am Dinesh Garusinghege.  Graduate of BSc (honors) Information Communication Technology degree at the University of Sri Jayawardenepura. I am a responsible, self-motivated, skillful, and dedicated undergraduate with team spirit and leadership qualities who is willing to accept challenges, seeking an opportunity as a software engineer to apply and explore the existing and forthcoming technologies in the field of Information Technology.",
  resume: "https://drive.google.com/file/d/10Q8PckK1f9Mm_ljsYYWR0Wg1zWyMCyE6/view?usp=sharing",
};


const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "DineshGarusinghege",
  reposLength: 20,
  specificRepos: [],
};
// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Photoshop", value: 90 },
    { name: "UI/UX ", value: 75 },
    { name: "HTML/CSS", value: 95 },
    { name: "Java", value: 45 },
    { name: "JavaScript", value: 76 },
    { name: "MERN Stack", value: 75 },
    { name: "MSSQL/MYSQL/NoSQL", value: 80 },
    { name: "WordPress", value: 80 },
  ],
  softSkills: [
    { name: "Logo designinig", value: 95 },
    { name: "poster designe", value: 75 },
    { name: "cover page", value: 75 },
    { name: "Visiting card", value: 85 },
    { name: "invitation card", value: 75 },
    { name: "thank you card", value: 90 },
    { name: "calender designe", value: 70 },
    { name: "pensil art", value: 90 },
  ],
};


// CONTACTS SECTION
const contact = {
  show: true,
  heading: "Contacts",

};

// FOOTER
const getInTouch = {
  show: true,
  message:
    "I am willing to work as a web developer. If you have any available positions, have any questions, or just want to say hello, please email me at ",
  email: "ictdinesh.se@gmail.com",
};


export { navBar, mainBody, about, repos, skills, contact, getInTouch };
